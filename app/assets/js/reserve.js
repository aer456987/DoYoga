const schemeCards = document.querySelectorAll('.js-scheme-card');

$('.js-scheme-show').hide();
$('.js-scheme-name-show').hide();
$('.js-next-step').hide();


$('.js-experience-cards').on('click', function() {
  const courseName = $(this).attr('data-name');
  const onCilckCardClass = 'border-4';
  const unCilckCardClass = 'hover-rotate-1 hover-shadow transition-duration-1';
  const onCilckExperienceClass = 'arrow';
  const unCilckExperienceClass = 'd-none d-lg-block';

  $('.js-experience-card').removeClass(onCilckCardClass).addClass(unCilckCardClass);
  $('.js-experience-cards').removeClass(onCilckExperienceClass).toggleClass(unCilckExperienceClass);

  $(this).toggleClass(unCilckExperienceClass).toggleClass(onCilckExperienceClass);
  $(this).find('.js-experience-card').toggleClass(unCilckCardClass).toggleClass(onCilckCardClass);

  $('.js-scheme-show').slideUp().slideDown();
  $('.js-scheme-name-show').slideDown();
  $('.js-next-step').show();

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