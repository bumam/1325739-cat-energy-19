if (document.querySelector(".slider")) {
  ("use strict");
  var oRange;
  320 <= window.innerWidth &&
    window.innerWidth < 768 &&
    ((oRange = document.querySelector('input[type="range"]')).value = 1),
    (window.onresize = document.body.clientWidth),
    window.addEventListener("resize", function (e) {
      var n = document.body.clientWidth,
        t = document.querySelector('input[type="range"]');
      320 <= n && n < 768 && (t.value = 1),
        768 <= n && n < 1300 && (t.value = 50),
        1300 < n && (t.value = 52);
    });
}
