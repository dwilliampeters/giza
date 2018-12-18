const gulp = require("gulp");
const browser = require("browser-sync");
const requireDir = require("require-dir");
const port = process.env.SERVER_PORT || 3000;

const CONFIG = require("./gulp/config");

requireDir("./gulp/tasks");

gulp.task("build", [
  "clean",
  "sass",
  "html",
  "javascript",
  "images",
  "fonts",
  "icons"
]);

gulp.task("serve", ["build"], function() {
  browser.init({ server: "./_build", port: port, open: false });
});

gulp.task("watch", function() {
  gulp.watch(`${CONFIG.BASE}/html/**/*`, ["html", browser.reload]);
  gulp.watch(`${CONFIG.BASE}/scss/**/*`, ["sass", browser.reload]);
  gulp.watch(`${CONFIG.BASE}/js/**/*`, ["javascript", browser.reload]);
  gulp.watch(`${CONFIG.BASE}/images/**/*`, ["images", browser.reload]);
  gulp.watch(`${CONFIG.BASE}/fonts/*`, ["fonts", browser.reload]);
});

gulp.task("default", ["serve", "watch"]);

gulp.task("dist", ["dist"]);
