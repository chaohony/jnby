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

var _page = __webpack_require__(2);

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  var state = {
    timer1: null,
    timer2: null

    // 插入头尾
  };var h = document.createElement('div');
  var f = document.createElement('div');
  var header = document.querySelector('.header');
  var footer = document.querySelector('.footer');
  h.innerHTML = '<nav class="nav">\n                  <ul class="ul">\n                    <li class="collection">\n                      <a class="li-a" href="./page2.html">\n                        <span class="en">COLLECTION</span>\n                        <span class="ch">\u642D\u914D</span>\n                      </a>\n                    </li>\n                    <li class="campaign">\n                      <a class="li-a" href="./page3.html">\n                        <span class="en">CAMPAIGN</span>\n                        <span class="ch">\u5F62\u8C61\u7247</span>\n                      </a>\n                    </li>\n                    <li class="lookbook">\n                      <a class="li-a sp" href="./page4.html">\n                        <span class="en">LOOKBOOK</span>\n                        <span class="ch">\u4EA7\u54C1\u56FE\u518C</span>\n                        <br>\n                        <div class="lo-wrapper">\n                          <div class="lo">AW 18</div>\n                          <div class="lo">SS 18</div>\n                        </div> \n                      </a>\n                    </li>\n                    <li class="brand-story">\n                      <a class="li-a" href="./page5.html">\n                        <span class="en">BRAND STORY</span>\n                        <span class="ch">\u54C1\u724C\u6545\u4E8B</span>\n                      </a>\n                    </li>\n                    <li class="projects">\n                      <a class="li-a sp" href="./page6.html">\n                        <span class="en">PROJECTS</span>\n                        <span class="ch">\u4E13\u9898</span>\n                        <br>\n                        <div class="lo-wrapper">\n                          <div class="lo jumpToPage7">\n                            <span class="inner-en">IS THAT YOU</span>\n                            <div class="los inner-ch">\u5BFB\u4EBA\u542F\u4E8B</div>\n                          </div>\n                          <div class="lo">\n                            <span class="inner-en">PARENT - CHILD CLUB</span>\n                            <div class="los inner-ch">\u4EB2\u5B50\u4FF1\u4E50\u90E8</div>\n                          </div>\n                          <div class="lo jumpToPage8">\n                            <span class="inner-en">IT\'S DIFFERENT BUT FUNNY</span>\n                            <div class="los inner-ch">\u4E0D\u4E00\u6837\u624D\u597D\u73A9</div>\n                          </div>\n                        </div>\n                      </a>\n                    </li>\n                    <li class="contact">\n                      <a class="li-a" href="./page9.html">\n                        <span class="en">CONTACT</span>\n                        <span class="ch">\u8054\u7CFB\u6211\u4EEC</span>\n                      </a>\n                    </li>\n                    <li class="stores">\n                      <a class="li-a" href="http://www.jnbygroup.com/address.do?p=3">\n                        <span class="en">STORES</span>\n                        <span class="ch">\u5E97\u94FA</span>\n                      </a>\n                    </li></ul>\n                    <div class="ballon">\n                      <span class="one"></span>\n                      <span class="two"></span>\n                      <span class="three"></span>\n                      </div>\n                  </nav>';
  f.innerHTML = '<ul class="f">\n                    <li>@ 2018 Pomme de terre</li>\n                    <li><a href="https://www.instagram.com/pommedeterre__/" target="_self"></a>INSTAGRAM</li>\n                    <li><a href="https://weibo.com/pommedeterre2016?refer_flag=1005055014_" target="_self">WEIBO</a></li>\n                    <li><a href="https://mp.weixin.qq.com/s/tlS237QVGdbeDb-taD86Hg" target="_self">WECHAT</a></li>\n                 </ul>';
  header.appendChild(h);
  footer.appendChild(f);

  // collapse效果
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

  // 工具函数
  function toggleClass(e) {
    if (!e) return;
    var nameS = e.className.split('');
    var num = nameS[nameS.length - 1];
    num = Number(num) + 1 > 4 ? 1 : Number(num) + 1;
    nameS.splice(2, 1, num);
    return nameS.join('');
  }

  // page1页的背景图改变效果
  (function (d) {
    var timer = setInterval(function () {
      if (!d) return;
      d.className = toggleClass(d);
    }, 7000);
  })(document.getElementById('page1'));

  // page2页的图片效果
  (0, _page2.default)();

  // 链接跳转
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = page2;
var timer = null;
var flag = true;
var debounce = null;
function page2() {
    clearTimeout(timer);
    timer = setInterval(function () {
        toggleClass(document.querySelector('#page2 .img-group-left'), 'img1', 'img2');
        toggleClass(document.querySelector('#page2 .img-group-right'), 'img3', 'img4');
    }, 7000);
    if (document.querySelector('#page2 .btn-left')) {
        document.querySelector('#page2 .btn-left').onclick = prev;
        document.querySelector('#page2 .btn-right').onclick = next;
    }
}

function toggleClass(target, a, b) {
    if (!target) return;
    var className = target.className;
    if (!className) return;
    className.search(a) >= 0 ? className = className.replace(new RegExp(a), b) : className = className.replace(new RegExp(b), a);
    target.className = className;
}

function prev() {
    // 防抖
    clearTimeout(debounce);
    setTimeout(function () {
        clearTimeout(timer);
        toggleClass(document.querySelector('#page2 .img-group-left'), 'img1', 'img2');
        toggleClass(document.querySelector('#page2 .img-group-right'), 'img3', 'img4');
        flag = false;
        // 1s的频率
        setTimeout(function () {
            flag = true;
            page2();
        }, 1050);
    }, 50);
}

function next() {
    clearTimeout(debounce);
    setTimeout(function () {
        clearTimeout(timer);
        if (flag) {
            toggleClass(document.querySelector('#page2 .img-group-left'), 'img1', 'img2');
            toggleClass(document.querySelector('#page2 .img-group-right'), 'img3', 'img4');
            flag = false;
        }
        setTimeout(function () {
            flag = true;
            page2();
        }, 1050);
    }, 50);
}

/***/ })
/******/ ]);