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

/***/ "./src/colorMap.ts":
/*!*************************!*\
  !*** ./src/colorMap.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"colors\": () => (/* binding */ colors),\n/* harmony export */   \"colorReg\": () => (/* binding */ colorReg)\n/* harmony export */ });\nconst colors = {\n    \"black\": \"rgba(0,0,0,1)\",\n    \"white\": \"rgba(255,255,255,1)\",\n    \"red\": \"rgba(255,0,0,1)\",\n    \"lime\": \"rgba(0,255,0,1)\",\n    \"blue\": \"rgba(0,0,255,1)\",\n    \"yellow\": \"rgba(255,255,0,1)\",\n    \"cyan\": \"rgba(0,255,255,1)\",\n    \"aqua\": \"rgba(0,255,255,1)\",\n    \"magenta\": \"rgba(255,0,255,1)\",\n    \"fuchsia\": \"rgba(255,0,255,1)\",\n    \"silver\": \"rgba(192,192,192,1)\",\n    \"gray\": \"rgba(128,128,128,1)\",\n    \"maroon\": \"rgba(128,0,0,1)\",\n    \"olive\": \"rgba(128,128,0,1)\",\n    \"green\": \"rgba(0,128,0,1)\",\n    \"purple\": \"rgba(128,0,128,1)\",\n    \"teal\": \"rgba(0,128,128,1)\",\n    \"navy\": \"rgba(0,0,128,1)\",\n    \"darkred\": \"rgba(139,0,0,1)\",\n    \"brown\": \"rgba(165,42,42,1)\",\n    \"firebrick\": \"rgba(178,34,34,1)\",\n    \"crimson\": \"rgba(220,20,60,1)\",\n    \"tomato\": \"rgba(255,99,71,1)\",\n    \"coral\": \"rgba(255,127,80,1)\",\n    \"indianred\": \"rgba(205,92,92,1)\",\n    \"lightcoral\": \"rgba(240,128,128,1)\",\n    \"darksalmon\": \"rgba(233,150,122,1)\",\n    \"salmon\": \"rgba(250,128,114,1)\",\n    \"lightsalmon\": \"rgba(255,160,122,1)\",\n    \"orangered\": \"rgba(255,69,0,1)\",\n    \"darkorange\": \"rgba(255,140,0,1)\",\n    \"orange\": \"rgba(255,165,0,1)\",\n    \"gold\": \"rgba(255,215,0,1)\",\n    \"darkgoldenrod\": \"rgba(184,134,11,1)\",\n    \"goldenrod\": \"rgba(218,165,32,1)\",\n    \"palegoldenrod\": \"rgba(238,232,170,1)\",\n    \"darkkhaki\": \"rgba(189,183,107,1)\",\n    \"khaki\": \"rgba(240,230,140,1)\",\n    \"yellowgreen\": \"rgba(154,205,50,1)\",\n    \"darkolivegreen\": \"rgba(85,107,47,1)\",\n    \"olivedrab\": \"rgba(107,142,35,1)\",\n    \"lawngreen\": \"rgba(124,252,0,1)\",\n    \"chartreuse\": \"rgba(127,255,0,1)\",\n    \"greenyellow\": \"rgba(173,255,47,1)\",\n    \"darkgreen\": \"rgba(0,100,0,1)\",\n    \"forestgreen\": \"rgba(34,139,34,1)\",\n    \"limegreen\": \"rgba(50,205,50,1)\",\n    \"lightgreen\": \"rgba(144,238,144,1)\",\n    \"palegreen\": \"rgba(152,251,152,1)\",\n    \"darkseagreen\": \"rgba(143,188,143,1)\",\n    \"mediumspringgreen\": \"rgba(0,250,154,1)\",\n    \"springgreen\": \"rgba(0,255,127,1)\",\n    \"seagreen\": \"rgba(46,139,87,1)\",\n    \"mediumaquamarine\": \"rgba(102,205,170,1)\",\n    \"mediumseagreen\": \"rgba(60,179,113,1)\",\n    \"lightseagreen\": \"rgba(32,178,170,1)\",\n    \"darkslategray\": \"rgba(47,79,79,1)\",\n    \"darkcyan\": \"rgba(0,139,139,1)\",\n    \"lightcyan\": \"rgba(224,255,255,1)\",\n    \"darkturquoise\": \"rgba(0,206,209,1)\",\n    \"turquoise\": \"rgba(64,224,208,1)\",\n    \"mediumturquoise\": \"rgba(72,209,204,1)\",\n    \"paleturquoise\": \"rgba(175,238,238,1)\",\n    \"aquamarine\": \"rgba(127,255,212,1)\",\n    \"powderblue\": \"rgba(176,224,230,1)\",\n    \"cadetblue\": \"rgba(95,158,160,1)\",\n    \"steelblue\": \"rgba(70,130,180,1)\",\n    \"cornflowerblue\": \"rgba(100,149,237,1)\",\n    \"deepskyblue\": \"rgba(0,191,255,1)\",\n    \"dodgerblue\": \"rgba(30,144,255,1)\",\n    \"lightblue\": \"rgba(173,216,230,1)\",\n    \"skyblue\": \"rgba(135,206,235,1)\",\n    \"lightskyblue\": \"rgba(135,206,250,1)\",\n    \"midnightblue\": \"rgba(25,25,112,1)\",\n    \"darkblue\": \"rgba(0,0,139,1)\",\n    \"mediumblue\": \"rgba(0,0,205,1)\",\n    \"royalblue\": \"rgba(65,105,225,1)\",\n    \"blueviolet\": \"rgba(138,43,226,1)\",\n    \"indigo\": \"rgba(75,0,130,1)\",\n    \"darkslateblue\": \"rgba(72,61,139,1)\",\n    \"slateblue\": \"rgba(106,90,205,1)\",\n    \"mediumslateblue\": \"rgba(123,104,238,1)\",\n    \"mediumpurple\": \"rgba(147,112,219,1)\",\n    \"darkmagenta\": \"rgba(139,0,139,1)\",\n    \"darkviolet\": \"rgba(148,0,211,1)\",\n    \"darkorchid\": \"rgba(153,50,204,1)\",\n    \"mediumorchid\": \"rgba(186,85,211,1)\",\n    \"thistle\": \"rgba(216,191,216,1)\",\n    \"plum\": \"rgba(221,160,221,1)\",\n    \"violet\": \"rgba(238,130,238,1)\",\n    \"orchid\": \"rgba(218,112,214,1)\",\n    \"mediumvioletred\": \"rgba(199,21,133,1)\",\n    \"palevioletred\": \"rgba(219,112,147,1)\",\n    \"deeppink\": \"rgba(255,20,147,1)\",\n    \"hotpink\": \"rgba(255,105,180,1)\",\n    \"lightpink\": \"rgba(255,182,193,1)\",\n    \"pink\": \"rgba(255,192,203,1)\",\n    \"antiquewhite\": \"rgba(250,235,215,1)\",\n    \"beige\": \"rgba(245,245,220,1)\",\n    \"bisque\": \"rgba(255,228,196,1)\",\n    \"blanchedalmond\": \"rgba(255,235,205,1)\",\n    \"wheat\": \"rgba(245,222,179,1)\",\n    \"cornsilk\": \"rgba(255,248,220,1)\",\n    \"lemonchiffon\": \"rgba(255,250,205,1)\",\n    \"lightgoldenrodyellow\": \"rgba(250,250,210,1)\",\n    \"lightyellow\": \"rgba(255,255,224,1)\",\n    \"saddlebrown\": \"rgba(139,69,19,1)\",\n    \"sienna\": \"rgba(160,82,45,1)\",\n    \"chocolate\": \"rgba(210,105,30,1)\",\n    \"peru\": \"rgba(205,133,63,1)\",\n    \"sandybrown\": \"rgba(244,164,96,1)\",\n    \"burlywood\": \"rgba(222,184,135,1)\",\n    \"tan\": \"rgba(210,180,140,1)\",\n    \"rosybrown\": \"rgba(188,143,143,1)\",\n    \"moccasin\": \"rgba(255,228,181,1)\",\n    \"navajowhite\": \"rgba(255,222,173,1)\",\n    \"peachpuff\": \"rgba(255,218,185,1)\",\n    \"mistyrose\": \"rgba(255,228,225,1)\",\n    \"lavenderblush\": \"rgba(255,240,245,1)\",\n    \"linen\": \"rgba(250,240,230,1)\",\n    \"oldlace\": \"rgba(253,245,230,1)\",\n    \"papayawhip\": \"rgba(255,239,213,1)\",\n    \"seashell\": \"rgba(255,245,238,1)\",\n    \"mintcream\": \"rgba(245,255,250,1)\",\n    \"slategray\": \"rgba(112,128,144,1)\",\n    \"lightslategray\": \"rgba(119,136,153,1)\",\n    \"lightsteelblue\": \"rgba(176,196,222,1)\",\n    \"lavender\": \"rgba(230,230,250,1)\",\n    \"floralwhite\": \"rgba(255,250,240,1)\",\n    \"aliceblue\": \"rgba(240,248,255,1)\",\n    \"ghostwhite\": \"rgba(248,248,255,1)\",\n    \"honeydew\": \"rgba(240,255,240,1)\",\n    \"ivory\": \"rgba(255,255,240,1)\",\n    \"azure\": \"rgba(240,255,255,1)\",\n    \"snow\": \"rgba(255,250,250,1)\",\n    \"dimgray\": \"rgba(105,105,105,1)\",\n    \"dimgrey\": \"rgba(105,105,105,1)\",\n    \"grey\": \"rgba(128,128,128,1)\",\n    \"darkgray\": \"rgba(169,169,169,1)\",\n    \"darkgrey\": \"rgba(169,169,169,1)\",\n    \"lightgray\": \"rgba(211,211,211,1)\",\n    \"lightgrey\": \"rgba(211,211,211,1)\",\n    \"gainsboro\": \"rgba(220,220,220,1)\",\n    \"whitesmoke\": \"rgba(245,245,245,1)\"\n};\nconst colorReg = new RegExp('rgba?\\\\(.*?\\\\)\\|#[0-9a-fA-F]{8}\\|#[0-9a-fA-F]{6}\\|#[0-9a-fA-F]{3}\\|black\\|white\\|red\\|lime\\|blue\\|yellow\\|cyan\\|aqua\\|magenta\\|fuchsia\\|silver\\|gray\\|maroon\\|olive\\|green\\|purple\\|teal\\|navy\\|darkred\\|brown\\|firebrick\\|crimson\\|tomato\\|coral\\|indianred\\|lightcoral\\|darksalmon\\|salmon\\|lightsalmon\\|orangered\\|darkorange\\|orange\\|gold\\|darkgoldenrod\\|goldenrod\\|palegoldenrod\\|darkkhaki\\|khaki\\|yellowgreen\\|darkolivegree\\| olivedrab\\|lawngreen\\|chartreuse\\|greenyellow\\|darkgreen\\|forestgreen\\|limegreen\\|lightgreen\\|palegreen\\|darkseagreen\\|mediumspringg\\|springgreen\\|seagreen\\|mediumaquamar\\|mediumseagree\\|lightseagreen\\|darkslategray\\|darkcyan\\|lightcyan\\|darkturquoise\\|turquoise\\|mediumturquoi\\|paleturquoise\\|aquamarine\\|powderblue\\|cadetblue\\|steelblue\\|cornflowerblu\\|deepskyblue\\|dodgerblue\\|lightblue\\|skyblue\\|lightskyblue\\|midnightblue\\|darkblue\\|mediumblue\\|royalblue\\|blueviolet\\|indigo\\|darkslateblue\\|slateblue\\|mediumslatebl\\|mediumpurple\\|darkmagenta\\|darkviolet\\|darkorchid\\|mediumorchid\\|thistle\\|plum\\|violet\\|orchid\\|mediumvioletr\\|palevioletred\\|deeppink\\|hotpink\\|lightpink\\|pink\\|antiquewhite\\|beige\\|bisque\\|blanchedalmon\\|wheat\\|cornsilk\\|lemonchiffon\\|lightgoldenro\\|lightyellow\\|saddlebrown\\|sienna\\|chocolate\\|peru\\|sandybrown\\|burlywood\\|tan\\|rosybrown\\|moccasin\\|navajowhite\\|peachpuff\\|mistyrose\\|lavenderblush\\|linen\\|oldlace\\|papayawhip\\|seashell\\|mintcream\\|slategray\\|lightslategra\\|lightsteelblu\\|lavender\\|floralwhite\\|aliceblue\\|ghostwhite\\|honeydew\\|ivory\\|azure\\|snow\\|dimgray\\|dimgrey\\|grey\\|darkgray\\|darkgrey\\|lightgray\\|lightgrey\\|gainsboro\\|whitesmoke', 'g');\n\n\n//# sourceURL=webpack://431web-showcase/./src/colorMap.ts?");

/***/ }),

/***/ "./src/createKeyframes.ts":
/*!********************************!*\
  !*** ./src/createKeyframes.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"delay\": () => (/* binding */ delay),\n/* harmony export */   \"play\": () => (/* binding */ play),\n/* harmony export */   \"gotoAndStop\": () => (/* binding */ gotoAndStop),\n/* harmony export */   \"createKeyframes\": () => (/* binding */ createKeyframes),\n/* harmony export */   \"updateAnimation\": () => (/* binding */ updateAnimation),\n/* harmony export */   \"getKeyframe\": () => (/* binding */ getKeyframe),\n/* harmony export */   \"colorRGBLize\": () => (/* binding */ colorRGBLize),\n/* harmony export */   \"findSpcKeys\": () => (/* binding */ findSpcKeys),\n/* harmony export */   \"findFnKeys\": () => (/* binding */ findFnKeys),\n/* harmony export */   \"findColorKeys\": () => (/* binding */ findColorKeys)\n/* harmony export */ });\n/* harmony import */ var _colorMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorMap */ \"./src/colorMap.ts\");\n/* harmony import */ var _animation_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation.worker */ \"./src/animation.worker.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst delay = (duration) => {\n    return new Promise((res, rej) => {\n        setTimeout(() => {\n            res(true);\n        }, duration);\n    });\n};\nconst play = (element, animation, fps = 60) => __awaiter(void 0, void 0, void 0, function* () {\n    const lng = animation.length;\n    const delayNum = 1000 / fps;\n    // let frame = 0;\n    for (let i = 0; i < lng; i++) {\n        gotoAndStop(element, animation, i);\n        yield delay(delayNum);\n    }\n});\nconst gotoAndStop = (element, animation, frame) => {\n    let style = animation[frame];\n    Object.keys(style).forEach((item) => __awaiter(void 0, void 0, void 0, function* () {\n        element.style[item] = style[item];\n    }));\n};\nconst createKeyframes = (animation, length, option) => {\n    const { fnKeys, colorKeys } = option === undefined || option.fnKeys === undefined || option.colorKeys === undefined\n        ? findSpcKeys(animation)\n        : option;\n    //option에 함수밸류를 가진 속성을 명시하지 않으면, 자동으로 찾습니다.\n    const updator = updateAnimation(animation, length, fnKeys, colorKeys);\n    const getKeyframor = getKeyframe(animation, length, fnKeys, colorKeys);\n    return [updator, getKeyframor]; //애니메이션 키프레임, 키프레임 재생성 함수, 특정 프레임 불러오는 함수 반환\n};\nconst updateAnimation = (animation, length, fnKeys, colorKeys) => {\n    //애니메이션 키프레임을 재생성합니다.\n    return () => {\n        const lng = typeof length === 'function' ? length() : length;\n        // const settedAnimation = ;\n        const worker = new _animation_worker__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        // const worker = new Worker(new URL('./animation.worker.ts', import.meta.url));\n        const promise = new Promise((res, rej) => {\n            worker.onmessage = ({ data }) => {\n                res(data);\n            };\n        });\n        worker.postMessage({\n            animation: setDefaultAnimation(animation, fnKeys, colorKeys),\n            length: lng\n        });\n        return promise;\n        // return settedAnimation;\n    };\n};\nconst getKeyframe = (animation, length, fnKeys, colorKeys) => {\n    return (idx) => {\n        const lng = typeof length === 'function' ? length() : length;\n        // const settedAnimation = ;\n        const worker = new _animation_worker__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        // const worker = new Worker(new URL('./animation.worker.ts', import.meta.url));\n        const promise = new Promise((res, rej) => {\n            worker.onmessage = ({ data }) => {\n                res(data);\n            };\n        });\n        worker.postMessage({\n            animation: setDefaultAnimation(animation, fnKeys, colorKeys),\n            length: lng,\n            idx: idx\n        });\n        return promise;\n    };\n};\nconst setDefaultAnimation = (animation, fnKeys, colorKeys) => {\n    //초기 함수 실행 후 값 변환, 색깔코드 변환\n    let ani = JSON.parse(JSON.stringify(animation));\n    Object.keys(fnKeys).forEach((item) => {\n        fnKeys[item].forEach((prop) => {\n            ani[item][prop] = animation[item][prop]();\n            // const fn:Function = animation[item][prop] as Function;\n        });\n    });\n    //함수 실행행\n    Object.keys(colorKeys).forEach((item) => {\n        colorKeys[item].forEach((prop) => {\n            ani[item][prop] = colorRGBLize(animation[item][prop]);\n        });\n    });\n    //색깔 변경\n    return ani;\n};\nconst colorRGBLize = ($color) => {\n    let str = $color.replace(_colorMap__WEBPACK_IMPORTED_MODULE_0__.colorReg, (match, p1) => {\n        if (match.substring(0, 1) === '#') {\n            let color = '';\n            switch (match.length) {\n                case 4:\n                    const cs = match.split('').splice(1, 4);\n                    color = (cs.reduce((acc, item) => {\n                        acc += (item + item);\n                        return acc;\n                    }, '')) + 'ff';\n                    break;\n                case 7:\n                    color = (match.replace('#', '')) + 'ff';\n                    break;\n                case 9:\n                    color = (match.replace('#', ''));\n                    break;\n                default:\n                    color = 'ffffffff';\n            }\n            const rgba = [parseInt(color.substring(0, 2), 16), parseInt(color.substring(2, 4), 16), parseInt(color.substring(4, 6), 16), (parseInt(color.substring(6, 8), 16) / 255)];\n            return 'rgba(' + rgba.join(',') + ')';\n        }\n        else if (match.substring(0, 3) === 'rgb') {\n            if (match.substring(3, 4) === 'a')\n                return match;\n            else\n                return match.replace(/\\((.*?)\\)/, '($1,1)').replace('rgb', 'rgba');\n        }\n        else {\n            return _colorMap__WEBPACK_IMPORTED_MODULE_0__.colors[$color] === undefined ? 'rgba(255,255,255,0.5)' : _colorMap__WEBPACK_IMPORTED_MODULE_0__.colors[$color];\n        }\n    });\n    return str;\n};\nconst findSpcKeys = (animation) => {\n    //색깔 속성을 가진 키프레임과 함수 속성을 가진 키프레임을 찾아냅니다.\n    const result = Object.keys(animation).reduce((acc, item) => {\n        const thisAnimation = animation[item];\n        const fnKeys = findFnKeys(thisAnimation);\n        const colorKeys = findColorKeys(thisAnimation);\n        if (fnKeys.length > 0)\n            acc.fnKeys[item] = fnKeys;\n        if (colorKeys.length > 0)\n            acc.colorKeys[item] = colorKeys;\n        return acc;\n    }, { fnKeys: {}, colorKeys: {} });\n    return result;\n};\nconst findFnKeys = (animationValue) => {\n    //함수 속성을 가진 키프레임을 반환합니다.\n    return Object.keys(animationValue).filter($item => {\n        return typeof animationValue[$item] === 'function';\n    });\n};\nconst findColorKeys = (animationValue) => {\n    //색깔 속성을 가진 키프레임을 반환합니다.\n    return Object.keys(animationValue).filter($item => {\n        return typeof animationValue[$item] === 'string' && String(animationValue[$item]).match(_colorMap__WEBPACK_IMPORTED_MODULE_0__.colorReg) !== null;\n    });\n};\n// .match(/[^)^\\s]*\\(.*?\\)/g)\n\n\n//# sourceURL=webpack://431web-showcase/./src/createKeyframes.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scrollAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollAnimation */ \"./src/scrollAnimation.ts\");\n\nif (!(typeof exports === 'object' && \"object\" !== 'undefined')) {\n    window.ScrollAnimation = _scrollAnimation__WEBPACK_IMPORTED_MODULE_0__.ScrollAnimation;\n}\nconsole.log(new _scrollAnimation__WEBPACK_IMPORTED_MODULE_0__.ScrollAnimation(window, '.target'));\n\n\n//# sourceURL=webpack://431web-showcase/./src/index.ts?");

/***/ }),

/***/ "./src/inlineAnimationParser.ts":
/*!**************************************!*\
  !*** ./src/inlineAnimationParser.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCSSAttribute\": () => (/* binding */ getCSSAttribute),\n/* harmony export */   \"parseCSS\": () => (/* binding */ parseCSS),\n/* harmony export */   \"isEval\": () => (/* binding */ isEval)\n/* harmony export */ });\nconst getCSSAttribute = (element, elementReplace) => {\n    const attrs = Array.from(element.attributes).reduce((acc, item) => {\n        const key = item.name, val = item.value;\n        const rowname = key.match(/^data\\-animation\\-(\\d+)$/);\n        if (rowname === null) {\n            return acc;\n        }\n        else {\n            acc[rowname[1]] = parseCSS(val, element, elementReplace);\n            return acc;\n        }\n    }, {});\n    return attrs;\n};\nconst parseCSS = ($css, element, elementReplace) => {\n    const css = $css.replace(/;$/, \"\").trim();\n    const cssJS = css.replace(/\\n|(;)$/g, \"\").replace(/<\\$(.*)\\$>/g, (match, p1) => '<$' + encodeURIComponent(p1) + '$>')\n        .split(/;(?![^<$]*\\$>)/)\n        .map(item => item.replace(/\\-([a-z])/g, (match, p1) => p1.toUpperCase()))\n        .reduce((acc, item) => {\n        const i = item.indexOf(':');\n        const [val, key] = [item.substring(0, i), item.substring(i + 1).match(/<\\$.*\\$>/) ? decodeURIComponent(item.substring(i + 1)) : item.substring(i + 1)];\n        acc[val.trim()] = isEval(key.replace(/ +/g, \" \").trim(), element, elementReplace);\n        return acc;\n    }, {});\n    return cssJS;\n};\nconst isEval = (val, element, elementReplace) => {\n    if (elementReplace !== undefined)\n        element = elementReplace;\n    const rt = val.match(/^\\<\\$(.*)\\$\\>$/);\n    if (rt !== null) {\n        return new Function(rt[1]).bind(element);\n    }\n    else {\n        return val;\n    }\n};\n\n\n//# sourceURL=webpack://431web-showcase/./src/inlineAnimationParser.ts?");

/***/ }),

/***/ "./src/scrollAnimation.ts":
/*!********************************!*\
  !*** ./src/scrollAnimation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ScrollAnimation\": () => (/* binding */ ScrollAnimation),\n/* harmony export */   \"ScrollAnimationItem\": () => (/* binding */ ScrollAnimationItem)\n/* harmony export */ });\n/* harmony import */ var _createKeyframes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createKeyframes */ \"./src/createKeyframes.ts\");\n/* harmony import */ var _inlineAnimationParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inlineAnimationParser */ \"./src/inlineAnimationParser.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nclass ScrollAnimation {\n    constructor(scrollBody, targetQuery) {\n        this.scrollBody = scrollBody;\n        this.scrollEle = scrollBody === window ? document.documentElement : scrollBody;\n        this.children = Array.from(document.querySelectorAll(targetQuery)).map(item => new ScrollAnimationItem(item));\n        this.onResizeFunction();\n        this.load();\n    }\n    bindEvent() {\n        this.scrollFunctionFunction = this.scrollFunction.bind(this);\n        this.scrollBody.addEventListener('scroll', this.scrollFunctionFunction);\n    }\n    scrollFunction() {\n        requestAnimationFrame(() => {\n            this.children.forEach((item) => {\n                item.onAnimation(Math.round(this.scrollEle.scrollTop));\n            });\n        });\n    }\n    onResize() {\n        this.resizeObserver = new ResizeObserver(this.onResizeFunction.bind(this));\n        this.resizeObserver.observe(this.scrollEle);\n    }\n    onResizeFunction() {\n        requestAnimationFrame(() => {\n            this.children.forEach((item) => {\n                item.onResize();\n                item.onAnimation(Math.round(this.scrollEle.scrollTop));\n            });\n        });\n    }\n    load() {\n        this.onResize();\n        this.bindEvent();\n    }\n    destroy() {\n        this.scrollBody.removeEventListener('scroll', this.scrollFunctionFunction);\n        this.resizeObserver.unobserve(this.scrollEle);\n        this.resizeObserver = undefined;\n    }\n}\nclass ScrollAnimationItem {\n    constructor(element) {\n        this.element = element;\n        this.animation = undefined;\n        this.setAttributeValue();\n    }\n    onResize() {\n        this.setLength();\n        [this.updator, this.getKeyframe] = (0,_createKeyframes__WEBPACK_IMPORTED_MODULE_0__.createKeyframes)((0,_inlineAnimationParser__WEBPACK_IMPORTED_MODULE_1__.getCSSAttribute)(this.element.getAttribute('data-animation-bind') ? document.querySelector(this.element.getAttribute('data-animation-bind')) : this.element, this.element), this.length);\n        this.updator().then((data) => {\n            this.animation = data;\n        });\n    }\n    setAttributeValue() {\n        this.scrollStart = (0,_inlineAnimationParser__WEBPACK_IMPORTED_MODULE_1__.isEval)(this.element.getAttribute('data-animation-start'), this.element);\n        this.scrollEnd = (0,_inlineAnimationParser__WEBPACK_IMPORTED_MODULE_1__.isEval)(this.element.getAttribute('data-animation-end'), this.element);\n    }\n    setLength() {\n        this.length = () => {\n            return this.getLngResult(this.scrollEnd) - this.getLngResult(this.scrollStart);\n        };\n    }\n    getLngResult(fn) {\n        if (typeof fn === 'function') {\n            return Number(fn());\n        }\n        else {\n            return Number(fn);\n        }\n    }\n    setAnimationFrame(frame) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (this.animation !== undefined) {\n                (0,_createKeyframes__WEBPACK_IMPORTED_MODULE_0__.gotoAndStop)(this.element, this.animation, frame);\n            }\n            else {\n                (0,_createKeyframes__WEBPACK_IMPORTED_MODULE_0__.gotoAndStop)(this.element, [yield this.getKeyframe(frame)], 0);\n            }\n            return undefined;\n        });\n    }\n    isWillChange(i) {\n        if (this.getLngResult(this.scrollStart) - 50 <= i && this.getLngResult(this.scrollEnd) + 50 >= i) {\n            return true;\n        }\n        else {\n            return false;\n        }\n    }\n    limitFrameSet(i) {\n        if (this.getLngResult(this.scrollStart) > i) {\n            return this.getLngResult(this.scrollStart);\n        }\n        else if (this.getLngResult(this.scrollEnd) < i) {\n            return this.getLngResult(this.scrollEnd);\n        }\n        else {\n            return i;\n        }\n    }\n    onAnimation(frame) {\n        const i = this.limitFrameSet(frame);\n        // this.onWillChange(i);\n        this.setAnimationFrame(i);\n    }\n    onWillChange(frame) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (this.isWillChange(frame)) {\n                clearTimeout(this.timer);\n                if (this.animation !== undefined) {\n                    this.element.style.willChange = Object.keys(this.animation[0]).join(',');\n                }\n                else {\n                    this.element.style.willChange = Object.keys(yield this.getKeyframe(frame)).join(',');\n                }\n                this.timer = setTimeout(() => {\n                    this.element.style.willChange = 'auto';\n                }, 1000);\n            }\n            else {\n                this.element.style.willChange = 'auto';\n            }\n        });\n    }\n}\n\n\n//# sourceURL=webpack://431web-showcase/./src/scrollAnimation.ts?");

/***/ }),

/***/ "./src/animation.worker.ts":
/*!*********************************!*\
  !*** ./src/animation.worker.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Worker_fn)\n/* harmony export */ });\nfunction Worker_fn() {\n  return new Worker(__webpack_require__.p + \"main.worker.js\");\n}\n\n\n//# sourceURL=webpack://431web-showcase/./src/animation.worker.ts?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;