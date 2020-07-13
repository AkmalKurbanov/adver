$('.hamburger').on('click', function () {
  $('.menu').slideDown();
});
$('.menu__close, .menu__return-arrow').on('click', function () {
  $('.menu').fadeOut();
});

$('.trigger-sub-menu').on('click', function () {
  $(this).toggleClass('open-sub-menu');
  $(this).parent().find('ul').slideToggle();
});

let mobileMenuPosition = $('.header').outerHeight();
$('.mobile-menu').css('top', mobileMenuPosition);


$('.phone-mobile-js').on('click', function () {
  $('.mobile-menu').addClass('mobile-menu-open');
  $('.mobile-menu-email-js').removeClass('mobile-menu-open');
  $('.overlay-dark').show();
});
$('.email-mobile-js').on('click', function () {
  $('.mobile-menu-email-js').removeClass('mobile-menu-open');
  $('.mobile-menu').addClass('mobile-menu-open');
  $('.overlay-dark').show();
});

$('.mobile-menu-close-js').on('click', function () {
  $('.mobile-menu').removeClass('mobile-menu-open');
  $('.overlay-dark').hide();
});
$(document).mouseup(function (e) {
  var div = $(".mobile-menu");
  if (!div.is(e.target) &&
    div.has(e.target).length === 0) {
    $('.overlay-dark').hide();
    $('.mobile-menu').removeClass('mobile-menu-open');
  }
});


var $menu = $('.mmenu-nav').mmenu({
  "navbar": {
    "title": '<span>"Adver Group"</span>'
  },
  "extensions": [
    "pagedim-black",
    "position-right",
    "theme-dark"
  ],

  "iconbar": {
    "use": true,
    "top": [
      "<a href='#'><i class='icon-fb'></i></a>",
      "<a href='#'><i class='icon-vk'></i></a>",
      "<a href='#'><i class='icon-tw'></i></a>",
      "<a href='#'><i class='icon-in'></i></a>",
    ]
  },

  "navbars": [{
    "position": "bottom",
    "content": [
      "searchfield"
    ]
  }],


});

var $icon = $('.hamburger-mobile');
var API = $menu.data('mmenu');

$icon.on('click', function () {
  API.open();
});