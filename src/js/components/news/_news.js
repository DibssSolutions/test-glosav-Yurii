import 'select2';
if (document.querySelector('.news')) {
  
  $('.out').css('background', '#eaeff2');
  $('footer').css('background', '#eaeff2');
  $('.bg-gradient, .bg-monitoring').css('height', 'auto');
}

if (document.querySelector('.news')) {
  $('body').toggleClass('news-select');
  $('.js-news-select').select2({
    width: '260px',
    placeholder: 'Новости по всем направлениям',
  });
}
