try {
  ("use strict");
  var myMap;
  function init() {
    document
      .querySelector(".cooperation__map-wrapper")
      .classList.remove("cooperation__map-wrapper");
    var e;
    document.body.clientWidth < 768
      ? ((myMap = new ymaps.Map("map", {
          center: [59.938631, 30.323055],
          zoom: 17,
        })).behaviors.disable("scrollZoom"),
        (e = new ymaps.Placemark(
          [59.938631, 30.323055],
          {},
          {
            iconLayout: "default#image",
            iconImageHref: "img/map-pin.png",
            iconImageSize: [60, 42],
            iconImageOffset: [-30, -57],
          }
        )),
        myMap.geoObjects.add(e))
      : 768 <= document.body.clientWidth && document.body.clientWidth < 1300
      ? ((myMap = new ymaps.Map("map", {
          center: [59.938631, 30.323055],
          zoom: 18,
        })).behaviors.disable("scrollZoom"),
        (e = new ymaps.Placemark(
          [59.938631, 30.323055],
          {},
          {
            iconLayout: "default#image",
            iconImageHref: "img/map-pin.png",
            iconImageSize: [111, 93],
            iconImageOffset: [-55, -58],
          }
        )),
        myMap.geoObjects.add(e))
      : 1300 <= document.body.clientWidth &&
        ((myMap = new ymaps.Map("map", {
          center: [59.938963, 30.319293],
          zoom: 17,
        })).behaviors.disable("scrollZoom"),
        (e = new ymaps.Placemark(
          [59.938631, 30.323055],
          {},
          {
            iconLayout: "default#image",
            iconImageHref: "img/map-pin.png",
            iconImageSize: [120, 102],
            iconImageOffset: [-72, -106],
          }
        )),
        myMap.geoObjects.add(e));
  }
  ymaps.ready(init);
} catch (err) {
  alert(err.name);
  alert(err.message);
  alert(err.stack);
}
