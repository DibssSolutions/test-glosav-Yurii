import 'owl.carousel';

$('.js-slider').owlCarousel({
  items: 1,
  dots: false,
  arrows: false,
  loop: true
});

var owl = $('.owl-carousel');



$(window).resize(function() {
  console.log($(window).width());
  if($(window).width() < 1023) {
    owl.trigger('destroy.owl.carousel');
    $('.slider').toggleClass('d-block');
    $('.row').removeClass('slider');
    $('.help').addClass('col-sm-6');
  }
});
