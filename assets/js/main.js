$(document).ready(function() {
  $('#cardnumber').inputmask({
    mask: '9999 — 99XX — XXXX — 9999',
    showMaskOnHover: false,
    showMaskOnFocus: false
  });

  $('.burger-menu, .menu__close').click( function() {
    $('.pop-up__menu').toggle();
    // $('.pop-up__menu').toggleClass('active');

  });
});
