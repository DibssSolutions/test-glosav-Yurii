// let modal = document.querySelector('#modal'),
//   closeButton = document.querySelector('#close-button'),
//   openButton = document.querySelector('#open-button');
  
// closeButton.addEventListener('click', function() {
//   modal.classList.toggle('closed');
// });

// const range = document.getElementById('scrollVideo');

// range.addEventListener('change', function(range) {


//   const value = range.target.value;
//   const maxValue = 100;
//   if (+value === maxValue) {
//     $('.carousel-wrap').fadeOut(100);
//     $('.modal').fadeIn(800);
//     $('#close-button').click(function() {
//       $('.modal').fadeOut(500);
//       $('.carousel-wrap').fadeIn(1000);
//     });
//     modal.classList.toggle('closed');
//     document.getElementById('close-button').onclick = function(e) {
//       // document.getElementById('scrollVideo').value = '0';
//     };
//   }

//   if(+value !== maxValue) {
//     document.getElementById('scrollVideo').value = '0';
//   }
// });

// jQuery(function($) {
//   $(document).mouseup(function(e) { // событие клика по веб-документу
//     var div = $('.modal'); // тут указываем ID элемента
//     if (!div.is(e.target) // если клик был не по нашему блоку
//         && div.has(e.target).length === 0)
//     {
//       div.fadeOut(500); // скрываем его
//       $('.carousel-wrap').fadeIn(1000);
//     }

//   });

// });
