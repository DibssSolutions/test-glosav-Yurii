$('.item').hover(
  function() {
    $('.item').toggleClass('blur');
    $(this).toggleClass('blur');
  },
  function() {
    $('.item').toggleClass('blur');

    $(this).removeClass('blur');
  });

$( '.item' ).hover(
  function() {
    $(this).find('.slider__title').toggleClass('orange');
  },
  function() {
    $(this).find('.slider__title').removeClass('orange');
  });
