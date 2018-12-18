const gulp = require("gulp");
const clean = require("del").sync;

const CONFIG = require("../config");

gulp.task("clean", function() {
  clean([CONFIG.DEST_BUILD, CONFIG.DEST_PROD]);
});
