
import select2 from 'select2';

// var select = $('.js-select');

// select.select2({
// });

// var selectNews = $('.js-select-news');

// selectNews.select2({
//   minimumResultsForSearch: Infinity,
//   dropdownParent: $('.news__dropdown'),
//   placeholder: 'Новости по всем направлениям'
// });

jQuery(document).ready(function($) {
  $('.js-select').select2({width:100});
  $('b[role="presentation"]').hide();
  $('.select2-selection__arrow').append('<i class="fa fa-angle-down"></i>');
});
