$(function() {
  const modalContent = $('.content-modal');

  modalContent.each(function(index, elem) {
    const itemsCount = $(elem).find('.items').length;
    $(elem).attr('date-items', itemsCount);
  });
  

  var modal ={
    self: $('#modalWindow'),
    

    showModal:function(content) {
      this.self.find('#innerModal').html(content);
      this.self.fadeIn(200);
    },
    hideModal: function() {
      this.self.fadeOut(200);
      this.self.find('#innerModal').html('');
    }
  };
  $('.showModal').on('click', function(e) {
    var id = $(this).data('id');
    var content = $('#cont'+id).html();
    modal.showModal(content);
  });
  $('#modalWindow').on('click',function(e) {
    if ($(e.target).attr('id')==='modalWindow'|| $(e.target).hasClass('close-button-modal')) {
      modal.hideModal();
    } else{
      return false;
    }
  });
});

const modalContent = $('.modalContent');

modalContent.each(function(index, elem) {
  const itemsCount = $(elem).find('.items').length;
  $(elem).attr('date-items', itemsCount);
});
