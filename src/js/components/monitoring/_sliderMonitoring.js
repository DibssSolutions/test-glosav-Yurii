import slick from 'slick-carousel';

var settings = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.monitoring__arrows_prev'),
  nextArrow: $('.monitoring__arrows_next'),
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
    $('.monitoring__btn').css('margin-top', '0px');
    $('.monitoring__arrows').toggleClass('none');
    $('.monitoring__btn').html('Скрыть');
  } else {
    $('.js-monitoring-slider').slick(settings);
    $('.js-monitoring-slider').removeClass('row');
    $('.js-col').removeClass('col-3');
    $('.monitoring__arrows').removeClass('none');
    $('.monitoring__btn').html('Смотреть все решения');
  }
}

$('.monitoring__btn').on('click', toogleSlick);

