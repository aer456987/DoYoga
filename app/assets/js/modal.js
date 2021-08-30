const openModalBtn = document.querySelectorAll('.js-course-modal-btn');
if(openModalBtn) {
  const courseModal = new bootstrap.Modal(document.querySelector('.js-course-modal'));

  openModalBtn.forEach(function(item) {
    $(item).on('click', function() {
      courseModal.show();
    });
  });
}


$('.js-course-data').on('click', function() {
  let modelImg = $(this).find('img').attr('src');
  let modelTitle = $(this).find('h3').text();
  let modelTeacher = $(this).find('p').find('span').text();

  $('.js-model-img').attr('src', modelImg);
  $('.js-model-title').text(modelTitle);
  $('.js-model-teacher').text(modelTeacher);
});