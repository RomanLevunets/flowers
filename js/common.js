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

    //header menu active
    $('.constructorNav li').click(function( even) {
        even.preventDefault();
        if (!$(this).hasClass('active')) {
            $('.constructorNav li').removeClass('active');
            $(this).addClass('active');
        }
    });
    //
    $('.ourNav li a').click(function (event) {
        event.preventDefault();
    });


    $('.menu li').click(function() {
        if (!$(this).hasClass('active')) {
            $('.menu li').removeClass('active');
            $(this).addClass('active');
        }
    });

    //ordering form (add and remove inputs)
    $('.for-entity').hide();
    $('.ordering-type').change(function () {
        var fei = $('.for-entity input');
        if($('#entity').prop('checked')){
            $('.for-entity').show();
            fei.attr('type', 'text');
            fei.attr('required', 'required');
        }else{
            fei.attr('type', 'hidden');
            fei.removeAttr('required');
            $('.for-entity').hide();
        }
    });


    //ordering form (add and remove input address)
    $('.ordering-delivery').change(function () {
        var ai = $('#address input');
        if($('#ordering-pickup').prop('checked')){
            ai.attr('type', 'hidden');
            ai.removeAttr('required');
            $('#address').hide();
        }else{
            ai.attr('type', 'text');
            ai.attr('required', 'required');
            $('#address').show();
        }
    });


    //for subscribe
    $('.subscribe').on( 'submit', function (event) {
        event.preventDefault();
    });


    // products tabs
    $('.card-bot .ourNav li').click(function () {
        if(!$('.card-bot .ourNav li:first-child').hasClass('active')){
            $('.card-desc').show();
            $('.card-reviews').hide();
        }else{
            $('.card-reviews').show();
            $('.card-desc').hide();
        }
    });



    //for Callback
    $('.formCallback').on('submit', function (event) {
        event.preventDefault();
    });


    //spiner (value = 1)
    $(".spin-up").click(function() {
        var value = parseInt($(this).closest(".spinner-card").find("input").val());
        if (value != 99){
            $(this).closest(".spinner-card").find("input").val(value + 1);
        }
    });

    $(".spin-down").click(function() {
        var value = parseInt($(this).closest(".spinner-card").find("input").val());
        if (value != 1) {
            $(this).closest(".spinner-card").find("input").val(value - 1);
        }
    });


    //spiner global (value = 0)
    $(".spin-up").click(function() {
        var value = parseInt($(this).closest(".spinner-global").find("input").val());
        if (value != 99){
            $(this).closest(".spinner-global").find("input").val(value + 1);
        }
    });
    $(".spin-down").click(function() {
        var value = parseInt($(this).closest(".spinner-global").find("input").val());
        if (value != 0) {
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

    //sort tab
    $('.sort li').click(function() {
        $('.sort li').not(this).removeClass();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
        }else{
            $(this).toggleClass('sorts');
        }
    });

    //item select
    $('.addItem-item a').click(function(event) {
        event.preventDefault();
        $(this).parent().addClass('select');
    });


    //accordion filter
    $('.filter-category p').click(function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });


    //range for filter(max value 25 000)
    $(".f-range-ac").slider({
        range: true,
        min: 0,
        max: 25000,
        step: 50,
        values: [ 0, 25000 ],
        slide: function( event, ui ) {
            $( ".range-value-ac" ).text( "От " + ui.values[ 0 ] + " до " + ui.values[ 1 ] + " руб");
        }
    });
    $( ".range-value-ac" ).text( "От " + $(".f-range-ac").slider( "values", 0 ) +
        " до " + $(".f-range-ac").slider( "values", 1 ) + " руб");

    //(30 000)
    $(".f-range").slider({
        range: true,
        min: 0,
        max: 30000,
        step: 100,
        values: [ 0, 30000 ],
        slide: function( event, ui ) {
            $( ".range-value" ).text( "От " + ui.values[ 0 ] + " до " + ui.values[ 1 ] + " руб");
        }
    });
    $( ".range-value" ).text( "От " + $(".f-range").slider( "values", 0 ) +
        " до " + $(".f-range").slider( "values", 1 ) + " руб");




    //range for card
    $(".b-range").slider({
        range: "min",
        min: 1,
        max: 100,
        value: 0,
        slide: function( event, ui ) {
            $( ".range-value-n" ).val( ui.value );
        }
    });
    $( ".range-value-n" ).val($( ".b-range" ).slider( "value" ));


    //rotate card
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

    //add Basket
    $('.addBasket').click(function (event) {
        event.preventDefault();
        $('.basket-alert').fadeIn(500);
        $('.basket-alert span').click(function () {
            $('.basket-alert').fadeOut(500);
        });

    });


    //burger animation
    $('.burger').click(function(){
        $('.burger__line').toggleClass('active-b');
        $('.Lside').toggleClass('active');
        $('.wrapper').toggleClass('bg-active');

    });


    // filter
    var filterCount = 0;

    $('.form-filter').on('reset', function () {
        setFilterCount(0);
        var range = $('.f-range');
        range.slider('values', 0, 0);
        range.slider('values', 1, 30000);
        $('.range-value').text( "От " + 0 + " до " + 30000 + " руб");
    });

    $('.form-filter').on('reset', function () {
        setFilterCount(0);
        var range = $('.f-range-ac');
        range.slider('values', 0, 0);
        range.slider('values', 1, 25000);
        $('.range-value-ac').text( "От " + 0 + " до " + 25000 + " руб");
    });

    $('input[type="checkbox"]').change(function () {
        var filterValue = $(this).prop('checked')?(filterCount + 1):(filterCount - 1);
        setFilterCount(filterValue);
    });
    function setFilterCount(count) {
        filterCount = count;
        $('#filterCount').text(filterCount);
    }


    //accordion filter table (basket, private-ordering)
    $('.tableOrder span').click(function () {
        $(this).parents('.tableOrder').next().slideToggle(10);
    });
    $('.tableOrder-name span').click(function () {
        $(this).toggleClass('active');
    });


    //burger animation for tabs (mobile version)
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
    $('.header-callback p a, .footer-right-callback, .Lmenu li a, .ourSelect li:last-child a, .header-sing a, .card-top a, .ordering-table td p a').magnificPopup({
        removalDelay: 250,
        mainClass: 'mfp-fade'
    });

    //mask
    $('input[name="phone-callback"], input[name="phone-sing"], input[name="phone-buy"], #ordering-phone, #edit-phone').mask("+7(999) 999-99-99");
    $('input[name="time-callback"], input[name="time-buy"]').mask("99:99");


    $("#formCallback").submit(function() {
        $.ajax({
            type: "POST",
            url: "callback.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.mfp-close-btn-in .mfp-close').click();
            $('.alert-application').show();
            $('.wrapper').addClass('bg-active');
            $('.alert-application span').click(function () {
                $('.alert-application').hide();
                $('.wrapper').removeClass('bg-active');
            });
            $("#formCallback").trigger("reset");
        });
        return false;
    });

    $("#subscribe").submit(function() {
        $.ajax({
            type: "POST",
            url: "subscribe.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.subscribe-alert').show();
            $('.wrapper').addClass('bg-active');
            $('.subscribe-alert span').click(function () {
                $('.subscribe-alert').hide();
                $('.wrapper').removeClass('bg-active');
            });
            $("#subscribe").trigger("reset");
        });
        return false;
    });

    $("#formBuy").submit(function() {
        $.ajax({
            type: "POST",
            url: "buy-product.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.mfp-close-btn-in .mfp-close').click();
            $('.alert-application').show();
            $('.alert-application span').click(function () {
                $('.alert-application').hide();
            });
            $("#formBuy").trigger("reset");
        });
        return false;
    });

    $('.ourSelect li:last-child a').click(function () {
        var productTitle = $(this).parents('.ourContent-item').find('.ourDesc h5').text();
        $('#formBuy #product-name').val(productTitle);
    });


});


