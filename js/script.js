$(document).ready(function($) {
    "use strict";
    
     var navOffset=$('.hidden_menu').offset().top
    
    $(window).scroll(function(){
        var scrolling=$(this).scrollTop();
        if(scrolling > navOffset){
           $('.hidden_menu').addClass('show_menu')
           }else{
               $('.hidden_menu').removeClass('show_menu')
           }
    });
    //animation scroll js
        $('.menu a, .mb_menu_part a').on('click', function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top 
                    }, 1500);
                    return false;
                }
            }
        });
    
    $('.main_content').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
            arrows:false,
          autoplaySpeed: 2000,
          infinite:true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
    
    var menu = $('.menu');
    $('.menu_round2 i').click(function(){
//       menu.toggle(); 
        menu.children('ul').toggleClass('open');
    });
    
    // Closes responsive menu when a scroll link is clicked
    $('.nav li a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    
    //lightbox js
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
     
    // blog loading
    $(".load_abs").slice(0, 2).show();
    $(".shahin_load").on('click', function (e) {
        e.preventDefault();
        $(".load_abs:hidden").slice(0, 1).slideDown(500);
        if ($(".load_abs:hidden").length == 0) {
            $(".shahin_load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top+1200
        }, 1500);
    });
    
    
    
    $('.band_part').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
        arrows:false,
      autoplaySpeed: 2000,
      infinite:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
      
    //  btn-select js
    $(document).on('click', '.btn-select', function (e) {
        e.preventDefault();
        var ul = $(this).find("ul");
        if ($(this).hasClass("active")) {
            if (ul.find("li").is(e.target)) {
                var target = $(e.target);
                target.addClass("selected").siblings().removeClass("selected");
                var value = target.html();
                $(this).find(".btn-select-input").val(value);
                $(this).find(".btn-select-value").html(value);
            }
            ul.hide();
            $(this).removeClass("active");
        }
        else {
            $('.btn-select').not(this).each(function () {
                $(this).removeClass("active").find("ul").hide();
            });
            ul.slideDown(300);
            $(this).addClass("active");
        }
    });
    $('.testomonial-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: '.arrow_up',
            nextArrow: '.arrow_dwon',
            vertical: true,
            verticalSwiping: true,
            autoplay: true,
            centerMode: true,
            infinite:true,
            centerPadding: '0px',
            focusOnSelect: true,
            speed: 1000,

            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
            },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
            }
          ]
        });

});