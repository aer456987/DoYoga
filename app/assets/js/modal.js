let modelImg = '';
let modelTitle = '';
let modelTeacher = '';





$('.js-course-data').on('click', function() {
  modelImg = $(this).find('img').attr('src');
  modelTitle = $(this).find('h3').text();
  modelTeacher = $(this).find('p').find('span').text();
  // const dataImg = $(this).find('img').attr('src');
  // const dataTitle = $(this).find('h3').text();
  // const dataTeacher = $(this).find('p').find('span').text();

  $('.js-model-img').attr('src', modelImg);
  $('.js-model-title').text(modelTitle);
  $('.js-model-teacher').text(modelTeacher);



});