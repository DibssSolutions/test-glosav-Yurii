
// $('.help').click(function() {
//   $('.help__desc').toggleClass('blockq');
// });
// var modalq = document.querySelector('#help'),
//   modalOverlayq = document.querySelector('#modal-overlay'),
//   closeButtonq = document.querySelector('#close-button'),
//   openButtonq = document.querySelector('#open-button');
 
// closeButtonq.addEventListner('click', function() {
//   modalq.classList.toggle('closed');
//   modalOverlayq.classList.toggle('closed');
// });
// openButtonq.addEventListner('click', function() {
//   modalq.classList.toggle('closed');
//   modalOverlayq.classList.toggle('closed');
// });
var modal = document.querySelector('.modal');
var trigger = document.querySelector('.trigger');
var closeButton = document.querySelector('.close-button');

function toggleModal() {
  modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);
