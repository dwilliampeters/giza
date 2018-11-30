var gulp = require("gulp");
var webpack = require("webpack");
var webpackStream = require("webpack-stream");
var path = require("path");

gulp.task("js", function() {
  return gulp
    .src("./js/giza.js")
    .pipe(gulp.dest("./_build/js"));
});