/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("window.addEventListener('scroll', animatedBlock);\n\nfunction animatedBlock() {\n  const blocks = document.querySelectorAll('.default-animation');\n  const triggerBottom = window.innerHeight / 5 * 4;\n\n  blocks.forEach(block => {\n    const blockTop = block.getBoundingClientRect().top;\n\n    if(blockTop < triggerBottom) {\n      block.classList.add('show');\n    } else {\n      block.classList.remove('show');\n    }\n\n  });\n}\n\nanimatedBlock();\n\n//# sourceURL=webpack://test-labtop/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;