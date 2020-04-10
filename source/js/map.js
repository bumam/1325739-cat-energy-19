ymaps.ready(init);

function init() {
  myMap = new ymaps.Map("map", {
    center: [59.938631, 30.323055],
    zoom: 17
  });

  myMap.behaviors.disable("scrollZoom");

  var myPlacemark = new ymaps.Placemark(
    [59.938631, 30.323055],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/map-pin-png-50.png",
      iconImageSize: [75, 73],
      iconImageOffset: [-36, -53]
    }
  );
  myMap.geoObjects.add(myPlacemark);
}
