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

/***/ "./node_modules/ts-loader/index.js!./src/animation.worker.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/ts-loader/index.js!./src/animation.worker.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import { colors, colorReg } from './colorMap';\nconst numeric = new RegExp('\\\\-?\\\\d{0,}\\\\.?\\\\d+', 'g');\nconst getAnimationProps = (animation) => {\n    const ani = Object.values(animation);\n    return [...new Set(ani.map(item => Object.keys(item)).flat())];\n};\nconst fillUndefinedProp = (animation, baseKeyframe, keyframeKeys, props) => {\n    return keyframeKeys.reduce((acc, item, idx) => {\n        acc[item] = props.reduce(($acc, $item) => {\n            $acc[$item] = animation[item][$item];\n            if ($acc[$item] === undefined) {\n                const [prev, pv] = findPrev(animation, idx, $item, keyframeKeys);\n                const [next, nv] = findNext(animation, idx, $item, keyframeKeys);\n                const pa = animation[prev][$item];\n                const na = animation[next][$item];\n                const prevMatch = String(pa).match(numeric);\n                const dval = prevMatch !== null ? String(na).match(numeric).map(($$item, $$idx) => {\n                    return parseFloat((parseFloat(prevMatch[$$idx]) + ((parseFloat($$item) - parseFloat(prevMatch[$$idx])) / ((baseKeyframe[nv] - baseKeyframe[pv]) / baseKeyframe[idx]))).toFixed(3));\n                }) : pa;\n                let cnt = 0;\n                const aval = String(pa).replace(numeric, () => {\n                    const returnValue = dval[cnt];\n                    cnt++;\n                    return String(returnValue);\n                });\n                $acc[$item] = isNaN(Number(aval)) ? aval : Number(aval);\n            }\n            return $acc;\n        }, {});\n        return acc;\n    }, {});\n};\nconst fillProps = (animation, animationKeyframe, keyframeKeys, baseKeyframe, props) => {\n    const result = animationKeyframe.map((item, idx) => {\n        return fillOneProp(item, animationKeyframe, keyframeKeys, baseKeyframe, props, idx);\n    });\n    return result;\n};\nconst fillOneProp = (animationValue, animationKeyframe, keyframeKeys, baseKeyframe, props, idx) => {\n    if (animationValue[props[0]] !== undefined) {\n        return animationValue;\n    }\n    const [pk, nk] = findPrevNext(idx, baseKeyframe);\n    const pr = animationKeyframe[pk], nr = animationKeyframe[nk];\n    const row = props.reduce((acc, $item) => {\n        const pv = pr[$item], nv = nr[$item];\n        const isString = String(pv).match(numeric) === null;\n        const pn = !isString ? String(pv).match(numeric).map($$item => Number($$item)) : [], nn = !isString ? String(nv).match(numeric).map($$item => Number($$item)) : [];\n        const dv = !isString ? nn.map(($nv, $idx) => {\n            return parseFloat((pn[$idx] + (($nv - pn[$idx]) / (nk - pk) * (idx - pk))).toFixed(3));\n        }) : pv;\n        let cnt = 0;\n        const av = String(pv).replace(numeric, () => {\n            const returnValue = dv[cnt];\n            cnt++;\n            return String(returnValue);\n        });\n        acc[$item] = isNaN(Number(av)) ? av : Number(av);\n        return acc;\n    }, {});\n    return row;\n};\nconst findPrevNext = (idx, baseKeyframe) => {\n    const nk = baseKeyframe.findIndex((item, $idx) => {\n        return Number(item) >= idx;\n    });\n    const pk = nk - 1;\n    return [baseKeyframe[pk], baseKeyframe[nk]];\n};\nconst findPrev = (animation, idx, prop, keyframeKeys) => {\n    const val = idx - 1;\n    if (animation[keyframeKeys[val]][prop] !== undefined) {\n        return [keyframeKeys[val], val];\n    }\n    else {\n        return findPrev(animation, val, prop, keyframeKeys);\n    }\n};\nconst findNext = (animation, idx, prop, keyframeKeys) => {\n    const val = idx + 1;\n    if (animation[keyframeKeys[val]][prop] !== undefined) {\n        return [keyframeKeys[val], val];\n    }\n    else {\n        return findNext(animation, val, prop, keyframeKeys);\n    }\n};\nconst getPropValue = () => {\n};\nonmessage = ({ data }) => {\n    const { animation, length, idx } = data;\n    const base = (length) / 100;\n    const keyframeKeys = Object.keys(animation);\n    const baseKeyframe = keyframeKeys.map(item => Math.round(base * parseInt(item)));\n    const props = getAnimationProps(animation);\n    const baseProp = props.reduce((acc, item) => {\n        acc[item] = undefined;\n        return acc;\n    }, {});\n    let animationKeyframe = new Array(length).fill(baseProp);\n    const undefinedAnimation = fillUndefinedProp(animation, baseKeyframe, keyframeKeys, props);\n    keyframeKeys.forEach((item, idx) => {\n        animationKeyframe[baseKeyframe[idx]] = undefinedAnimation[item];\n    });\n    if (idx === undefined) {\n        animationKeyframe = fillProps(animation, animationKeyframe, keyframeKeys, baseKeyframe, props);\n        postMessage(animationKeyframe);\n    }\n    else {\n        if (idx === 0) {\n            postMessage(animation[0]);\n        }\n        else if (idx === length) {\n            postMessage(animation[100]);\n        }\n        else {\n            postMessage(fillOneProp(animation, animationKeyframe, keyframeKeys, baseKeyframe, props, idx));\n        }\n    }\n    close();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);\n\n\n//# sourceURL=webpack://431web-showcase/./src/animation.worker.ts?./node_modules/ts-loader/index.js");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./node_modules/ts-loader/index.js!./src/animation.worker.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;