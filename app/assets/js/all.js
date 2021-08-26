$(function() {
  const userRecommendSwiper = document.querySelector('.js-swiper-user-recommend');
  if (userRecommendSwiper) {
    const swiper = new Swiper(".js-swiper-user-recommend", {
      slidesPerView: 1,
      slidesPerColumn: 3,
      spaceBetween: 0,
      slidesPerColumnFill : 'column',
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          slidesPerColumnFill : 'row',
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          slidesPerColumnFill : 'row',
          spaceBetween: 30,
        },
      },
    });
  }


  const schemeSwiper = document.querySelector('.js-swiper-scheme');
  if (schemeSwiper) {
    const swiper = new Swiper(".js-swiper-scheme", {
      slidesPerView: 1,
      slidesPerColumn: 3,
      spaceBetween: 30,
      // slidesPerColumnFill : 'column',
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerColumn: 1,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          slidesPerColumn: 1,
          spaceBetween: 30,
        },
      },
    });

    $('.js-scheme-card').on('click', function() {
      const className = $(this).attr('data-name');

      $('.js-scheme-card').removeClass('border-light').addClass('border-transparent');
      $('.js-scheme-card').find(".material-icons-outlined").addClass('opacity-1');

      $(this).removeClass('border-transparent').addClass('border-light');
      $(this).find(".material-icons-outlined").removeClass('opacity-1');

      $('.js-course-class').text(className);
    });
  }

  const msgBtn = document.querySelector('.js-msg-submit');
  if (msgBtn) {
    const msgFromName = document.querySelector('#userName');
    const msgFromEmail = document.querySelector('#userEmail');
    const msgFromPhone = document.querySelector('#userPhone');
    const msgFromMsg = document.querySelector('#userMassage');
    chackMsgFromValue();

    $('.js-msg-form').on('change', function() {
      chackMsgFromValue();
    });

    function chackMsgFromValue() {
      if(
        msgFromName.value === ''
        || msgFromEmail.value === ''
        || msgFromPhone.value === ''
        || msgFromMsg.value === ''
      ) {
        $(msgBtn).addClass('btn-outline-primary-light');
        $(msgBtn).prop({ disabled: true });
      } else {
        $(msgBtn).removeClass('btn-outline-primary-light');
        $(msgBtn).prop({ disabled: false });
      }
    }
  }


  const dateDom = document.querySelector('.js-datepicker-date');
  const datepicker = new Datepicker(dateDom, {
    autohide: true,
    prevArrow: '<',
    nextArrow: '>',
    buttonClass: 'btn text-primary fw-normal'
  }); 
});