$('.item').hover(
  function() {
    $('.item').toggleClass('blur');
    $(this).toggleClass('blur');
  },
  function() {
    $('.item').toggleClass('blur');

    $(this).removeClass('blur');

  });
