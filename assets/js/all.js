"use strict";

AOS.init({
  offset: 50,
  once: true
});
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
    daysOfWeekDisabled: [0],
    nextArrow: '>',
    prevArrow: '<',
    buttonClass: 'btn btn-outline-primary border-0 fw-normal'
  });
}

$('.js-link-animate').on('click', function () {
  var clickAnimateClass = 'animate__animated animate__backOutRight';
  $('.js-link-animate').removeClass(clickAnimateClass);
  $(this).addClass(clickAnimateClass);
});
var tooltipIcons = document.querySelectorAll('.js-tooltip-icons');
tooltipIcons.forEach(function (icon) {
  var tooltipIcon = new bootstrap.Tooltip(icon);
});
"use strict";

var formRules = {
  name: {
    rule: /^^[a-zA-Z\s\d]+$/,
    msg: '不能有特殊符號'
  },
  age: {
    rule: /^\d{2}$/,
    msg: '只能是 2 碼數字'
  },
  email: {
    rule: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,
    msg: '格式錯誤'
  },
  phone: {
    rule: /^09\d{8}$/,
    msg: '格式錯誤，須為 09 開頭的 10 碼數字'
  }
}; // 訂閱 Email

$('.js-subscription-email').on('input propertychange', function () {
  var inputName = $(this).attr('name');
  var inputValue = $(this).val();
  var rule = formRules.email.rule;
  var errorMsg = formRules.email.msg;
  var errorMsgContent = $('.js-subscription-email-msg');

  if (rule.test(inputValue)) {
    errorMsgContent.removeClass('d-block').text('');
    $('.js-subscription-btn').prop('disabled', false).addClass('btn-primary-light');
  } else {
    errorMsgContent.addClass('d-block').text("".concat(inputName, " ").concat(errorMsg));
    $('.js-subscription-btn').prop('disabled', true).removeClass('btn-primary-light');
  }
});
$('.js-subscription-btn').on('click', function () {
  $('.js-subscription-email').val('');
}); // 驗證欄位資料

$('#reserveName').on('input propertychange', function () {
  var data = {
    input: $(this),
    inputValue: $(this).val(),
    rule: formRules.name.rule,
    errorMsg: formRules.name.msg
  };
  validationInputFn(data);
});
$('#reserveAge').on('input propertychange', function () {
  var data = {
    input: $(this),
    inputValue: $(this).val(),
    rule: formRules.age.rule,
    errorMsg: formRules.age.msg
  };
  validationInputFn(data);
});
$('.js-form-email').on('input propertychange', function () {
  var data = {
    input: $(this),
    inputValue: $(this).val(),
    rule: formRules.email.rule,
    errorMsg: formRules.email.msg
  };
  validationInputFn(data);
});
$('.js-form-phone').on('input propertychange', function () {
  var data = {
    input: $(this),
    inputValue: $(this).val(),
    rule: formRules.phone.rule,
    errorMsg: formRules.phone.msg
  };
  validationInputFn(data);
}); // 訂課資料

$('.js-reserve-data').on('change', function () {
  var reserveDate = {};
  reserveDate = getReserveDate();
  checkInputValue();
});

function validationInputFn(data) {
  var borderStyle = ['border-danger', 'animate__animated', 'animate__headShake'];
  var input = data.input,
      inputValue = data.inputValue,
      rule = data.rule,
      errorMsg = data.errorMsg;
  var inputName = $(input).attr('name');
  var errorMsgContent = $(input).next();

  if (!rule.test(inputValue)) {
    input.addClass(borderStyle);
    errorMsgContent.addClass('d-block');

    if (inputValue === '') {
      $(errorMsgContent).text("".concat(inputName, " \u70BA\u5FC5\u586B"));
    } else {
      $(errorMsgContent).text("".concat(inputName, " ").concat(errorMsg));
    }
  } else {
    input.removeClass(borderStyle);
    errorMsgContent.removeClass('d-block').text('');
  }
}

function getReserveDate() {
  var inputData = {
    muscleEndurance: [],
    userData: {}
  };
  inputData.reserveDate = changeDate();
  inputData.isDoYoga = $('input[name="practiseYogaRadio"]:checked').val();
  inputData.sportsTime = $('input[name="sportsTime"]:checked').val();
  inputData.muscleEndurance = getProblemBetter(getReserveDate.muscleEndurance);
  inputData.userData.name = $('#reserveName').val();
  inputData.userData.age = $('#reserveAge').val();
  inputData.userData.gender = $('#reserveGender').val();
  inputData.userData.email = $('#reserveEmail').val();
  inputData.userData.phone = $('#reservePhone').val();
  inputData.userData.age = $('#reserveAge').val().parseInt();
  return inputData;
}

function checkInputValue() {
  var reserveDate = changeDate();
  var isDoYoga = $('input[name="practiseYogaRadio"]:checked').val();
  var muscleEndurance = $('input[name="problemBetterCheckbox"]:checked').val();
  var sportsTime = $('input[name="sportsTime"]:checked').val();
  var formReserve = document.querySelectorAll('.js-form-reserve');
  var reserveArray = [isDoYoga, muscleEndurance, sportsTime, reserveDate];
  var reserveBtn = $('.js-form-reserve-btn');
  formReserve.forEach(function (items) {
    reserveArray.push(items.value);
  });
  reserveArray.forEach(function (input) {
    if (input === undefined || input === '' || input === NaN || input === null) {
      reserveBtn.removeClass('btn-primary-light').addClass('btn-outline-primary-light disabled');
    } else {
      reserveBtn.removeClass('btn-outline-primary-light disabled').addClass('btn-primary-light');
    }
  });
}

function changeDate() {
  var date = $('#reserveDate').val().split('/');
  return new Date("".concat(date[2], "/").concat(date[0], "/").concat(date[1])) / 1000;
}

function getProblemBetter() {
  var valueArray = [];
  $('input[name="problemBetterCheckbox"]').each(function () {
    if ($(this).prop('checked')) {
      valueArray.push($(this).val());
    }
  });
  return valueArray;
}
"use strict";

var openModalBtn = document.querySelectorAll('.js-course-modal-btn');

if (openModalBtn) {
  var courseModal = new bootstrap.Modal(document.querySelector('.js-course-modal'));
  openModalBtn.forEach(function (item) {
    $(item).on('click', function () {
      courseModal.show();
    });
  });
}

$('.js-course-data').on('click', function () {
  var modelImg = $(this).find('img').attr('src');
  var modelTitle = $(this).find('h3').text();
  var modelTeacher = $(this).find('p').find('span').text();
  $('.js-model-img').attr('src', modelImg);
  $('.js-model-title').text(modelTitle);
  $('.js-model-teacher').text(modelTeacher);
});
"use strict";

var schemeCards = document.querySelectorAll('.js-scheme-card');
$('.js-scheme-show').hide();
$('.js-scheme-name-show').hide();
$('.js-next-step').hide();
$('.js-experience-cards').on('click', function () {
  var courseName = $(this).attr('data-name');
  var onCilckCardClass = 'border-4';
  var unCilckCardClass = 'hover-rotate-1 hover-shadow transition-duration-1';
  var onCilckExperienceClass = 'arrow';
  var unCilckExperienceClass = 'd-none d-lg-block';
  $('.js-experience-card').removeClass(onCilckCardClass).addClass(unCilckCardClass);
  $('.js-experience-cards').removeClass(onCilckExperienceClass).toggleClass(unCilckExperienceClass);
  $(this).toggleClass(unCilckExperienceClass).toggleClass(onCilckExperienceClass);
  $(this).find('.js-experience-card').toggleClass(unCilckCardClass).toggleClass(onCilckCardClass);
  $('.js-scheme-show').slideUp().slideDown();
  $('.js-scheme-name-show').slideDown();
  $('.js-next-step').show();
  $('.js-course-name').text(courseName);
}); // 課程階級

$('.js-scheme-card').on('click', function () {
  var courseScheme = $(this).attr('data-name');
  $('.js-scheme-card').removeClass('border-light').addClass('border-transparent');
  $('.js-scheme-card').find('.material-icons-outlined').addClass('opacity-0.3');
  $(this).removeClass('border-transparent').addClass('border-light');
  $(this).find('.material-icons-outlined').removeClass('opacity-0.3');
  $('.js-course-scheme').text(courseScheme);
});
"use strict";

var schemeSwiper = document.querySelector('.js-swiper-scheme');

if (schemeSwiper) {
  var swiper = new Swiper('.js-swiper-scheme', {
    slidesPerView: 1,
    spaceBetween: 0,
    grid: {
      rows: 3
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 1
        }
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 1
        }
      }
    }
  });
}

var userRecommendSwiper = document.querySelector('.js-swiper-user-recommend');

if (userRecommendSwiper) {
  var _swiper = new Swiper('.js-swiper-user-recommend', {
    slidesPerView: 1,
    spaceBetween: 0,
    grid: {
      rows: 3,
      fill: 'column'
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row'
        },
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: 'row'
        },
        spaceBetween: 30
      }
    }
  });
}

var coursesRecommendSwiper = document.querySelector('.js-swiper-courses-recommend');

if (coursesRecommendSwiper) {
  var _swiper2 = new Swiper('.js-swiper-courses-recommend', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    breakpoints: {
      768: {
        centeredSlides: false,
        slidesPerView: 2,
        spaceBetween: 30
      },
      992: {
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 30
      },
      1200: {
        centeredSlides: false,
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
}

var teachersSwiper = document.querySelector('.js-swiper-teachers');

if (teachersSwiper) {
  var _swiper3 = new Swiper('.js-swiper-teachers', {
    slidesPerView: 1,
    spaceBetween: 0,
    grid: {
      rows: 4,
      fill: 'column'
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 1,
          fill: 'row'
        }
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 1,
          fill: 'row'
        }
      }
    }
  });
}
//# sourceMappingURL=all.js.map
