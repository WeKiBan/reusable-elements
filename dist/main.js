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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/drop-down.js":
/*!**************************!*\
  !*** ./src/drop-down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const dropdown = Array.from(document.querySelectorAll('.dropdown'));\n\nfunction controlMenu(e) {\n const selection = e.target.querySelector('.dropdown-list')\n selection.classList.toggle(\"active\");\n}\n\ndropdown.forEach(element => {\n    element.addEventListener('mouseenter', controlMenu)\n    element.addEventListener('mouseleave', controlMenu)\n});\n\n//# sourceURL=webpack:///./src/drop-down.js?");

/***/ }),

/***/ "./src/image-carousel.js":
/*!*******************************!*\
  !*** ./src/image-carousel.js ***!
  \*******************************/
/*! exports provided: slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slider\", function() { return slider; });\nconst slider = document.querySelector('.slider');\nconst slides = Array.from(document.querySelectorAll('.slide'));\nconst buttons = Array.from(document.querySelectorAll('.button'));\nconst endSlides = Array.from(document.querySelectorAll('.end'));\nconst dotsNav = document.querySelector('.dots-nav');\nconst dots = Array.from(document.querySelectorAll('.dot'));\n\nvar counter = 0;\n\n//interval time for autoslide movement every 5 seconds\nvar autoInterval = window.setInterval(autoChangeSlide, 5000);\n\n// event listener for arrow buttons\nbuttons.forEach((button) => {\n  button.addEventListener('click', function () {\n    //reactivates transition effect\n    slider.style.transition = 'ease-in-out 0.5s';\n    // sets the counter depending on button pressed\n    updateCounter(button.id);\n    goToSlide();\n    // stops the automatic movement\n    clearInterval(autoInterval);\n    //then restarts it\n    autoInterval = window.setInterval(autoChangeSlide, 5000);\n  });\n});\n\n//function to go to selected slide\nfunction goToSlide() {\n  //finds distance to selected slide\n  const distance = slides[counter].offsetLeft + 'px';\n  //moves to slide\n  slider.style.transform = `translateX(-${distance})`;\n  // updates the dot referencing the slide\n  updateCurrentDot();\n}\n\n//updates the counter adding if its the next slide taking away if its previous\nfunction updateCounter(direction) {\n  if (direction === 'next' && counter !== slides.length - 1) {\n    counter++;\n  } else if (direction === 'prev' && counter !== 0) {\n    counter--;\n  }\n}\n\n// event listener that fires at the end of the transition if on last slide or first slide so the carousel is a continuous loop\nslider.addEventListener('transitionend', function () {\n  if (counter === slides.length - 1) {\n    //update counter turn off transition then go to slide.\n    counter = 0;\n    slider.style.transition = 'none';\n    goToSlide();\n  } else if (counter === 0) {\n    //update counter turn off transition then go to slide.\n    counter = slides.length - 1;\n    slider.style.transition = 'none';\n    goToSlide();\n  }\n});\n\n// function to auto change slide used by interval every 5 secs\nfunction autoChangeSlide() {\n  //returns if on last slide to prevent firing\n  if (counter === slides.length - 1) return;\n  // reactivates transition\n  slider.style.transition = 'ease-in-out 0.5s';\n  //increment counter\n  counter++;\n  goToSlide();\n}\n\n// removes current-dot class from current dot then reapplies it on new dot\nfunction updateCurrentDot() {\n  if (counter === slides.length - 1) return;\n  dots.forEach((dot) => {\n    dot.classList.remove('current-dot');\n  });\n  dots[counter].classList.add('current-dot');\n}\n\n// event listener to navigate between slides using dots set on entire nav\ndotsNav.addEventListener('click', function (e) {\n  //sets clicked dot and finds the index\n  const targetDot = e.target.closest('button');\n  const targetIndex = dots.findIndex((dot) => dot === targetDot);\n  //returns if no dot was clicked\n  if (!targetDot) return;\n  // sets counter to index of dot clicked\n  counter = targetIndex;\n  // remove transition effect\n  slider.style.transition = '';\n  goToSlide();\n});\n\n\n//# sourceURL=webpack:///./src/image-carousel.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _side_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-menu.js */ \"./src/side-menu.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drop-down.js */ \"./src/drop-down.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_drop_down_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _image_carousel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-carousel.js */ \"./src/image-carousel.js\");\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/side-menu.js":
/*!**************************!*\
  !*** ./src/side-menu.js ***!
  \**************************/
/*! exports provided: controlSideMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"controlSideMenu\", function() { return controlSideMenu; });\nconst hamburgerIcon = document.querySelector('.icon');\nconst sideMenu = document.querySelector('.side-menu')\n\nfunction controlSideMenu(){\n    sideMenu.classList.toggle('open');\n    hamburgerIcon.classList.toggle('active')\n}\n\nhamburgerIcon.addEventListener('click', controlSideMenu);\n\n\n\n//# sourceURL=webpack:///./src/side-menu.js?");

/***/ })

/******/ });