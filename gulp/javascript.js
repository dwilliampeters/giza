var gulp = require("gulp");
var path = require("path");
var webpackStream = require("webpack-stream");
var webpack = require("webpack");

var webpackConfig = {
  mode: "development",
  context: path.resolve("js/"),
  entry: {
    app: ["babel-polyfill", "giza.js"]
  },
  output: {
    path: path.resolve("_build/assets/js/"),
    filename: "giza.js",
    publicPath: "/assets/js/"
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
    .src("./js/app.js")
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest("./_build/js"));
});
