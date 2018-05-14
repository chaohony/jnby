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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var state = {};
var timer = void 0;
var h = document.createElement('div');
var f = document.createElement('div');
var header = document.querySelector('.header');
var footer = document.querySelector('.footer');
h.innerHTML = '<nav class="nav"><ul><li class="collection"><a href="#">COLLECTION</a></li><li class="campaign"><a href="#">CAMPAIGN</a></li><li class="lookbook"><a href="#">LOOKBOOK</a><div class="lo">AW 18</div><div class="lo">SS 18</div></li><li class="brand-story"><a href="#">BRAND STORY</a></li><li class="projects"><a href="#">PROJECTS</a><div class="lo">IS THAT YOU<div>\u5BFB\u4EBA\u542F\u4E8B</div></div><div class="lo">PARENT - CHILD CLUB<div>\u4EB2\u5B50\u4FF1\u4E50\u90E8</div></div><div class="lo">IT\'S DIFFERENT BUT FUNNY<div>\u4E0D\u4E00\u6837\u624D\u597D\u73A9</div></div></li><li class="contact"><a href="#">CONTACT</a></li><li class="stores"><a href="#">STORES</a></li></ul></nav>';
f.innerHTML = '<ul class="f"><li>@ 2018 Pomme de terre</li><li>INSTAGRAM</li><li>WEIBO</li><li>WECHAT</li></ul>';
header.appendChild(h);
footer.appendChild(f);

window.onresize = function () {
  clearTimeout(timer);
  clearTimeout(state.vTimer);
  clearTimeout(state.hTimer);
  timer = setTimeout(function () {
    run();
  }, 200);
};

function toggleClass(e) {
  if (!e) return;
  var nameS = e.className.split('');
  var num = nameS[nameS.length - 1];
  num = Number(num) + 1 > 4 ? 1 : Number(num) + 1;
  nameS.splice(2, 1, num);
  return nameS.join('');
}

(function (d) {
  var timer = setInterval(function () {
    if (!d) return;
    d.className = toggleClass(d);
  }, 3000);
})(document.getElementById('page1'));

function sliderImg(c, duration, f) {
  if (!c) return;
  var i = 0;
  var imgs = c.getElementsByTagName('img');
  var width = imgs[0].clientWidth;
  var height = imgs[0].clientHeight;
  if (f === 'h') {
    state.hTimer = setInterval(function () {
      c.style.transition = 'transform .5s ease-in-out';
      c.style.transform = 'translate3d(' + -width * (i + 1) + 'px, 0, 0)';
    }, duration);
  } else {
    state.vTimer = setInterval(function () {
      c.style.transition = 'transform .5s ease-in-out';
      c.style.transform = 'translate3d(0, ' + -height * (i + 1) + 'px, 0)';
    }, duration);
  }
  c.addEventListener('transitionend', function () {
    i++;
    if (i === 2) {
      c.style.transition = 'none';
      c.style.transform = 'translate3d(0,0,0)';
      i = 0;
    }
  });
}

function run() {
  clearTimeout(state.hTimer);
  clearTimeout(state.vTimer);
  var v0 = document.getElementsByClassName('view-window')[0];
  var v1 = document.getElementsByClassName('view-window')[1];
  v0.style.transform = 'translate3d(0,0,0)';
  v1.style.transform = 'translate3d(0,0,0)';
  sliderImg(v0, 5000, 'h');
  setTimeout(function () {
    sliderImg(v1, 5000, 'v');
  }, 3000);
}
run();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);