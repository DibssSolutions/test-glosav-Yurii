import noUiSlider from 'nouislider';
if (document.querySelector('.range')) {

  var directionSlider = document.getElementById('slider-direction');
  setInterval(function() {
    {

      noUiSlider.create(directionSlider, {
        start: [0, 1],
        connect: true,
        range: {
          'min': [0,1],
          'max': 1
        },
        slide: function( event, ui ) {
          $( '#js-range' ).innerHTML( ui.value );
        },
        cssPrefix: 'noUi-', // defaults to 'noUi-',
        cssClasses: {
          target: 'target',
          base: 'base',
          origin: 'origin',
          handle: 'handle',
          handleLower: 'handle-lower',
          handleUpper: 'handle-upper',
          touchArea: 'touch-area',
          horizontal: 'horizontal',
          vertical: 'vertical',
          background: 'background',
          connect: 'connect',
          connects: 'connects',
          ltr: 'ltr',
          rtl: 'rtl',
          draggable: 'draggable',
          drag: 'state-drag',
          tap: 'state-tap',
          active: 'active',
          tooltip: 'tooltip',
          pips: 'pips',
          pipsHorizontal: 'pips-horizontal',
          pipsVertical: 'pips-vertical',
          marker: 'marker',
          markerHorizontal: 'marker-horizontal',
          markerVertical: 'marker-vertical',
          markerNormal: 'marker-normal',
          markerLarge: 'marker-large',
          markerSub: 'marker-sub',
          value: 'value',
          valueHorizontal: 'value-horizontal',
          valueVertical: 'value-vertical',
          valueNormal: 'value-normal',
          valueLarge: 'value-large',
          valueSub: 'value-sub'
        }
      });
    
    
      directionSlider.noUiSlider.on('slide', function(values, handle) {
        if(values[handle] === '1.00') {
          $('.carousel-wrap').fadeOut(500);
          $('.modal').fadeIn(800);
          $('#close-button').click(function() {
            $('.modal').fadeOut(500);
            $('.carousel-wrap').fadeIn(500);
            directionSlider.noUiSlider.set(0);
          });
    
          $('header, footer, main, video-wrap').click(function(e) {
            var container = $('.modal');
            if (container.has(e.target).length === 0) {
              container.fadeOut(500);
              $('.carousel-wrap').fadeIn(500);
              directionSlider.noUiSlider.set(0);
            }
          });
        };
      });
    
    
    
      $(document).on('click', function(hideLang) {
        if (!$(hideLang.target).closest('.modal').length) {
          //directionSlider.noUiSlider.set(0);
        }
      });
    
    
      directionSlider.setAttribute('disabled', true);
    
      directionSlider.removeAttribute('disabled');
    
      var origins = directionSlider.getElementsByClassName('noUi-origin');
      origins[1].setAttribute('disabled', true);
    }
  });
}
