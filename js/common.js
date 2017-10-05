$(document).ready(function() {


    //sliders
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

    $('.sharesSlider-content').slick({
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="reviews-prev"></div>',
        nextArrow: '<div class="reviews-next"></div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });


    $('.addItem').slick({
        speed: 500,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        draggable: false,
        prevArrow: '<div class="reviews-prev"></div>',
        nextArrow: '<div class="reviews-next"></div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 345,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    slidesToScroll: 1,
                    arrows: true
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

    $('.card-fotorama').fotorama({
        thumbsPreview: true,
        width: '515',
        transition: 'slide',
        arrows: false,
        nav: 'thumbs',
        fit: 'cover',
        margin: '10'
    });


    $('.certificates-content').slick({
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="reviews-prev"></div>',
        nextArrow: '<div class="reviews-next"></div>',
        infinity: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 1,
                    centerMode: true,
                    slidesToScroll: 1,
                    arrows: false

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
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
    //florist gallery fancy
    $('.floristGallery a').fancybox({
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
    $('.constructorNav li').click(function( even) {
        even.preventDefault();
        if (!$(this).hasClass('active')) {
            $('.constructorNav li').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.menu li').click(function() {
        if (!$(this).hasClass('active')) {
            $('.menu li').removeClass('active');
            $(this).addClass('active');
        }
    });

    //item select
    $('.addItem-item > a, .ourNav li a').click(function(event) {
            event.preventDefault();
            $(this).parent().toggleClass('select');
    });

    $('.subscribe').on( 'submit', function (event) {
        event.preventDefault();
        $('.alert-subscribe').css(
            'top', '20%'
        );
        function set() {
            $('.alert-subscribe').css(
                'top', '-100%'
            );
        }
        setTimeout(set, 3000);
        // $('.subscribe input[type="email"]').val('');
    });

    $('.formCallback').on('submit', function (event) {
        event.preventDefault();
        $('.mfp-close-btn-in .mfp-close').click();
        $('.alert-application').css(
            'top', '30%'
        );
        function set() {
            $('.alert-application').css(
                'top', '-100%'
            );
        }
        setTimeout(set, 5000);
        $('.subscribe input[type="text"]').val('');
    });



    //spiner card
    $(".spin-up").click(function() {
        var value = parseInt($(this).closest(".spinner-card").find("input").val());
        if (value != 99){
            $(this).closest(".spinner-card").find("input").val(value + 1);
        }
    });

    $(".spin-down").click(function() {
        var value = parseInt($(this).closest(".spinner-card").find("input").val());
        if (value != 1)	{
            $(this).closest(".spinner-card").find("input").val(value - 1);
        }
    });

    //spiner global

    $(".spin-up").click(function() {
        var value = parseInt($(this).closest(".spinner-global").find("input").val());
        if (value != 99){
            $(this).closest(".spinner-global").find("input").val(value + 1);
        }
    });

    $(".spin-down").click(function() {
        var value = parseInt($(this).closest(".spinner-global").find("input").val());
        if (value != 0)	{
            $(this).closest(".spinner-global").find("input").val(value - 1);
        }
    });

    //tabs active
    $('.ourNav li').click(function() {
        if (!$(this).hasClass('active')) {
            $('.ourNav li').removeClass('active');
            $(this).addClass('active');
        }
    });

    //
    $('.sort li').click(function() {
        if (!$(this).hasClass('active')) {
            $('.sort li').removeClass('active');
            $(this).addClass('active');
        }
    });
    //accordion
    $('.filter-category p').click(function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });

    $('.tableOrder-name span').click(function () {
        $(this).toggleClass('active');
    });
    //range
    $(".f-range-ac").slider({
        range: true,
        min: 0,
        max: 25000,
        step: 50,
        values: [ 150, 10000 ],
        slide: function( event, ui ) {
            $( ".range-value-ac" ).val( "От " + ui.values[ 0 ] + " до " + ui.values[ 1 ] + " руб");
        }
    });
    $( ".range-value-ac" ).val( "От " + $(".f-range-ac").slider( "values", 0 ) +
        " до " + $(".f-range-ac").slider( "values", 1 ) + " руб");


    //
    $(".f-range").slider({
        range: true,
        min: 0,
        max: 30000,
        step: 100,
        values: [ 3000, 10000 ],
        slide: function( event, ui ) {
            $( ".range-value" ).val( "От " + ui.values[ 0 ] + " до " + ui.values[ 1 ] + " руб");
        }
    });
    $( ".range-value" ).val( "От " + $(".f-range").slider( "values", 0 ) +
        " до " + $(".f-range").slider( "values", 1 ) + " руб");




    $(".b-range").slider({
        range: "min",
        min: 1,
        max: 100,
        value: 20,
        slide: function( event, ui ) {
            $( ".range-value-n" ).val( ui.value );
        }
    });
    $( ".range-value-n" ).val($( ".b-range" ).slider( "value" ));


    //
    $('.addItem-btn').click(function () {
        $(this).parents('.rotate').addClass('active');
        $(this).parents('.addItem-item').siblings().find('.rotate').removeClass('active');

    });
    $('.buyFlowers .close-btn').click(function () {
        $(this).parents('.rotate').removeClass('active');
    });


    $('.rotate-next .close-bth').click(function () {
        $('.addItem-top').removeClass('active');
    });
    //burger animation
    $('.burger').click(function(){
        $('.burger__line').toggleClass('active-b');
        $('.Lside').toggleClass('active');
        $('.wrapper').toggleClass('bg-active');

    });
    
    $('.tableOrder span').click(function () {
        $(this).parents('.tableOrder').next().slideToggle(10);
    });

    $('.burger__constructor').click(function(){
        $('.burger__line_constructor').toggleClass('active');
        $('.constructorNav').slideToggle();

    });

    //slider
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
    if(document.documentElement.clientWidth < 992) {
        $('.goods-content').slick({
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            prevArrow: '<div class="reviews-prev"></div>',
            nextArrow: '<div class="reviews-next"></div>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        initialSlide: 1,
                        centerMode: false,
                        slidesToScroll: 1,
                        arrows: true,
                    }
                },

                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        initialSlide: 1,
                        centerMode: false,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
    //popUp
    $('.header-callback p a, .footer-right-callback, .Lmenu li a, .ourSelect li a:last-child, .header-sing a, .card-top a, .ordering-table td p a').magnificPopup({
        removalDelay: 250,
        mainClass: 'mfp-fade'
    });

    //mask
    $('input[name="phone-callback"], input[name="phone-sing"], input[name="phone-buy"], #ordering-phone, #edit-phone').mask("+7(999) 999-99-99");
    $('input[name="time-callback"], input[name="time-buy"]').mask("99:99");





});


