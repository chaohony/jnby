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

window.onload = function () {
  var state = {};
  var timer = null;
  var h = document.createElement('div');
  var f = document.createElement('div');
  var header = document.querySelector('.header');
  var footer = document.querySelector('.footer');
  h.innerHTML = '<nav class="nav">\n                  <ul class="ul">\n                    <li class="collection">\n                      <a class="li-a" href="./page2.html">\n                        <span class="en">COLLECTION</span>\n                        <span class="ch">\u642D\u914D</span>  \n                      </a>\n                    </li>\n                    <li class="campaign">\n                      <a class="li-a" href="./page3.html">\n                        <span class="en">CAMPAIGN</span>\n                        <span class="ch">\u5F62\u8C61\u7247</span>\n                      </a>\n                    </li>\n                    <li class="lookbook">\n                      <a class="li-a sp" href="./page4.html">\n                        <span class="en">LOOKBOOK</span>\n                        <span class="ch">\u4EA7\u54C1\u56FE\u518C</span>\n                        <br>\n                        <div class="lo-wrapper">\n                          <div class="lo">AW 18</div>\n                          <div class="lo">SS 18</div>\n                        </div> \n                      </a>\n                    </li>\n                    <li class="brand-story">\n                      <a class="li-a" href="./page5.html">\n                        <span class="en">BRAND STORY</span>\n                        <span class="ch">\u54C1\u724C\u6545\u4E8B</span>\n                      </a>\n                    </li>\n                    <li class="projects">\n                      <a class="li-a sp" href="./page6.html">\n                        <span class="en">PROJECTS</span>\n                        <span class="ch">\u4E13\u9898</span>\n                        <br>\n                        <div class="lo-wrapper">\n                          <div class="lo jumpToPage7">\n                            <span class="inner-en">IS THAT YOU</span>\n                            <div class="los inner-ch">\u5BFB\u4EBA\u542F\u4E8B</div>\n                          </div>\n                          <div class="lo">\n                            <span class="inner-en">PARENT - CHILD CLUB</span>\n                            <div class="los inner-ch">\u4EB2\u5B50\u4FF1\u4E50\u90E8</div>\n                          </div>\n                          <div class="lo jumpToPage8">\n                            <span class="inner-en">IT\'S DIFFERENT BUT FUNNY</span>\n                            <div class="los inner-ch">\u4E0D\u4E00\u6837\u624D\u597D\u73A9</div>\n                          </div>\n                        </div>\n                      </a>\n                    </li>\n                    <li class="contact">\n                      <a class="li-a" href="./page9.html">\n                        <span class="en">CONTACT</span>\n                        <span class="ch">\u8054\u7CFB\u6211\u4EEC</span>\n                      </a>\n                    </li>\n                    <li class="stores">\n                      <a class="li-a" href="./index.html">\n                        <span class="en">STORES</span>\n                        <span class="ch">\u5E97\u94FA</span>\n                      </a>\n                    </li></ul>\n                    <div class="ballon">\n                      <span class="one"></span>\n                      <span class="two"></span>\n                      <span class="three"></span>\n                      </div>\n                  </nav>';
  f.innerHTML = '<ul class="f">\n                    <li>@ 2018 Pomme de terre</li>\n                    <li>INSTAGRAM</li>\n                    <li>WEIBO</li>\n                    <li>WECHAT</li>\n                 </ul>';
  header.appendChild(h);
  footer.appendChild(f);

  window.onresize = function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      prepareToRun();
    }, 400);
  };

  var d = document.querySelector('.ballon');
  var c = document.querySelector('.ul');
  d.addEventListener('click', toggleNav);

  function toggleNav(e) {
    e.stopPropagation();
    var className = d.className;
    var className_1 = c.className;
    if (className.indexOf('active') >= 0) {
      className = className.replace('active', '').trim();
      className_1 = className_1.replace('down', '').trim();
    } else {
      className = className + ' active';
      className_1 = className_1 + ' down';
    }
    d.className = className;
    c.className = className_1;
  }

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
    }, 5000);
  })(document.getElementById('page1'));

  function sliderImg(c, duration, f) {
    if (!c || !c.style) return;
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
        c.style.transform = 'translate3d(0px,0px,0px)';
        i = 0;
      }
    });
  }

  function prepareToRun() {
    clearTimeout(state.hTimer);
    clearTimeout(state.vTimer);
    var v0 = document.getElementsByClassName('view-window')[0];
    var v1 = document.getElementsByClassName('view-window')[1];
    if (!v0 || !v0.style) return;
    v0.style.transform = 'translate3d(0,0,0)';
    v1.style.transform = 'translate3d(0,0,0)';
    sliderImg(v0, 5000, 'h');
    sliderImg(v1, 5000, 'h');
  }

  prepareToRun();

  document.getElementsByClassName('jumpToPage8')[0].onclick = function (e) {
    e.stopPropagation();
    e.preventDefault();
    window.open('./page8.html', '_self');
  };
  document.getElementsByClassName('jumpToPage7')[0].onclick = function (e) {
    e.stopPropagation();
    e.preventDefault();
    window.open('./page7.html', '_self');
  };
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);