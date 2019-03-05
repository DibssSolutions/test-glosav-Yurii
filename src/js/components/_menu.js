$(function() {
  $('.menu-icon').on('click', function() {
    $(this).closest('.menu').toggleClass('menu_stage_open');
  });
});

$(document).on('click', function(hideMenu) {
  if (!$(hideMenu.target).closest('.menu').length) {
    $('.menu').removeClass('menu_stage_open');
  }
});

$(function() {
  $('.menu-doots').on('click', function() {
    $(this).closest('.breadcrumbs').toggleClass('menu_stage_open');
  });
});

$(document).on('click', function(hideMenu) {
  if (!$(hideMenu.target).closest('.breadcrumbs').length) {
    $('.breadcrumbs').removeClass('menu_stage_open');
  }
});


