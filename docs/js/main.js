$(document).ready(function () {
    $('.slider').slick({
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        appendDots: $('.slider__dots'),
        dots: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    dots: false,
                }
            }
        ]
    });

    var maxHeight = -1;
    var slide = $('.slick-slide');
    slide.each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    slide.each(function () {
        if ($(this).height() < maxHeight) {
            $(this).css('margin', Math.ceil((maxHeight - $(this).height()) / 2) + 'px 0');
        }
    });

    $('.btn__search').on('click', function (e) {
        e.preventDefault();
        var fieldSearch = $('.input__search');
        fieldSearch.addClass('show');

        if (fieldSearch.hasClass('show')) {
            $('.btn__search').off();
        }
    });
    var headMenu = $('.header__menu');

    $('.header__burger').on('click', function (e) {
        e.preventDefault();
        headMenu.toggleClass('show-menu');
        $('.header__burger').toggleClass('active');
    });

    $('.menu__link').on('click', function (e) {
        e.preventDefault();
        if (headMenu.hasClass('show-menu')) {
            $('.header__menu').toggleClass('show-menu');
            $('.header__burger').toggleClass('active');
        }

    });
});

$(window).resize(function () {

    var w = $(window).width();
    if (w > 768) {
        $('.header__menu').removeClass('show-menu');
        $('.header__burger').removeClass('active');
    } else {

    }

});