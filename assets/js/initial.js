import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

$(document).ready(function () {
  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom',
    gallery: {
      enabled: true
    },

    zoom: {
      enabled: true,

      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function

      opener: function (openerElement) {

        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }

  });

});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".clientSwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".trust-prof-slider", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".service-slider", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});
var swiper = new Swiper(".service-details-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".modal-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".blogslider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper = new Swiper(".shop_details_slider_sm", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  // direction: "vertical",


});
var swiper2 = new Swiper(".shop_details_slider2", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});
var swiper = new Swiper(".shop_details_slider", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  direction: "vertical",
});

var swiper2 = new Swiper(".shop_details_slider2", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".related-product", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
var swiper = new Swiper(".related-blog", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
// isotope js

// external js: isotope.pkgd.js

$(document).ready(function () {

  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'masonry',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function (itemElem) {
        var weight = $(itemElem).find('.weight').text();
        return parseFloat(weight.replace(/[\(\)]/g, ''));
      }
    }
  });

  // store filter for each group
  var filters = {};

  $('.filters').on('click', '.button', function (event) {
    var $button = $(event.currentTarget);
    // get group key
    var $buttonGroup = $button.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[filterGroup] = $button.attr('data-filter');
    // combine filters
    var filterValue = concatValues(filters);
    // set filter for Isotope
    $container.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function (event) {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      var $button = $(event.currentTarget);
      $button.addClass('is-checked');
    });
  });

  // flatten object by concatting values
  function concatValues(obj) {
    var value = '';
    for (var prop in obj) {
      value += obj[prop];
    }
    return value;
  }

  //****************************
  // Isotope Load more button
  //****************************
  var initShow = 12; //number of items loaded on init & onclick load more button
  var counter = initShow; //counter for load more button
  var iso = $container.data('isotope'); // get Isotope instance

  loadMore(initShow); //execute function onload

  function loadMore(toShow) {
    $container.find(".hidden").removeClass("hidden");

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function (item) {
      return item.element;
    });
    $(hiddenElems).addClass('hidden');
    $container.isotope('layout');

    //when no more to load, hide show more button
    if (hiddenElems.length == 0) {
      jQuery("#load-more").hide();
    } else {
      jQuery("#load-more").show();
    };

  }

  //append load more button
  $container.after('<div class="text-center mt-3"> <button type="button" class="btn btn-trail" id="load-more"> Load More</button></div>');

  //when load more button clicked
  $("#load-more").click(function () {
    if ($('#filters').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      $('#filters').data('clicked', false);
    } else {
      counter = counter;
    };

    counter = counter + initShow;

    loadMore(counter);
  });

  //when filter button clicked
  $("#filters").click(function () {
    $(this).data('clicked', true);

    loadMore(initShow);
  });



});