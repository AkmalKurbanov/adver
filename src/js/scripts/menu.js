$('.hamburger').on('click', function () {
  $('.menu').slideDown();
});
$('.menu__close, .menu__return-arrow').on('click', function () {
  $('.menu').fadeOut();
});

$('.trigger-sub-menu').on('click', function () {
  $(this).toggleClass('open-sub-menu');
  $(this).parent().find('ul').slideToggle();
})