$(document).ready(function() {


    //slider
    $('.intro-slider').slick({
        speed: 1000,
        prevArrow: '<div class="intro-prev"><p>Пред</p></div>',
        nextArrow: '<div class="intro-next"><p>След</p></div>'
    });

    $('.reviews-slider').slick({
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="reviews-prev"></div>',
        nextArrow: '<div class="reviews-next"></div>'
    });

    $('.certificates-content').slick({
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="reviews-prev"></div>',
        nextArrow: '<div class="reviews-next"></div>'
    });

    //fancy box for certificates
    $('.certificates-content a').fancybox({
        'loop': true,
        'showNavArrows': true
    });
    //florist gallery
    $('.floristGallery-item').fancybox({
        'loop': true,
        'showNavArrows': true
    });

    //height service-top block====
    function item(){
        $('.services-top').each(function () {
            var ths = $(this),
                thsh = ths.find('.services-top-txt').outerHeight();
            ths.find('.services-top-img').css('min-height', thsh);
        });
    }item();

    //header menu active
    $('.menu li').click(function() {
        if (!$(this).hasClass('active')) {
            $('.menu li').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.ourNav li').click(function() {
        if (!$(this).hasClass('active')) {
            $('.ourNav li').removeClass('active');
            $(this).addClass('active');
        }
    });

    //burger animation
    $('.burger').click(function(){
        $('.burger__line').toggleClass('active-b');
        $('.menu').toggleClass('open');
        $('.wrapper').toggleClass('bg-active');

    });

    //service item
    if(document.documentElement.clientWidth > 1000) {
        $('.serviceL-item:not(:last-child)').mouseover(function () {
            $('.serviceL-item:last-child').hide();
        });

        $('.serviceL-item').mouseleave(function () {
            $('.serviceL-item:last-child').show();
        });

        $('.serviceR-item:not(:last-child)').mouseover(function () {
            $('.serviceR-item:last-child').hide();
        });

        $('.serviceR-item').mouseleave(function () {
            $('.serviceR-item:last-child').show();
        });
    }
});

