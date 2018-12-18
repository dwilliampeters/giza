const gulp = require("gulp");
const gulpif = require("gulp-if");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

const CONFIG = require("../config");

const paths = {
  src: [`${CONFIG.BASE}/scss/giza.scss`],
  build: `${CONFIG.DEST_BUILD}/assets/css`,
  prod: `${CONFIG.DEST_PROD}/assets/css`
};

gulp.task("sass");

gulp.task("sass", function() {
  return gulp
    .src(paths.src)
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
          browsers: ["last 2 versions", "ie >= 9", "Android >= 2.3", "ios >= 7"]
        })
      ])
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulpif(!global.production, gulp.dest(paths.build)))
    .pipe(gulpif(global.production, gulp.dest(paths.prod)));
});
