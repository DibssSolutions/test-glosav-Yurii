$(function() {
  $('.nav__icon').on('click', function() {
    $(this).closest('.nav__menu').toggleClass('menu_stage_open');
  });
});

$(document).on('click', function(hideMenu) {
  if (!$(hideMenu.target).closest('.nav__menu').length) {
    $('.nav__menu').removeClass('menu_stage_open');
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


