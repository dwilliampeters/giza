var gulp = require("gulp");
var browser = require("browser-sync");
var requireDir = require("require-dir");
var port = process.env.SERVER_PORT || 3000;

requireDir("./gulp");

gulp.task("build", ["clean", "sass", "javascript", "html"]);

gulp.task("serve", ["build"], function() {
  browser.init({ server: "./_build", port: port, open: false });
});

gulp.task("watch", function() {
  gulp.watch("./scss/**/*", ["sass", browser.reload]);
  gulp.watch("./js/**/*", ["javascript", browser.reload]);
  gulp.watch("./html/**/*", ["html", browser.reload]);
});

gulp.task("default", ["serve", "watch"]);
