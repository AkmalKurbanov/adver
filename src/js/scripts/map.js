var map;

DG.then(function () {
  map = DG.map('map', {
    center: [42.837432, 74.597943],
    zoom: 17
  });
  var myIcon = L.icon({
    iconUrl: '../assets/img/mark.svg',
    iconSize: [70, 70],
  });
  DG.marker([42.837492, 74.597990], {
    icon: myIcon
  }).addTo(map).bindPopup('г. Бишкек, ул. Малдыбаева, 73');

});