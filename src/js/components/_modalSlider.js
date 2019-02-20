$(function() {
  const modalContent = $('.content-modal');

  modalContent.each(function(index, elem) {
    const itemsCount = $(elem).find('.items').length;
    $(elem).attr('data-items', itemsCount);
  });
  $('.sign-in-btn').click(function() {
    $('.modalWindow').toggleClass('modalLogin');
  });
  $(document).on('click', function(hideLang) {

  }
  );
  var modal ={
    self: $('#modalWindow'),
    

    showModal:function(content) {
      this.self.find('#innerModal').html(content);
      this.self.fadeIn(500);
    },
    hideModal: function() {
      this.self.fadeOut(500);
      this.self.find('#innerModal').html('');
    }
  };
  $('.showModal').on('click', function(e) {
    var id = $(this).data('id');
    var content = $('#cont'+id).html();
    modal.showModal(content);
  });
  $('#modalWindow').on('click',function(e) {
    if ($(e.target).attr('id')==='modalWindow'|| $(e.target).hasClass('close-button-modal')|| $(e.target).hasClass('close') || $(e.target).hasClass('content-modal')) {
      modal.hideModal();
      $('.modalWindow').removeClass('modalLogin');
    } else{
      return false;
    }
  });
});

const modalContent = $('.modalContent');

modalContent.each(function(index, elem) {
  const itemsCount = $(elem).find('.items').length;
  $(elem).attr('data-items', itemsCount);
});


