var docWidth = document.body.clientWidth;
var tabletWidth = 768;
var mobiletWidh = 320;
var progress = document.querySelector(".slider");

if (progress) {
  var btnBefore = progress.querySelector(".slider__progress-button--before");
  var btnAfter = progress.querySelector(".slider__progress-button--after");

  btnBefore.addEventListener("click", function() {
    if (progress.classList.contains("slider__progress--after")) {
      progress.classList.remove("slider_progress--after");
    }
  });

  btnAfter.addEventListener("click", function() {
    if (!progress.classList.contains("slider__progress--after")) {
      progress.classList.add("slider__progress--after");
    }
  });

  if (docWidth >= mobiletWidh) {
    var imgBefore = progress.querySelector(".slider-image__before");
    var imgAfter = progress.querySelector(".slider-image__after");
    var scale = progress.querySelector(".slider__range-wrapper");
    var range = scale.querySelector(".slider__range");

    range.addEventListener("input", function() {
      imgBefore.style.width = 100 - range.value + "%";
      imgAfter.style.width = range.value + "%";
    });

    btnBefore.addEventListener("click", function() {
      imgBefore.style.width = "100%";
      imgAfter.style.width = "0%";
      range.value = 0;
    });

    btnAfter.addEventListener("click", function() {
      imgBefore.style.width = "0%";
      imgAfter.style.width = "100%";
      range.value = 100;
    });
  }
}
