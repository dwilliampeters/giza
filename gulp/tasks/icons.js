const gulp = require("gulp");
const gulpif = require("gulp-if");
const svgstore = require("gulp-svgstore");

const CONFIG = require("../config");

const paths = {
  src: [`${CONFIG.BASE}/icons/*.svg`],
  build: `${CONFIG.DEST_BUILD}/images`,
  prod: `${CONFIG.DEST_PROD}/images`
};

gulp.task("icons", function() {
  return gulp
    .src(paths.src)
    .pipe(svgstore())
    .pipe(gulpif(!global.production, gulp.dest(paths.build)))
    .pipe(gulpif(global.production, gulp.dest(paths.prod)));
});
