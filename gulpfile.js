const gulp = require("gulp");
const gulpif = require("gulp-if");
const gulpSequence = require("gulp-sequence");
const path = require("path");
const clean = require("del").sync;
const nunjucksRender = require("gulp-nunjucks-render");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const svgstore = require("gulp-svgstore");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const browser = require("browser-sync");
const port = process.env.SERVER_PORT || 3000;

const CONFIG = require("./config");

let production = false;

const html_paths = {
  src: [
    `${CONFIG.BASE}/html/**/*.html`,
    `!${CONFIG.BASE}/html/{components,layouts,shared,macros,data}/**`
  ],
  src_render: [`${CONFIG.BASE}/html`]
};

const sass_paths = {
  src: [`${CONFIG.BASE}/scss/giza.scss`],
  build: `${CONFIG.DEST_BUILD}/css`,
  prod: `${CONFIG.DEST_PROD}/css`
};

const js_paths = {
  src: [`${CONFIG.BASE}/js/giza.js`],
  build: `${CONFIG.DEST_BUILD}/js`,
  prod: `${CONFIG.DEST_PROD}/js`
};

const images_paths = {
  src: [`${CONFIG.BASE}/images/**/*{jpg,png,svg}`],
  build: `${CONFIG.DEST_BUILD}/images`,
  prod: `${CONFIG.DEST_PROD}/images`
};

const fonts_paths = {
  src: [`${CONFIG.BASE}/fonts/**/*`],
  build: `${CONFIG.DEST_BUILD}/fonts`,
  prod: `${CONFIG.DEST_PROD}/fonts`
};

const icons_paths = {
  src: [`${CONFIG.BASE}/icons/*.svg`],
  build: `${CONFIG.DEST_BUILD}/images`,
  prod: `${CONFIG.DEST_PROD}/images`
};

const lab_html_paths = {
  src: [
    `${CONFIG.BASE}/lab/html/**/*.html`,
    `!${CONFIG.BASE}/lab/html/{components,layouts,shared,macros,data}/**`
  ],
  src_render: [`${CONFIG.BASE}/lab/html`, `${CONFIG.BASE}/html`]
};

const lab_sass_paths = {
  src: [`${CONFIG.BASE}/lab/scss/giza.scss`],
  build: `${CONFIG.DEST_BUILD}/lab/css`
};

var webpackConfig = {
  mode: "development",
  context: path.resolve("js/"),
  entry: {
    app: ["babel-polyfill", "giza.js"]
  },
  output: {
    path: path.resolve("_build/js/"),
    filename: "giza.js",
    publicPath: "/js/"
  },
  resolve: {
    modules: [path.resolve("js/"), path.resolve("node_modules")]
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: path.resolve("node_modules")
        // query: {
        //   presets: [["es2015", { modules: false }], "stage-1"]
        // }
      }
    ]
  }
};

gulp.task("clean_build", function() {
  clean([CONFIG.DEST_BUILD]);
});

gulp.task("clean_dist", function() {
  clean([CONFIG.DEST_PROD]);
});

gulp.task("html", function() {
  return gulp
    .src(html_paths.src)
    .pipe(nunjucksRender({ path: html_paths.src_render }))
    .pipe(gulpif(!production, gulp.dest(CONFIG.DEST_BUILD)))
    .pipe(gulpif(production, gulp.dest(CONFIG.DEST_PROD)));
});

gulp.task("sass", function() {
  return gulp
    .src(sass_paths.src)
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
    .pipe(gulpif(!production, gulp.dest(sass_paths.build)))
    .pipe(gulpif(production, gulp.dest(sass_paths.prod)));
});

gulp.task("javascript", function() {
  return gulp
    .src(js_paths.src)
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulpif(!production, gulp.dest(js_paths.build)))
    .pipe(gulpif(production, gulp.dest(js_paths.prod)));
});

gulp.task("images", function() {
  return gulp
    .src(images_paths.src)
    .pipe(gulpif(!production, gulp.dest(images_paths.build)))
    .pipe(gulpif(production, gulp.dest(images_paths.prod)));
});

gulp.task("fonts", function() {
  return gulp
    .src(fonts_paths.src)
    .pipe(gulpif(!production, gulp.dest(fonts_paths.build)))
    .pipe(gulpif(production, gulp.dest(fonts_paths.prod)));
});

gulp.task("icons", function() {
  return gulp
    .src(icons_paths.src)
    .pipe(svgstore())
    .pipe(gulpif(!production, gulp.dest(icons_paths.build)))
    .pipe(gulpif(production, gulp.dest(icons_paths.prod)));
});

gulp.task("lab_html", function() {
  return gulp
    .src(lab_html_paths.src)
    .pipe(nunjucksRender({ path: lab_html_paths.src_render }))
    .pipe(gulp.dest(CONFIG.DEST_LAB_BUILD));
});

gulp.task("lab_sass", function() {
  return gulp
    .src(lab_sass_paths.src)
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
    .pipe(gulp.dest(lab_sass_paths.build));
});

gulp.task("watch", function() {
  gulp.watch(`${CONFIG.BASE}/html/**/*`, ["html", browser.reload]);
  gulp.watch(`${CONFIG.BASE}/scss/**/*`, ["sass", browser.reload]);
  gulp.watch(`${CONFIG.BASE}/js/**/*`, ["javascript", browser.reload]);
  gulp.watch(`${CONFIG.BASE}/images/**/*`, ["images", browser.reload]);
  gulp.watch(`${CONFIG.BASE}/fonts/*`, ["fonts", browser.reload]);
  gulp.watch(`${CONFIG.BASE}/lab/html/**/*`, ["lab_html", browser.reload]);
  gulp.watch(`${CONFIG.BASE}/lab/scss/**/*`, ["lab_sass", browser.reload]);
});

gulp.task("serve", ["build"], function() {
  browser.init({ server: "./_build", port: port, open: false });
});

gulp.task("serve_dist", function(cb) {
  production = true;

  gulpSequence(
    "clean_dist",
    "sass",
    "html",
    "javascript",
    "images",
    "fonts",
    "icons",
    cb
  );
});

gulp.task("build", [
  "clean_build",
  "html",
  "sass",
  "javascript",
  "images",
  "fonts",
  "icons",
  "lab_html",
  "lab_sass"
]);

gulp.task("default", ["serve", "watch"]);

gulp.task("dist", ["serve_dist"]);
