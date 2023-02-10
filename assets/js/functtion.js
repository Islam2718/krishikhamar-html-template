//const { Collapse } = require("bootstrap");


// navbar scroll animation
// window.onscroll = pagescroll;
// pagescrollvalid = window.pageYOffset;
// function pagescroll() {
//   var pageup = window.pageYOffset;
//   var header = document.getElementById('header');
//   if(pagescrollvalid && pageup == 0){
//     header.classList.remove("fixed");
//     header.classList.remove("top-bar");
//   }
//   else if(pagescrollvalid > pageup){
//     header.classList.add("fixed");
//   }
//   else if(pagescrollvalid < pageup){
//     header.classList.add("top-bar");
//     header.classList.remove("fixed");
//   }
//   else{
//     header.classList.remove("fixed");
//   } 
//   pagescrollvalid = pageup;
// }


// juery js 
(function ($) {
  'use strict';
  // mobile menu responsive
  $(document).on('click', '.menu-bar', function () {
    $(".list-menu").addClass("open");
    //$(".main-menu").toggleClass("open");
    $(".overlay").addClass("active");
    $("body").addClass("overflow");
  });
  //input filed function 
  //counter up js  

  var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

  var $counters = $(".counter");

  /* Start counting, do this on DOM ready or with Waypoints. */
  $counters.each(function (ignore, counter) {
    var waypoint = new Waypoint({
      element: $(this),
      handler: function () {
        counterUp(counter, {
          duration: 1000,
          delay: 16
        });
        this.destroy();
      },
      offset: 'bottom-in-view',
    });
  });

  // comparison slider js
  $(document).ready(function () {

    // If the comparison slider is present on the page lets initialise it, this is good you will include this in the main js to prevent the code from running when not needed
    if ($(".comparison-slider")[0]) {
      let compSlider = $(".comparison-slider");

      //let's loop through the sliders and initialise each of them
      compSlider.each(function () {
        let compSliderWidth = $(this).width() + "px";
        $(this).find(".resize img").css({ width: compSliderWidth });
        drags($(this).find(".divider"), $(this).find(".resize"), $(this));
      });

      //if the user resizes the windows lets update our variables and resize our images
      $(window).on("resize", function () {
        let compSliderWidth = compSlider.width() + "px";
        compSlider.find(".resize img").css({ width: compSliderWidth });
      });
    }
  });

  // This is where all the magic happens
  // This is a modified version of the pen from Ege Görgülü - https://codepen.io/bamf/pen/jEpxOX - and you should check it out too.
  function drags(dragElement, resizeElement, container) {

    // This creates a variable that detects if the user is using touch input insted of the mouse.
    let touched = false;
    window.addEventListener('touchstart', function () {
      touched = true;
    });
    window.addEventListener('touchend', function () {
      touched = false;
    });

    // clicp the image and move the slider on interaction with the mouse or the touch input
    dragElement.on("mousedown touchstart", function (e) {

      //add classes to the emelents - good for css animations if you need it to
      dragElement.addClass("draggable");
      resizeElement.addClass("resizable");
      //create vars
      let startX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
      let dragWidth = dragElement.outerWidth();
      let posX = dragElement.offset().left + dragWidth - startX;
      let containerOffset = container.offset().left;
      let containerWidth = container.outerWidth();
      let minLeft = containerOffset + 10;
      let maxLeft = containerOffset + containerWidth - dragWidth - 10;

      //add event listner on the divider emelent
      dragElement.parents().on("mousemove touchmove", function (e) {

        // if the user is not using touch input let do preventDefault to prevent the user from slecting the images as he moves the silder arround.
        if (touched === false) {
          e.preventDefault();
        }

        let moveX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
        let leftValue = moveX + posX - dragWidth;

        // stop the divider from going over the limits of the container
        if (leftValue < minLeft) {
          leftValue = minLeft;
        } else if (leftValue > maxLeft) {
          leftValue = maxLeft;
        }

        let widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + "%";

        $(".draggable").css("left", widthValue).on("mouseup touchend touchcancel", function () {
          $(this).removeClass("draggable");
          resizeElement.removeClass("resizable");
        });

        $(".resizable").css("width", widthValue);

      }).on("mouseup touchend touchcancel", function () {
        dragElement.removeClass("draggable");
        resizeElement.removeClass("resizable");

      });

    }).on("mouseup touchend touchcancel", function (e) {
      // stop clicping the image and move the slider
      dragElement.removeClass("draggable");
      resizeElement.removeClass("resizable");

    });

  }

  // overlay remove
  $('.overlay').on('click', function () {
    $('body').removeClass('overflow');
    $('.list-menu').removeClass('open');
    $('body,.overlay').removeClass('active');
    $('body').removeClass('overflow');
  });

  // scroll up start here
  $(function () {
    // $(window).scroll(function(){
    //   if ($(this).scrollTop() > 300) {
    //     $('.scrollToTop').css({'bottom':'2%', 'opacity':'1','transition':'all .5s ease'});
    //   } else {
    //     $('.scrollToTop').css({'bottom':'-30%', 'opacity':'0','transition':'all .5s ease'});
    //   }
    // });
    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 0);
      return false;
    });
  });

  //success alert

  $(".check-icon").hide();
  setTimeout(function () {
    $(".check-icon").show();
  }, 0.10)

  // counter up js activation code

  $(document).ready(function () {

    jQuery(function ($) {
      "use strict";

      var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

      var $counters = $(".counter");

      /* Start counting, do this on DOM ready or with Waypoints. */
      $counters.each(function (ignore, counter) {
        var waypoint = new Waypoint({
          element: $(this),
          handler: function () {
            counterUp(counter, {
              duration: 3000,
              delay: 16
            });
            this.destroy();
          },
          offset: 'bottom-in-view',
        });
      });

    });
  });
  // Cannot style datalist elements yet, so get
  // each option value and pass to jQuery UI Autocomplete
  $('input[data-list]').each(function () {
    var availableTags = $('#' + $(this).attr("data-list")).find('option').map(function () {
      return this.value;
    }).get();

    $(this).autocomplete({
      source: availableTags
    }).on('focus', function () {
      $(this).autocomplete('search', ' ');
    }).on('search', function () {
      if ($(this).val() === '') {
        $(this).autocomplete('search', ' ');
      }
    });
  });

  // li class active 



})(jQuery);

// input file preview and delete 

//I added event handler for the file upload control to access the files properties.
document.addEventListener("DOMContentLoaded", init, false);

//To save an array of attachments
var AttachmentArray = [];

//counter for attachment array
var arrCounter = 0;

//to make sure the error message for number of files will be shown only one time.
var filesCounterAlertStatus = false;

//un ordered list to keep attachments thumbnails
var ul = document.createElement("ul");
ul.className = "thumb-Images";
ul.id = "imgList";

function init() {
  //add javascript handlers for the file upload event
  document
    .querySelector("#files")
    .addEventListener("change", handleFileSelect, false);
}

//the handler for file upload event
function handleFileSelect(e) {
  //to make sure the user select file/files
  if (!e.target.files) return;

  //To obtaine a File reference
  var files = e.target.files;

  // Loop through the FileList and then to render image files as thumbnails.
  for (var i = 0, f; (f = files[i]); i++) {
    //instantiate a FileReader object to read its contents into memory
    var fileReader = new FileReader();

    // Closure to capture the file information and apply validation.
    fileReader.onload = (function (readerEvt) {
      return function (e) {
        //Apply the validation rules for attachments upload
        ApplyFileValidationRules(readerEvt);

        //Render attachments thumbnails.
        RenderThumbnail(e, readerEvt);

        //Fill the array of attachment
        FillAttachmentArray(e, readerEvt);
      };
    })(f);

    // Read in the image file as a data URL.
    // readAsDataURL: The result property will contain the file/blob's data encoded as a data URL.
    // More info about Data URI scheme https://en.wikipedia.org/wiki/Data_URI_scheme
    fileReader.readAsDataURL(f);
  }
  document
    .getElementById("files")
    .addEventListener("change", handleFileSelect, false);
}

//To remove attachment once user click on x button
jQuery(function ($) {
  $("div").on("click", ".img-wrap .close", function () {
    var id = $(this)
      .closest(".img-wrap")
      .find("img")
      .data("id");

    //to remove the deleted item from array
    var elementPos = AttachmentArray.map(function (x) {
      return x.FileName;
    }).indexOf(id);
    if (elementPos !== -1) {
      AttachmentArray.splice(elementPos, 1);
    }

    //to remove image tag
    $(this)
      .parent()
      .find("img")
      .not()
      .remove();

    //to remove div tag that contain the image
    $(this)
      .parent()
      .find("div")
      .not()
      .remove();

    //to remove div tag that contain caption name
    $(this)
      .parent()
      .parent()
      .find("div")
      .not()
      .remove();

    //to remove li tag
    var lis = document.querySelectorAll("#imgList li");
    for (var i = 0; (li = lis[i]); i++) {
      if (li.innerHTML == "") {
        li.parentNode.removeChild(li);
      }
    }
  });
});

//Apply the validation rules for attachments upload
function ApplyFileValidationRules(readerEvt) {
  //To check file type according to upload conditions
  if (CheckFileType(readerEvt.type) == false) {
    alert(
      "The file (" +
      readerEvt.name +
      ") does not match the upload conditions, You can only upload jpg/png/gif files"
    );
    e.preventDefault();
    return;
  }

  //To check file Size according to upload conditions
  if (CheckFileSize(readerEvt.size) == false) {
    alert(
      "The file (" +
      readerEvt.name +
      ") does not match the upload conditions, The maximum file size for uploads should not exceed 300000000 KB"
    );
    e.preventDefault();
    return;
  }

  //To check files count according to upload conditions
  if (CheckFilesCount(AttachmentArray) == false) {
    if (!filesCounterAlertStatus) {
      filesCounterAlertStatus = true;
      alert(
        "You have added more than 31 files. According to upload conditions you can upload 10 files maximum"
      );
    }
    e.preventDefault();
    return;
  }
}

//To check file type according to upload conditions
function CheckFileType(fileType) {
  if (fileType == "image/jpeg") {
    return true;
  } else if (fileType == "image/png") {
    return true;
  } else if (fileType == "image/gif") {
    return true;
  } else {
    return false;
  }
  return true;
}

//To check file Size according to upload conditions
function CheckFileSize(fileSize) {
  if (fileSize < 300000000) {
    return true;
  } else {
    return false;
  }
  return true;
}

//To check files count according to upload conditions
function CheckFilesCount(AttachmentArray) {
  //Since AttachmentArray.length return the next available index in the array,
  //I have used the loop to get the real length
  var len = 0;

  for (var i = 0; i < AttachmentArray.length; i++) {
    if (AttachmentArray[i] !== undefined) {
      len++;
    }
  }
  //To check the length does not exceed 10 files maximum
  if (len > 90) {
    return false;
  } else {
    return true;
  }
}

//Render attachments thumbnails.
function RenderThumbnail(e, readerEvt) {
  var li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML = [
    '<div class="img-wrap">  <span class="close">&times;</span>' +
    '<img class="thumb" src="',
    e.target.result,
    '" title="',
    escape(readerEvt.name),
    '" data-id="',
    readerEvt.name,
    '"/>' + "</div>"
  ].join("");

  var div = document.createElement("div");
  div.className = "FileNameCaptionStyle";
  li.appendChild(div);
  div.innerHTML = [readerEvt.name].join("");
  document.getElementById("Filelist").insertBefore(ul, null);
}

//Fill the array of attachment
function FillAttachmentArray(e, readerEvt) {
  AttachmentArray[arrCounter] = {
    AttachmentType: 1,
    ObjectType: 1,
    FileName: readerEvt.name,
    FileDescription: "Attachment",
    NoteText: "",
    MimeType: readerEvt.type,
    Content: e.target.result.split("base64,")[1],
    FileSizeInBytes: readerEvt.size,
  };
  arrCounter = arrCounter + 1;
}


