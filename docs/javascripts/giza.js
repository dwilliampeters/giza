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

/***/ "../node_modules/stickybits/dist/stickybits.es.js":
/*!********************************************************!*\
  !*** ../node_modules/stickybits/dist/stickybits.es.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n  stickybits - Stickybits is a lightweight alternative to `position: sticky` polyfills\n  @version v3.6.6\n  @link https://github.com/dollarshaveclub/stickybits#readme\n  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)\n  @license MIT\n**/\n/*\n  STICKYBITS 💉\n  --------\n  > a lightweight alternative to `position: sticky` polyfills 🍬\n  --------\n  - each method is documented above it our view the readme\n  - Stickybits does not manage polymorphic functionality (position like properties)\n  * polymorphic functionality: (in the context of describing Stickybits)\n    means making things like `position: sticky` be loosely supported with position fixed.\n    It also means that features like `useStickyClasses` takes on styles like `position: fixed`.\n  --------\n  defaults 🔌\n  --------\n  - version = `package.json` version\n  - userAgent = viewer browser agent\n  - target = DOM element selector\n  - noStyles = boolean\n  - offset = number\n  - parentClass = 'string'\n  - scrollEl = window || DOM element selector || DOM element\n  - stickyClass = 'string'\n  - stuckClass = 'string'\n  - useStickyClasses = boolean\n  - useFixed = boolean\n  - useGetBoundingClientRect = boolean\n  - verticalPosition = 'string'\n  --------\n  props🔌\n  --------\n  - p = props {object}\n  --------\n  instance note\n  --------\n  - stickybits parent methods return this\n  - stickybits instance methods return an instance item\n  --------\n  nomenclature\n  --------\n  - target => el => e\n  - props => o || p\n  - instance => item => it\n  --------\n  methods\n  --------\n  - .definePosition = defines sticky or fixed\n  - .addInstance = an array of objects for each Stickybits Target\n  - .getClosestParent = gets the parent for non-window scroll\n  - .getTopPosition = gets the element top pixel position from the viewport\n  - .computeScrollOffsets = computes scroll position\n  - .toggleClasses = older browser toggler\n  - .manageState = manages sticky state\n  - .removeClass = older browser support class remover\n  - .removeInstance = removes an instance\n  - .cleanup = removes all Stickybits instances and cleans up dom from stickybits\n*/\nvar Stickybits =\n/*#__PURE__*/\nfunction () {\n  function Stickybits(target, obj) {\n    var o = typeof obj !== 'undefined' ? obj : {};\n    this.version = '3.6.6';\n    this.userAgent = window.navigator.userAgent || 'no `userAgent` provided by the browser';\n    this.props = {\n      customStickyChangeNumber: o.customStickyChangeNumber || null,\n      noStyles: o.noStyles || false,\n      stickyBitStickyOffset: o.stickyBitStickyOffset || 0,\n      parentClass: o.parentClass || 'js-stickybit-parent',\n      scrollEl: typeof o.scrollEl === 'string' ? document.querySelector(o.scrollEl) : o.scrollEl || window,\n      stickyClass: o.stickyClass || 'js-is-sticky',\n      stuckClass: o.stuckClass || 'js-is-stuck',\n      stickyChangeClass: o.stickyChangeClass || 'js-is-sticky--change',\n      useStickyClasses: o.useStickyClasses || false,\n      useFixed: o.useFixed || false,\n      useGetBoundingClientRect: o.useGetBoundingClientRect || false,\n      verticalPosition: o.verticalPosition || 'top'\n      /*\n        define positionVal after the setting of props, because definePosition looks at the props.useFixed\n        ----\n        -  uses a computed (`.definePosition()`)\n        -  defined the position\n      */\n\n    };\n    this.props.positionVal = this.definePosition() || 'fixed';\n    this.instances = [];\n    var _this$props = this.props,\n        positionVal = _this$props.positionVal,\n        verticalPosition = _this$props.verticalPosition,\n        noStyles = _this$props.noStyles,\n        stickyBitStickyOffset = _this$props.stickyBitStickyOffset;\n    var verticalPositionStyle = verticalPosition === 'top' && !noStyles ? stickyBitStickyOffset + \"px\" : '';\n    var positionStyle = positionVal !== 'fixed' ? positionVal : '';\n    this.els = typeof target === 'string' ? document.querySelectorAll(target) : target;\n    if (!('length' in this.els)) this.els = [this.els];\n\n    for (var i = 0; i < this.els.length; i++) {\n      var el = this.els[i]; // set vertical position\n\n      el.style[verticalPosition] = verticalPositionStyle;\n      el.style.position = positionStyle; // instances are an array of objects\n\n      this.instances.push(this.addInstance(el, this.props));\n    }\n  }\n  /*\n    setStickyPosition ✔️\n    --------\n    —  most basic thing stickybits does\n    => checks to see if position sticky is supported\n    => defined the position to be used\n    => stickybits works accordingly\n  */\n\n\n  var _proto = Stickybits.prototype;\n\n  _proto.definePosition = function definePosition() {\n    var stickyProp;\n\n    if (this.props.useFixed) {\n      stickyProp = 'fixed';\n    } else {\n      var prefix = ['', '-o-', '-webkit-', '-moz-', '-ms-'];\n      var test = document.head.style;\n\n      for (var i = 0; i < prefix.length; i += 1) {\n        test.position = prefix[i] + \"sticky\";\n      }\n\n      stickyProp = test.position ? test.position : 'fixed';\n      test.position = '';\n    }\n\n    return stickyProp;\n  }\n  /*\n    addInstance ✔️\n    --------\n    — manages instances of items\n    - takes in an el and props\n    - returns an item object\n    ---\n    - target = el\n    - o = {object} = props\n      - scrollEl = 'string' | object\n      - verticalPosition = number\n      - off = boolean\n      - parentClass = 'string'\n      - stickyClass = 'string'\n      - stuckClass = 'string'\n    ---\n    - defined later\n      - parent = dom element\n      - state = 'string'\n      - offset = number\n      - stickyStart = number\n      - stickyStop = number\n    - returns an instance object\n  */\n  ;\n\n  _proto.addInstance = function addInstance(el, props) {\n    var _this = this;\n\n    var item = {\n      el: el,\n      parent: el.parentNode,\n      props: props\n    };\n\n    if (props.positionVal === 'fixed' || props.useStickyClasses) {\n      this.isWin = this.props.scrollEl === window;\n      var se = this.isWin ? window : this.getClosestParent(item.el, item.props.scrollEl);\n      this.computeScrollOffsets(item);\n      item.parent.className += \" \" + props.parentClass;\n      item.state = 'default';\n\n      item.stateContainer = function () {\n        return _this.manageState(item);\n      };\n\n      se.addEventListener('scroll', item.stateContainer);\n    }\n\n    return item;\n  }\n  /*\n    --------\n    getParent 👨‍\n    --------\n    - a helper function that gets the target element's parent selected el\n    - only used for non `window` scroll elements\n    - supports older browsers\n  */\n  ;\n\n  _proto.getClosestParent = function getClosestParent(el, match) {\n    // p = parent element\n    var p = match;\n    var e = el;\n    if (e.parentElement === p) return p; // traverse up the dom tree until we get to the parent\n\n    while (e.parentElement !== p) {\n      e = e.parentElement;\n    } // return parent element\n\n\n    return p;\n  }\n  /*\n    --------\n    getTopPosition\n    --------\n    - a helper function that gets the topPosition of a Stickybit element\n    - from the top level of the DOM\n  */\n  ;\n\n  _proto.getTopPosition = function getTopPosition(el) {\n    if (this.props.useGetBoundingClientRect) {\n      return el.getBoundingClientRect().top + (this.props.scrollEl.pageYOffset || document.documentElement.scrollTop);\n    }\n\n    var topPosition = 0;\n\n    do {\n      topPosition = el.offsetTop + topPosition;\n    } while (el = el.offsetParent);\n\n    return topPosition;\n  }\n  /*\n    computeScrollOffsets 📊\n    ---\n    computeScrollOffsets for Stickybits\n    - defines\n      - offset\n      - start\n      - stop\n  */\n  ;\n\n  _proto.computeScrollOffsets = function computeScrollOffsets(item) {\n    var it = item;\n    var p = it.props;\n    var el = it.el;\n    var parent = it.parent;\n    var isCustom = !this.isWin && p.positionVal === 'fixed';\n    var isTop = p.verticalPosition !== 'bottom';\n    var scrollElOffset = isCustom ? this.getTopPosition(p.scrollEl) : 0;\n    var stickyStart = isCustom ? this.getTopPosition(parent) - scrollElOffset : this.getTopPosition(parent);\n    var stickyChangeOffset = p.customStickyChangeNumber !== null ? p.customStickyChangeNumber : el.offsetHeight;\n    var parentBottom = stickyStart + parent.offsetHeight;\n    it.offset = scrollElOffset + p.stickyBitStickyOffset;\n    it.stickyStart = isTop ? stickyStart - it.offset : 0;\n    it.stickyChange = it.stickyStart + stickyChangeOffset;\n    it.stickyStop = isTop ? parentBottom - (el.offsetHeight + it.offset) : parentBottom - window.innerHeight;\n  }\n  /*\n    toggleClasses ⚖️\n    ---\n    toggles classes (for older browser support)\n    r = removed class\n    a = added class\n  */\n  ;\n\n  _proto.toggleClasses = function toggleClasses(el, r, a) {\n    var e = el;\n    var cArray = e.className.split(' ');\n    if (a && cArray.indexOf(a) === -1) cArray.push(a);\n    var rItem = cArray.indexOf(r);\n    if (rItem !== -1) cArray.splice(rItem, 1);\n    e.className = cArray.join(' ');\n  }\n  /*\n    manageState 📝\n    ---\n    - defines the state\n      - normal\n      - sticky\n      - stuck\n  */\n  ;\n\n  _proto.manageState = function manageState(item) {\n    // cache object\n    var it = item;\n    var e = it.el;\n    var p = it.props;\n    var state = it.state;\n    var start = it.stickyStart;\n    var change = it.stickyChange;\n    var stop = it.stickyStop;\n    var stl = e.style; // cache props\n\n    var ns = p.noStyles;\n    var pv = p.positionVal;\n    var se = p.scrollEl;\n    var sticky = p.stickyClass;\n    var stickyChange = p.stickyChangeClass;\n    var stuck = p.stuckClass;\n    var vp = p.verticalPosition;\n    var isTop = vp !== 'bottom';\n    /*\n      requestAnimationFrame\n      ---\n      - use rAF\n      - or stub rAF\n    */\n\n    var rAFStub = function rAFDummy(f) {\n      f();\n    };\n\n    var rAF = !this.isWin ? rAFStub : window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || rAFStub;\n    /*\n      define scroll vars\n      ---\n      - scroll\n      - notSticky\n      - isSticky\n      - isStuck\n    */\n\n    var tC = this.toggleClasses;\n    var scroll = this.isWin ? window.scrollY || window.pageYOffset : se.scrollTop;\n    var notSticky = scroll > start && scroll < stop && (state === 'default' || state === 'stuck');\n    var isSticky = isTop && scroll <= start && (state === 'sticky' || state === 'stuck');\n    var isStuck = scroll >= stop && state === 'sticky';\n    /*\n      Unnamed arrow functions within this block\n      ---\n      - help wanted or discussion\n      - view test.stickybits.js\n        - `stickybits .manageState  `position: fixed` interface` for more awareness 👀\n    */\n\n    if (notSticky) {\n      it.state = 'sticky';\n      rAF(function () {\n        tC(e, stuck, sticky);\n        stl.position = pv;\n        if (ns) return;\n        stl.bottom = '';\n        stl[vp] = p.stickyBitStickyOffset + \"px\";\n      });\n    } else if (isSticky) {\n      it.state = 'default';\n      rAF(function () {\n        tC(e, sticky);\n        tC(e, stuck);\n        if (pv === 'fixed') stl.position = '';\n      });\n    } else if (isStuck) {\n      it.state = 'stuck';\n      rAF(function () {\n        tC(e, sticky, stuck);\n        if (pv !== 'fixed' || ns) return;\n        stl.top = '';\n        stl.bottom = '0';\n        stl.position = 'absolute';\n      });\n    }\n\n    var isStickyChange = scroll >= change && scroll <= stop;\n    var isNotStickyChange = scroll < change / 2 || scroll > stop;\n    var stub = 'stub'; // a stub css class to remove\n\n    if (isNotStickyChange) {\n      rAF(function () {\n        tC(e, stickyChange);\n      });\n    } else if (isStickyChange) {\n      rAF(function () {\n        tC(e, stub, stickyChange);\n      });\n    }\n  };\n\n  _proto.update = function update(updatedProps) {\n    if (updatedProps === void 0) {\n      updatedProps = null;\n    }\n\n    for (var i = 0; i < this.instances.length; i += 1) {\n      var instance = this.instances[i];\n      this.computeScrollOffsets(instance);\n\n      if (updatedProps) {\n        for (var updatedProp in updatedProps) {\n          instance.props[updatedProp] = updatedProps[updatedProp];\n        }\n      }\n    }\n\n    return this;\n  }\n  /*\n    removes an instance 👋\n    --------\n    - cleanup instance\n  */\n  ;\n\n  _proto.removeInstance = function removeInstance(instance) {\n    var e = instance.el;\n    var p = instance.props;\n    var tC = this.toggleClasses;\n    e.style.position = '';\n    e.style[p.verticalPosition] = '';\n    tC(e, p.stickyClass);\n    tC(e, p.stuckClass);\n    tC(e.parentNode, p.parentClass);\n  }\n  /*\n    cleanup 🛁\n    --------\n    - cleans up each instance\n    - clears instance\n  */\n  ;\n\n  _proto.cleanup = function cleanup() {\n    for (var i = 0; i < this.instances.length; i += 1) {\n      var instance = this.instances[i];\n\n      if (instance.stateContainer) {\n        instance.props.scrollEl.removeEventListener('scroll', instance.stateContainer);\n      }\n\n      this.removeInstance(instance);\n    }\n\n    this.manageState = false;\n    this.instances = [];\n  };\n\n  return Stickybits;\n}();\n/*\n  export\n  --------\n  exports StickBits to be used 🏁\n*/\n\n\nfunction stickybits(target, o) {\n  return new Stickybits(target, o);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (stickybits);\n\n\n//# sourceURL=webpack:///../node_modules/stickybits/dist/stickybits.es.js?");

/***/ }),

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

eval("var map = {\n\t\"./\": \"./modules/index.js\",\n\t\"./Accordion\": \"./modules/Accordion.js\",\n\t\"./Accordion.js\": \"./modules/Accordion.js\",\n\t\"./Example\": \"./modules/Example.js\",\n\t\"./Example.js\": \"./modules/Example.js\",\n\t\"./Nav\": \"./modules/Nav.js\",\n\t\"./Nav.js\": \"./modules/Nav.js\",\n\t\"./OffCanvas\": \"./modules/OffCanvas.js\",\n\t\"./OffCanvas.js\": \"./modules/OffCanvas.js\",\n\t\"./Sticky\": \"./modules/Sticky.js\",\n\t\"./Sticky.js\": \"./modules/Sticky.js\",\n\t\"./Toggle\": \"./modules/Toggle.js\",\n\t\"./Toggle.js\": \"./modules/Toggle.js\",\n\t\"./index\": \"./modules/index.js\",\n\t\"./index.js\": \"./modules/index.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./modules sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./modules_sync_^\\.\\/.*$?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Nav = function () {\n  function Nav(el) {\n    _classCallCheck(this, Nav);\n\n    this.el = el;\n    this.init();\n  }\n\n  _createClass(Nav, [{\n    key: \"init\",\n    value: function init() {\n      this.dom = this.cacheDom();\n      this.addEventListeners();\n    }\n  }, {\n    key: \"cacheDom\",\n    value: function cacheDom() {\n      return {\n        menuParent: this.el.querySelectorAll(\".is-dropdown-button, .is-accordion-button\")\n      };\n    }\n  }, {\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      var _this = this;\n\n      for (var i = 0, len = this.dom.menuParent.length; i < len; i++) {\n        this.dom.menuParent[i].addEventListener(\"click\", function (e) {\n          e.preventDefault();\n          _this.handleParentClick(e);\n        });\n      }\n    }\n  }, {\n    key: \"handleParentClick\",\n    value: function handleParentClick(e) {\n      var getClosest = function getClosest(elem, selector) {\n        for (; elem && elem !== document; elem = elem.parentNode) {\n          if (elem.matches(selector)) return elem;\n        }\n        return null;\n      };\n\n      var clickedParent = getClosest(e.target, \".nav__item\");\n      console.log(clickedParent);\n\n      if (clickedParent.classList.contains(\"is-active\")) {\n        clickedParent.classList.remove(\"is-active\");\n        return;\n      }\n\n      var items = clickedParent.parentNode.querySelectorAll(\".nav__item\");\n\n      for (var i = 0, len = items.length; i < len; i++) {\n        items[i].classList.remove(\"is-active\");\n      }\n\n      clickedParent.classList.add(\"is-active\");\n    }\n  }]);\n\n  return Nav;\n}();\n\nexports.default = Nav;\n\n//# sourceURL=webpack:///./modules/Nav.js?");

/***/ }),

/***/ "./modules/OffCanvas.js":
/*!******************************!*\
  !*** ./modules/OffCanvas.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar OffCanvas = function () {\n  function OffCanvas(el, options) {\n    _classCallCheck(this, OffCanvas);\n\n    var defaults = {};\n    this.el = el;\n    this.settings = Object.assign(defaults, options);\n    this.init();\n  }\n\n  _createClass(OffCanvas, [{\n    key: \"init\",\n    value: function init() {}\n  }]);\n\n  return OffCanvas;\n}();\n\nexports.default = OffCanvas;\n\n//# sourceURL=webpack:///./modules/OffCanvas.js?");

/***/ }),

/***/ "./modules/Sticky.js":
/*!***************************!*\
  !*** ./modules/Sticky.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _stickybits = __webpack_require__(/*! stickybits */ \"../node_modules/stickybits/dist/stickybits.es.js\");\n\nvar _stickybits2 = _interopRequireDefault(_stickybits);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Sticky = function Sticky(el, options) {\n  _classCallCheck(this, Sticky);\n\n  var defaults = {\n    stickyItem: \".sticky__item\"\n  };\n  this.el = el;\n  this.settings = Object.assign(defaults, options);\n\n  var stickybit = (0, _stickybits2.default)(this.settings.stickyItem);\n};\n\nexports.default = Sticky;\n\n//# sourceURL=webpack:///./modules/Sticky.js?");

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