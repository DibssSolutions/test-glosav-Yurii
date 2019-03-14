if (document.querySelector('.monitoring, .promo-hero, .introduction-hero')) {
  $('.out').css('background', 'none');
  $('body').css('overflow', 'auto');
  $('footer').css('background', '#dee6eb');
}
else{
  $('.out').find('.bg-gradient').remove();
}

$(window).resize (function() {
  $('iframe').each(function() {
    var widthVideo = $(this).width ();
    $(this).css('height', widthVideo / 1.7777 + 'px');
  });
});
