var gulp = require("gulp");
var svgstore = require("gulp-svgstore");

gulp.task("icons", function() {
  return gulp
    .src("./icons/*.svg")
    .pipe(svgstore())
    .pipe(gulp.dest("./_build/images/"));
});
