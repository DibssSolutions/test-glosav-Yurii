import 'select2';

if (document.querySelector('.monitoring-hero')) {
  $('body').toggleClass('monitoring-select');
  $('.js-select').select2({
    width: '100%',
    placeholder: 'Выберите департамент для обращения',
  });
  
  
  $('.placeholder-select').select2({
    width: '100%',
    placeholder: 'Выберите тему для обращения',
  });
  
}
