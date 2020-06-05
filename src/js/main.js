$(document).ready(function () {
    $('.slider').slick({
        vertical: true,
        verticalSwiping:true,
        arrows:false,
        dots: true,
        // dotsClass:'slider__dots',
        appendDots:$('.slider__dots'),
    });

    $('.btn__search').on('click',function (e) {
        e.preventDefault();

        $('.input__search').addClass('show');

        if ( $('.input__search').hasClass('show')) {
            $('.btn__search').off();
        }
    });
});