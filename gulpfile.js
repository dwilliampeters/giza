const gulp = require("gulp");
const clean = require("del").sync;
const gulpSequence = require("gulp-sequence");
const gulpif = require("gulp-if");
const nunjucksRender = require("gulp-nunjucks-render");
const svgstore = require("gulp-svgstore");
const data = require("gulp-data");
const path = require("path");
const fs = require("fs");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const WebpackStrip = require("strip-loader");
const browser = require("browser-sync");
const port = process.env.SERVER_PORT || 3000;

global.PATH_CONFIG = require("./path-config");

function projectPath(...paths) {
  return path.resolve(process.env.INIT_CWD, ...paths);
}

gulp.task("default", function(cb) {
  global.production = false;

  gulpSequence(
    "set-dev-node-env",
    "clean:build",
    "html",
    "stylesheets",
    "images",
    "webpack",
    "icons",
    "fonts",
    "static",
    "lab:html",
    "lab:stylesheets",
    "lab:javascripts",
    "lab:images",
    "serve",
    "watch",
    cb
  );
});

gulp.task("production", function(cb) {
  global.production = true;

  PATH_CONFIG.buildDest = PATH_CONFIG.finalDest;

  gulpSequence(
    "set-prod-node-env",
    "clean:production",
    "html",
    "stylesheets",
    "images",
    "webpack",
    "icons",
    "fonts",
    "static",
    "lab:html",
    "lab:stylesheets",
    "lab:javascripts",
    "lab:images",
    "migrate",
    cb
  );
});

gulp.task("set-prod-node-env", function() {
  return (process.env.NODE_ENV = "production");
});

gulp.task("set-dev-node-env", function() {
  return (process.env.NODE_ENV = "development");
});

gulp.task("clean:build", function() {
  clean([PATH_CONFIG.buildDest]);
});

gulp.task("clean:production", function() {
  clean([PATH_CONFIG.finalDest]);
});

gulp.task("html", function() {
  htmlPaths = {
    src: [
      projectPath(PATH_CONFIG.lab, PATH_CONFIG.html.src),
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.html.src, "**/*.html"),
      "!" +
        projectPath(
          PATH_CONFIG.BASE,
          PATH_CONFIG.html.src,
          "**/{layouts,shared,macros,data}/**"
        )
    ],
    src_render: [
      projectPath(PATH_CONFIG.lab, PATH_CONFIG.html.src),
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.html.src, "components"),
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.html.src, "content"),
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.html.src)
    ],
    dest: projectPath(PATH_CONFIG.buildDest)
  };

  return gulp
    .src(htmlPaths.src)
    .pipe(
      nunjucksRender({
        path: htmlPaths.src_render
      })
    )
    .pipe(gulp.dest(htmlPaths.dest));
});

gulp.task("stylesheets", function() {
  stylesheetsPaths = {
    src: [
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.stylesheets.src, "**/*.scss")
    ],
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.stylesheets.dest)
  };

  return gulp
    .src(stylesheetsPaths.src)
    .pipe(gulpif(!production, sourcemaps.init()))
    .pipe(plumber())
    .pipe(
      sass({
        includePaths: ["node_modules", "scss"]
      }).on("error", sass.logError)
    )
    .pipe(
      postcss([
        autoprefixer({
          browsers: ["> 1%"]
        })
      ])
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(stylesheetsPaths.dest));
});

gulp.task("images", function() {
  imagesPaths = {
    src: [
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.images.src, "**/*{jpg,png,svg}")
    ],
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.images.dest)
  };

  return gulp.src(imagesPaths.src).pipe(gulp.dest(imagesPaths.dest));
});

const webpackConfig = {
  context: path.resolve(PATH_CONFIG.BASE, PATH_CONFIG.javascripts.src),
  entry: {
    app: "./giza.js"
  },
  mode: "development",
  output: {
    path: path.resolve(PATH_CONFIG.BASE, PATH_CONFIG.javascripts.src),
    filename: "giza.js",
    publicPath: "/javascripts/"
  },
  plugins: [],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(PATH_CONFIG.BASE, PATH_CONFIG.javascripts.src),
      path.resolve(PATH_CONFIG.BASE, "node_modules")
    ]
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        // test: /\.js$/,
        exclude: path.resolve(PATH_CONFIG.BASE, "node_modules"),
        query: {
          presets: [["es2015", { modules: false }], "stage-1", "react-app"]
        }
      }
    ]
  }
};

gulp.task("webpack", function() {
  webpackPaths = {
    src: [
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.javascripts.src, "**/*.js")
    ],
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.javascripts.dest)
  };

  return gulp
    .src(webpackPaths.src)
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(webpackPaths.dest));
});

gulp.task("icons", function() {
  iconsPaths = {
    src: [projectPath(PATH_CONFIG.BASE, PATH_CONFIG.icons.src, "*.svg")],
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.icons.dest)
  };

  return gulp
    .src(iconsPaths.src)
    .pipe(svgstore())
    .pipe(gulp.dest(iconsPaths.dest));
});

gulp.task("fonts", function() {
  fontsPaths = {
    src: [projectPath(PATH_CONFIG.BASE, PATH_CONFIG.fonts.src, "/**/*")],
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.fonts.dest)
  };

  return gulp.src(fontsPaths.src).pipe(gulp.dest(fontsPaths.dest));
});

gulp.task("static", function() {
  staticPaths = {
    src: projectPath(
      PATH_CONFIG.BASE,
      PATH_CONFIG.static.src,
      "**/*{ico,png,svg,webmanifest,xml,json}"
    ),
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.static.dest)
  };

  return gulp.src(staticPaths.src).pipe(gulp.dest(staticPaths.dest));
});

gulp.task("serve", function() {
  browser.init({
    server: "./_build",
    port: port,
    open: false
  });
});

gulp.task("watch", function() {
  watchPaths = {
    htmlSrc: [
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.html.src, "**/*.html"),
      projectPath(PATH_CONFIG.lab, "**/*.html"),
      projectPath(PATH_CONFIG.lab, "**/*.json")
    ],
    stylesheetsSrc: [
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.stylesheets.src, "**/*.scss"),
      projectPath(PATH_CONFIG.lab, PATH_CONFIG.stylesheets.src, "**/*.scss")
    ],
    javascriptsSrc: [
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.javascripts.src, "**/*.js"),
      projectPath(PATH_CONFIG.lab, PATH_CONFIG.javascripts.src, "**/*.js")
    ],
    imagesSrc: [
      projectPath(
        PATH_CONFIG.BASE,
        PATH_CONFIG.images.src,
        "**/*{jpg,png,svg}"
      ),
      projectPath(PATH_CONFIG.lab, PATH_CONFIG.images.src, "**/*{jpg,png,svg}")
    ],
    iconsSrc: [projectPath(PATH_CONFIG.BASE, PATH_CONFIG.icons.src, "*.svg")]
  };

  gulp.watch(watchPaths.htmlSrc, ["html", "lab:html", browser.reload]);
  gulp.watch(watchPaths.stylesheetsSrc, [
    "stylesheets",
    "lab:stylesheets",
    browser.reload
  ]);
  gulp.watch(watchPaths.javascriptsSrc, [
    "webpack",
    "lab:javascripts",
    browser.reload
  ]);
  gulp.watch(watchPaths.imagesSrc, ["images, lab:images", browser.reload]);
  gulp.watch(watchPaths.iconsSrc, ["icons", browser.reload]);
});

gulp.task("migrate", function(cb) {
  migratePaths = {
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
  return gulp.src(migratePaths.src).pipe(gulp.dest(migratePaths.dest));
});

// Lab

gulp.task("lab:html", function() {
  labHtmlPaths = {
    src: [
      projectPath(PATH_CONFIG.lab, PATH_CONFIG.html.src, "**/*.html"),
      "!" +
        projectPath(
          PATH_CONFIG.lab,
          "**/{components,layouts,shared,macros,data}/**"
        )
    ],
    src_render: [
      projectPath(PATH_CONFIG.lab, PATH_CONFIG.html.src),
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.html.src)
    ],
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.buildLab)
  };

  const dataFunction = function() {
    var dataPath = path.resolve(
      `${PATH_CONFIG.lab}/${PATH_CONFIG.html.src}/_data.json`
    );
    return JSON.parse(fs.readFileSync(dataPath, "utf8"));
  };

  return gulp
    .src(labHtmlPaths.src)
    .pipe(data(dataFunction))
    .pipe(
      nunjucksRender({
        path: labHtmlPaths.src_render
      })
    )
    .pipe(gulp.dest(labHtmlPaths.dest));
});

gulp.task("lab:stylesheets", function() {
  labStylesheetsPaths = {
    src: projectPath(PATH_CONFIG.lab, PATH_CONFIG.stylesheets.src, "**/*.scss"),
    dest: projectPath(
      PATH_CONFIG.buildDest,
      PATH_CONFIG.buildLab,
      PATH_CONFIG.stylesheets.dest
    )
  };

  return gulp
    .src(labStylesheetsPaths.src)
    .pipe(gulpif(!production, sourcemaps.init()))
    .pipe(plumber())
    .pipe(
      sass({
        includePaths: ["node_modules", "scss"]
      }).on("error", sass.logError)
    )
    .pipe(
      postcss([
        autoprefixer({
          browsers: ["> 1%"]
        })
      ])
    )
    .pipe(gulpif(production, sass({ outputStyle: "compressed" })))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(labStylesheetsPaths.dest));
});

const labWebpackConfig = {
  context: path.resolve(PATH_CONFIG.lab, PATH_CONFIG.javascripts.src),
  entry: {
    app: ["babel-polyfill", "./giza-lab.js"]
  },
  mode: "development",
  output: {
    path: path.resolve(PATH_CONFIG.lab, PATH_CONFIG.javascripts.src),
    filename: "giza-lab.js",
    publicPath: "/lab/javascripts/"
  },
  plugins: [],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(PATH_CONFIG.lab, PATH_CONFIG.javascripts.src),
      path.resolve(PATH_CONFIG.BASE, "node_modules")
    ]
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        exclude: path.resolve(PATH_CONFIG.BASE, "node_modules"),
        query: {
          presets: [["es2015", { modules: false }], "stage-1", "react-app"]
        }
      }
    ]
  }
};

const labWebpackConfig_production = {
  context: path.resolve(PATH_CONFIG.lab, PATH_CONFIG.javascripts.src),
  entry: {
    app: ["babel-polyfill", "./giza-lab.js"]
  },
  mode: "production",
  output: {
    path: path.resolve(PATH_CONFIG.lab, PATH_CONFIG.javascripts.src),
    filename: "giza-lab.js",
    publicPath: "javascripts/"
  },
  plugins: [],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(PATH_CONFIG.lab, PATH_CONFIG.javascripts.src),
      path.resolve(PATH_CONFIG.BASE, "node_modules")
    ]
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: path.resolve(PATH_CONFIG.BASE, "node_modules"),
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["es2015", { modules: false }], "stage-1", "react-app"]
            }
          },
          {
            loader: WebpackStrip.loader("debug", "console.log")
          }
        ]
      }
    ]
  }
};

gulp.task("lab:javascripts", function() {
  labPaths = {
    src: projectPath(PATH_CONFIG.lab, PATH_CONFIG.javascripts.src, "**/*.js"),
    dest: projectPath(
      PATH_CONFIG.buildDest,
      PATH_CONFIG.buildLab,
      PATH_CONFIG.javascripts.dest
    )
  };

  return gulp
    .src(labPaths.src)
    .pipe(gulpif(!production, webpackStream(labWebpackConfig, webpack)))
    .pipe(
      gulpif(production, webpackStream(labWebpackConfig_production, webpack))
    )
    .pipe(gulp.dest(labPaths.dest));
});

gulp.task("lab:images", function() {
  labImagesPaths = {
    src: [
      projectPath(
        PATH_CONFIG.lab,
        PATH_CONFIG.images.src,
        "**/*{jpg,png,svg,mp4,webm}"
      )
    ],
    dest: projectPath(
      PATH_CONFIG.buildDest,
      PATH_CONFIG.buildLab,
      PATH_CONFIG.images.dest
    )
  };

  return gulp.src(labImagesPaths.src).pipe(gulp.dest(labImagesPaths.dest));
});
