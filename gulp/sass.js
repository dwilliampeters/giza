"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");

gulp.task("sass");

gulp.task("sass", function() {
  return gulp
    .src(["./scss/giza.scss"])
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(
      sass({
        includePaths: ["node_modules", "scss"]
      }).on("error", sass.logError)
    )
    .pipe(
      postcss([
        autoprefixer({
          browsers: ["last 2 versions",
          "ie >= 9",
          "Android >= 2.3",
          "ios >= 7"]
        })
      ])
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./_build/css"));
});