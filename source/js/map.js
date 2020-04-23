ymaps.ready(init);
var myMap;

function init() {
  if (document.body.clientWidth < 768) {
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
        iconImageHref: "img/map-pin.png",
        iconImageSize: [60, 42],
        iconImageOffset: [-30, -40]
      }
    );

    myMap.geoObjects.add(myPlacemark);
  } else if (
    document.body.clientWidth >= 768 &&
    document.body.clientWidth < 1300
  ) {
    myMap = new ymaps.Map("map", {
      center: [59.938631, 30.323055],
      zoom: 18
    });

    myMap.behaviors.disable("scrollZoom");

    var myPlacemark = new ymaps.Placemark(
      [59.938631, 30.323055],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "img/map-pin.png",
        iconImageSize: [111, 93],
        iconImageOffset: [-55, -58]
      }
    );

    myMap.geoObjects.add(myPlacemark);
  } else if (document.body.clientWidth >= 1300) {
    myMap = new ymaps.Map("map", {
      center: [59.938963, 30.319293],
      zoom: 17
    });

    myMap.behaviors.disable("scrollZoom");

    var myPlacemark = new ymaps.Placemark(
      [59.938631, 30.323055],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "img/map-pin.png",
        iconImageSize: [120, 102],
        iconImageOffset: [-72, -106]
      }
    );

    myMap.geoObjects.add(myPlacemark);
  }
}
