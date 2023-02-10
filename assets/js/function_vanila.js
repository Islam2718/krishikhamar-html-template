var swiper = new Swiper('.recent-container', {
    navigation: {
      nextEl: '.right-btn',
      prevEl: '.left-btn',
    },
  });

  var buttonTarget = document.getElementsByClassName("counter")[0];
  var counter = 2;
  
  
  function incrementer(){
    buttonTarget.innerHTML  = counter.toString();
    counter++;
    return counter;
  }
  function detriment(){
    buttonTarget.innerHTML  = counter.toString();
    counter--;
    return nocounter;
  }

  function iso_scrool_collapse(){
    var iso = document.querySelectorAll(".element-itemes");
    var i;
    for (i = 6; i < iso.length; i++) {
      iso[i].classList.add("scroll-hide");
      //console.log(iso.length); 
    } 
  }
  
  function iso_scrool_expand(){
    var iso = document.querySelectorAll(".element-itemes");
    var i;
    for (i = 6; i < iso.length; i++) {
      iso[i].classList.remove("scroll-hide");
      document.querySelector(".btn-load").style.display = "none";
      //console.log(iso.length); 
    } 
    var allbtn =  document.querySelector(".allbtn");
    var subbtn = document.querySelectorAll(".subbtn");
    for(var s = 0; s < subbtn.length; s++){
      subbtn[s].classList.remove("is-checked");
    }
    allbtn.classList.add("is-checked");
        var allin =  document.querySelectorAll(".element-itemes");
        var i;
        for( i = 3; i < allin.length; i+=3){
          allin[i].style.marginTop = "0px";
          //console.log(allin[i]);
        }
        for( i = 4; i <= allin.length; i+=3 ){
              allin[i].style.marginTop = "-100px";
              //console.log(allin[i]);
        }
        for( i = 5; i < allin.length; i+=3){
          allin[i].style.marginTop = "0px";
          //console.log(allin[i]);
        }
        allin[0].style.marginTop = "100px";
        allin[1].style.marginTop = "0px";
        allin[2].style.marginTop = "100px";
          // console.log(allin[0]);
          // console.log(allin[1]);
          // console.log(allin[2]);
          
          function breakbtn(x){
            var allgrid1 = document.querySelectorAll('.element-itemes')[0];
            var allgrid3 = document.querySelectorAll('.element-itemes')[2];
            var allgrid5 = document.querySelectorAll('.element-itemes');
            var i;
            for( i = 4; i <= allgrid5.length; i+=3 ){
              if(x.matches){
                allgrid5[i].style.marginTop = "-100px";
              }
              else{
                allgrid5[i].style.marginTop = "0px";
              }
            }
            if(x.matches){
              allgrid1.style.marginTop = "100px";
              allgrid3.style.marginTop = "100px";
                
            }
            else{
              allgrid1.style.marginTop = "0px";
              allgrid3.style.marginTop = "0px";
              
            }
          }
          var y = window.matchMedia("(min-width: 1200px)");
          // breakbtn(x);
          y.addListener(breakbtn(x));
      
  }
  
  
    
// breakpoint defiend 

function breakpoint(x){
  var grid1 = document.querySelectorAll('.element-itemes')[0];
  var grid3 = document.querySelectorAll('.element-itemes')[2];
  var grid5 = document.querySelectorAll('.element-itemes:nth-child(3n+5)');
  var i;
  for(i=0; i < grid5.length; i++){
    if(x.matches){
      grid5[i].style.marginTop = "-100px";
    }
    else{
      grid5[i].style.marginTop = "0px";
    }
  }
  console.log(grid5);
  if(x.matches){
    grid1.style.marginTop = "100px";
    grid3.style.marginTop = "100px";
      
  }
  else{
    grid1.style.marginTop = "0px";
    grid3.style.marginTop = "0px";
    
  }
}
var x = window.matchMedia("(min-width: 1200px)");
breakpoint(x);
x.addListener(breakpoint);

// iso button wise nth child selector


function allin(){
  var element =  document.querySelectorAll(".element-itemes");
  var i;
  for( i = 3; i < element.length; i+=3){
   element[i].style.marginTop = "0px";
   //console.log(element[i]);
 }
  for( i = 4; i <= element.length; i+=3 ){
       element[i].style.marginTop = "-100px";
       //console.log(element[i]);
  }
 for( i = 5; i < element.length; i+=3){
   element[i].style.marginTop = "0px";
   //console.log(element[i]);
 }
  element[0].style.marginTop = "100px";
 // element[1].style.marginTop = "0px";
  if( element[1]){
   //  console.log("ok");
   element[1].style.marginTop = "0px";
  }
  else if( element[2]){
   // console.log("ok 2");
   element[2].style.marginTop = "100px";
 }
  else{
   //  console.log("not ok");
     element[0].style.marginTop = "0px";
  }
 
 
  //element[2].style.marginTop = "100px";
   // console.log(element[0]);
   // console.log(element[1]);
   // console.log(element[2]);
   
   function breakbtn(x){
     var element1 = document.querySelectorAll('.element-itemes');
     var element3 = document.querySelectorAll('.element-itemes');
     var element5 = document.querySelectorAll('.element-itemes');
     var i;
     for( i = 4; i <= element5.length; i+=3 ){
       if(x.matches){
         element5[i].style.marginTop = "-100px";
       }
       else{
         element5[i].style.marginTop = "0px";
       }
     }
     if(x.matches){
       element1[0].style.marginTop = "100px";
       //element3[2].style.marginTop = "100px";
       if(element3[2] != null){
         //console.log("length 2");
         element3[2].style.marginTop = "100px";
       }
       else{
         element1[0].style.marginTop = "100px";
         //console.log("no length");
       }
     }
     else{
       element1[0].style.marginTop = "0px";
       element3[1].style.marginTop = "0px";
       
     }
   }
   var y = window.matchMedia("(min-width: 1200px)");
   // breakbtn(x);
   y.addListener(breakbtn(x));
 }
 function ecommerce(){
  var ecommerce =  document.querySelectorAll(".ecommerce");
  var i;
  for (i = 0; i < ecommerce.length; i++) {
    ecommerce[i].classList.remove("scroll-hide");
    //console.log(ecommerce[i]); 
  }
  for( i = 3; i < ecommerce.length; i+=3){
   ecommerce[i].style.marginTop = "0px";
   //console.log(ecommerce[i]);
 }
  for( i = 4; i <= ecommerce.length; i+=3 ){
       ecommerce[i].style.marginTop = "-100px";
       //console.log(ecommerce[i]);
  }
 for( i = 5; i < ecommerce.length; i+=3){
   ecommerce[i].style.marginTop = "0px";
   //console.log(ecommerce[i]);
 }
  ecommerce[0].style.marginTop = "100px";
 // ecommerce[1].style.marginTop = "0px";
  if( ecommerce[1]){
   //  console.log("ok");
   ecommerce[1].style.marginTop = "0px";
  }
  else if( ecommerce[2]){
   // console.log("ok 2");
   ecommerce[2].style.marginTop = "100px";
 }
  else{
   //  console.log("not ok");
     ecommerce[0].style.marginTop = "0px";
  }
 
 
  //ecommerce[2].style.marginTop = "100px";
   // console.log(ecommerce[0]);
   // console.log(ecommerce[1]);
   // console.log(ecommerce[2]);
   
   function breakbtn(x){
     var ecommerce1 = document.querySelectorAll('.ecommerce');
     var ecommerce3 = document.querySelectorAll('.ecommerce');
     var ecommerce5 = document.querySelectorAll('.ecommerce');
     var i;
     for( i = 4; i <= ecommerce5.length; i+=3 ){
       if(x.matches){
         ecommerce5[i].style.marginTop = "-100px";
       }
       else{
         ecommerce5[i].style.marginTop = "0px";
       }
     }
     if(x.matches){
       ecommerce1[0].style.marginTop = "100px";
       //ecommerce3[2].style.marginTop = "100px";
       if(ecommerce3[2] != null){
         //console.log("length 2");
         ecommerce3[2].style.marginTop = "100px";
       }
       else{
         ecommerce1[0].style.marginTop = "100px";
         //console.log("no length");
       }
     }
     else{
       ecommerce1[0].style.marginTop = "0px";
       ecommerce3[1].style.marginTop = "0px";
       
     }
   }
   var y = window.matchMedia("(min-width: 1200px)");
   // breakbtn(x);
   y.addListener(breakbtn(x));
 }
function Informative(){
 var Informative =  document.querySelectorAll(".Informative");
 var i;
 
 for (i = 0; i < Informative.length; i++) {
  Informative[i].classList.remove("scroll-hide");
  //console.log(Informative[i]); 
}
 for( i = 3; i < Informative.length; i+=3){
  Informative[i].style.marginTop = "0px";
  //console.log(Informative[i]);
}
 for( i = 4; i <= Informative.length; i+=3 ){
      Informative[i].style.marginTop = "-100px";
      //console.log(Informative[i]);
 }
for( i = 5; i < Informative.length; i+=3){
  Informative[i].style.marginTop = "0px";
  //console.log(Informative[i]);
}
 Informative[0].style.marginTop = "100px";
// Informative[1].style.marginTop = "0px";
 if( Informative[1]){
  //  console.log("ok");
  Informative[1].style.marginTop = "0px";
 }
 else if( Informative[2]){
  // console.log("ok 2");
  Informative[2].style.marginTop = "100px";
}
 else{
  //  console.log("not ok");
    Informative[0].style.marginTop = "0px";
 }


 //Informative[2].style.marginTop = "100px";
  // console.log(Informative[0]);
  // console.log(Informative[1]);
  // console.log(Informative[2]);
  
  function breakbtn(x){
    var Informative1 = document.querySelectorAll('.Informative');
    var Informative3 = document.querySelectorAll('.Informative');
    var Informative5 = document.querySelectorAll('.Informative');
    var i;
    for( i = 4; i <= Informative5.length; i+=3 ){
      if(x.matches){
        Informative5[i].style.marginTop = "-100px";
      }
      else{
        Informative5[i].style.marginTop = "0px";
      }
    }
    if(x.matches){
      Informative1[0].style.marginTop = "100px";
      //Informative3[2].style.marginTop = "100px";
      if(Informative3[2] != null){
        //console.log("length 2");
        Informative3[2].style.marginTop = "100px";
      }
      else{
        Informative1[0].style.marginTop = "100px";
        //console.log("no length");
      }
    }
    else{
      Informative1[0].style.marginTop = "0px";
      Informative3[1].style.marginTop = "0px";
      
    }
  }
  var y = window.matchMedia("(min-width: 1200px)");
  // breakbtn(x);
  y.addListener(breakbtn(x));
}
function Application(){
 var Application =  document.querySelectorAll(".Application");
 var i;
 for (i = 0; i < Application.length; i++) {
  Application[i].classList.remove("scroll-hide");
  //console.log(Application[i]); 
} 
 for( i = 3; i < Application.length; i+=3){
  Application[i].style.marginTop = "0px";
  //console.log(Application[i]);
}
 for( i = 4; i <= Application.length; i+=3 ){
      Application[i].style.marginTop = "-100px";
      //console.log(Application[i]);
 }
for( i = 5; i < Application.length; i+=3){
  Application[i].style.marginTop = "0px";
  //console.log(Application[i]);
}
 Application[0].style.marginTop = "100px";
// Application[1].style.marginTop = "0px";
 if( Application[1]){
  //  console.log("ok");
  Application[1].style.marginTop = "0px";
 }
 else if( Application[2]){
  // console.log("ok 2");
  Application[2].style.marginTop = "100px";
}
 else{
  //  console.log("not ok");
    Application[0].style.marginTop = "0px";
 }


 //Application[2].style.marginTop = "100px";
  // console.log(Application[0]);
  // console.log(Application[1]);
  // console.log(Application[2]);
  
  function breakbtn(x){
    var Application1 = document.querySelectorAll('.Application');
    var Application3 = document.querySelectorAll('.Application');
    var Application5 = document.querySelectorAll('.Application');
    var i;
    for( i = 4; i <= Application5.length; i+=3 ){
      if(x.matches){
        Application5[i].style.marginTop = "-100px";
      }
      else{
        Application5[i].style.marginTop = "0px";
      }
    }
    if(x.matches){
      Application1[0].style.marginTop = "100px";
      //Application3[2].style.marginTop = "100px";
      if(Application3[2] != null){
        //console.log("length 2");
        Application3[2].style.marginTop = "100px";
      }
      else{
        Application1[0].style.marginTop = "100px";
        //console.log("no length");
      }
    }
    else{
      Application1[0].style.marginTop = "0px";
      Application3[1].style.marginTop = "0px";
      
    }
  }
  var y = window.matchMedia("(min-width: 1200px)");
  // breakbtn(x);
  y.addListener(breakbtn(x));
}
function Design(){
  var Design =  document.querySelectorAll(".Design");
  var i;
  for (i = 0; i < Design.length; i++) {
   Design[i].classList.remove("scroll-hide");
   //console.log(Design[i]); 
 }
  for( i = 3; i < Design.length; i+=3){
   Design[i].style.marginTop = "0px";
   //console.log(Design[i]);
 }
  for( i = 4; i <= Design.length; i+=3 ){
       Design[i].style.marginTop = "-100px";
       //console.log(Design[i]);
  }
 for( i = 5; i < Design.length; i+=3){
   Design[i].style.marginTop = "0px";
   //console.log(Design[i]);
 }
  Design[0].style.marginTop = "100px";
  // Design[1].style.marginTop = "0px";
  // Design[2].style.marginTop = "100px";
  if( Design[1]){
    //  console.log("ok");
    Design[1].style.marginTop = "0px";
   }
   else if( Design[2]){
    // console.log("ok 2");
    Design[2].style.marginTop = "100px";
  }
   else{
    //  console.log("not ok");
      Design[0].style.marginTop = "0px";
   }
  
   // console.log(Design[0]);
   // console.log(Design[1]);
   // console.log(Design[2]);
   
   function breakbtn(x){
     var Design1 = document.querySelectorAll('.Design');
     var Design3 = document.querySelectorAll('.Design');
     var Design5 = document.querySelectorAll('.Design');
     var i;
     for( i = 4; i <= Design5.length; i+=3 ){
       if(x.matches){
         Design5[i].style.marginTop = "-100px";
       }
       else{
         Design5[i].style.marginTop = "0px";
       }
     }
     
     if(x.matches){
       Design1[0].style.marginTop = "100px";
       
       //Design3.style.marginTop = "100px";
       if(Design1[2] != null){
        //console.log("length 2");
        Design1[2].style.marginTop = "100px";
      }
      else{
        Design1[0].style.marginTop = "100px";
        //console.log("no length");
      }
         
     }
     else{
       Design1[0].style.marginTop = "0px";
       Design3[2].style.marginTop = "0px";
       
     }
   }
   var y = window.matchMedia("(min-width: 1200px)");
   // breakbtn(x);
   y.addListener(breakbtn(x));
}
function Development(){
  var Development =  document.querySelectorAll(".Development");
  var i;
  for (i = 0; i < Development.length; i++) {
    Development[i].classList.remove("scroll-hide");
    //console.log(Development[i]); 
  }
  for( i = 3; i < Development.length; i+=3){
   Development[i].style.marginTop = "0px";
   //console.log(Development[i]);
 }
  for( i = 4; i <= Development.length; i+=3 ){
       Development[i].style.marginTop = "-100px";
       //console.log(Development[i]);
  }
 for( i = 5; i < Development.length; i+=3){
   Development[i].style.marginTop = "0px";
   //console.log(Development[i]);
 }
  Development[0].style.marginTop = "100px";
  // Development[1].style.marginTop = "0px";
  // Development[2].style.marginTop = "100px";
  if( Development[1]){
    //  console.log("ok");
    Development[1].style.marginTop = "0px";
   }
   else if( Development[2]){
    // console.log("ok 2");
    Development[2].style.marginTop = "100px";
  }
   else{
    //  console.log("not ok");
      Development[0].style.marginTop = "0px";
   }
  
   // console.log(Development[0]);
   // console.log(Development[1]);
   // console.log(Development[2]);
   
   function breakbtn(x){
     var Development1 = document.querySelectorAll('.Development');
     var Development3 = document.querySelectorAll('.Development');
     var Development5 = document.querySelectorAll('.Development');
     var i;
     for( i = 4; i <= Development5.length; i+=3 ){
       if(x.matches){
         Development5[i].style.marginTop = "-100px";
       }
       else{
         Development5[i].style.marginTop = "0px";
       }
     }
     if(x.matches){
       Development1[0].style.marginTop = "100px";
       //Development3.style.marginTop = "100px";
       if(Development1[2] != null){
        //console.log("length 2");
        Development1[2].style.marginTop = "100px";
      }
      else{
        Development1[0].style.marginTop = "100px";
        //console.log("no length");
      }
         
     }
     else{
       Development1[0].style.marginTop = "0px";
       Development3[2].style.marginTop = "0px";
       
     }
   }
   var y = window.matchMedia("(min-width: 1200px)");
   // breakbtn(x);
   y.addListener(breakbtn(x));
}
function Service(){
  var Service =  document.querySelectorAll(".Service");
  var i;
  for (i = 0; i < Service.length; i++) {
    Service[i].classList.remove("scroll-hide");
    //console.log(Service[i]); 
  }
  for( i = 3; i < Service.length; i+=3){
   Service[i].style.marginTop = "0px";
   //console.log(Service[i]);
 }
  for( i = 4; i <= Service.length; i+=3 ){
       Service[i].style.marginTop = "-100px";
       //console.log(Service[i]);
  }
 for( i = 5; i < Service.length; i+=3){
   Service[i].style.marginTop = "0px";
   //console.log(Service[i]);
 }
  Service[0].style.marginTop = "100px";
 // Service[1].style.marginTop = "0px";
  if( Service[1]){
   //  console.log("ok");
   Service[1].style.marginTop = "0px";
  }
  else if( Service[2]){
   // console.log("ok 2");
   Service[2].style.marginTop = "100px";
 }
  else{
   //  console.log("not ok");
     Service[0].style.marginTop = "0px";
  }
 
 
  //Service[2].style.marginTop = "100px";
   // console.log(Service[0]);
   // console.log(Service[1]);
   // console.log(Service[2]);
   
   function breakbtn(x){
     var Service1 = document.querySelectorAll('.Service');
     var Service3 = document.querySelectorAll('.Service');
     var Service5 = document.querySelectorAll('.Service');
     var i;
     for( i = 4; i <= Service5.length; i+=3 ){
       if(x.matches){
         Service5[i].style.marginTop = "-100px";
       }
       else{
         Service5[i].style.marginTop = "0px";
       }
     }
     if(x.matches){
       Service1[0].style.marginTop = "100px";
       //Service3[2].style.marginTop = "100px";
       if(Service3[2] != null){
         //console.log("length 2");
         Service3[2].style.marginTop = "100px";
       }
       else{
         Service1[0].style.marginTop = "100px";
         //console.log("no length");
       }
     }
     else{
       Service1[0].style.marginTop = "0px";
       //Service3[1].style.marginTop = "0px";
       if(Service3[1] != null){
        //console.log("length 2");
          Service3[1].style.marginTop = "100px";
        }
        else if(Service3[2] != null){
          //console.log("length 2");
          Service3[2].style.marginTop = "100px";
          }
        else{
          Service1[0].style.marginTop = "100px";
          //console.log("no length");
        }
       
     }
   }
   var y = window.matchMedia("(min-width: 1200px)");
   // breakbtn(x);
   y.addListener(breakbtn(x));
 }
function Place(){
  var Place =  document.querySelectorAll(".Place");
  var i;
  for (i = 0; i < Place.length; i++) {
    Place[i].classList.remove("scroll-hide");
    //console.log(Place[i]); 
  }
  for( i = 3; i < Place.length; i+=3){
   Place[i].style.marginTop = "0px";
   //console.log(Place[i]);
 }
  for( i = 4; i <= Place.length; i+=3 ){
       Place[i].style.marginTop = "-100px";
       //console.log(Place[i]);
  }
 for( i = 5; i < Place.length; i+=3){
   Place[i].style.marginTop = "0px";
   //console.log(Place[i]);
 }
  Place[0].style.marginTop = "100px";
  // Place[1].style.marginTop = "0px";
  // Place[2].style.marginTop = "100px";
  if( Place[1]){
    //  console.log("ok");
    Place[1].style.marginTop = "0px";
   }
   else if( Place[2]){
    // console.log("ok 2");
    Place[2].style.marginTop = "100px";
  }
   else{
    //  console.log("not ok");
      Place[0].style.marginTop = "0px";
   }
  
   // console.log(Place[0]);
   // console.log(Place[1]);
   // console.log(Place[2]);
   
   function breakbtn(x){
     var Place1 = document.querySelectorAll('.Place');
     var Place3 = document.querySelectorAll('.Place');
     var Place5 = document.querySelectorAll('.Place');
     var i;
     for( i = 4; i <= Place5.length; i+=3 ){
       if(x.matches){
         Place5[i].style.marginTop = "-100px";
       }
       else{
         Place5[i].style.marginTop = "0px";
       }
     }
     if(x.matches){
       Place1[0].style.marginTop = "100px";
       //Place3.style.marginTop = "100px";
       if(Place1[2] != null){
        //console.log("length 2");
        Place1[2].style.marginTop = "100px";
      }
      else{
        Place1[0].style.marginTop = "100px";
        //console.log("no length");
      }
         
     }
     else{
       Place1[0].style.marginTop = "0px";
       //Place3[2].style.marginTop = "0px";
       if(Place3[1] != null){
        //console.log("length 2");
          Place3[1].style.marginTop = "100px";
        }
        else if(Place3[2] != null){
          //console.log("length 2");
          Place3[2].style.marginTop = "100px";
          }
        else{
          Place3[0].style.marginTop = "100px";
          //console.log("no length");
        }
       
     }
   }
   var y = window.matchMedia("(min-width: 1200px)");
   // breakbtn(x);
   y.addListener(breakbtn(x));
}
// isotop_technology_area

// navbar scroll animation
  window.onscroll = pagescroll;
  pagescrollvalid = window.pageYOffset;
  function pagescroll() {
    var pageup = window.pageYOffset;
    var header = document.getElementById('header');
    if(pagescrollvalid && pageup == 0){
      header.classList.remove("fixed");
      header.classList.remove("top-bar");
    }
    else if(pagescrollvalid > pageup){
      header.classList.add("fixed");
    }
    else if(pagescrollvalid < pageup){
      header.classList.add("top-bar");
      header.classList.remove("fixed");
    }
    else{
      header.classList.remove("fixed");
    } 
    pagescrollvalid = pageup;
  }

  window.onload = iso_scrool_collapse() ;

  // function isotop_techno(){
  //   // var technology = document.querySelectorAll(".technology");
  //   // var marginleft1 = 0;
  //   // var marginleft2 = -72;
  //   // var marginleft3 = 0;
  //   // var marginleft4 = 72;
  //   // var marginleft5 = 264;
  //   // for(var i = 1; i < 7; i++){
  //   //   marginleft1 += parseInt(window.getComputedStyle(technology[i]).marginLeft, 0) + 136;
  //   //     technology[i].style.left = marginleft1 + "px";
  //   //     technology[i].style.top = 0 + "px";
  //   //     //console.log(marginleft);
  //   // }
  //   // for(var i = 7; i < 13; i++){
  //   //   marginleft2 += parseInt(window.getComputedStyle(technology[i]).marginLeft, 0) + 136;
  //   //     technology[i].style.left = marginleft2 + "px";
  //   //     technology[i].style.top = 136 + "px";
  //   //     console.log(marginleft2);
  //   // }
  //   // for(var i = 13; i < 18; i++){
  //   //   marginleft3 += parseInt(window.getComputedStyle(technology[i]).marginLeft, 0) + 136;
  //   //     technology[i].style.left = marginleft3 + "px";
  //   //     technology[i].style.top = 272 + "px";
  //   //     console.log(marginleft3);
  //   // }
    
  //   // for(var i = 18; i < 22; i++){
  //   //   marginleft4 += parseInt(window.getComputedStyle(technology[i]).marginLeft, 0) + 136;
  //   //     technology[i].style.left = marginleft4 + "px";
  //   //     technology[i].style.top = 408 + "px";
  //   //     console.log(marginleft4);
  //   // }
  //   // for(var i = 22; i < technology.length; i++){
  //   //   marginleft5 += parseInt(window.getComputedStyle(technology[i]).marginLeft, 0) + 136;
  //   //     technology[i].style.left = marginleft5 + "px";
  //   //     technology[i].style.top = 544 + "px";
  //   //     console.log(marginleft5);
  //   // }
  //   function breakbtn(x){
  //     var technology = document.querySelectorAll('.technology');
  //     var Place3 = document.querySelectorAll('.technology');
  //     var i;
  //     var marginleft1 = 0;
  //     var marginleft2 = -72;
  //     var marginleft3 = 0;
  //     var marginleft4 = 72;
  //     var marginleft5 = 264;
  //     for(var i = 1; i < 7; i++){
  //       if(x.matches){
  //         marginleft1 += parseInt(window.getComputedStyle(technology[i]).marginLeft, 0) + 136;
  //         technology[i].style.left = marginleft1 + "px";
  //         technology[i].style.top = 0 + "px";
  //         //console.log(marginleft);
  //       }
  //       else{
  //         false;
  //       }
  //     }
  //     for(var i = 7; i < 13; i++){
  //       if(x.matches){
  //         marginleft2 += parseInt(window.getComputedStyle(technology[i]).marginLeft, 0) + 136;
  //         technology[i].style.left = marginleft2 + "px";
  //         technology[i].style.top = 136 + "px";
  //         //console.log(marginleft2);
  //       }
  //       else{
  //         false
  //       }
  //     }
  //     for(var i = 13; i < 18; i++){
  //       if(x.matches){
  //         marginleft3 += parseInt(window.getComputedStyle(technology[i]).marginLeft, 0) + 136;
  //         technology[i].style.left = marginleft3 + "px";
  //         technology[i].style.top = 272 + "px";
  //         //console.log(marginleft3);
  //       }
  //       else{false}
  //     }
  //     for(var i = 18; i < 22; i++){
  //       if(x.matches){
  //         marginleft4 += parseInt(window.getComputedStyle(technology[i]).marginLeft, 0) + 136;
  //         technology[i].style.left = marginleft4 + "px";
  //         technology[i].style.top = 408 + "px";
  //         //console.log(marginleft4);
  //       }
  //       else{
  //         false
  //       }
  //     }
  //     for(var i = 22; i < technology.length; i++){
  //       if(x.matches){
  //         marginleft5 += parseInt(window.getComputedStyle(technology[i]).marginLeft, 0) + 136;
  //           technology[i].style.left = marginleft5 + "px";
  //           technology[i].style.top = 544 + "px";
  //           //console.log(marginleft5);
  //         }
  //         else{false}
  //     }
  //     if(x.matches){
  //       //Place1[0].style.marginTop = "100px";
  //       //Place3.style.marginTop = "100px";
  //       if(technology[2] != null){
  //        //console.log("length 2");
  //       // Place1[2].style.marginTop = "100px";
  //      }
  //      else{
  //        //Place1[0].style.marginTop = "100px";
  //        //console.log("no length");
  //      }
          
  //     }
  //     else{
  //       //technology[0].style.marginTop = "0px";
  //       //Place3[2].style.marginTop = "0px";
  //       if(Place3[1] != null){
  //        //console.log("length 2");
  //          //Place3[1].style.marginTop = "100px";
  //        }
  //        else if(Place3[2] != null){
  //          //console.log("length 2");
  //          //Place3[2].style.marginTop = "100px";
  //          }
  //        else{
  //          //Place3[0].style.marginTop = "100px";
  //          //console.log("no length");
  //        }
        
  //     }
  //   }
  //   var y = window.matchMedia("(min-width: 1300px)");
  //   // breakbtn(x);
  //   y.addListener(breakbtn(x));
  //   //technology[7].style.marginLeft = "7%";
  //   // technology[8].style.left = "17%";
  //   // technology[9].style.left = "27%";
  //   // for(i = 7; i < 13; i ++){
  //   //   var marginleft = 70;
  //   //    marginleft += parseInt(window.getComputedStyle(technology[i]).marginLeft, 0) + 70;
  //   //    technology[i].style.marginLeft = marginleft + "px";
  //   //   // technology[i].style.width = "16.65%";
  //   //   // var last = technology[ i + 5];
  //   //   console.log([i]);
      
  //   // }
  //   // for(i = 13; i < 18; i++){
  //   //   var last = technology[ i - 1];
  //   //   last.style.marginRight = "100%";
  //   //   last.style.overflowWrap = "break-word";
  //   //   last.classList.add("lastchild");
      
  //   //   console.log(last);
  //   //   // first.style.left = "0px"
  //   //   // first.style.top = "280px"
  //   //   //console.log(first);
  //   //   technology[i].style.marginLeft = "14%";
  //   //   //technology[i].style.top = "280px";
  //   //   //technology[13].style.left = "0px";
  //   //  console.log(technology[i]);
  //   // }
  //   //console.log(technology[3]);
  // }
  
  // function isotop_techno2(){
  //   function breakbtn(x){
  //     if(x.matches){
  //       console.log(yes);
  //       setTimeout(function() {
  //       var transition = document.querySelectorAll(".element-item");
  //       var d = 1;
  //       for(var r=1; r < transition.length; r = d+r){ 
  //         d++; 
  //         var row = d;
  //       } 
  //       var no = 0;
  //       var Left = 0;
  //       var BoxTop = 0;
  //       for (var i = row;  i >= 1; i--){
  //         for(var j = row -1; j >= i; j--){
  //           Left +=100;
  //         }
  //         for(var k = 1; k <= i; k++){
  //           if(transition[no] !== undefined){
  //             transition[no].style.left = Left +"px";
  //             transition[no].style.top = BoxTop +"px";
  //             no ++;
  //             Left += 250;
  //           }
  //           else{
  //             false;
  //           }
  //         }
  //         Left = 0;
  //         BoxTop += 225;
  //       }
  //     }, 0000);
  //     }
  //     else{
  //       false
  //     }
  //   }
  //   var y = window.matchMedia("(min-width: 1300px)");
  //   // breakbtn(x);
  //   y.addListener(breakbtn(x));
  // }
  function onloadisotope(){
    function breakbtn(x){
        if(x.matches){
          setTimeout(function() {  //for priority set  
            var transition = document.querySelectorAll(".technology");
            var d = 1;
            for(var r=1; r < transition.length; r = d+r){ // get the series for rowspen 
              d++; 
              var row = d;
            } 
            var no = 0;
            var Left = 0;
            var BoxTop = 0;
            var no2 = 0;
            var no3 = 0;
            var h =1
            for (var i = row;  i >= 1; i--){  // row loop
              for(var l =1; l<=i; l++){ // element varication for white space
                if(transition[no2] !== undefined){
                  Left = 0;
                }
                else{false}
                no2++;
              }
              for(var g = 1; g <= i; g++){ // element varication for centerige
                if(h <= 1){
                  Left = 490;
                }
                else if(h <= 2){
                  Left = 420;
                }
                else if(h <= 3){
                  Left = 350;
                }
                else if(h <= 3){
                  Left = 280;
                }
                else if(h <= 4){
                  Left = 210;
                }
                else if(h <= 5){
                  Left = 140;
                }
                else if(h <= 6){
                  Left = 70;
                }
                else{
                  Left =0;
                }
                h++;
              }
             
              for(var o = 1; o <= i; o++){
                if(transition[no3] == undefined){
                  Left += 70;
                }
                else{false};
                no3++;
              }
              for(var j = row -1; j >= i; j--){ // white space loop
                Left +=72;
              }
              for(var k = 1; k <= i; k++){ // print loop
                if(transition[no] == undefined){ // element varification
                  false
                }
                else if(transition[no] !== undefined){
                  transition[no].style.left = Left +"px";
                  transition[no].style.top = BoxTop +"px";
                  transition[no].style.transition = "all 0.4s ease-in-out";
                  no ++;
                  Left += 143;
                }
                else{
                  false;
                }
              }
              h=1;
              for(var m = row; m >= i; m--){
                h+=1
              }
              BoxTop += 143;
            }
          }, 0000);
        }
        else{
          false;
        }
    }
    var y = window.matchMedia("(min-width: 1300px)");
    // breakbtn(x);
    y.addListener(breakbtn(x));
    
}
  window.onload = onloadisotope, false;
  function allisotop(){
    function breakbtn(x){
        if(x.matches){
          setTimeout(function() {  //for priority set  
            var transition = document.querySelectorAll(".technology");
            var d = 1;
            for(var r=1; r < transition.length; r = d+r){ // get the series for rowspen 
              d++; 
              var row = d;
            } 
            var no = 0;
            var Left = 0;
            var BoxTop = 0;
            var no2 = 0;
            var no3 = 0;
            var h =1
            for (var i = row;  i >= 1; i--){  // row loop
              for(var l =1; l<=i; l++){ // element varication for white space
                if(transition[no2] !== undefined){
                  Left = 0;
                }
                else{false}
                no2++;
              }
              for(var g = 1; g <= i; g++){ // element varication for centerige
                if(h <= 1){
                  Left = 490;
                }
                else if(h <= 2){
                  Left = 420;
                }
                else if(h <= 3){
                  Left = 350;
                }
                else if(h <= 3){
                  Left = 280;
                }
                else if(h <= 4){
                  Left = 210;
                }
                else if(h <= 5){
                  Left = 140;
                }
                else if(h <= 6){
                  Left = 70;
                }
                else{
                  Left =0;
                }
                h++;
              }
             
              for(var o = 1; o <= i; o++){
                if(transition[no3] == undefined){
                  Left += 70;
                }
                else{false};
                no3++;
              }
              for(var j = row -1; j >= i; j--){ // white space loop
                Left +=72;
              }
              for(var k = 1; k <= i; k++){ // print loop
                if(transition[no] == undefined){ // element varification
                  false
                }
                else if(transition[no] !== undefined){
                  transition[no].style.left = Left +"px";
                  transition[no].style.top = BoxTop +"px";
                  transition[no].style.transition = "all 0.4s ease-in-out";
                  no ++;
                  Left += 143;
                }
                else{
                  false;
                }
              }
              h=1;
              for(var m = row; m >= i; m--){
                h+=1
              }
              BoxTop += 143;
            }
          }, 0000);
        }
        else{
          false;
        }
    }
    var y = window.matchMedia("(min-width: 1300px)");
    // breakbtn(x);
    y.addListener(breakbtn(x));
    
}

function frontend(){
  function breakbtn(x){
      if(x.matches){
        setTimeout(function() {  //for priority set  
          var transition = document.querySelectorAll(".frontend");
          var d = 1;
          for(var r=1; r < transition.length; r = d+r){ // get the series for rowspen 
            d++; 
            var row = d;
          } 
          var no = 0;
          var Left = 0;
          var BoxTop = 0;
          var no2 = 0;
          var no3 = 0;
          var h =1
          for (var i = row;  i >= 1; i--){  // row loop
            for(var l =1; l<=i; l++){ // element varication for white space
              if(transition[no2] !== undefined){
                Left = 0;
              }
              else{false}
              no2++;
            }
            for(var g = 1; g <= i; g++){ // element varication for centerige
              if(h <= 1){
                Left = 490;
              }
              else if(h <= 2){
                Left = 420;
              }
              else if(h <= 3){
                Left = 350;
              }
              else if(h <= 3){
                Left = 280;
              }
              else if(h <= 4){
                Left = 210;
              }
              else if(h <= 5){
                Left = 140;
              }
              else if(h <= 6){
                Left = 70;
              }
              else{
                Left =0;
              }
              h++;
            }
           
            for(var o = 1; o <= i; o++){
              if(transition[no3] == undefined){
                Left += 70;
              }
              else{false};
              no3++;
            }
            for(var j = row -1; j >= i; j--){ // white space loop
              Left +=72;
            }
            for(var k = 1; k <= i; k++){ // print loop
              if(transition[no] == undefined){ // element varification
                false
              }
              else if(transition[no] !== undefined){
                transition[no].style.left = Left +"px";
                transition[no].style.top = BoxTop +"px";
                transition[no].style.transition = "all 0.4s ease-in-out";
                no ++;
                Left += 143;
              }
              else{
                false;
              }
            }
            h=1;
            for(var m = row; m >= i; m--){
              h+=1
            }
            BoxTop += 143;
          }
        }, 0000);
      }
      else{
        false;
      }
  }
  var y = window.matchMedia("(min-width: 1300px)");
  // breakbtn(x);
  y.addListener(breakbtn(x));
  
}

function backend(){
  function breakbtn(x){
      if(x.matches){
        setTimeout(function() {  //for priority set  
          var transition = document.querySelectorAll(".backend");
          var d = 1;
          for(var r=1; r < transition.length; r = d+r){ // get the series for rowspen 
            d++; 
            var row = d;
          } 
          var no = 0;
          var Left = 0;
          var BoxTop = 0;
          var no2 = 0;
          var no3 = 0;
          var h =1
          for (var i = row;  i >= 1; i--){  // row loop
            for(var l =1; l<=i; l++){ // element varication for white space
              if(transition[no2] !== undefined){
                Left = 0;
              }
              else{false}
              no2++;
            }
            for(var g = 1; g <= i; g++){ // element varication for centerige
              if(h <= 1){
                Left = 490;
              }
              else if(h <= 2){
                Left = 420;
              }
              else if(h <= 3){
                Left = 350;
              }
              else if(h <= 3){
                Left = 280;
              }
              else if(h <= 4){
                Left = 210;
              }
              else if(h <= 5){
                Left = 140;
              }
              else if(h <= 6){
                Left = 70;
              }
              else{
                Left =0;
              }
              h++;
            }
           
            for(var o = 1; o <= i; o++){
              if(transition[no3] == undefined){
                Left += 70;
              }
              else{false};
              no3++;
            }
            for(var j = row -1; j >= i; j--){ // white space loop
              Left +=72;
            }
            for(var k = 1; k <= i; k++){ // print loop
              if(transition[no] == undefined){ // element varification
                false
              }
              else if(transition[no] !== undefined){
                transition[no].style.left = Left +"px";
                transition[no].style.top = BoxTop +"px";
                transition[no].style.transition = "all 0.4s ease-in-out";
                no ++;
                Left += 143;
              }
              else{
                false;
              }
            }
            h=1;
            for(var m = row; m >= i; m--){
              h+=1
            }
            BoxTop += 143;
          }
        }, 0000);
      }
      else{
        false;
      }
  }
  var y = window.matchMedia("(min-width: 1300px)");
  // breakbtn(x);
  y.addListener(breakbtn(x));
  
}

function cloud(){
  function breakbtn(x){
      if(x.matches){
        setTimeout(function() {  //for priority set  
          var transition = document.querySelectorAll(".cloud");
          var d = 1;
          for(var r=1; r < transition.length; r = d+r){ // get the series for rowspen 
            d++; 
            var row = d;
          } 
          var no = 0;
          var Left = 0;
          var BoxTop = 0;
          var no2 = 0;
          var no3 = 0;
          var h =1
          for (var i = row;  i >= 1; i--){  // row loop
            for(var l =1; l<=i; l++){ // element varication for white space
              if(transition[no2] !== undefined){
                Left = 0;
              }
              else{false}
              no2++;
            }
            for(var g = 1; g <= i; g++){ // element varication for centerige
              if(h <= 1){
                Left = 490;
              }
              else if(h <= 2){
                Left = 420;
              }
              else if(h <= 3){
                Left = 350;
              }
              else if(h <= 3){
                Left = 280;
              }
              else if(h <= 4){
                Left = 210;
              }
              else if(h <= 5){
                Left = 140;
              }
              else if(h <= 6){
                Left = 70;
              }
              else{
                Left =0;
              }
              h++;
            }
           
            for(var o = 1; o <= i; o++){
              if(transition[no3] == undefined){
                Left += 70;
              }
              else{false};
              no3++;
            }
            for(var j = row -1; j >= i; j--){ // white space loop
              Left +=72;
            }
            for(var k = 1; k <= i; k++){ // print loop
              if(transition[no] == undefined){ // element varification
                false
              }
              else if(transition[no] !== undefined){
                transition[no].style.left = Left +"px";
                transition[no].style.top = BoxTop +"px";
                transition[no].style.transition = "all 0.4s ease-in-out";
                no ++;
                Left += 143;
              }
              else{
                false;
              }
            }
            h=1;
            for(var m = row; m >= i; m--){
              h+=1
            }
            BoxTop += 143;
          }
        }, 0000);
      }
      else{
        false;
      }
  }
  var y = window.matchMedia("(min-width: 1300px)");
  // breakbtn(x);
  y.addListener(breakbtn(x));
  
}

      // external js: isotope.pkgd.js

      $(document).ready(function(){
        // init Isotope
        var $grid = $('.grid').isotope({
        itemSelector: '.element-itemes',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 40,
            isFitWidth: true
            },
        getSortData: {
            name: '.name',
            symbol: '.symbol',
            number: '.number parseInt',
            category: '[data-category]',
            weight: function( itemElem ) {
            var weight = $( itemElem ).find('.weight').text();
            return parseFloat( weight.replace( /[\(\)]/g, '') );
            }
        }
        });

    // filter functions
    var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
    }
    };

    // bind filter button click
    $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
    });

    // bind sort button click
    $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({ sortBy: sortByValue });
    });

    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    });
    });
});
    // external js: isotope.pkgd.js2

    $(document).ready(function(){
      // init Isotope
      var $grid = $('.grid2').isotope({
      itemSelector: '.element-itemes',
      layoutMode: 'fitRows',
      getSortData: {
          name: '.name',
          symbol: '.symbol',
          number: '.number parseInt',
          category: '[data-category]',
          weight: function( itemElem ) {
          var weight = $( itemElem ).find('.weight').text();
          return parseFloat( weight.replace( /[\(\)]/g, '') );
          }
      }
      });
  
      // filter functions
      var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
          var number = $(this).find('.number').text();
          return parseInt( number, 10 ) > 50;
      },
      // show if name ends with -ium
      ium: function() {
          var name = $(this).find('.name').text();
          return name.match( /ium$/ );
      }
      };
  
      // bind filter button click
      $('#filters2').on( 'click', 'button', function() {
      var filterValue = $( this ).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({ filter: filterValue });
      });
  
      // bind sort button click
      $('#sorts').on( 'click', 'button', function() {
      var sortByValue = $(this).attr('data-sort-by');
      $grid.isotope({ sortBy: sortByValue });
      });
  
      // change is-checked class on buttons
      $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $( this ).addClass('is-checked');
      });
      });
  });
    
      // external js: isotope.pkgd.js3

      $(document).ready(function(){
        // init Isotope
        var $grid = $('.finder-element').isotope({
        itemSelector: '.technology',
        layoutMode: 'fitRows',
        transitionDuration: '0.0s',
        getSortData: {
            name: '.name',
            symbol: '.symbol',
            number: '.number parseInt',
            category: '[data-category]',
            weight: function( itemElem ) {
            var weight = $( itemElem ).find('.weight').text();
            return parseFloat( weight.replace( /[\(\)]/g, '') );
            }
        }
        });
    
        // filter functions
        var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match( /ium$/ );
        }
        };
    
        // bind filter button click
        $('#finder').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
        });
    
        // bind sort button click
        $('#sorts').on( 'click', 'button', function() {
        var sortByValue = $(this).attr('data-sort-by');
        $grid.isotope({ sortBy: sortByValue });
        });
    
        // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
        });

        // our works nav hover slider
      //   $(document).ready(function(){
      //     $(function() {
      
      //         var $el, leftPos, newWidth,
      //             $mainNav = $('#works-filter').find("ul");
      
      //         $mainNav.append("<li id='magic-line'></li>");
      //         var $magicLine = $("#magic-line");
      
      
      
      //         if($('#works-filter li').hasClass('show')) {
      //           $magicLine
      //             .css({
      //                 "left": $('#works-filter').find("li.show").position().left,
      //                 "width": $('#works-filter li.show button').width()
      //             }).data("origLeft", $magicLine.position().left);
      //       } else {
      //             $magicLine
      //                 .css({
      //                     "left": 0,
      //                     "width": $('#works-filter li:first button').width()
      //                 }).data("origLeft", $magicLine.position().left);
      //         }
      
      
      //         $('#works-filter').find("li:not(#magic-line)").hover(function() {
      //             $el = $(this);
      //             leftPos = $el.position().left;
      //             newWidth = $el.children().width();
      //             $magicLine.stop().animate({
      //                 left: leftPos,
      //                 width: newWidth
      //             });
      //         }, function() {
      //             $magicLine.stop().animate({
      //                 left: $magicLine.data("origLeft"),
      //                 width: $('#works-filter li.show button').width()
      //             });
      //         });
      
      
      
      //     });
      // });


      // adds sliding underline HTML


      // $(document).ready(function(){
      //   $nav_link = $('.nav-link').hasClass('active');
      //   if($nav_link = true){
      //     $('.nav-item').addClass('active');
      //   }
      //   if($nav_link = false){
      //     $('.nav-item').removeClass('active');
      //   }
      // });
      

    });
  //  function callme(){
  //       const shoe = document.querySelectorAll('.element-itemes').getAttribute("data-value");
  //     console.log(callme);
  //  }

  //  window.load(callme());

   element = document.querySelector(".element-itemes").getAttribute("value");
   console.log(element);
      
  