if (document.querySelector('.monitoring-hero')) {
  $('body').css('overflow', 'auto');
  $('footer').css('background', '#dee6eb');
}
$('.hero-ask__button').click(function() {
  $( '.hero-ask__desc p:not(:first)' ).toggleClass('d-block-important').css('padding-top','30px');
  $('.hero-ask__arrow').toggleClass('rotate');
});


