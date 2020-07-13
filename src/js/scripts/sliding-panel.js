$('.callback-js').on('click', function () {
  $('#callback').addClass('open-panel');
  $('#question,#location').removeClass('open-panel');
  $('.overlay-dark').show();
});
$('.ask-js').on('click', function () {
  $('#question').addClass('open-panel');
  $('#callback,#location').removeClass('open-panel');
  $('.overlay-dark').show();
});
$('.location-js').on('click', function () {
  $('#location').addClass('open-panel');
  $('#callback,#question').removeClass('open-panel');
  $('.overlay-dark').show();
});
var slidingPanel = $('.sliding-panel').outerWidth();
$('.float-auxiliary-panel a, .callback-js, .ask-js, .location-js').on('click', function () {
  $('.float-auxiliary-panel').css('right', slidingPanel);
});
$('.sliding-panel__close').on('click', function () {
  $('.sliding-panel').removeClass('open-panel');
  $('.float-auxiliary-panel').css('right', '0');
  $('.overlay-dark').hide();
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
