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
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const spollers = __webpack_require__(/*! ./module/spollers.js */ \"./src/js/module/spollers.js\");\n\nspollers();\n\n//# sourceURL=webpack://gulp-codequest/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/spollers.js":
/*!***********************************!*\
  !*** ./src/js/module/spollers.js ***!
  \***********************************/
/***/ (function(module) {

eval("module.exports  = () => {\n    const spollersArray = document.querySelectorAll('[data-spollers]');\n    if (spollersArray.length > 0) {\n        // Получение обычных слойлеров\n        const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {\n            return !item.dataset.spollers.split(\",\")[0];\n        });\n        // Инициализация обычных слойлеров\n        if (spollersRegular.length > 0) {\n            initSpollers(spollersRegular);\n        }\n\n        // Получение слойлеров с медиа запросами\n        const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {\n            return item.dataset.spollers.split(\",\")[0];\n        });\n\n        // Инициализация слойлеров с медиа запросами\n        if (spollersMedia.length > 0) {\n            const breakpointsArray = [];\n            spollersMedia.forEach(item => {\n                const params = item.dataset.spollers;\n                const breakpoint = {};\n                const paramsArray = params.split(\",\");\n                breakpoint.value = paramsArray[0];\n                breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : \"max\";\n                breakpoint.item = item;\n                breakpointsArray.push(breakpoint);\n            });\n\n            // Получаем уникальные брейкпоинты\n            let mediaQueries = breakpointsArray.map(function (item) {\n                return '(' + item.type + \"-width: \" + item.value + \"px),\" + item.value + ',' + item.type;\n            });\n            mediaQueries = mediaQueries.filter(function (item, index, self) {\n                return self.indexOf(item) === index;\n            });\n\n            // Работаем с каждым брейкпоинтом\n            mediaQueries.forEach(breakpoint => {\n                const paramsArray = breakpoint.split(\",\");\n                const mediaBreakpoint = paramsArray[1];\n                const mediaType = paramsArray[2];\n                const matchMedia = window.matchMedia(paramsArray[0]);\n\n                // Объекты с нужными условиями\n                const spollersArray = breakpointsArray.filter(function (item) {\n                    if (item.value === mediaBreakpoint && item.type === mediaType) {\n                        return true;\n                    }\n                });\n                // Событие\n                matchMedia.addListener(function () {\n                    initSpollers(spollersArray, matchMedia);\n                });\n                initSpollers(spollersArray, matchMedia);\n            });\n        }\n        // Инициализация\n        function initSpollers(spollersArray, matchMedia = false) {\n            spollersArray.forEach(spollersBlock => {\n                spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;\n                if (matchMedia.matches || !matchMedia) {\n                    spollersBlock.classList.add('_init');\n                    initSpollerBody(spollersBlock);\n                    spollersBlock.addEventListener(\"click\", setSpollerAction);\n                } else {\n                    spollersBlock.classList.remove('_init');\n                    initSpollerBody(spollersBlock, false);\n                    spollersBlock.removeEventListener(\"click\", setSpollerAction);\n                }\n            });\n        }\n        // Работа с контентом\n        function initSpollerBody(spollersBlock, hideSpollerBody = true) {\n            const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');\n            if (spollerTitles.length > 0) {\n                spollerTitles.forEach(spollerTitle => {\n                    if (hideSpollerBody) {\n                        spollerTitle.removeAttribute('tabindex');\n                        if (!spollerTitle.classList.contains('_active')) {\n                            spollerTitle.nextElementSibling.hidden = true;\n                        }\n                    } else {\n                        spollerTitle.setAttribute('tabindex', '-1');\n                        spollerTitle.nextElementSibling.hidden = false;\n                    }\n                });\n            }\n        }\n        function setSpollerAction(e) {\n            const el = e.target;\n            if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {\n                const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');\n                const spollersBlock = spollerTitle.closest('[data-spollers]');\n                const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;\n                if (!spollersBlock.querySelectorAll('._slide').length) {\n                    if (oneSpoller && !spollerTitle.classList.contains('_active')) {\n                        hideSpollersBody(spollersBlock);\n                    }\n                    spollerTitle.classList.toggle('_active');\n                    _slideToggle(spollerTitle.nextElementSibling, 500);\n                }\n                e.preventDefault();\n            }\n        }\n        function hideSpollersBody(spollersBlock) {\n            const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');\n            if (spollerActiveTitle) {\n                spollerActiveTitle.classList.remove('_active');\n                _slideUp(spollerActiveTitle.nextElementSibling, 500);\n            }\n        }\n    }\n\n    //SlideToggle\n    let _slideUp = (target, duration = 500) => {\n        if (!target.classList.contains('_slide')) {\n            target.classList.add('_slide');\n            target.style.transitionProperty = 'height, margin, padding';\n            target.style.transitionDuration = duration + 'ms';\n            target.style.height = target.offsetHeight + 'px';\n            target.offsetHeight;\n            target.style.overflow = 'hidden';\n            target.style.height = 0;\n            target.style.paddingTop = 0;\n            target.style.paddingBottom = 0;\n            target.style.marginTop = 0;\n            target.style.marginBottom = 0;\n            window.setTimeout(() => {\n                target.hidden = true;\n                target.style.removeProperty('height');\n                target.style.removeProperty('padding-top');\n                target.style.removeProperty('padding-bottom');\n                target.style.removeProperty('margin-top');\n                target.style.removeProperty('margin-bottom');\n                target.style.removeProperty('overflow');\n                target.style.removeProperty('transition-duration');\n                target.style.removeProperty('transition-property');\n                target.classList.remove('_slide');\n            }, duration);\n        }\n    }\n    let _slideDown = (target, duration = 500) => {\n        if (!target.classList.contains('_slide')) {\n            target.classList.add('_slide');\n            if (target.hidden) {\n                target.hidden = false;\n            }\n            let height = target.offsetHeight;\n            target.style.overflow = 'hidden';\n            target.style.height = 0;\n            target.style.paddingTop = 0;\n            target.style.paddingBottom = 0;\n            target.style.marginTop = 0;\n            target.style.marginBottom = 0;\n            target.offsetHeight;\n            target.style.transitionProperty = \"height, margin, padding\";\n            target.style.transitionDuration = duration + 'ms';\n            target.style.height = height + 'px';\n            target.style.removeProperty('padding-top');\n            target.style.removeProperty('padding-bottom');\n            target.style.removeProperty('margin-top');\n            target.style.removeProperty('margin-bottom');\n            window.setTimeout(() => {\n                target.style.removeProperty('height');\n                target.style.removeProperty('overflow');\n                target.style.removeProperty('transition-duration');\n                target.style.removeProperty('transition-property');\n                target.classList.remove('_slide');\n            }, duration);\n        }\n    }\n    let _slideToggle = (target, duration = 500) => {\n        if (target.hidden) {\n            return _slideDown(target, duration);\n        } else {\n            return _slideUp(target, duration);\n        }\n    }\n\n};\n\n//# sourceURL=webpack://gulp-codequest/./src/js/module/spollers.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;