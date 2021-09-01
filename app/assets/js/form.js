const formRules = {
  email: {
    rule: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,
    msg: '格式錯誤',
  },
  phone: {
    rule: /^09\d{8}$/,
    msg: '格式錯誤，須為 09 開頭的 10 碼數字',
  },
}

$('.js-form-email').on('input propertychange', function() {
  const data = {
    input: (this),
    inputValue: $(this).val(),
    rule: formRules.email.rule,
    errorMsg: formRules.email.msg,
  }

  validationInputFn(data);
});




function validationInputFn(data) {
  const { input, inputValue, rule, errorMsg } = data;
  const inputName =  $(input).attr('name');
  const errorMsgContent = $(input).next();

  if (rule.test(inputValue)){
    errorMsgContent.removeClass('d-block').text('');
  } else {
    errorMsgContent.addClass('d-block').text(`${inputName} ${errorMsg}`);
  }
}