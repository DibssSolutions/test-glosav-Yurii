import slick from 'slick-carousel';

var settings = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
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
var slickIsActive;
$().ready(function() {
  $('.js-monitoring-slider').slick(settings);
});

var slickIsActive;

$('.js-monitoring-slider').on('init', function() {
  slickIsActive = true;
});

function toogleSlick() {  
  if (slickIsActive) {
    $('.js-monitoring-slider').slick('unslick');
    slickIsActive = false;
    $('.js-monitoring-slider').toggleClass('row').css('justify-content', 'center');
    $('.js-col').toggleClass('col-3').css('padding-bottom', '38px');
    $('.monitoring-slider__btn').css('margin-top', '0px');
    $('.slider-arrows').toggleClass('none');
    $('.monitoring-slider__btn').html('Скрыть');
  } else {
    $('.js-monitoring-slider').slick(settings);
    $('.js-monitoring-slider').removeClass('row');
    $('.js-col').removeClass('col-3');
    $('.slider-arrows').removeClass('none');
    $('.monitoring-slider__btn').html('Смотреть все решения');
  }
}

$('.monitoring-slider__btn').on('click', toogleSlick);

