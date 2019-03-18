
$(function() {
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
    var id = $(this).data('item-id');
    var content = $('#modal'+id).html();
    modal.showModal(content);
    $('body').addClass('overflow');
  });
  $('#modalWindow').on('click',function(e) {
    if ($(e.target).attr('id')==='modalWindow'|| $(e.target).hasClass('close')|| $(e.target).hasClass('close') || $(e.target).hasClass('content-modal')) {
      modal.hideModal();
      $('.modalWindow').removeClass('modalLogin');
      $('body').removeClass('overflow');
    } else{
      return false;
    }
  });
});

