$(document).ready(function($){

    $('#menu-nav').slicknav({
        prependTo:'.mobile-wrap-menu'
    });

    $(".homepage-slides").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:false,
        navText: ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
        autoplay:false

    });
    $(".team-list").owlCarousel({
        margin:30,
        loop:true,
        dots: true,       
        nav:false,        
        autoplay:false,
        responsive:{
            0:{items:1},
            600:{items:2},
            1000:{items:3}
        }

    });
    $(".testimonial-list").owlCarousel({
        
        margin:30,
        loop:true,
        dots: true,       
        nav:false,        
        autoplay:false,
        responsive:{
            0:{items:1},
            600:{items:2},
            1000:{items:3}
        }

    });
    

    $('#web-design').circleProgress({
        value: 0.9,
        size: 260,
        fill: "#0bbbc1",
        thickness:2,      
                  
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progress-percent').html(Math.round(90 * progress) + '<i>%</i>');
    });
      
    $('#graphics-design').circleProgress({
        value: 0.95,
        size: 260,
        fill: "#0bbbc1",
        thickness:2
                  
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progress-percent').html(Math.round(95 * progress) + '<i>%</i>');
    });

    $('#digital-marketing').circleProgress({
        value: 0.84,
        size: 260,
        fill: "#0bbbc1",
        thickness:2
                  
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progress-percent').html(Math.round(84 * progress) + '<i>%</i>');
    });

    $('.portfolio-list').isotope({
        layoutMode:'masonry',
        masonry:{
            columnWidth:'.col-md-3',
            horizontalOrder: false
        }
    });

    $('.portfolio-filter li').on('click',function () {
        $('.portfolio-filter li').removeClass('active');
        $(this).addClass('active');

        var filterValue= $(this).attr('data-filter');

        $('.portfolio-list').isotope({
            filter: filterValue,
            layoutMode:'masonry',
            masonry:{
            columnWidth:'.col-md-3',
            horizontalOrder: false
        }
        });       
    });
  });