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


$('.js-link-animate').on('click', function() {
  const clickAnimateClass = 'animate__animated animate__backOutRight';
  $('.js-link-animate').removeClass(clickAnimateClass);
  $(this).addClass(clickAnimateClass);
});


const tooltipIcons = document.querySelectorAll('.js-tooltip-icons');
tooltipIcons.forEach(function(icon) {
  const tooltipIcon = new bootstrap.Tooltip(icon);
});