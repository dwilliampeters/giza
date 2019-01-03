const gulp = require("gulp");
const gulpif = require("gulp-if");
const path = require("path");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");

const CONFIG = require("../config");

const paths = {
  src: [`${CONFIG.BASE}/js/giza.js`],
  build: `${CONFIG.DEST_BUILD}/js`,
  prod: `${CONFIG.DEST_PROD}/js`
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

gulp.task("javascript", function() {
  return gulp
    .src(paths.src)
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulpif(!global.production, gulp.dest(paths.build)))
    .pipe(gulpif(global.production, gulp.dest(paths.prod)));
});
