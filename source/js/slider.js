window.addEventListener(
  "orientationchange",
  function() {
    if (window.matchMedia("(orientation: portrait)").matches) {
      // Режим PORTRAIT (книжный)
      if (window.innerWidth < 768) {
        var script = document.createElement("script");
        script.src = "js/menu.js";
        document.head.appendChild(script);
      }
    }

    if (window.matchMedia("(orientation: landscape)").matches) {
      // режим LANDSCAPE (альбомный)
      if (window.innerWidth < 1300) {
        var script = document.createElement("script");
        script.src = "js/menu.js";
        document.head.appendChild(script);
      }
    }
  },
  false
);

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

  if (docWidth >= tabletWidth) {
    var imgBefore = progress.querySelector(".slider-image__before");
    var imgAfter = progress.querySelector(".slider-image__after");
    var scale = progress.querySelector(".slider__range-wrapper");
    var range = scale.querySelector(".slider__range");
    var progress = document.querySelector(".slider");

    // градиет связывается с рэнжем
    setTimeout(function() {
      if (docWidth >= tabletWidth && docWidth < 1300) {
        progress.style.backgroundImage =
          "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 50%, #ebebeb 50%, #ebebeb 100%)";
      }
      if (docWidth >= 1300) {
        progress.style.backgroundImage =
          "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 54%, #ebebeb 54%, #ebebeb 100%)";
      }

      progress.style.backgroundPosition = "bottom";
      progress.style.backgroundRepeat = "no-repeat";

      console.log("applying gradient");

      progress.style.backgroundSize = "0% 0%";

      if (docWidth >= tabletWidth && docWidth < 1300) {
        progress.style.backgroundSize = "100% 73%";
      }
      if (docWidth >= 1300) {
        progress.style.backgroundSize = "100% 64%";
      }
    });

    // котики связываются с рэнжем
    range.addEventListener("input", function() {
      const afr = 690 * (range.value / 100);
      const bfr = 690 - afr;
      const perc = 100 - range.value;

      imgBefore.style.clip = "rect(0, " + bfr + "px, auto, 0)";
      imgAfter.style.clip = "rect(0, " + afr + "px, auto, 0)";

      progress.style.backgroundImage =
        "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 " +
        perc +
        "%, #ebebeb " +
        perc +
        "%, #ebebeb 100%)";
    });

    btnBefore.addEventListener("click", function() {
      imgBefore.style.clip = "rect(auto auto auto auto)";
      imgAfter.style.clip = "rect(0 0 0 0)";
      range.value = 0;
      progress.style.backgroundImage =
        "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 100%)";
    });

    btnAfter.addEventListener("click", function() {
      imgBefore.style.clip = "rect(0 0 0 0)";
      imgAfter.style.clip = "rect(auto auto auto auto)";
      range.value = 100;
      progress.style.backgroundImage =
        "linear-gradient(to right, #ebebeb 0%, #ebebeb 100%)";
    });
  }

  // на мобильной версии котики перелючаются только кнопками и максимальными значениями range.value
  if (docWidth < tabletWidth) {
    var imgBefore = progress.querySelector(".slider-image__before");
    var imgAfter = progress.querySelector(".slider-image__after");
    var scale = progress.querySelector(".slider__range-wrapper");
    var range = scale.querySelector(".slider__range");

    range.addEventListener("input", function() {
      if (range.value == 0 || range.value == 1) {
        imgBefore.style.width = "auto";
        imgAfter.style.width = "0%";
      }
      if (range.value == 100) {
        imgBefore.style.width = "0%";
        imgAfter.style.width = "auto";
      }
    });

    btnBefore.addEventListener("click", function() {
      range.value = 0;
      imgBefore.style.width = "auto";
      imgAfter.style.width = "0%";
    });

    btnAfter.addEventListener("click", function() {
      imgBefore.style.width = "0%";
      imgAfter.style.width = "auto";
      range.value = 100;
    });
  }
}

// события при изменении размера области отображения
window.addEventListener("resize", function(event) {
  var progress = document.querySelector(".slider");
  var docWidth = document.body.clientWidth;
  var tabletWidth = 768;

  if (docWidth >= tabletWidth && docWidth < 1300) {
    progress.style.backgroundImage =
      "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 50%, #ebebeb 50%, #ebebeb 100%)";
  }
  if (docWidth >= 1300) {
    progress.style.backgroundImage =
      "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 54%, #ebebeb 54%, #ebebeb 100%)";
  }

  if (docWidth >= tabletWidth && docWidth < 1300) {
    progress.style.backgroundSize = "100% 73%";
  }

  if (docWidth >= 1300) {
    progress.style.backgroundSize = "100% 64%";
  }

  if (docWidth < tabletWidth) {
    progress.style.backgroundSize = "0% 0%";
  }
  if (docWidth >= tabletWidth) {
    imgBefore.style.width = "auto";
    imgAfter.style.width = "auto";

    range.addEventListener("input", function() {
      const afr = 690 * (range.value / 100);
      const bfr = 690 - afr;
      const perc = 100 - range.value;

      imgBefore.style.clip = "rect(0, " + bfr + "px, auto, 0)";
      imgAfter.style.clip = "rect(0, " + afr + "px, auto, 0)";

      progress.style.backgroundImage =
        "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 " +
        perc +
        "%, #ebebeb " +
        perc +
        "%, #ebebeb 100%)";
    });

    btnBefore.addEventListener("click", function() {
      imgBefore.style.clip = "rect(auto auto auto auto)";
      imgAfter.style.clip = "rect(0 0 0 0)";
      range.value = 0;
      progress.style.backgroundImage =
        "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 100%)";
    });

    btnAfter.addEventListener("click", function() {
      imgBefore.style.clip = "rect(0 0 0 0)";
      imgAfter.style.clip = "rect(auto auto auto auto)";
      range.value = 100;
      progress.style.backgroundImage =
        "linear-gradient(to right, #ebebeb 0%, #ebebeb 100%)";
    });
  }

  if (docWidth < tabletWidth) {
    range.addEventListener("input", function() {
      if (range.value == 0 || range.value == 1) {
        imgBefore.style.width = "auto";
        imgAfter.style.width = "0%";
      }
      if (range.value == 100) {
        imgBefore.style.width = "0%";
        imgAfter.style.width = "auto";
      }
    });

    btnBefore.addEventListener("click", function() {
      range.value = 0;
      imgBefore.style.width = "auto";
      imgAfter.style.width = "0%";
    });

    btnAfter.addEventListener("click", function() {
      imgBefore.style.width = "0%";
      imgAfter.style.width = "auto";
      range.value = 100;
    });
  }
});
