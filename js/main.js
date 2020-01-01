$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    var nav_scroll = document.getElementById("nav-Scroll");
    var new_Logo = document.getElementById("new-Logo");
    var remove_white = document.getElementById("remove-White-Color");
    var remove_white1 = document.getElementById("remove-White-Color1");
    var remove_white2 = document.getElementById("remove-White-Color2");
    var remove_white3 = document.getElementById("remove-White-Color3");
    var remove_white4 = document.getElementById("remove-White-Color4");
    var remove_white5 = document.getElementById("remove-White-Color5");
    var remove_white6 = document.getElementById("remove-White-Color6");
    var remove_white7 = document.getElementById("remove-White-Color7");
    var remove_white8 = document.getElementById("remove-White-Color8");
    var remove_white9 = document.getElementById("remove-White-Color9");


    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {

            nav_scroll.classList.add("navbar-When-Scroll");
            nav_scroll.style.transition = "all 2s"

            new_Logo.classList.add("navbar-brand-New");
            new_Logo.classList.remove("navbar-brand");

            remove_white.classList.remove("white-Color");
            remove_white.classList.add("main-Color");

            remove_white1.classList.remove("white-Color");
            remove_white1.classList.add("main-Color");

            remove_white2.classList.remove("white-Color");
            remove_white2.classList.add("main-Color");

            remove_white3.classList.remove("white-Color");
            remove_white3.classList.add("main-Color");

            remove_white4.classList.remove("white-Color");
            remove_white4.classList.add("main-Color");

            remove_white5.classList.remove("white-Color");
            remove_white5.classList.add("main-Color");

            remove_white6.classList.remove("white-Color");
            remove_white6.classList.add("main-Color");

            remove_white7.classList.remove("white-Color");
            remove_white7.classList.add("main-Color");

            remove_white8.classList.remove("white-Color");
            remove_white8.classList.add("main-Color");

            remove_white9.classList.remove("white-Color");
            remove_white9.classList.add("main-Color");
        } else {
            nav_scroll.classList.remove("navbar-When-Scroll");

            new_Logo.classList.remove("navbar-brand-New");
            new_Logo.classList.add("navbar-brand");

            remove_white.classList.add("white-Color");
            remove_white.classList.remove("main-Color");

            remove_white1.classList.add("white-Color");
            remove_white1.classList.remove("main-Color");

            remove_white2.classList.add("white-Color");
            remove_white2.classList.remove("main-Color");

            remove_white3.classList.add("white-Color");
            remove_white3.classList.remove("main-Color");

            remove_white4.classList.add("white-Color");
            remove_white4.classList.remove("main-Color");

            remove_white5.classList.add("white-Color");
            remove_white5.classList.remove("main-Color");

            remove_white6.classList.add("white-Color");
            remove_white6.classList.remove("main-Color");

            remove_white7.classList.add("white-Color");
            remove_white7.classList.remove("main-Color");

            remove_white8.classList.add("white-Color");
            remove_white8.classList.remove("main-Color");

            remove_white9.classList.add("white-Color");
            remove_white9.classList.remove("main-Color");
        }
    }


});

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {

    if (isScrolledIntoView('.img-Holder') === true) {
        $('.img-Holder').addClass('img-Holder-New');
    }

    if (isScrolledIntoView('.animated-Goin-Right') === true) {
        $('.animated-Goin-Right').addClass('animated-Goin-Right-After');
    }

    if (isScrolledIntoView('.animated-Goin-Left') === true) {
        $('.animated-Goin-Left').addClass('animated-Goin-Left-After');
    }
});

let aboutOffset =$(".up").offset().top;
$(window).scroll(function (){

   let wscroll= $(window).scrollTop();

   if(wscroll > aboutOffset-30)

   {
       
       $("#btnUp").fadeIn(500)
   }
   else
   {
      
       $("#btnUp").fadeOut(500)

   }
})

$("#btnUp").click(function () {
  $("body,html").animate({scrollTop:'0'} , 2000)
})


$("a[href^='#']").click(function(){
 let aHref  = $(this).attr("href")
        $("body,html").animate({scrollTop:$(aHref).offset().top} , 1000)
})