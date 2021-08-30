const schemeCards = document.querySelectorAll('.js-scheme-card');

$('.js-scheme-show').hide();
$('.js-scheme-name-show').hide();

$('.js-experience-cards').on('click', function() {
  const courseName = $(this).attr('data-name');
  const onCilckCard = 'border-4';
  const unCilckCard = 'hover-scale-1 hover-shadow transition-duration-0.2';
  const onCilckExperience = 'arrow';
  const unCilckExperience = 'd-none d-lg-block';

  $('.js-experience-card').removeClass(onCilckCard).addClass(unCilckCard);

  $('.js-experience-cards').removeClass(onCilckExperience).addClass(unCilckExperience);

  $(this).removeClass(unCilckExperience).addClass(onCilckExperience);
  $(this).find('.js-experience-card').removeClass(unCilckCard).addClass(onCilckCard);


  $('.js-scheme-show').slideDown();
  $('.js-scheme-name-show').slideDown();





  // 選取
  // col-lg-4 arrow

  // 未選取
  // col-lg-4 d-none d-lg-block


  // console.log($(this).find('.js-experience-cards'));
  // console.log($(this).find('.card'));

  $('.js-course-name').text(courseName);

});



// 課程階級
$('.js-scheme-card').on('click', function() {
  const courseScheme = $(this).attr('data-name');

  $('.js-scheme-card').removeClass('border-light').addClass('border-transparent');
  $('.js-scheme-card').find('.material-icons-outlined').addClass('opacity-0.3');

  $(this).removeClass('border-transparent').addClass('border-light');
  $(this).find('.material-icons-outlined').removeClass('opacity-0.3');
  
  $('.js-course-scheme').text(courseScheme);
});