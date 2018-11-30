"use strict";

var gulp = require("gulp");
var nunjucksRender = require("gulp-nunjucks-render");

gulp.task("html", function() {
    return gulp
    .src([
      "./html/**/*.html",
      "!./html/{components,layouts,shared,macros,data}/**"
    ])
    .pipe(nunjucksRender({ path: ["./html"] }))
    .pipe(gulp.dest("./_build"));
});