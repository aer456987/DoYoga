"use strict";

$(function () {
  var userRecommendSwiper = document.querySelector('.js-swiper-user-recommend');

  if (userRecommendSwiper) {
    var swiper = new Swiper(".js-swiper-user-recommend", {
      slidesPerView: 1,
      slidesPerColumn: 3,
      slidesPerColumnFill: 'column',
      // grid: {
      //   rows: 2,
      //   fill: 'column',
      // },
      spaceBetween: 0,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
          // grid: {
          //   rows: 2,
          //   fill: 'row',
          // },
          spaceBetween: 30
        },
        992: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          slidesPerColumnFill: 'row',
          // grid: {
          //   rows: 2,
          //   fill: 'row',
          // },
          spaceBetween: 30
        }
      }
    });
  }

  var schemeSwiper = document.querySelector('.js-swiper-scheme');

  if (schemeSwiper) {
    var _swiper = new Swiper(".js-swiper-scheme", {
      slidesPerView: 1,
      slidesPerColumn: 3,
      spaceBetween: 0,
      slidesPerColumnFill: 'column',
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerColumn: 1,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 3,
          slidesPerColumn: 1,
          spaceBetween: 30
        }
      }
    });

    $('.js-scheme-card').on('click', function () {
      var className = $(this).attr('data-name');
      $('.js-scheme-card').removeClass('border-light').addClass('border-transparent');
      $('.js-scheme-card').find(".material-icons-outlined").addClass('opacity-0.3');
      $(this).removeClass('border-transparent').addClass('border-light');
      $(this).find(".material-icons-outlined").removeClass('opacity-0.3');
      $('.js-course-class').text(className);
    });
  }

  var coursesRecommendSwiper = document.querySelector('.js-swiper-courses-recommend');

  if (coursesRecommendSwiper) {
    var _swiper2 = new Swiper(".js-swiper-courses-recommend", {
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
    });
  }

  var msgBtn = document.querySelector('.js-msg-submit');

  if (msgBtn) {
    var chackMsgFromValue = function chackMsgFromValue() {
      if (msgFromName.value === '' || msgFromEmail.value === '' || msgFromPhone.value === '' || msgFromMsg.value === '') {
        $(msgBtn).addClass('btn-outline-primary-light');
        $(msgBtn).prop({
          disabled: true
        });
      } else {
        $(msgBtn).removeClass('btn-outline-primary-light');
        $(msgBtn).prop({
          disabled: false
        });
      }
    };

    var msgFromName = document.querySelector('#userName');
    var msgFromEmail = document.querySelector('#userEmail');
    var msgFromPhone = document.querySelector('#userPhone');
    var msgFromMsg = document.querySelector('#userMassage');
    chackMsgFromValue();
    $('.js-msg-form').on('change', function () {
      chackMsgFromValue();
    });
  }

  var dateDom = document.querySelector('.js-datepicker-date');

  if (dateDom) {
    var datepicker = new Datepicker(dateDom, {
      autohide: true,
      prevArrow: '<',
      nextArrow: '>',
      buttonClass: 'btn text-primary fw-normal'
    });
  }
});
//# sourceMappingURL=all.js.map
