let modal = document.querySelector('#modal'),
  closeButton = document.querySelector('#close-button'),
  openButton = document.querySelector('#open-button');

closeButton.addEventListener('click', function() {
  modal.classList.toggle('closed');

});

const range = document.getElementById('scrollVideo');

range.addEventListener('change', function(range) {


  const value = range.target.value;
  const maxValue = 100;
  if (+value === maxValue) {
    $('.carousel-wrap').fadeOut(100);
    $('.modal').fadeIn(800);
    $('#close-button').click(function() {
      $('.modal').fadeOut(500);
      $('.carousel-wrap').fadeIn(500);
    });
    modal.classList.toggle('closed');
  }
});
