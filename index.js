/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	window.qs = __webpack_require__(1);
	window.qsa = __webpack_require__(2);
	window.gid = __webpack_require__(3);
	window.gclass = __webpack_require__(4);
	window.gtag = __webpack_require__(5);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function (selector) {
	  return document.querySelector(selector);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function (selector) {
	  return document.querySelectorAll(selector);
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function (selector) {
	  return document.getElementById(selector);
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function (selector) {
	  return document.getElementsByClassName(selector);
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function (selector) {
	  return document.getElementsByTagName(selector);
	}

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map