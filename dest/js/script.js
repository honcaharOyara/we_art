/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/burger-menu-handler.js":
/*!***************************************!*\
  !*** ./src/js/burger-menu-handler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ burgerMenuHandler)
/* harmony export */ });
/* harmony import */ var _refs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refs */ "./src/js/refs.js");


function burgerMenuHandler() {
    _refs__WEBPACK_IMPORTED_MODULE_0__["default"].burgerToggler.classList.toggle('active');
    _refs__WEBPACK_IMPORTED_MODULE_0__["default"].body.classList.toggle('backdrop-active');
    _refs__WEBPACK_IMPORTED_MODULE_0__["default"].backdrop.classList.toggle('active');
    _refs__WEBPACK_IMPORTED_MODULE_0__["default"].burgerMenu.classList.toggle('active');
}

/***/ }),

/***/ "./src/js/refs.js":
/*!************************!*\
  !*** ./src/js/refs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    body: document.querySelector('body'),

    burgerToggler: document.querySelector('.js-burger-toggler'),
    burgerMenu: document.querySelector('.js-burger-menu'),

    backdrop: document.querySelector('.js-backdrop'),

    bannerPlayBtn: document.querySelector('.js-banner-play-btn'),
    bannerVideo: document.querySelector('#bannerVideo'),

    aboutContentWrap: document.querySelector('.js-content'),
    readeMoreBtn: document.querySelector('.js-read-more-btn')
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _refs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refs */ "./src/js/refs.js");
/* harmony import */ var _burger_menu_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger-menu-handler */ "./src/js/burger-menu-handler.js");



_refs__WEBPACK_IMPORTED_MODULE_0__["default"].burgerToggler.addEventListener('click', _burger_menu_handler__WEBPACK_IMPORTED_MODULE_1__["default"])
_refs__WEBPACK_IMPORTED_MODULE_0__["default"].backdrop.addEventListener('click', _burger_menu_handler__WEBPACK_IMPORTED_MODULE_1__["default"])

_refs__WEBPACK_IMPORTED_MODULE_0__["default"].burgerToggler.addEventListener('click', _burger_menu_handler__WEBPACK_IMPORTED_MODULE_1__["default"])

_refs__WEBPACK_IMPORTED_MODULE_0__["default"].bannerPlayBtn.addEventListener('click', e => {
    e.currentTarget.classList.toggle('paused');

    (!_refs__WEBPACK_IMPORTED_MODULE_0__["default"].bannerVideo.paused) ?
    _refs__WEBPACK_IMPORTED_MODULE_0__["default"].bannerVideo.pause() :
    _refs__WEBPACK_IMPORTED_MODULE_0__["default"].bannerVideo.play();
})

const aboutContentParagraphs = _refs__WEBPACK_IMPORTED_MODULE_0__["default"].aboutContentWrap.querySelectorAll('p')

if(aboutContentParagraphs.length > 2) {
    for (let i = 0; i < aboutContentParagraphs.length ; i++) {
        if (i > 1) {
            aboutContentParagraphs[i].style.display = 'none';
            console.log(aboutContentParagraphs[i]);
        }
    }

    _refs__WEBPACK_IMPORTED_MODULE_0__["default"].readeMoreBtn.classList.add('show')
    _refs__WEBPACK_IMPORTED_MODULE_0__["default"].readeMoreBtn.addEventListener('click', e => {
        e.preventDefault()
        for (let i = 0; i < aboutContentParagraphs.length ; i++) {
            if (aboutContentParagraphs[i].style.display === 'none') {
                aboutContentParagraphs[i].style.display = 'block';
                e.target.classList.remove('show')
            }
        }
    })
}

})();

/******/ })()
;
//# sourceMappingURL=script.js.map