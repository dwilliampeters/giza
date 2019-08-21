(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./modules/Sticky.js":
/*!***************************!*\
  !*** ./modules/Sticky.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _stickybits = __webpack_require__(/*! stickybits */ \"../node_modules/stickybits/dist/stickybits.es.js\");\n\nvar _stickybits2 = _interopRequireDefault(_stickybits);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Sticky = function Sticky(el, options) {\n  _classCallCheck(this, Sticky);\n\n  var defaults = {\n    stickyItem: \".sticky__item\"\n  };\n  this.el = el;\n  this.settings = Object.assign(defaults, options);\n\n  var stickybit = (0, _stickybits2.default)(this.settings.stickyItem);\n};\n\nexports.default = Sticky;\n\n//# sourceURL=webpack:///./modules/Sticky.js?");

/***/ })

}]);