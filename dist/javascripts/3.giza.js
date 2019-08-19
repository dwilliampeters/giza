(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./modules/LabFrame.js":
/*!*****************************!*\
  !*** ./modules/LabFrame.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LabFrame = function () {\n  function LabFrame(el, options) {\n    _classCallCheck(this, LabFrame);\n\n    var defaults = {\n      src: \"\"\n    };\n    this.el = el;\n    this.settings = Object.assign(defaults, options);\n    this.init();\n  }\n\n  _createClass(LabFrame, [{\n    key: \"init\",\n    value: function init() {\n      var iframe = document.createElement(\"iframe\");\n      iframe.className = \"app-example__iframe\";\n      iframe.onload = function () {\n        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + \"px\";\n      }; // before setting 'src'\n      iframe.src = this.settings.src;\n      this.el.appendChild(iframe);\n    }\n  }]);\n\n  return LabFrame;\n}();\n\nexports.default = LabFrame;\n\n//# sourceURL=webpack:///./modules/LabFrame.js?");

/***/ })

}]);