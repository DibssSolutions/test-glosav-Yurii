$('.slider__item').hover(
  function() {
    $('.slider__item').toggleClass('blur');
    $(this).toggleClass('blur');
  },
  function() {
    $('.slider__item').toggleClass('blur');
    $(this).removeClass('blur');
  });
