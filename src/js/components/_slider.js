import slick from 'slick-carousel';



$('.sld').slick({
  centerMode: true,
  centerPadding: '300px',
  arrows: false,
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        centerMode: false,
        centerPadding: '100px',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 1124,
      settings: {
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

