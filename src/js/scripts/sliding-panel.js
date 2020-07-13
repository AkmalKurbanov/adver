$('.callback-js').on('click', function () {
  setTimeout(function () {
    $('#callback').addClass('open-panel');
  }, 200);
  $('#question,#location').removeClass('open-panel');
  $('.overlay-dark').show();
  $('.sliding-panel').show();
});
$('.ask-js').on('click', function () {
  setTimeout(function () {
    $('#question').addClass('open-panel');
  }, 200);

  $('#callback,#location').removeClass('open-panel');
  $('.overlay-dark').show();
});
$('.location-js').on('click', function () {
  setTimeout(function () {
    $('#location').addClass('open-panel');
  }, 200);

  $('#callback,#question').removeClass('open-panel');
  $('.overlay-dark').show();
  $('.sliding-panel').show();
});
var slidingPanel = $('.sliding-panel').outerWidth();
$('.float-auxiliary-panel a, .callback-js, .ask-js, .location-js').on('click', function () {
  $('.float-auxiliary-panel').css('right', slidingPanel);
});
$('.sliding-panel__close').on('click', function () {
  $('.sliding-panel').removeClass('open-panel');
  $('.float-auxiliary-panel').css('right', '0');
  $('.overlay-dark').hide();
  $('.sliding-panel').show();
});

$(document).mouseup(function (e) {
  var div = $(".sliding-panel,.search-panel");
  if (!div.is(e.target) &&
    div.has(e.target).length === 0) {
    div.removeClass('open-panel');
    $('.float-auxiliary-panel').css('right', 0);
    $('.overlay-dark').hide();
    div.removeClass('open-search');
  }
});

$('.search-trigger').on('click', function () {
  $('.search-panel').addClass('open-search');
  $('.overlay-dark').show();
});
$('.search-panel__close').on('click', function () {
  $('.search-panel').removeClass('open-search');
  $('.overlay-dark').hide();
});
$('.ask-js,.callback-js,.location-js').on('click', function () {
  $('.menu').slideUp();
});

$('.hamburger-mobile').on('click', function () {
  $('.sliding-panel').hide();
});