import slick from 'slick-carousel';

var slickIsActive;
$().ready(function() {
  $('.js-products-slider').slick(prodSettings);
});

var prodSettings = {
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }
  ]
};
