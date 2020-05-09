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
var webp = require("gulp-webp");
var watch = require("gulp-watch");

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

gulp.task("css", function () {
  return gulp
    .src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(gulpIf(isDev, sourcemap.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulpIf(!isDev, cssnano()))
    .pipe(rename("style.min.css"))
    .pipe(gulpIf(!isDev, sourcemap.write(".")))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("js", function () {
  return gulp
    .src(["./node_modules/picturefill/dist/picturefill.js", "source/js/*.js"])
    .pipe(babel())
    .pipe(gulpIf(isDev, sourcemap.init()))
    .pipe(concat("bundle.min.js"))
    .pipe(gulpIf(isDev, sourcemap.write(".")))
    .pipe(gulpIf(!isDev, uglify()))
    .pipe(gulp.dest("build/js"));
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

gulp.task("webp", function () {
  return gulp
    .src("source/img/**/*.{png,jpg}")
    .pipe(webp({ quality: 80 }))
    .pipe(gulp.dest("source/img"));
});

gulp.task("copy", function () {
  return gulp
    .src(
      [
        "source/fonts/**/*.{woff,woff2}",
        "source/img/**",
        "source/**.html",
        "!source/img/icon-*.svg",
      ],
      {
        base: "source",
      }
    )
    .pipe(gulp.dest("build"));
});

gulp.task("copy:fonts", () => {
  return src("source/fonts/*.{woff,woff2}")
    .pipe(newer("build/fonts"))
    .pipe(dest("build/fonts"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("newimages", function () {
  return gulp
    .src("source/img/**/*.{svg,jpg,png}")
    .pipe(newer("build/img"))
    .pipe(gulpIf(!isDev, imagemin()))
    .pipe(gulp.dest("build/img"));
});

gulp.task("image-min", () => {
  return gulp
    .src("build/img/**/*.{svg,jpg,png}")
    .pipe(imagemin([imagemin.optipng({ optimizationLevel: 3 })]))
    .pipe(gulp.dest("build/img"));
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
});

gulp.task("refresh", (done) => {
  server.reload();
  done();
});

gulp.task("watch", function () {
  gulp.watch("source/sass/**/*.scss", gulp.series("css"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
  gulp.watch("source/js/**/*.js", gulp.series("js"));
  gulp.watch("source/fonts/*.{woff,woff2}", gulp.series("copy:fonts"));
  gulp.watch("source/img/**/*.{jpg,png}", gulp.series("newimages"));
  gulp.watch("source/img/icon-*.svg", gulp.series("sprite"));
});

gulp.task(
  "build",
  gulp.series(
    "clean",
    "image-min",
    "sprite",
    gulp.parallel("css", "js", "copy"),
    "html",
    "newimages"
  )
);
gulp.task(
  "development",
  gulp.series("build", gulp.parallel("server", "watch"))
);
gulp.task("default", gulp.series("development"));
