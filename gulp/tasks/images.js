const gulp = require("gulp");
const gulpif = require("gulp-if");

const CONFIG = require("../config");

const paths = {
  src: [`${CONFIG.BASE}/images/**/*{jpg,png,svg}`],
  build: `${CONFIG.DEST_BUILD}/images`,
  prod: `${CONFIG.DEST_PROD}/images`
};

gulp.task("images", function() {
  return gulp
    .src(paths.src)
    .pipe(gulpif(!global.production, gulp.dest(paths.build)))
    .pipe(gulpif(global.production, gulp.dest(paths.prod)));
});
