(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{132:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();var o=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e);this.el=n,this.settings=Object.assign({src:""},t),this.init()}return i(e,[{key:"init",value:function(){this.el;var e=document.createElement("iframe");e.className="app-example__iframe",e.onload=function(){e.style.height=e.contentWindow.document.body.scrollHeight+"px"},e.src=this.settings.src,this.el.appendChild(e)}}]),e}();n.default=o}}]);