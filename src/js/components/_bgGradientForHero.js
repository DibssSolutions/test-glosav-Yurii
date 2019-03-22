if (document.querySelector('.promo-hero, .introduction')) {
  $('.out').css('background', '#eaeff2');
  $('body').css('overflow', 'auto');
  $('footer').css('background', '#eaeff2');
}

$(window).resize (function() {
  $('iframe').each(function() {
    var widthVideo = $(this).width ();
    $(this).css('height', widthVideo / 1.7777 + 'px');
  });
});
