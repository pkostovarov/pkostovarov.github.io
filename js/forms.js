$(document).ready(function () {
    
    //нажатие на кнопку -вкл-

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    
    //нажатие на кнопку -выкл-

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thk').fadeOut('slow');
    });

    //замена текста

    $('.catalog-item__btn').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })

    });   

    //стилизация формы  
    
    function valideForms(form) {
        $(form).validate( {
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                },
            },
            messages: {
                name: {
                    required: "Please specify your name",
                    minlength: jQuery.validator.format("At least {0} characters required!")
                },
                phone: "Please specify your number",
                email: {
                  required: "We need your email address",
                  email: "Your email address must be in the format of name@domain.com"
                },
            },            

        });

    };

    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');
    
});