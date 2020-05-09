/* global $,console,alert */
$(function () {
    'use strict';
    // Adjust Slider height
    var winH      = $(window).height(),
        upperBarH = $('.upper-bar').innerHeight(),
        navbarH   = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperBarH + navbarH));
    
    // Featured Work | Shuffle Images
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle .row .col-sm').css('opacity', '1');
        } else {
            $('.shuffle .row .col-sm').css('opacity', '.1');
            $($(this).data('class')).parent().css('opacity', '1');
        }
    });
});
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});
