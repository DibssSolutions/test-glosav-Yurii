if (document.querySelector('.monitoring-hero')) {
  // $('body').css('overflow', 'auto');
  $('.out').css('background', '#dee6eb');
  $('footer').css('background', '#dee6eb');
}
$('.preview__button').click(function() {
  $( '.preview__desc p:not(:first)' ).toggleClass('d-block-important').css('padding-top','30px');
  $('.preview__arrow').toggleClass('rotate180');
});


