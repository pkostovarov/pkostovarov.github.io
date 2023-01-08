

$(document).ready(function(){

    // Slaider

    $('.slaider__inner').slick({
        speed: 1000, 
        adaptiveHeight: true, 
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slaider/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slaider/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
                }
            }

        ]
    });
      
    //маска ввода номера телефона (работает только без type)
    $('input[name=phone]').mask("+38 (099) 99-99-999");

    // Smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() >1400 ) {
            $('.pageup').fadeIn('slow');
        } else {
            $('.pageup').fadeOut('slow');
        }

    });
    
        
});


