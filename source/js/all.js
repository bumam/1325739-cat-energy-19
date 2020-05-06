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

"use strict";
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

"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}window.matchMedia||(window.matchMedia=function(){var r,e,n,t=window.styleMedia||window.media;return t||(r=document.createElement("style"),e=document.getElementsByTagName("script")[0],r.type="text/css",r.id="matchmediajs-test",e.parentNode.insertBefore(r,e),n="getComputedStyle"in window&&window.getComputedStyle(r,null)||r.currentStyle,t={matchMedium:function(e){var t="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return r.styleSheet?r.styleSheet.cssText=t:r.textContent=t,"1px"===n.width}}),function(e){return{matches:t.matchMedium(e||"all"),media:e||"all"}}}()),function(l,u,e){function t(e){"object"==("undefined"==typeof module?"undefined":_typeof(module))&&"object"==_typeof(module.exports)?module.exports=e:"function"==typeof define&&define.amd&&define("picturefill",function(){return e}),"object"==_typeof(l)&&(l.picturefill=e)}function i(e){for(var t,r,n,i,o=e||{},s=o.elements||d.getAllElements(),a=0,c=s.length;a<c;a++)if(r=(t=s[a]).parentNode,i=n=void 0,"IMG"===t.nodeName.toUpperCase()&&(t[d.ns]||(t[d.ns]={}),o.reevaluate||!t[d.ns].evaluated)){if(r&&"PICTURE"===r.nodeName.toUpperCase()){if(d.removeVideoShim(r),!1===(n=d.getMatch(t,r)))continue}else n=void 0;(r&&"PICTURE"===r.nodeName.toUpperCase()||!d.sizesSupported&&t.srcset&&p.test(t.srcset))&&d.dodgeSrcset(t),n?(i=d.processSourceSet(n),d.applyBestCandidate(i,t)):(i=d.processSourceSet(t),void 0!==t.srcset&&!t[d.ns].srcset||d.applyBestCandidate(i,t)),t[d.ns].evaluated=!0}}var d,p,n,r;function o(e,t,r){t&&e.setAttribute("width",parseInt(t/r,10))}l.HTMLPictureElement?t(function(){}):(u.createElement("picture"),d=l.picturefill||{},p=/\s+\+?\d+(e\d+)?w/,d.ns="picturefill",d.srcsetSupported="srcset"in e,d.sizesSupported="sizes"in e,d.curSrcSupported="currentSrc"in e,d.trim=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},d.makeUrl=(r=u.createElement("a"),function(e){return r.href=e,r.href}),d.restrictsMixedContent=function(){return"https:"===l.location.protocol},d.matchesMedia=function(e){return l.matchMedia&&l.matchMedia(e).matches},d.getDpr=function(){return l.devicePixelRatio||1},d.getWidthFromLength=function(e){var t;if(!e||-1<e.indexOf("%")!=0||!(0<parseFloat(e)||-1<e.indexOf("calc(")))return!1;e=e.replace("vw","%"),d.lengthEl||(d.lengthEl=u.createElement("div"),d.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden",d.lengthEl.className="helper-from-picturefill-js"),d.lengthEl.style.width="0px";try{d.lengthEl.style.width=e}catch(e){}return u.body.appendChild(d.lengthEl),(t=d.lengthEl.offsetWidth)<=0&&(t=!1),u.body.removeChild(d.lengthEl),t},d.detectTypeSupport=function(e,t){var r=new l.Image;return r.onerror=function(){d.types[e]=!1,i()},r.onload=function(){d.types[e]=1===r.width,i()},r.src=t,"pending"},d.types=d.types||{},d.initTypeDetects=function(){d.types["image/jpeg"]=!0,d.types["image/gif"]=!0,d.types["image/png"]=!0,d.types["image/svg+xml"]=u.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),d.types["image/webp"]=d.detectTypeSupport("image/webp","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")},d.verifyTypeSupport=function(e){var t=e.getAttribute("type");if(null===t||""===t)return!0;var r=d.types[t];return"string"==typeof r&&"pending"!==r?(d.types[t]=d.detectTypeSupport(t,r),"pending"):"function"==typeof r?(r(),"pending"):r},d.parseSize=function(e){var t=/(\([^)]+\))?\s*(.+)/g.exec(e);return{media:t&&t[1],length:t&&t[2]}},d.findWidthFromSourceSize=function(e){for(var t,r=d.trim(e).split(/\s*,\s*/),n=0,i=r.length;n<i;n++){var o=r[n],s=d.parseSize(o),a=s.length,c=s.media;if(a&&(!c||d.matchesMedia(c))&&(t=d.getWidthFromLength(a)))break}return t||Math.max(l.innerWidth||0,u.documentElement.clientWidth)},d.parseSrcset=function(e){for(var t=[];""!==e;){var r,n,i=(e=e.replace(/^\s+/g,"")).search(/\s/g),o=null;-1!==i?(","!==(r=e.slice(0,i)).slice(-1)&&""!==r||(r=r.replace(/,+$/,""),o=""),e=e.slice(i+1),null===o&&(e=-1!==(n=e.indexOf(","))?(o=e.slice(0,n),e.slice(n+1)):(o=e,""))):(r=e,e=""),(r||o)&&t.push({url:r,descriptor:o})}return t},d.parseDescriptor=function(e,t){var r=t||"100vw",n=e&&e.replace(/(^\s+|\s+$)/g,""),i=d.findWidthFromSourceSize(r);if(n)for(var o=n.split(" "),s=o.length-1;0<=s;s--){var a,c,l=o[s],u=l&&l.slice(l.length-1);"h"!==u&&"w"!==u||d.sizesSupported?"x"===u&&(c=(a=l&&parseFloat(l,10))&&!isNaN(a)?a:1):c=parseFloat(parseInt(l,10)/i)}return c||1},d.getCandidatesFromSourceSet=function(e,t){for(var r=d.parseSrcset(e),n=[],i=0,o=r.length;i<o;i++){var s=r[i];n.push({url:s.url,resolution:d.parseDescriptor(s.descriptor,t)})}return n},d.dodgeSrcset=function(e){e.srcset&&(e[d.ns].srcset=e.srcset,e.srcset="",e.setAttribute("data-pfsrcset",e[d.ns].srcset))},d.processSourceSet=function(e){var t=e.getAttribute("srcset"),r=e.getAttribute("sizes"),n=[];return"IMG"===e.nodeName.toUpperCase()&&e[d.ns]&&e[d.ns].srcset&&(t=e[d.ns].srcset),t&&(n=d.getCandidatesFromSourceSet(t,r)),n},d.backfaceVisibilityFix=function(e){var t=e.style||{},r="webkitBackfaceVisibility"in t,n=t.zoom;r&&(t.zoom=".999",r=e.offsetWidth,t.zoom=n)},d.setIntrinsicSize=(n={},function(e,t){var r;e[d.ns]&&!l.pfStopIntrinsicSize&&(void 0===e[d.ns].dims&&(e[d.ns].dims=e.getAttribute("width")||e.getAttribute("height")),e[d.ns].dims||(t.url in n?o(e,n[t.url],t.resolution):((r=u.createElement("img")).onload=function(){if(n[t.url]=r.width,!n[t.url])try{u.body.appendChild(r),n[t.url]=r.width||r.offsetWidth,u.body.removeChild(r)}catch(e){}e.src===t.url&&o(e,n[t.url],t.resolution),e=null,r.onload=null,r=null},r.src=t.url)))}),d.applyBestCandidate=function(e,t){var r,n,i;e.sort(d.ascendingSort),i=e[(n=e.length)-1];for(var o=0;o<n;o++)if((r=e[o]).resolution>=d.getDpr()){i=r;break}i&&(i.url=d.makeUrl(i.url),t.src!==i.url&&(d.restrictsMixedContent()&&"http:"===i.url.substr(0,"http:".length).toLowerCase()?void 0!==window.console&&console.warn("Blocked mixed content image "+i.url):(t.src=i.url,d.curSrcSupported||(t.currentSrc=t.src),d.backfaceVisibilityFix(t))),d.setIntrinsicSize(t,i))},d.ascendingSort=function(e,t){return e.resolution-t.resolution},d.removeVideoShim=function(e){var t=e.getElementsByTagName("video");if(t.length){for(var r=t[0],n=r.getElementsByTagName("source");n.length;)e.insertBefore(n[0],r);r.parentNode.removeChild(r)}},d.getAllElements=function(){for(var e=[],t=u.getElementsByTagName("img"),r=0,n=t.length;r<n;r++){var i=t[r];("PICTURE"===i.parentNode.nodeName.toUpperCase()||null!==i.getAttribute("srcset")||i[d.ns]&&null!==i[d.ns].srcset)&&e.push(i)}return e},d.getMatch=function(e,t){for(var r,n=t.childNodes,i=0,o=n.length;i<o;i++){var s=n[i];if(1===s.nodeType){if(s===e)return r;if("SOURCE"===s.nodeName.toUpperCase()){null!==s.getAttribute("src")&&void 0!==("undefined"==typeof console?"undefined":_typeof(console))&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var a=s.getAttribute("media");if(s.getAttribute("srcset")&&(!a||d.matchesMedia(a))){var c=d.verifyTypeSupport(s);if(!0===c){r=s;break}if("pending"===c)return!1}}}}return r},function(){function e(){clearTimeout(r),r=setTimeout(t,60)}function t(){i({reevaluate:!0})}d.initTypeDetects(),i();var r,n=setInterval(function(){return i(),/^loaded|^i|^c/.test(u.readyState)?void clearInterval(n):void 0},250);l.addEventListener?l.addEventListener("resize",e,!1):l.attachEvent&&l.attachEvent("onresize",e)}(),i._=d,t(i))}(window,window.document,new window.Image);
"use strict";
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
