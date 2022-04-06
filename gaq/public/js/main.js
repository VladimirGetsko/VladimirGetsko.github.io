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

eval("function stepForm() {\n    const steps = document.querySelectorAll('.form__step');\n    const prevBtn = document.querySelector('.prev__step');\n    const nextBtn = document.querySelector('.next__step');\n    const form = document.querySelector('.steps__form');\n    const stepsNumbers = document.querySelectorAll('.steps__number');\n    const progress = document.querySelector('.progress__success');\n    const finishBlock = document.querySelector('.finish');\n\n    form.addEventListener('submit', e => e.preventDefault());\n\n    let formStepIndex = 0;\n\n    prevBtn.addEventListener('click', () => {\n        formStepIndex--;\n        stepsNumbers[formStepIndex + 1].classList.remove('active__number');\n        updateFormSteps();\n    });\n\n    nextBtn.addEventListener('click', () => {\n        if(formStepIndex < steps.length) {\n            formStepIndex++;\n            updateFormSteps();\n        }\n    });\n\n    function updateFormSteps() {\n        steps.forEach(step => {\n            step.classList.contains('active') && step.classList.remove('active');\n        });\n\n        if(formStepIndex < steps.length) {\n            steps[formStepIndex].classList.add('active');\n            stepsNumbers[formStepIndex].classList.add('active__number');\n        }\n\n        if(formStepIndex === 0) {\n            prevBtn.style.display = 'none';\n        } else {\n            prevBtn.style.display = 'block';\n        }\n\n        if(formStepIndex === steps.length) {\n            finishBlock.style.display = 'block';\n            form.style.display = 'none';\n        }\n\n        const actives = document.querySelectorAll('.active__number');\n        const percent = (((actives.length - 1) / (stepsNumbers.length - 1)) * 100).toFixed(2) + '%';\n\n        progress.style.width = percent;\n    }\n\n\n    updateFormSteps();\n}\n\nif(document.querySelector('.form__step')) {\n    stepForm();\n}\n\n\n//# sourceURL=webpack://gulp-codequest/./src/js/main.js?");

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