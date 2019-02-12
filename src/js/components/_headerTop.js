// $(function() {
//   $('.lang').on('click', function() {
//     $('.lang-list').toggle();
//   });
// });

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
