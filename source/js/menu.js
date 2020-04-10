window.onload = () => {
  var div = document.querySelector(".main-nav--open");
  div.classList.remove("main-nav--open");
};

document.querySelector(".main-nav__btn").onclick = function(event) {
  var show = document.querySelector(".main-nav");
  this.classList.toggle("main-nav__btn--active");
  show.classList.toggle("main-nav--open");
  event.preventDefault();
};
