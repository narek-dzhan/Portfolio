const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector(".menu"),
close = document.querySelector(".menu__close");

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
})

close.addEventListener('click', () => {
    menu.classList.remove('menu_active');
})

const percents = document.querySelectorAll('.skills__persentage-percent'),
    lines = document.querySelectorAll('.skills__persentage-scale')

percents.forEach((item, i) => {
    lines[i].style.width  = item.innerHTML;
})

$(document).ready(function(){
    $('#contacts-form').validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          email: {
            required: true,
            email: true,
          },
           text: {
            required: true,
            minlength: 20
           },
           checkbox: {
            required: true
           }
        },
        messages: {
          name: {
            required: "Пожалуйста, введите свое имя",
            minlength: jQuery.validator.format("Минимальное количество символов {0}!")
          },
          email: {
            required: "Пожалуйста, введите свою почту",
            email: "Неправильно введен адрес почты"
          },
          text: {
            required: "Пожалуйста, коротко опишите вашу потребность",
            minlength: jQuery.validator.format("Минимальное количество символов {0}!")
          },
          checkbox: {
            required: "Необходимо согласие на обработку данных!"
          }
        }
      });

      $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
      });

      $('form').submit(function(e) {
        e.preventDefault();
    
        if(!$(this).valid()) {
          return;
        };
    
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
        }).done(function() {
          $(this).find("input").val("");
          $('.overlay, #thanks').fadeIn('slow');
          $('form').trigger('reset');
        });
        return false;
      });
});
