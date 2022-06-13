/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createElement = (title, attribute) =>{\nconst element = document.createElement(title)\nfor(const key in attribute){\n    element.setAttribute(key, attribute[key])\n}\n    return element\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);\n\n//# sourceURL=webpack://restauarant-page/./src/createElement.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _menu_pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-pages/contact */ \"./src/menu-pages/contact.js\");\n\n\n\nconst container = document.querySelector('.container')\n\nfunction header(){\n    const heading = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', {class: 'heading'})\n    heading.textContent = 'Doughnut Shop'\n    return heading\n}\n\ncontainer.appendChild(header())\ncontainer.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n;(0,_menu_pages_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n//# sourceURL=webpack://restauarant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu-pages/contact.js":
/*!***********************************!*\
  !*** ./src/menu-pages/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createElement */ \"./src/createElement.js\");\n\n\nconst contentContainer = document.querySelector('.contentContainer')\n\nfunction contact(){\n    const contactPage = document.querySelector('.menu-item3')\n    const contact = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', {class:'contactInfo'})\n    contactPage.addEventListener('click', () =>{\n        contact.textContent='hi'\n        contentContainer.appendChild(contact)\n    })\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restauarant-page/./src/menu-pages/contact.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n\n\nfunction menu(){\n    const menuPage = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {class:'menu'})\n    const menuItem = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', {class: 'menu-item1'})\n    const menuItem2 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', {class: 'menu-item2'})\n    const menuItem3 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', {class: 'menu-item3'})\n    menuItem.textContent = 'Menu'\n    menuItem2.textContent = 'About'\n    menuItem3.textContent = 'Contact'\n    menuPage.appendChild(menuItem)\n    menuPage.appendChild(menuItem2)\n    menuPage.appendChild(menuItem3)\n    return menuPage\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restauarant-page/./src/menu.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;