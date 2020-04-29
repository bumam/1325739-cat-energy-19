if (window.innerWidth >= 320 && window.innerWidth < 768) {
  var oRange = document.querySelector('input[type="range"]');
  oRange.value = 1;
}

window.onresize = document.body.clientWidth;

window.addEventListener("resize", function(event) {
  var clWidth = document.body.clientWidth;
  var oRange = document.querySelector('input[type="range"]');

  if (clWidth >= 320 && clWidth < 768) {
    oRange.value = 1;
  }

  if (clWidth >= 768 && clWidth < 1300) {
    oRange.value = 50;
  }

  if (clWidth > 1300) {
    oRange.value = 52;
  }
});
