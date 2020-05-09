"use strict";
(window.onload = function () {
  document.querySelector(".main-nav--open").classList.remove("main-nav--open");
}),
  (document.querySelector(".main-nav__btn").onclick = function (n) {
    var e = document.querySelector(".main-nav");
    this.classList.toggle("main-nav__btn--active"),
      e.classList.toggle("main-nav--open"),
      n.preventDefault();
  }),
  window.addEventListener("resize", function (n) {
    docWidth < tabletWidth &&
      (document
        .querySelector(".main-nav--open")
        .classList.remove("main-nav--open"),
      (document.querySelector(".main-nav__btn").onclick = function (n) {
        var e = document.querySelector(".main-nav");
        this.classList.toggle("main-nav__btn--active"),
          e.classList.toggle("main-nav--open"),
          n.preventDefault();
      }));
  });
