import 'owl.carousel';

$('.js-slider').owlCarousel({
  items: 1,
  dots: false,
  arrows: false,
  loop: true
});


// const items = document.querySelectorAll('.item');
// const root = document.querySelector('.content');
// const content = {
//   first: 'Some text for the first',
//   second: 'Some text for the second'
// };
// console.log(content);
// items.forEach(function(elem) {
//   elem.addEventListener('click', function(e) {
//     const atr = elem.getAttribute('data-item');
//     const template = `
//         <div class="content__text">${content[atr]}</div>
//         <button class="content__button">Info</button>
//       `;
//     root.innerHTML = template;
//   });
// });

