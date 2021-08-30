$(function() {
  AOS.init({
    offset: 50,
    once: true,
  });

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
});