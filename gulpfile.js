"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var cssnano = require("gulp-cssnano");
var svgstore = require("gulp-svgstore");
var del = require("del");
var gulpIf = require("gulp-if");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var newer = require("gulp-newer");
var babel = require("gulp-babel");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");

const isProduction = !process.env.NODE_ENV || process.env.NODE_ENV == "production";

gulp.task("css", function () {
  return gulp
    .src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(gulpIf(isProduction, sourcemap.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulpIf(isProduction, cssnano()))
    .pipe(gulpIf(isProduction, rename("style.min.css")))
    .pipe(gulpIf(isProduction, sourcemap.write(".")))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("sprite", function () {
  return gulp
    .src("source/img/icon-*.svg")
    .pipe(
      svgstore({
        inlineSvg: true,
      })
    )
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("source/img"));
});

gulp.task("html", function () {
  return gulp
    .src("source/*.html")
    .pipe(posthtml([include()]))
    .pipe(gulp.dest("source"));
});

gulp.task("copy", function () {
  return gulp
    .src(
      [
        "source/fonts/**/*.{woff,woff2}",
        "source/img/**",
        "source/js/all.js",
        "source/js/map.js",
        "!source/js",
        "source/*.ico",
        "source/**.html",
      ],
      {
        base: "source",
      }
    )
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("clean-script", function () {
  return del("source/js/all.js");
});

gulp.task("compress", function () {
  return gulp
    .src("build/**/*.js")
    .pipe(babel())
    .pipe(gulpIf(isProduction, uglify()))
    .pipe(
      gulp.dest(function (file) {
        return file.base;
      })
    );
});

gulp.task("scripts", function () {
  return gulp
    .src(["source/**/*.js", "!source/js/map.js"])
    .pipe(gulpIf(isProduction, concat("all.js")))
    .pipe(gulp.dest("source/js"));
});

gulp.task("newimages", function () {
  return gulp
    .src("source/img/**/*.{svg,jpg,png}")
    .pipe(newer("source/img"))
    .pipe(imagemin())
    .pipe(gulp.dest("source/img"));
});

gulp.task("default", function () {
  gulp.watch("source/img/**/*.{svg,jpg,png}", ["newimages"]);
});

gulp.task("image-min", () => {
  return gulp
    .src("source/img/**/*.{svg,jpg,png}")
    .pipe(imagemin([imagemin.optipng({ optimizationLevel: 3 })]))
    .pipe(gulp.dest("source/img"));
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false,
    index: "index.html",
  });

  gulp.watch("source/sass/**/*.scss", gulp.series("css"));
  gulp.watch("source/img/icon-*.svg", gulp.series("sprite"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task(
  "build",
  gulp.series(
    "clean",
    "clean-script",
    "scripts",
    "sprite",
    "copy",
    "compress",
    "css",
    "newimages"
  )
);
gulp.task("start", gulp.series("build", "server"));
