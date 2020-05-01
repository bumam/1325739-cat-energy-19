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
var desktoptWidh = 1300;
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

  var imgBefore = progress.querySelector(".slider-image__before");
  var imgAfter = progress.querySelector(".slider-image__after");
  var scale = progress.querySelector(".slider__range-wrapper");
  var range = scale.querySelector(".slider__range");
  var bigGradient = document.querySelector(".real-cat__gradient");

  // Desktop
  if (docWidth >= 1300) {
    // градиет связывается сo значением рэнжа
    setTimeout(function() {
      progress.style.backgroundImage =
        "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 54%, #ebebeb 54%, #ebebeb 100%)";
      progress.style.backgroundPosition = "bottom";
      progress.style.backgroundRepeat = "no-repeat";
      progress.style.backgroundSize = "100% 64%";

      console.log("applying slider gradient (desktop)");

      bigGradient.style.backgroundImage =
        "linear-gradient(to right,#f2f2f2 0%,#f2f2f2 70%,#ebebeb 70%,#ebebeb 100%)";
      bigGradient.style.backgroundPosition = "bottom";
      bigGradient.style.backgroundRepeat = "no-repeat";
      bigGradient.style.backgroundSize = "100% 78%";

      console.log("applying big gradient (desktop)");
    });

    // котики связываются с рэнжеми с градиентом
    range.addEventListener("input", function() {
      const afr = 690 * (range.value / 100);
      const bfr = 690 - afr;
      const perc = 100 - range.value;
      const position = range.value;

      if (position < 3) {
        bigGradient.style.backgroundSize = "0% 0%";
        progress.style.backgroundSize = "0% 0%";
        console.log("clearing big and slider gradient (desktop)");
      }
      if (position > 3) {
        bigGradient.style.backgroundSize = "100% 78%";
        progress.style.backgroundSize = "100% 64%";
        console.log("applying big and slider gradient again (desktop)");
      }

      imgBefore.style.clip = "rect(auto, " + bfr + "px, auto,auto)";
      imgAfter.style.clip = "rect(auto, " + afr + "px, auto,auto)";

      progress.style.backgroundImage =
        "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 " +
        perc +
        "%, #ebebeb " +
        perc +
        "%, #ebebeb 100%)";
    });

    // кнопки Было/Стало
    btnBefore.addEventListener("click", function() {
      imgBefore.style.clip = "rect(auto auto auto auto)";
      imgAfter.style.clip = "rect(0 0 0 0)";
      range.value = 0;
      bigGradient.style.backgroundSize = "0% 0%";
      progress.style.backgroundImage = "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 100%)";
    });

    btnAfter.addEventListener("click", function() {
      imgBefore.style.clip = "rect(0 0 0 0)";
      imgAfter.style.clip = "rect(auto auto auto auto)";
      range.value = 100;
      bigGradient.style.backgroundSize = "100% 78%";
      progress.style.backgroundImage = "linear-gradient(to right, #ebebeb 0%, #ebebeb 100%)";
    });
  }

  // Tablet
  if (docWidth >= tabletWidth && docWidth < desktoptWidh) {
    // градиет появляется и  связывается с рэнжем
    setTimeout(function() {
      progress.style.backgroundImage =
        "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 50%, #ebebeb 50%, #ebebeb 100%)";
      progress.style.backgroundPosition = "bottom";
      progress.style.backgroundRepeat = "no-repeat";
      progress.style.backgroundSize = "100% 73%";

      console.log("applying gradient (tablet)");
    });

    // котики связываются с рэнжем
    range.addEventListener("input", function() {
      const afr = 690 * (range.value / 100);
      const bfr = 690 - afr;
      const perc = 100 - range.value;
      const position = range.value;

      if (position < 3) {
        progress.style.backgroundImage = "linear-gradient(to right, #f2f2f2, #f2f2f2)";
      } else {
        progress.style.backgroundImage =
          "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 " +
          perc +
          "%, #ebebeb " +
          perc +
          "%, #ebebeb 100%)";
      }

      imgBefore.style.clip = "rect(auto, " + bfr + "px, auto,auto)";
      imgAfter.style.clip = "rect(auto, " + afr + "px, auto,auto)";
    });

    btnBefore.addEventListener("click", function() {
      imgBefore.style.clip = "rect(auto auto auto auto)";
      imgAfter.style.clip = "rect(0 0 0 0)";
      range.value = 0;
    });

    btnAfter.addEventListener("click", function() {
      imgBefore.style.clip = "rect(0 0 0 0)";
      imgAfter.style.clip = "rect(auto auto auto auto)";
      range.value = 100;
    });
  }

  // Mobile

  if (docWidth < tabletWidth) {
    range.addEventListener("input", function() {
      imgBefore.style.width = "100%";
      imgAfter.style.width = "100%";

      if (range.value >= 0 && range.value <= 50) {
        imgBefore.style.clip = "rect(auto auto auto auto)";
        imgAfter.style.clip = "rect(0 0 0 0)";
      }
      if (range.value >= 51 && range.value <= 100) {
        imgBefore.style.clip = "rect(0 0 0 0)";
        imgAfter.style.clip = "rect(auto auto auto auto)";
      }
    });

    btnBefore.addEventListener("click", function() {
      range.value = 0;
      imgBefore.style.width = "100%";
      imgAfter.style.width = "0%";
      imgBefore.style.clip = "rect(auto auto auto auto)";
    });

    btnAfter.addEventListener("click", function() {
      imgBefore.style.width = "0%";
      imgAfter.style.width = "100%";
      range.value = 100;
      imgAfter.style.clip = "rect(auto auto auto auto)";
    });
  }
}

window.onresize = document.body.clientWidth;

window.addEventListener("resize", function(event) {
  var docWidth = document.body.clientWidth;
  var imgBefore = progress.querySelector(".slider-image__before");
  var imgAfter = progress.querySelector(".slider-image__after");

  if (docWidth < 768) {
    var oRange = document.querySelector('input[type="range"]');
    oRange.value = 1;
    console.log("resize 320 oRange.value = 1");

    imgBefore.style.width = "100%";
    imgAfter.style.width = "0%";
    imgBefore.style.clip = "rect(auto auto auto auto)";
    imgAfter.style.clip = "rect(0 0 0 0)";

    progress.style.backgroundImage = "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 100%)";
    progress.style.backgroundPosition = "bottom";

    console.log("resize 320 full gray");

    bigGradient.style.backgroundSize = "0% 0%";
    console.log("resize 320 big 0%");

    range.addEventListener("input", function() {
      imgBefore.style.width = "100%";
      imgAfter.style.width = "100%";
      progress.style.backgroundImage = "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 100%)";

      if (range.value >= 0 && range.value <= 50) {
        imgBefore.style.clip = "rect(auto auto auto auto)";
        imgAfter.style.clip = "rect(0 0 0 0)";
      }
      if (range.value >= 51 && range.value <= 100) {
        imgBefore.style.clip = "rect(0 0 0 0)";
        imgAfter.style.clip = "rect(auto auto auto auto)";
      }

      bigGradient.style.backgroundSize = "0% 0%";
    });

    btnBefore.addEventListener("click", function() {
      imgBefore.style.width = "100%";
      imgAfter.style.width = "0%";
      imgBefore.style.clip = "rect(auto auto auto auto)";
      range.value = 0;
      bigGradient.style.backgroundSize = "0% 0%";
    });

    btnAfter.addEventListener("click", function() {
      imgBefore.style.width = "0%";
      imgAfter.style.width = "100%";
      imgAfter.style.clip = "rect(auto auto auto auto)";
      progress.style.backgroundImage = "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 100%)";
      range.value = 100;
      bigGradient.style.backgroundSize = "0% 0%";
    });
  }

  if (docWidth >= 768 && docWidth < 1300) {
    imgBefore.style.clip = "rect(auto, 350px, auto, auto)";
    imgAfter.style.clip = "rect(auto, 350px, auto, auto)";

    bigGradient.style.backgroundSize = "0% 0%";
    console.log("resize 768 big gradient 0%");

    progress.style.backgroundImage =
      "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 50%, #ebebeb 50%, #ebebeb 100%)";
    progress.style.backgroundSize = "100% 73%";
    progress.style.backgroundPosition = "bottom";
    progress.style.backgroundRepeat = "no-repeat";
    console.log("resize 768  #f2f2f2 50%, #ebebeb 50% size = 100% 73%");

    range.addEventListener("input", function() {
      const afr = 690 * (range.value / 100);
      const bfr = 690 - afr;
      const position = range.value;
      const perc = 100 - range.value;

      if (position < 3) {
        progress.style.backgroundImage = "linear-gradient(to right, #f2f2f2, #f2f2f2)";
      } else {
        progress.style.backgroundImage =
          "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 " +
          perc +
          "%, #ebebeb " +
          perc +
          "%, #ebebeb 100%)";
      }

      imgBefore.style.clip = "rect(auto, " + bfr + "px, auto,auto)";
      imgAfter.style.clip = "rect(auto, " + afr + "px, auto,auto)";

      bigGradient.style.backgroundSize = "0% 0%";
      progress.style.backgroundSize = "100% 73%";

      imgBefore.style.width = "100%";
      imgAfter.style.width = "100%";
      console.log("resize 768 img.style.width = 100%");
    });

    btnBefore.addEventListener("click", function() {
      imgBefore.style.clip = "rect(auto auto auto auto)";
      imgAfter.style.clip = "rect(0 0 0 0)";
      progress.style.backgroundImage = "linear-gradient(to right, #f2f2f2, #f2f2f2)";
      range.value = 0;
    });

    btnAfter.addEventListener("click", function() {
      imgBefore.style.clip = "rect(0 0 0 0)";
      imgAfter.style.clip = "rect(auto auto auto auto)";
      progress.style.backgroundImage = "linear-gradient(to right, #ebebeb, #ebebeb)";
      progress.style.backgroundSize = "100% 73%";
      bigGradient.style.backgroundSize = "0% 0%";
      range.value = 100;
    });
  }

  if (docWidth >= 1300) {
    const position = range.value;

    imgBefore.style.clip = "rect(auto, 360px, auto, auto)";
    imgAfter.style.clip = "rect(auto, 330px, auto, auto)";

    setTimeout(function() {
      progress.style.backgroundImage =
        "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 54%, #ebebeb 54%, #ebebeb 100%)";
      progress.style.backgroundPosition = "bottom";
      progress.style.backgroundRepeat = "no-repeat";
      progress.style.backgroundSize = "100% 64%";

      console.log("resize 1300 applying slider gradient ");

      bigGradient.style.backgroundImage =
        "linear-gradient(to right,#f2f2f2 0%,#f2f2f2 70%,#ebebeb 70%,#ebebeb 100%)";
      bigGradient.style.backgroundPosition = "bottom";
      bigGradient.style.backgroundRepeat = "no-repeat";
      bigGradient.style.backgroundSize = "100% 78%";

      console.log("resize 1300  big gradient ");
    });

    range.addEventListener("input", function() {
      const afr = 690 * (range.value / 100);
      const bfr = 690 - afr;
      const perc = 100 - range.value;
      const position = range.value;

      if (position < 3) {
        progress.style.backgroundImage = "linear-gradient(to right, #f2f2f2, #f2f2f2)";
      } else {
        progress.style.backgroundImage =
          "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 " +
          perc +
          "%, #ebebeb " +
          perc +
          "%, #ebebeb 100%)";
        bigGradient.style.backgroundSize = "100% 78%";
      }

      progress.style.backgroundSize = "100% 64%";

      imgBefore.style.clip = "rect(auto, " + bfr + "px, auto,auto)";
      imgAfter.style.clip = "rect(auto, " + afr + "px, auto,auto)";
    });

    if (position < 3) {
      bigGradient.style.backgroundSize = "0% 0%";
      progress.style.backgroundSize = "0% 0%";
      console.log("resize 1300   clearing big and slider gradient");
    }
    if (position > 3) {
      bigGradient.style.backgroundSize = "100% 78%";
      progress.style.backgroundSize = "100% 64%";
      console.log("resize 1300  applying big and slider gradient again");
    }

    btnBefore.addEventListener("click", function() {
      imgBefore.style.clip = "rect(auto auto auto auto)";
      imgAfter.style.clip = "rect(0 0 0 0)";
      range.value = 0;
      bigGradient.style.backgroundSize = "0% 0%";
      progress.style.backgroundImage = "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 100%)";
      progress.style.backgroundSize = "100% 64%";
    });

    btnAfter.addEventListener("click", function() {
      imgBefore.style.clip = "rect(0 0 0 0)";
      imgAfter.style.clip = "rect(auto auto auto auto)";
      range.value = 100;
      bigGradient.style.backgroundSize = "100% 78%";
      progress.style.backgroundImage = "linear-gradient(to right, #ebebeb 0%, #ebebeb 100%)";
      progress.style.backgroundSize = "100% 64%";
    });
  }
});
