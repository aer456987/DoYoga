$(function() {
  const userRecommendSwiper = document.querySelector('.js-swiper-user-recommend');
  if (userRecommendSwiper) {
    const swiper = new Swiper('.js-swiper-user-recommend', {
      slidesPerView: 1,
      spaceBetween: 0,
      grid: {
        rows: 3,
        fill: 'column',
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          grid: {
            rows: 2,
            fill: 'row',
          },
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          grid: {
            rows: 2,
            fill: 'row',
          },
          spaceBetween: 30,
        },
      },
    });
  }
  const schemeSwiper = document.querySelector('.js-swiper-scheme');
  if (schemeSwiper) {
    const swiper = new Swiper('.js-swiper-scheme', {
      slidesPerView: 1,
      spaceBetween: 0,
      grid: {
        rows: 3,
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          grid: {
            rows: 1,
          },
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
          grid: {
            rows: 1,
          },
        },
      },
    });

    $('.js-scheme-card').on('click', function() {
      const className = $(this).attr('data-name');

      $('.js-scheme-card').removeClass('border-light').addClass('border-transparent');
      $('.js-scheme-card').find('.material-icons-outlined').addClass('opacity-0.3');

      $(this).removeClass('border-transparent').addClass('border-light');
      $(this).find('.material-icons-outlined').removeClass('opacity-0.3');

      $('.js-course-class').text(className);
    });
  }
  const coursesRecommendSwiper = document.querySelector('.js-swiper-courses-recommend');
  if (coursesRecommendSwiper) {
    const swiper = new Swiper('.js-swiper-courses-recommend', {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          centeredSlides: false,
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          centeredSlides: false,
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          centeredSlides: false,
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }
  const teachersSwiper = document.querySelector('.js-swiper-teachers');
  if (teachersSwiper) {
    const swiper = new Swiper('.js-swiper-teachers', {
      slidesPerView: 1,
      spaceBetween: 0,
      grid: {
        rows: 4,
        fill: 'column',
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          grid: {
            rows: 1,
            fill: 'row',
          },
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
          grid: {
            rows: 1,
            fill: 'row',
          },
        },
      },
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
  if (dateDom) {
    const datepicker = new Datepicker(dateDom, {
      autohide: true,
      daysOfWeekDisabled: [0],
      nextArrow: '>',
      prevArrow: '<',
      buttonClass: 'btn btn-outline-primary border-0 fw-normal',
    });
  }


  const openModalBtn = document.querySelectorAll('.js-course-modal-btn');
  if(openModalBtn) {
    const courseModal = new bootstrap.Modal(document.querySelector('.js-course-modal'));

    openModalBtn.forEach(function(item) {
      $(item).on('click', function() {
        courseModal.show();
      });
    });
  }


  AOS.init({
    offset: 100,
  });
});