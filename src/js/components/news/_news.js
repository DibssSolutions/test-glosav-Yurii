if (document.querySelector('.news')) {
  
  $('.out').css('background', '#eaeff2');
  $('footer').css('background', '#eaeff2');
  $('.bg-gradient, .bg-monitoring').css('height', 'auto');
}

import 'select2';




$('.js-select-news').select2({
  width: '100%',
  placeholder: 'Новости по всем направлениям',
});
