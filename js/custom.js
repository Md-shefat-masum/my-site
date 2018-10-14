/************* Custom Js File *******************************

    Template Name: Portfolio Template
    Author: shefat production
    Version: 1.0
    Copyright 2018
    
*************************************************************/


/*-------------------------------------------------------------------------------
    
    
JS INDEX
=============

01 - smooth scroll
02 - scroll js nav bar, comes after scrolling
03 - Skills Progress Bars
04 - Light box js
05 - port-folio part sliding  js
06 - back to top button js
07 - wow activation  js


--------------------------------------------------------------------------------*/


$(function () {

    "use strict";
    $("#menu").click(function () {
        $(".menu-list").toggle(500);
    });

    //    show menu
    var navOffset = $('.hidden_menu').offset().top

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > navOffset) {
            $('.hidden_menu').addClass('show_menu');
        } else {
            $('.hidden_menu').removeClass('show_menu');
        }
    });

    var scrollLink = $('a');

    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    //    filterizr
    var filterizd = $('.filtr-container').filterizr({
        //options object
    });


});

/*-------------------------------------
    07 - wow activation  js
-------------------------------------*/
var wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();
