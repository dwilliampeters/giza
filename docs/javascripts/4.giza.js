(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./modules/LabHeader.js":
/*!******************************!*\
  !*** ./modules/LabHeader.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar AppHeader = function () {\n  function AppHeader(el, options) {\n    _classCallCheck(this, AppHeader);\n\n    var defaults = {};\n    this.el = el;\n    this.settings = Object.assign(defaults, options);\n    this.init();\n  }\n\n  _createClass(AppHeader, [{\n    key: \"init\",\n    value: function init() {\n      var headerHeight = this.el.offsetHeight;\n      var headerOffset = headerHeight;\n      var sidebar = document.querySelector(\".app-sidebar\");\n\n      document.body.style.paddingTop = headerOffset + \"px\";\n      sidebar.style.paddingTop = headerOffset + \"px\";\n    }\n  }]);\n\n  return AppHeader;\n}();\n\nexports.default = AppHeader;\n\n//# sourceURL=webpack:///./modules/LabHeader.js?");

/***/ })

}]);