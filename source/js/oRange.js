if (window.innerWidth >= 320 && window.innerWidth < 768) {
  var oRange = document.querySelector('input[type="range"]');
  oRange.value = 1;
}

window.addEventListener("resize", function(event) {
  var oRange = document.querySelector('input[type="range"]');

  if (window.innerWidth >= 320 && window.innerWidth < 768) {
    oRange.value = 1;
  }

  if (window.innerWidth >= 768 && window.innerWidth < 1300) {
    oRange.value = 50;
  }

  if (window.innerWidth > 1300) {
    oRange.value = 53;
  }
});
