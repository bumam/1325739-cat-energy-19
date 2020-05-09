if (document.querySelector(".slider")) {
  ("use strict");
  window.addEventListener(
    "orientationchange",
    function () {
      var e;
      window.matchMedia("(orientation: portrait)").matches &&
        window.innerWidth < 768 &&
        (((e = document.createElement("script")).src = "js/menu.js"),
        document.head.appendChild(e)),
        window.matchMedia("(orientation: landscape)").matches &&
          window.innerWidth < 1300 &&
          (((e = document.createElement("script")).src = "js/menu.js"),
          document.head.appendChild(e));
    },
    !1
  );
  var btnBefore,
    btnAfter,
    imgBefore,
    imgAfter,
    scale,
    range,
    bigGradient,
    docWidth = document.body.clientWidth,
    tabletWidth = 768,
    desktoptWidh = 1300,
    progress = document.querySelector(".slider");
  progress &&
    ((btnBefore = progress.querySelector(".slider__progress-button--before")),
    (btnAfter = progress.querySelector(".slider__progress-button--after")),
    btnBefore.addEventListener("click", function () {
      progress.classList.contains("slider__progress--after") &&
        progress.classList.remove("slider_progress--after");
    }),
    btnAfter.addEventListener("click", function () {
      progress.classList.contains("slider__progress--after") ||
        progress.classList.add("slider__progress--after");
    }),
    (imgBefore = progress.querySelector(".slider-image__before")),
    (imgAfter = progress.querySelector(".slider-image__after")),
    (scale = progress.querySelector(".slider__range-wrapper")),
    (range = scale.querySelector(".slider__range")),
    (bigGradient = document.querySelector(".real-cat__gradient")),
    1300 <= docWidth &&
      (setTimeout(function () {
        (progress.style.backgroundImage =
          "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 54%, #ebebeb 54%, #ebebeb 100%)"),
          (progress.style.backgroundPosition = "bottom"),
          (progress.style.backgroundRepeat = "no-repeat"),
          (progress.style.backgroundSize = "100% 64%"),
          console.log("applying slider gradient (desktop)"),
          (bigGradient.style.backgroundImage =
            "linear-gradient(to right,#f2f2f2 0%,#f2f2f2 70%,#ebebeb 70%,#ebebeb 100%)"),
          (bigGradient.style.backgroundPosition = "bottom"),
          (bigGradient.style.backgroundRepeat = "no-repeat"),
          (bigGradient.style.backgroundSize = "100% 78%"),
          console.log("applying big gradient (desktop)");
      }),
      range.addEventListener("input", function () {
        var e = (range.value / 100) * 690,
          t = 690 - e,
          r = 100 - range.value,
          a = range.value;
        a < 3 &&
          ((bigGradient.style.backgroundSize = "0% 0%"),
          (progress.style.backgroundSize = "0% 0%"),
          console.log("clearing big and slider gradient (desktop)")),
          3 < a &&
            ((bigGradient.style.backgroundSize = "100% 78%"),
            (progress.style.backgroundSize = "100% 64%"),
            console.log("applying big and slider gradient again (desktop)")),
          (imgBefore.style.clip = "rect(auto, " + t + "px, auto,auto)"),
          (imgAfter.style.clip = "rect(auto, " + e + "px, auto,auto)"),
          (progress.style.backgroundImage =
            "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 " +
            r +
            "%, #ebebeb " +
            r +
            "%, #ebebeb 100%)");
      }),
      btnBefore.addEventListener("click", function () {
        (imgBefore.style.clip = "rect(auto auto auto auto)"),
          (imgAfter.style.clip = "rect(0 0 0 0)"),
          (range.value = 0),
          (bigGradient.style.backgroundSize = "0% 0%"),
          (progress.style.backgroundImage =
            "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 100%)");
      }),
      btnAfter.addEventListener("click", function () {
        (imgBefore.style.clip = "rect(0 0 0 0)"),
          (imgAfter.style.clip = "rect(auto auto auto auto)"),
          (range.value = 100),
          (bigGradient.style.backgroundSize = "100% 78%"),
          (progress.style.backgroundImage =
            "linear-gradient(to right, #ebebeb 0%, #ebebeb 100%)");
      })),
    tabletWidth <= docWidth &&
      docWidth < desktoptWidh &&
      (setTimeout(function () {
        (progress.style.backgroundImage =
          "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 50%, #ebebeb 50%, #ebebeb 100%)"),
          (progress.style.backgroundPosition = "bottom"),
          (progress.style.backgroundRepeat = "no-repeat"),
          (progress.style.backgroundSize = "100% 73%"),
          console.log("applying gradient (tablet)");
      }),
      range.addEventListener("input", function () {
        var e = (range.value / 100) * 690,
          t = 690 - e,
          r = 100 - range.value,
          a = range.value;
        (progress.style.backgroundImage =
          a < 3
            ? "linear-gradient(to right, #f2f2f2, #f2f2f2)"
            : "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 " +
              r +
              "%, #ebebeb " +
              r +
              "%, #ebebeb 100%)"),
          (imgBefore.style.clip = "rect(auto, " + t + "px, auto,auto)"),
          (imgAfter.style.clip = "rect(auto, " + e + "px, auto,auto)");
      }),
      btnBefore.addEventListener("click", function () {
        (imgBefore.style.clip = "rect(auto auto auto auto)"),
          (imgAfter.style.clip = "rect(0 0 0 0)"),
          (progress.style.backgroundImage =
            "linear-gradient(to right, #f2f2f2, #f2f2f2)"),
          (range.value = 0);
      }),
      btnAfter.addEventListener("click", function () {
        (imgBefore.style.clip = "rect(0 0 0 0)"),
          (imgAfter.style.clip = "rect(auto auto auto auto)"),
          (progress.style.backgroundImage =
            "linear-gradient(to right, #ebebeb, #ebebeb)"),
          (range.value = 100);
      })),
    docWidth < tabletWidth &&
      (range.addEventListener("input", function () {
        (imgBefore.style.width = "100%"),
          (imgAfter.style.width = "100%"),
          0 <= range.value &&
            range.value <= 50 &&
            ((imgBefore.style.clip = "rect(auto auto auto auto)"),
            (imgAfter.style.clip = "rect(0 0 0 0)")),
          51 <= range.value &&
            range.value <= 100 &&
            ((imgBefore.style.clip = "rect(0 0 0 0)"),
            (imgAfter.style.clip = "rect(auto auto auto auto)"));
      }),
      btnBefore.addEventListener("click", function () {
        (range.value = 0),
          (imgBefore.style.width = "100%"),
          (imgAfter.style.width = "0%"),
          (imgBefore.style.clip = "rect(auto auto auto auto)");
      }),
      btnAfter.addEventListener("click", function () {
        (imgBefore.style.width = "0%"),
          (imgAfter.style.width = "100%"),
          (range.value = 100),
          (imgAfter.style.clip = "rect(auto auto auto auto)");
      }))),
    (window.onresize = document.body.clientWidth),
    window.addEventListener("resize", function (e) {
      var t,
        r = document.body.clientWidth,
        o = progress.querySelector(".slider-image__before"),
        i = progress.querySelector(".slider-image__after");
      r < 768 &&
        ((document.querySelector('input[type="range"]').value = 1),
        console.log("resize 320 oRange.value = 1"),
        (o.style.width = "100%"),
        (i.style.width = "0%"),
        (o.style.clip = "rect(auto auto auto auto)"),
        (i.style.clip = "rect(0 0 0 0)"),
        (progress.style.backgroundImage =
          "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 100%)"),
        (progress.style.backgroundPosition = "bottom"),
        console.log("resize 320 full gray"),
        (bigGradient.style.backgroundSize = "0% 0%"),
        console.log("resize 320 big 0%"),
        range.addEventListener("input", function () {
          (o.style.width = "100%"),
            (i.style.width = "100%"),
            (progress.style.backgroundImage =
              "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 100%)"),
            0 <= range.value &&
              range.value <= 50 &&
              ((o.style.clip = "rect(auto auto auto auto)"),
              (i.style.clip = "rect(0 0 0 0)")),
            51 <= range.value &&
              range.value <= 100 &&
              ((o.style.clip = "rect(0 0 0 0)"),
              (i.style.clip = "rect(auto auto auto auto)")),
            (bigGradient.style.backgroundSize = "0% 0%");
        }),
        btnBefore.addEventListener("click", function () {
          (o.style.width = "100%"),
            (i.style.width = "0%"),
            (o.style.clip = "rect(auto auto auto auto)"),
            (range.value = 0),
            (bigGradient.style.backgroundSize = "0% 0%");
        }),
        btnAfter.addEventListener("click", function () {
          (o.style.width = "0%"),
            (i.style.width = "100%"),
            (i.style.clip = "rect(auto auto auto auto)"),
            (progress.style.backgroundImage =
              "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 100%)"),
            (range.value = 100),
            (bigGradient.style.backgroundSize = "0% 0%");
        })),
        768 <= r &&
          r < 1300 &&
          ((o.style.clip = "rect(auto, 350px, auto, auto)"),
          (i.style.clip = "rect(auto, 350px, auto, auto)"),
          (o.style.width = "100%"),
          (i.style.width = "100%"),
          (bigGradient.style.backgroundSize = "0% 0%"),
          console.log("resize 768 big gradient 0%"),
          (progress.style.backgroundImage =
            "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 50%, #ebebeb 50%, #ebebeb 100%)"),
          (progress.style.backgroundSize = "100% 73%"),
          (progress.style.backgroundPosition = "bottom"),
          (progress.style.backgroundRepeat = "no-repeat"),
          console.log("resize 768  #f2f2f2 50%, #ebebeb 50% size = 100% 73%"),
          range.addEventListener("input", function () {
            var e = (range.value / 100) * 690,
              t = 690 - e,
              r = range.value,
              a = 100 - range.value;
            (progress.style.backgroundImage =
              r < 3
                ? "linear-gradient(to right, #f2f2f2, #f2f2f2)"
                : "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 " +
                  a +
                  "%, #ebebeb " +
                  a +
                  "%, #ebebeb 100%)"),
              (o.style.clip = "rect(auto, " + t + "px, auto,auto)"),
              (i.style.clip = "rect(auto, " + e + "px, auto,auto)"),
              (bigGradient.style.backgroundSize = "0% 0%"),
              (progress.style.backgroundSize = "100% 73%"),
              (o.style.width = "100%"),
              (i.style.width = "100%"),
              console.log("resize 768 img.style.width = 100%");
          }),
          btnBefore.addEventListener("click", function () {
            (o.style.clip = "rect(auto auto auto auto)"),
              (i.style.clip = "rect(0 0 0 0)"),
              (progress.style.backgroundImage =
                "linear-gradient(to right, #f2f2f2, #f2f2f2)"),
              (range.value = 0);
          }),
          btnAfter.addEventListener("click", function () {
            (o.style.clip = "rect(0 0 0 0)"),
              (i.style.clip = "rect(auto auto auto auto)"),
              (progress.style.backgroundImage =
                "linear-gradient(to right, #ebebeb, #ebebeb)"),
              (progress.style.backgroundSize = "100% 73%"),
              (bigGradient.style.backgroundSize = "0% 0%"),
              (range.value = 100);
          })),
        1300 <= r &&
          ((t = range.value),
          (o.style.clip = "rect(auto, 360px, auto, auto)"),
          (i.style.clip = "rect(auto, 330px, auto, auto)"),
          setTimeout(function () {
            (progress.style.backgroundImage =
              "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 54%, #ebebeb 54%, #ebebeb 100%)"),
              (progress.style.backgroundPosition = "bottom"),
              (progress.style.backgroundRepeat = "no-repeat"),
              (progress.style.backgroundSize = "100% 64%"),
              console.log("resize 1300 applying slider gradient "),
              (bigGradient.style.backgroundImage =
                "linear-gradient(to right,#f2f2f2 0%,#f2f2f2 70%,#ebebeb 70%,#ebebeb 100%)"),
              (bigGradient.style.backgroundPosition = "bottom"),
              (bigGradient.style.backgroundRepeat = "no-repeat"),
              (bigGradient.style.backgroundSize = "100% 78%"),
              console.log("resize 1300  big gradient ");
          }),
          range.addEventListener("input", function () {
            var e = (range.value / 100) * 690,
              t = 690 - e,
              r = 100 - range.value;
            range.value < 3
              ? (progress.style.backgroundImage =
                  "linear-gradient(to right, #f2f2f2, #f2f2f2)")
              : ((progress.style.backgroundImage =
                  "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 " +
                  r +
                  "%, #ebebeb " +
                  r +
                  "%, #ebebeb 100%)"),
                (bigGradient.style.backgroundSize = "100% 78%")),
              (progress.style.backgroundSize = "100% 64%"),
              (o.style.clip = "rect(auto, " + t + "px, auto,auto)"),
              (i.style.clip = "rect(auto, " + e + "px, auto,auto)");
          }),
          t < 3 &&
            ((bigGradient.style.backgroundSize = "0% 0%"),
            (progress.style.backgroundSize = "0% 0%"),
            console.log("resize 1300   clearing big and slider gradient")),
          3 < t &&
            ((bigGradient.style.backgroundSize = "100% 78%"),
            (progress.style.backgroundSize = "100% 64%"),
            console.log("resize 1300  applying big and slider gradient again")),
          btnBefore.addEventListener("click", function () {
            (o.style.clip = "rect(auto auto auto auto)"),
              (i.style.clip = "rect(0 0 0 0)"),
              (range.value = 0),
              (bigGradient.style.backgroundSize = "0% 0%"),
              (progress.style.backgroundImage =
                "linear-gradient(to right, #f2f2f2 0%, #f2f2f2 100%)"),
              (progress.style.backgroundSize = "100% 64%");
          }),
          btnAfter.addEventListener("click", function () {
            (o.style.clip = "rect(0 0 0 0)"),
              (i.style.clip = "rect(auto auto auto auto)"),
              (range.value = 100),
              (bigGradient.style.backgroundSize = "100% 78%"),
              (progress.style.backgroundImage =
                "linear-gradient(to right, #ebebeb 0%, #ebebeb 100%)"),
              (progress.style.backgroundSize = "100% 64%");
          }));
    });
}
