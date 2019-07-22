/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/javascripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./giza.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/svgxuse/svgxuse.js":
/*!******************************************!*\
  !*** ../node_modules/svgxuse/svgxuse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * @copyright Copyright (c) 2017 IcoMoon.io\n * @license   Licensed under MIT license\n *            See https://github.com/Keyamoon/svgxuse\n * @version   1.2.6\n */\n/*jslint browser: true */\n/*global XDomainRequest, MutationObserver, window */\n(function () {\n    \"use strict\";\n    if (typeof window !== \"undefined\" && window.addEventListener) {\n        var cache = Object.create(null); // holds xhr objects to prevent multiple requests\n        var checkUseElems;\n        var tid; // timeout id\n        var debouncedCheck = function () {\n            clearTimeout(tid);\n            tid = setTimeout(checkUseElems, 100);\n        };\n        var unobserveChanges = function () {\n            return;\n        };\n        var observeChanges = function () {\n            var observer;\n            window.addEventListener(\"resize\", debouncedCheck, false);\n            window.addEventListener(\"orientationchange\", debouncedCheck, false);\n            if (window.MutationObserver) {\n                observer = new MutationObserver(debouncedCheck);\n                observer.observe(document.documentElement, {\n                    childList: true,\n                    subtree: true,\n                    attributes: true\n                });\n                unobserveChanges = function () {\n                    try {\n                        observer.disconnect();\n                        window.removeEventListener(\"resize\", debouncedCheck, false);\n                        window.removeEventListener(\"orientationchange\", debouncedCheck, false);\n                    } catch (ignore) {}\n                };\n            } else {\n                document.documentElement.addEventListener(\"DOMSubtreeModified\", debouncedCheck, false);\n                unobserveChanges = function () {\n                    document.documentElement.removeEventListener(\"DOMSubtreeModified\", debouncedCheck, false);\n                    window.removeEventListener(\"resize\", debouncedCheck, false);\n                    window.removeEventListener(\"orientationchange\", debouncedCheck, false);\n                };\n            }\n        };\n        var createRequest = function (url) {\n            // In IE 9, cross origin requests can only be sent using XDomainRequest.\n            // XDomainRequest would fail if CORS headers are not set.\n            // Therefore, XDomainRequest should only be used with cross origin requests.\n            function getOrigin(loc) {\n                var a;\n                if (loc.protocol !== undefined) {\n                    a = loc;\n                } else {\n                    a = document.createElement(\"a\");\n                    a.href = loc;\n                }\n                return a.protocol.replace(/:/g, \"\") + a.host;\n            }\n            var Request;\n            var origin;\n            var origin2;\n            if (window.XMLHttpRequest) {\n                Request = new XMLHttpRequest();\n                origin = getOrigin(location);\n                origin2 = getOrigin(url);\n                if (Request.withCredentials === undefined && origin2 !== \"\" && origin2 !== origin) {\n                    Request = XDomainRequest || undefined;\n                } else {\n                    Request = XMLHttpRequest;\n                }\n            }\n            return Request;\n        };\n        var xlinkNS = \"http://www.w3.org/1999/xlink\";\n        checkUseElems = function () {\n            var base;\n            var bcr;\n            var fallback = \"\"; // optional fallback URL in case no base path to SVG file was given and no symbol definition was found.\n            var hash;\n            var href;\n            var i;\n            var inProgressCount = 0;\n            var isHidden;\n            var Request;\n            var url;\n            var uses;\n            var xhr;\n            function observeIfDone() {\n                // If done with making changes, start watching for chagnes in DOM again\n                inProgressCount -= 1;\n                if (inProgressCount === 0) { // if all xhrs were resolved\n                    unobserveChanges(); // make sure to remove old handlers\n                    observeChanges(); // watch for changes to DOM\n                }\n            }\n            function attrUpdateFunc(spec) {\n                return function () {\n                    if (cache[spec.base] !== true) {\n                        spec.useEl.setAttributeNS(xlinkNS, \"xlink:href\", \"#\" + spec.hash);\n                        if (spec.useEl.hasAttribute(\"href\")) {\n                            spec.useEl.setAttribute(\"href\", \"#\" + spec.hash);\n                        }\n                    }\n                };\n            }\n            function onloadFunc(xhr) {\n                return function () {\n                    var body = document.body;\n                    var x = document.createElement(\"x\");\n                    var svg;\n                    xhr.onload = null;\n                    x.innerHTML = xhr.responseText;\n                    svg = x.getElementsByTagName(\"svg\")[0];\n                    if (svg) {\n                        svg.setAttribute(\"aria-hidden\", \"true\");\n                        svg.style.position = \"absolute\";\n                        svg.style.width = 0;\n                        svg.style.height = 0;\n                        svg.style.overflow = \"hidden\";\n                        body.insertBefore(svg, body.firstChild);\n                    }\n                    observeIfDone();\n                };\n            }\n            function onErrorTimeout(xhr) {\n                return function () {\n                    xhr.onerror = null;\n                    xhr.ontimeout = null;\n                    observeIfDone();\n                };\n            }\n            unobserveChanges(); // stop watching for changes to DOM\n            // find all use elements\n            uses = document.getElementsByTagName(\"use\");\n            for (i = 0; i < uses.length; i += 1) {\n                try {\n                    bcr = uses[i].getBoundingClientRect();\n                } catch (ignore) {\n                    // failed to get bounding rectangle of the use element\n                    bcr = false;\n                }\n                href = uses[i].getAttribute(\"href\")\n                        || uses[i].getAttributeNS(xlinkNS, \"href\")\n                        || uses[i].getAttribute(\"xlink:href\");\n                if (href && href.split) {\n                    url = href.split(\"#\");\n                } else {\n                    url = [\"\", \"\"];\n                }\n                base = url[0];\n                hash = url[1];\n                isHidden = bcr && bcr.left === 0 && bcr.right === 0 && bcr.top === 0 && bcr.bottom === 0;\n                if (bcr && bcr.width === 0 && bcr.height === 0 && !isHidden) {\n                    // the use element is empty\n                    // if there is a reference to an external SVG, try to fetch it\n                    // use the optional fallback URL if there is no reference to an external SVG\n                    if (fallback && !base.length && hash && !document.getElementById(hash)) {\n                        base = fallback;\n                    }\n                    if (uses[i].hasAttribute(\"href\")) {\n                        uses[i].setAttributeNS(xlinkNS, \"xlink:href\", href);\n                    }\n                    if (base.length) {\n                        // schedule updating xlink:href\n                        xhr = cache[base];\n                        if (xhr !== true) {\n                            // true signifies that prepending the SVG was not required\n                            setTimeout(attrUpdateFunc({\n                                useEl: uses[i],\n                                base: base,\n                                hash: hash\n                            }), 0);\n                        }\n                        if (xhr === undefined) {\n                            Request = createRequest(base);\n                            if (Request !== undefined) {\n                                xhr = new Request();\n                                cache[base] = xhr;\n                                xhr.onload = onloadFunc(xhr);\n                                xhr.onerror = onErrorTimeout(xhr);\n                                xhr.ontimeout = onErrorTimeout(xhr);\n                                xhr.open(\"GET\", base);\n                                xhr.send();\n                                inProgressCount += 1;\n                            }\n                        }\n                    }\n                } else {\n                    if (!isHidden) {\n                        if (cache[base] === undefined) {\n                            // remember this URL if the use element was not empty and no request was sent\n                            cache[base] = true;\n                        } else if (cache[base].onload) {\n                            // if it turns out that prepending the SVG is not necessary,\n                            // abort the in-progress xhr.\n                            cache[base].abort();\n                            delete cache[base].onload;\n                            cache[base] = true;\n                        }\n                    } else if (base.length && cache[base]) {\n                        setTimeout(attrUpdateFunc({\n                            useEl: uses[i],\n                            base: base,\n                            hash: hash\n                        }), 0);\n                    }\n                }\n            }\n            uses = \"\";\n            inProgressCount += 1;\n            observeIfDone();\n        };\n        var winLoad;\n        winLoad = function () {\n            window.removeEventListener(\"load\", winLoad, false); // to prevent memory leaks\n            tid = setTimeout(checkUseElems, 0);\n        };\n        if (document.readyState !== \"complete\") {\n            // The load event fires when all resources have finished loading, which allows detecting whether SVG use elements are empty.\n            window.addEventListener(\"load\", winLoad, false);\n        } else {\n            // No need to add a listener if the document is already loaded, initialize immediately.\n            winLoad();\n        }\n    }\n}());\n\n\n//# sourceURL=webpack:///../node_modules/svgxuse/svgxuse.js?");

/***/ }),

/***/ "./giza.js":
/*!*****************!*\
  !*** ./giza.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules */ \"./modules/index.js\");\n\n__webpack_require__(/*! svgxuse */ \"../node_modules/svgxuse/svgxuse.js\");\n\n//Polyfill for IE11 to support \"use\" tags in SVGs\n\nconsole.log(\"app.js has loaded!\");\n\n//# sourceURL=webpack:///./giza.js?");

/***/ }),

/***/ "./modules sync recursive ^\\.\\/.*$":
/*!*******************************!*\
  !*** ./modules sync ^\.\/.*$ ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./\": \"./modules/index.js\",\n\t\"./Accordion\": \"./modules/Accordion.js\",\n\t\"./Accordion.js\": \"./modules/Accordion.js\",\n\t\"./Example\": \"./modules/Example.js\",\n\t\"./Example.js\": \"./modules/Example.js\",\n\t\"./Nav\": \"./modules/Nav.js\",\n\t\"./Nav.js\": \"./modules/Nav.js\",\n\t\"./Toggle\": \"./modules/Toggle.js\",\n\t\"./Toggle.js\": \"./modules/Toggle.js\",\n\t\"./index\": \"./modules/index.js\",\n\t\"./index.js\": \"./modules/index.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./modules sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./modules_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./modules/Accordion.js":
/*!******************************!*\
  !*** ./modules/Accordion.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Accordion = function () {\n  function Accordion(el) {\n    _classCallCheck(this, Accordion);\n\n    this.el = el;\n    this.init();\n  }\n\n  _createClass(Accordion, [{\n    key: \"init\",\n    value: function init() {\n      this.dom = this.cacheDom();\n      this.addEventListeners();\n    }\n  }, {\n    key: \"cacheDom\",\n    value: function cacheDom() {\n      return {\n        accordionItem: this.el.querySelectorAll(\".accordion__item\"),\n        accordionParent: this.el.querySelectorAll(\".accordion__toggle\")\n      };\n    }\n  }, {\n    key: \"handleParents\",\n    value: function handleParents(el, tag) {\n      while (el.parentNode) {\n        el = el.parentNode;\n        if (el.classList.contains(tag)) return el;\n      }\n      return null;\n    }\n  }, {\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      var _this = this;\n\n      var _loop = function _loop(i, len) {\n        _this.dom.accordionParent[i].addEventListener(\"click\", function (e) {\n          e.preventDefault();\n          _this.handleParentClick(e, _this.dom.accordionParent[i]);\n        });\n      };\n\n      for (var i = 0, len = this.dom.accordionParent.length; i < len; i++) {\n        _loop(i, len);\n      }\n    }\n  }, {\n    key: \"handleParentClick\",\n    value: function handleParentClick(e, itemParent) {\n      var item = this.handleParents(itemParent, \"accordion__item\");\n      if (item) {\n        if (item.classList.contains(\"is-active\")) {\n          item.classList.remove(\"is-active\");\n        } else {\n          for (var i = 0, len = this.dom.accordionItem.length; i < len; i++) {\n            this.dom.accordionItem[i].classList.remove(\"is-active\");\n          }\n          item.classList.add(\"is-active\");\n        }\n      }\n    }\n  }]);\n\n  return Accordion;\n}();\n\nexports.default = Accordion;\n\n//# sourceURL=webpack:///./modules/Accordion.js?");

/***/ }),

/***/ "./modules/Example.js":
/*!****************************!*\
  !*** ./modules/Example.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Example = function Example(el) {\n  _classCallCheck(this, Example);\n\n  this.el = el;\n  console.log(el.textContent, \"- From the example module\");\n};\n\nexports.default = Example;\n\n//# sourceURL=webpack:///./modules/Example.js?");

/***/ }),

/***/ "./modules/Nav.js":
/*!************************!*\
  !*** ./modules/Nav.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Nav = function () {\n  function Nav(el) {\n    _classCallCheck(this, Nav);\n\n    this.el = el;\n    this.init();\n  }\n\n  _createClass(Nav, [{\n    key: \"init\",\n    value: function init() {\n      this.dom = this.cacheDom();\n      this.addEventListeners();\n    }\n  }, {\n    key: \"cacheDom\",\n    value: function cacheDom() {\n      return {\n        menuParent: this.el.querySelectorAll(\".is-dropdown-button, .is-accordion-button\")\n      };\n    }\n  }, {\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      var _this = this;\n\n      var _loop = function _loop(i, len) {\n        _this.dom.menuParent[i].addEventListener(\"click\", function (e) {\n          e.preventDefault();\n          _this.handleParentClick(e, i, _this.dom.menuParent[i].parentNode);\n        });\n      };\n\n      for (var i = 0, len = this.dom.menuParent.length; i < len; i++) {\n        _loop(i, len);\n      }\n    }\n  }, {\n    key: \"handleParentClick\",\n    value: function handleParentClick(e, item, itemParent) {\n      var items = itemParent.parentNode.querySelectorAll(\".nav__item\");\n      if (itemParent.classList.contains(\"is-active\")) {\n        itemParent.classList.remove(\"is-active\");\n      } else {\n        for (var i = 0, len = items.length; i < len; i++) {\n          items[i].classList.remove(\"is-active\");\n        }\n        itemParent.classList.add(\"is-active\");\n      }\n    }\n  }]);\n\n  return Nav;\n}();\n\nexports.default = Nav;\n\n//# sourceURL=webpack:///./modules/Nav.js?");

/***/ }),

/***/ "./modules/Toggle.js":
/*!***************************!*\
  !*** ./modules/Toggle.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Toggle = function () {\n  function Toggle(el, options) {\n    _classCallCheck(this, Toggle);\n\n    var defaults = {\n      activeClass: \"is-active\",\n      target: \"\"\n    };\n    this.el = el;\n    this.settings = Object.assign(defaults, options);\n    this.init();\n  }\n\n  _createClass(Toggle, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      var toggle = function toggle() {\n        var target = _this.settings.target;\n        if (target === \"\") {\n          _this.el.classList.toggle(_this.settings.activeClass);\n        } else {\n          if (typeof target === \"string\") {\n            _this.el.classList.toggle(_this.settings.activeClass);\n            if (target === \"parent\") {\n              _this.el.parentNode.classList.toggle(_this.settings.activeClass);\n            } else {\n              document.querySelector(target).classList.toggle(_this.settings.activeClass);\n            }\n          }\n        }\n      };\n\n      this.el.addEventListener(\"click\", toggle);\n    }\n  }]);\n\n  return Toggle;\n}();\n\nexports.default = Toggle;\n\n//# sourceURL=webpack:///./modules/Toggle.js?");

/***/ }),

/***/ "./modules/index.js":
/*!**************************!*\
  !*** ./modules/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\r\n  Automatically instantiates modules based on data-attributes\r\n  specifying module file-names.\r\n*/\n\nvar moduleElements = document.querySelectorAll(\"[data-module]\");\n\nfor (var i = 0; i < moduleElements.length; i++) {\n  var el = moduleElements[i];\n  var name = el.getAttribute(\"data-module\");\n  var options = {};\n  var dataOptions = el.getAttribute(\"data-options\");\n  if (dataOptions) {\n    options = JSON.parse(dataOptions);\n  }\n  var Module = __webpack_require__(\"./modules sync recursive ^\\\\.\\\\/.*$\")(\"./\" + name).default;\n  new Module(el, options);\n}\n\n/*\r\n  Usage:\r\n  ======\r\n  html\r\n  ----\r\n  <button data-module=\"disappear\">disappear!</button>\r\n  js\r\n  --\r\n  // modules/disappear.js\r\n  export default class Disappear {\r\n    constructor(el) {\r\n      el.style.display = 'none'\r\n    }\r\n  }\r\n*/\n\n//# sourceURL=webpack:///./modules/index.js?");

/***/ })

/******/ });