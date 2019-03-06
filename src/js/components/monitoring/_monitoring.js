
// $( 'body' ).find( '.out' ).css( 'background-color', 'red' );
if (document.querySelector('.monitoring')) {
  $('.out').css('background', 'none');
  $('body').css('overflow', 'auto');
  $('footer').css('background', '#dee6eb');
}
$('.hero-ask__button').click(function() {
  $( '.hero-ask__desc p:not(:first)' ).toggleClass('d-block').css('padding-top','30px');
  $('.hero-ask__arrow').toggleClass('rotate');

});


