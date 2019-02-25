// import noUiSlider from 'nouislider';

// var rangeSlider = document.getElementById('js-range');

// noUiSlider.create(rangeSlider, {
//   start: [0, 100],
//   connect: true,
//   range: {
//     'min': 0,
//     'max': 100
//   },
//   cssPrefix: 'noUi-', // defaults to 'noUi-',
//   cssClasses: {
//     target: 'target',
//     base: 'base',
//     origin: 'origin',
//     handle: 'handle',
//     handleLower: 'handle-lower',
//     handleUpper: 'handle-upper',
//     touchArea: 'touch-area',
//     horizontal: 'horizontal',
//     vertical: 'vertical',
//     background: 'background',
//     connect: 'connect',
//     connects: 'connects',
//     ltr: 'ltr',
//     rtl: 'rtl',
//     draggable: 'draggable',
//     drag: 'state-drag',
//     tap: 'state-tap',
//     active: 'active',
//     tooltip: 'tooltip',
//     pips: 'pips',
//     pipsHorizontal: 'pips-horizontal',
//     pipsVertical: 'pips-vertical',
//     marker: 'marker',
//     markerHorizontal: 'marker-horizontal',
//     markerVertical: 'marker-vertical',
//     markerNormal: 'marker-normal',
//     markerLarge: 'marker-large',
//     markerSub: 'marker-sub',
//     value: 'value',
//     valueHorizontal: 'value-horizontal',
//     valueVertical: 'value-vertical',
//     valueNormal: 'value-normal',
//     valueLarge: 'value-large',
//     valueSub: 'value-sub'
//   }
// });
// rangeSlider.setAttribute('disabled', true);

// rangeSlider.removeAttribute('disabled');



// var origins = rangeSlider.getElementsByClassName('noUi-origin');
// origins[1].setAttribute('disabled', true);

// const range = document.getElementById('js-range');

// range.addEventListener('change', function(range) {


//   const maxValue = 100;
//   if (+aria-valuenow === maxValue) {
//     $('.carousel-wrap').fadeOut(100);
//     $('.modal').fadeIn(800);
//     $('#close-button').click(function() {
//       $('.modal').fadeOut(500);
//       $('.carousel-wrap').fadeIn(1000);
//     });
//     modal.classList.toggle('closed');
//     document.getElementById('close-button').onclick = function(e) {
//       document.getElementById('scrollVideo').value = '0';
//     };
//   }
// });


const rangeq = document.getElementById('js-range');

range.addEventListener('change', function() {
  var elem = document.getElementsByClassName('noUi-handle-lower');
  alert( elem.getAttribute('aria-valuenow') );

});
document.getElementById('js-range').addEventListener('click', function() {
  document.getElementsByClassName('noUi-handle-lower').getAttribute('aria-valuenow');
  alert('dd');
});
