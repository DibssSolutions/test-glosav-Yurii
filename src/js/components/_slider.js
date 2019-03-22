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
    $('.slider__wrapper').addClass('col-sm-6');
  }
});
$('.slide-system-integration-hero__text').find('div.close-button-modal').remove();




(function($) {
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
    });
    
    $('.menu__links-item').on('click', function() {

      $(this).closest('.menu')
        .removeClass('menu_state_open');
    });
  });
})(jQuery);
