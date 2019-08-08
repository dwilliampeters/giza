const gulp = require("gulp");
const gulpSequence = require("gulp-sequence");
const clean = require("del").sync;
const projectPath = require("../lib/projectPath");

gulp.task("migrate", function(cb) {
  paths = {
    src: [
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.finalDest, "**/*.html"),
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.finalDest, "**/*.css"),
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.finalDest, "**/*.js"),
      projectPath(
        PATH_CONFIG.BASE,
        PATH_CONFIG.finalDest,
        "**/*{jpg,png,svg,mp4,webm}"
      )
    ],
    dest: projectPath(PATH_CONFIG.migrateDest)
  };

  clean([projectPath(PATH_CONFIG.migrateDest)], { force: true });
  return gulp.src(paths.src).pipe(gulp.dest(paths.dest));
});
