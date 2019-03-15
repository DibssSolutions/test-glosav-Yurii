
$('.lang').click(function() {
  $('.lang-list').toggle();
  $('.arrow').toggleClass('rotate');
});
$(document).on('click', function(hideLang) {
  if (!$(hideLang.target).closest('.lang').length) {
    $('.lang-list').hide();
    $('.arrow').removeClass('rotate');
  }
});

$('.find-arrow').click(function() {
  $('.yura').toggle();
});
$(document).on('click', function(hideLang) {
  if (!$(hideLang.target).closest('.find-block').length) {
    // $('.yura').hide();
  }
});

if (document.querySelector('.promo-hero, .introduction-hero, .monitoring-hero')) {
  $('header').toggleClass('header_absolute');
  $('footer').css('background-color', '#eaeff2');
}

