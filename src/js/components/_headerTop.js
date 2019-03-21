if (document.querySelector('.promo-hero, .introduction-hero, .monitoring-hero')) {
  $('header').toggleClass('header_absolute');
  $('footer').css('background-color', '#eaeff2');
}

$('.lang').click(function() {
  $('.lang__list').toggle();
  $('.lang__arrow').toggleClass('rotate180');
});
$(document).on('click', function(hideLang) {
  if (!$(hideLang.target).closest('.lang').length) {
    $('.lang__list').hide();
    $('.lang__arrow').removeClass('rotate180');
  }
});

$('.find-block__arrow').click(function() {
  $('.none').toggle();
});
$(document).on('click', function(hideLang) {
  if (!$(hideLang.target).closest('.find-block').length) {
  }
});

