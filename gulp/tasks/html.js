"use strict";

var gulp = require("gulp");
var gulpif = require("gulp-if");
var nunjucksRender = require("gulp-nunjucks-render");

const CONFIG = require("../config");

const paths = {
  src: [
    `${CONFIG.BASE}/html/**/*.html`,
    `!${CONFIG.BASE}/html/{components,layouts,shared,macros,data}/**`
  ],
  src_render: [`${CONFIG.BASE}/html`]
};

gulp.task("html", function() {
  return gulp
    .src(paths.src)
    .pipe(nunjucksRender({ path: paths.src_render }))
    .pipe(gulpif(!global.production, gulp.dest(CONFIG.DEST_BUILD)))
    .pipe(gulpif(global.production, gulp.dest(CONFIG.DEST_PROD)));
});
