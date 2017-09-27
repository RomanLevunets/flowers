$(document).ready(function() {


    //slider
    $('.intro-slider').slick({
        speed: 1000,
        prevArrow: '<div class="intro-prev"><p>Пред</p></div>',
        nextArrow: '<div class="intro-next"><p>След</p></div>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]

    });

    $('.reviews-slider').slick({
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="reviews-prev"></div>',
        nextArrow: '<div class="reviews-next"></div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    $('.ourInfo').slick({
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2,
                    centerMode: true,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 1,
                    centerMode: true,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 1,
                    centerMode: true,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.certificates-content').slick({
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="reviews-prev"></div>',
        nextArrow: '<div class="reviews-next"></div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 1,
                    centerMode: true,
                    slidesToScroll: 1,
                    arrows: false,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 1,
                    centerMode: true,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 1,
                    centerMode: true,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //fancy box for certificates
    $('.certificates-content a').fancybox({
        loop: true,
        showNavArrows: true
    });
    //florist gallery
    $('.floristGallery-item').fancybox({
        loop: true,
        showNavArrows: true
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
        $('.Lside').toggleClass('active');
        $('.wrapper').toggleClass('bg-active');

    });

    //service item
    if(document.documentElement.clientWidth < 1200) {
        $('.ourContent').slick({
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        initialSlide: 2,
                        centerMode: true,
                        slidesToScroll: 1

                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        initialSlide: 1,
                        centerMode: true,
                        slidesToScroll: 1
                    }
                },

                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        initialSlide: 1,
                        centerMode: true,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    $('.header-callback p a, .footer-right > a, .Lmenu li a, .ourSelect li a:last-child, .header-sing a').magnificPopup({
        removalDelay: 250,
        mainClass: 'mfp-fade'
    });


    $('input[name="phone-callback"], input[name="phone-sing"], input[name="phone-buy"]').mask("+7(999) 999-99-99");
    $('input[name="time-callback"], input[name="time-buy"]').mask("99:99");
});


