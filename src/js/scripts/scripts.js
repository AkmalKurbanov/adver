$('.dropdown__phone, .callback').prepend('+996 ');
$('.dropdown__phone, .callback').each(function (index) {
  var phone = $(this).text().replace(/[^0-9]/gi, '');
  var number = parseInt(phone, 10);
  $(this).attr("href", "tel:+" + number);
});

$('.dropdown__mail').each(function (index) {
  var mail = $(this)
    .clone()
    .children()
    .remove()
    .end()
    .text();
  $(this).attr("href", "mailto:" + mail);
});


// phone
$(".phone-js").inputmask({
  "mask": "+999 (999) 999-999"
});
// phone end




// input file
(function () {

  $('.input__uploader').each(function () {
    var $input = $(this),
      $label = $input.next('.js-labelFile'),
      labelVal = $label.html();

    $input.on('change', function (element) {
      var fileName = '';
      if (element.target.value) fileName = element.target.value.split('\\').pop();
      fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
    });
  });

})();
// input file end