import slick from 'slick-carousel';

$(document).ready(function() {
  $('.slider').slick({
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    variableWidth: true,
    arrows: false
  });
});
