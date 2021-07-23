module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\nvar _jsxFileName = \"/Users/byeongjun/My blog/front/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* eslint-disable react/prop-types */\n//page의 공통 부분 처리\n\n\n\n //Head component\n\n\n\nconst Nodebird = ({\n  Component\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, __jsx(\"meta\", {\n    charSet: \"utf-8\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }), __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }, \"BY-juun Blog\")), __jsx(Component, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }));\n};\n\nNodebird.propTypes = {\n  Componenet: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__[\"default\"].withRedux(Nodebird));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTm9kZWJpcmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJDb21wb25lbmV0IiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FDOEI7O0FBQzlCOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFtQjtBQUNoQyxTQUNJLG1FQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sV0FBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixDQURKLEVBS0ksTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQURKO0FBU0gsQ0FWRDs7QUFZQUQsUUFBUSxDQUFDRSxTQUFULEdBQXFCO0FBQ2pCQyxZQUFVLEVBQUVDLGlEQUFTLENBQUNDLFdBQVYsQ0FBc0JDO0FBRGpCLENBQXJCO0FBSWVDLDRIQUFPLENBQUNDLFNBQVIsQ0FBa0JSLFFBQWxCLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuLy9wYWdl7J2YIOqzte2GtSDrtoDrtoQg7LKY66asXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJzsgLy9IZWFkIGNvbXBvbmVudFxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xuXG5jb25zdCBOb2RlYmlyZCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiPjwvbWV0YT5cbiAgICAgICAgICAgICAgICA8dGl0bGU+QlktanV1biBCbG9nPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuTm9kZWJpcmQucHJvcFR5cGVzID0ge1xuICAgIENvbXBvbmVuZXQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChOb2RlYmlyZCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ \"./reducers/post.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n //(이전상태, 액션) => 다음상태\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"combineReducers\"])({\n  index: (state = {}, action) => {\n    //hydrate를 위해 index reducer를 추가 (SSR을 위해)\n    switch (action.type) {\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n        console.log('HYDRATE', action);\n        return _objectSpread(_objectSpread({}, state), action.payload);\n\n      default:\n        return state;\n    }\n  },\n  post: _post__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0EsTUFBTUEsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2hDQyxPQUFLLEVBQUcsQ0FBQ0MsS0FBSyxHQUFHLEVBQVQsRUFBYUMsTUFBYixLQUF3QjtBQUFFO0FBQzlCLFlBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFdBQUtDLDBEQUFMO0FBQ0lDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBc0JKLE1BQXRCO0FBQ0EsK0NBQVdELEtBQVgsR0FBb0JDLE1BQU0sQ0FBQ0ssT0FBM0I7O0FBQ0o7QUFDSSxlQUFPTixLQUFQO0FBTFI7QUFPSCxHQVQrQjtBQVVoQ08scURBQUlBO0FBVjRCLENBQUQsQ0FBbkM7QUFhZVYsMEVBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SFlEUkFURX0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbi8vKOydtOyghOyDge2DnCwg7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBpbmRleCA6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHsgLy9oeWRyYXRl66W8IOychO2VtCBpbmRleCByZWR1Y2Vy66W8IOy2lOqwgCAoU1NS7J2EIOychO2VtClcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEhZRFJBVEUgOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJyxhY3Rpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsLi4uYWN0aW9uLnBheWxvYWR9O1xuICAgICAgICAgICAgZGVmYXVsdCA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwb3N0LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, delPost, updatePost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"delPost\", function() { return delPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updatePost\", function() { return updatePost; });\nconst initialState = {\n  Posts: [{\n    id: 1,\n    Title: \"JavaScript 첫번째 게시글입니다\",\n    hashTag: [\"Js\", \"JavaScript\", \"HTML\", \"Web\"],\n    content: \"첫번째 게시글!\",\n    belong: \"JavaScript\",\n    createdAt: \"2017-06-13\"\n  }, {\n    id: 2,\n    Title: \"React 첫번째 게시글입니다!\",\n    hashTag: [\"React\", \"ReactHooks\", \"Js\", \"JavaScript\", \"HTML\", \"Web\"],\n    content: \"두번째 게시글!\",\n    belong: \"React\",\n    createdAt: \"2018-06-20\"\n  }, {\n    id: 3,\n    Title: \"TypeScript 첫번째 게시글입니당\",\n    hashTag: [\"TypeScript\", \"Ts\", \"Js\", \"JavaScript\", \"HTML\", \"Web\"],\n    content: \"세번째 게시글!\",\n    belong: \"TypeScript\",\n    createdAt: \"2019-04-22\"\n  }]\n};\nconst ADD_POST = 'ADD_POST';\nconst addPost = {\n  type: ADD_POST\n};\nconst DEL_POST = 'DEL_POST';\nconst delPost = {\n  type: DEL_POST\n};\nconst UPDATE_POST = 'UPDATE_POST';\nconst updatePost = {\n  type: UPDATE_POST\n};\nconst dummyPost = {\n  id: 4,\n  Title: \"Database 첫번째 게시글입니당\",\n  hashTag: [\"DB\", \"Database\", \"CS\"],\n  content: \"네번째 게시글!\",\n  belong: \"Database\",\n  createdAt: \"2021-07-23\"\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case ADD_POST:\n      return {\n        Posts: [dummyPost, ...state.Posts] //앞에다 추가해야 위로올라옴\n\n      };\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzP2E3ZTMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiUG9zdHMiLCJpZCIsIlRpdGxlIiwiaGFzaFRhZyIsImNvbnRlbnQiLCJiZWxvbmciLCJjcmVhdGVkQXQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiREVMX1BPU1QiLCJkZWxQb3N0IiwiVVBEQVRFX1BPU1QiLCJ1cGRhdGVQb3N0IiwiZHVtbXlQb3N0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxPQUFLLEVBQ0QsQ0FDSTtBQUNJQyxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxTQUFLLEVBQUUsdUJBRlg7QUFHSUMsV0FBTyxFQUFHLENBQUMsSUFBRCxFQUFNLFlBQU4sRUFBbUIsTUFBbkIsRUFBMEIsS0FBMUIsQ0FIZDtBQUlJQyxXQUFPLEVBQUUsVUFKYjtBQUtJQyxVQUFNLEVBQUUsWUFMWjtBQU1JQyxhQUFTLEVBQUc7QUFOaEIsR0FESixFQVVJO0FBQ0lMLE1BQUUsRUFBRSxDQURSO0FBRUlDLFNBQUssRUFBRSxtQkFGWDtBQUdJQyxXQUFPLEVBQUcsQ0FBQyxPQUFELEVBQVMsWUFBVCxFQUFzQixJQUF0QixFQUEyQixZQUEzQixFQUF3QyxNQUF4QyxFQUErQyxLQUEvQyxDQUhkO0FBSUlDLFdBQU8sRUFBRSxVQUpiO0FBS0lDLFVBQU0sRUFBRSxPQUxaO0FBTUlDLGFBQVMsRUFBRztBQU5oQixHQVZKLEVBa0JJO0FBQ0lMLE1BQUUsRUFBRSxDQURSO0FBRUlDLFNBQUssRUFBRSx1QkFGWDtBQUdJQyxXQUFPLEVBQUcsQ0FBQyxZQUFELEVBQWMsSUFBZCxFQUFtQixJQUFuQixFQUF3QixZQUF4QixFQUFxQyxNQUFyQyxFQUE0QyxLQUE1QyxDQUhkO0FBSUlDLFdBQU8sRUFBRSxVQUpiO0FBS0lDLFVBQU0sRUFBRSxZQUxaO0FBTUlDLGFBQVMsRUFBRztBQU5oQixHQWxCSjtBQUZvQixDQUFyQjtBQStCUCxNQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDTyxNQUFNQyxPQUFPLEdBQUc7QUFDbkJDLE1BQUksRUFBRUY7QUFEYSxDQUFoQjtBQUlQLE1BQU1HLFFBQVEsR0FBRyxVQUFqQjtBQUNPLE1BQU1DLE9BQU8sR0FBRztBQUNuQkYsTUFBSSxFQUFFQztBQURhLENBQWhCO0FBSVAsTUFBTUUsV0FBVyxHQUFHLGFBQXBCO0FBQ08sTUFBTUMsVUFBVSxHQUFHO0FBQ3RCSixNQUFJLEVBQUVHO0FBRGdCLENBQW5CO0FBSVAsTUFBTUUsU0FBUyxHQUFHO0FBQ2RiLElBQUUsRUFBRSxDQURVO0FBRWRDLE9BQUssRUFBRSxxQkFGTztBQUdkQyxTQUFPLEVBQUcsQ0FBQyxJQUFELEVBQU0sVUFBTixFQUFpQixJQUFqQixDQUhJO0FBSWRDLFNBQU8sRUFBRSxVQUpLO0FBS2RDLFFBQU0sRUFBRSxVQUxNO0FBTWRDLFdBQVMsRUFBRztBQU5FLENBQWxCOztBQVVBLE1BQU1TLE9BQU8sR0FBRyxDQUFDQyxLQUFLLEdBQUdqQixZQUFULEVBQXVCa0IsTUFBdkIsS0FBa0M7QUFDOUMsVUFBUUEsTUFBTSxDQUFDUixJQUFmO0FBQ0ksU0FBS0YsUUFBTDtBQUNJLGFBQU87QUFDSFAsYUFBSyxFQUFFLENBQUNjLFNBQUQsRUFBWSxHQUFHRSxLQUFLLENBQUNoQixLQUFyQixDQURKLENBQ2lDOztBQURqQyxPQUFQOztBQUdKO0FBQ0ksYUFBT2dCLEtBQVA7QUFOUjtBQVFILENBVEQ7O0FBV2VELHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgUG9zdHM6XG4gICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBUaXRsZTogXCJKYXZhU2NyaXB0IOyyq+uyiOynuCDqsozsi5zquIDsnoXri4jri6RcIixcbiAgICAgICAgICAgICAgICBoYXNoVGFnIDogW1wiSnNcIixcIkphdmFTY3JpcHRcIixcIkhUTUxcIixcIldlYlwiXSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIuyyq+uyiOynuCDqsozsi5zquIAhXCIsXG4gICAgICAgICAgICAgICAgYmVsb25nOiBcIkphdmFTY3JpcHRcIixcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQgOiBcIjIwMTctMDYtMTNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIFRpdGxlOiBcIlJlYWN0IOyyq+uyiOynuCDqsozsi5zquIDsnoXri4jri6QhXCIsXG4gICAgICAgICAgICAgICAgaGFzaFRhZyA6IFtcIlJlYWN0XCIsXCJSZWFjdEhvb2tzXCIsXCJKc1wiLFwiSmF2YVNjcmlwdFwiLFwiSFRNTFwiLFwiV2ViXCJdLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwi65GQ67KI7Ke4IOqyjOyLnOq4gCFcIixcbiAgICAgICAgICAgICAgICBiZWxvbmc6IFwiUmVhY3RcIixcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQgOiBcIjIwMTgtMDYtMjBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBUaXRsZTogXCJUeXBlU2NyaXB0IOyyq+uyiOynuCDqsozsi5zquIDsnoXri4jri7lcIixcbiAgICAgICAgICAgICAgICBoYXNoVGFnIDogW1wiVHlwZVNjcmlwdFwiLFwiVHNcIixcIkpzXCIsXCJKYXZhU2NyaXB0XCIsXCJIVE1MXCIsXCJXZWJcIl0sXG4gICAgICAgICAgICAgICAgY29udGVudDogXCLshLjrsojsp7gg6rKM7Iuc6riAIVwiLFxuICAgICAgICAgICAgICAgIGJlbG9uZzogXCJUeXBlU2NyaXB0XCIsXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0IDogXCIyMDE5LTA0LTIyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbn1cblxuY29uc3QgQUREX1BPU1QgPSAnQUREX1BPU1QnO1xuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSB7XG4gICAgdHlwZTogQUREX1BPU1Rcbn07XG5cbmNvbnN0IERFTF9QT1NUID0gJ0RFTF9QT1NUJztcbmV4cG9ydCBjb25zdCBkZWxQb3N0ID0ge1xuICAgIHR5cGU6IERFTF9QT1NUXG59O1xuXG5jb25zdCBVUERBVEVfUE9TVCA9ICdVUERBVEVfUE9TVCc7XG5leHBvcnQgY29uc3QgdXBkYXRlUG9zdCA9IHtcbiAgICB0eXBlOiBVUERBVEVfUE9TVFxufTtcblxuY29uc3QgZHVtbXlQb3N0ID0ge1xuICAgIGlkOiA0LFxuICAgIFRpdGxlOiBcIkRhdGFiYXNlIOyyq+uyiOynuCDqsozsi5zquIDsnoXri4jri7lcIixcbiAgICBoYXNoVGFnIDogW1wiREJcIixcIkRhdGFiYXNlXCIsXCJDU1wiXSxcbiAgICBjb250ZW50OiBcIuuEpOuyiOynuCDqsozsi5zquIAhXCIsXG4gICAgYmVsb25nOiBcIkRhdGFiYXNlXCIsXG4gICAgY3JlYXRlZEF0IDogXCIyMDIxLTA3LTIzXCJcbn07XG5cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9QT1NUOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBQb3N0czogW2R1bW15UG9zdCwgLi4uc3RhdGUuUG9zdHNdLCAvL+yVnuyXkOuLpCDstpTqsIDtlbTslbwg7JyE66Gc7Jis65287Ji0XG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/index */ \"./reducers/index.js\");\n\n\n\nconst {\n  createWrapper\n} = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n\n\n\nconst configureStore = () => {\n  const middlewares = [];\n  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(...middlewares));\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], enhancer);\n  return store;\n};\n\nconst wrapper = createWrapper(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImNyZWF0ZVdyYXBwZXIiLCJyZXF1aXJlIiwiY29uZmlndXJlU3RvcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsIndyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFDQSxNQUFNO0FBQUNBO0FBQUQsSUFBa0JDLG1CQUFPLENBQUMsOENBQUQsQ0FBL0I7O0FBQ0E7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLE1BQU07QUFDekIsUUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLFFBQ1hDLFNBRFcsR0FFWEMsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUMsR0FBR0osV0FBSixDQUFoQixDQUZ6QjtBQUdBLFFBQU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsdURBQUQsRUFBVU4sUUFBVixDQUF6QjtBQUNBLFNBQU9JLEtBQVA7QUFDSCxDQVBEOztBQVNBLE1BQU1HLE9BQU8sR0FBR1gsYUFBYSxDQUFDRSxjQUFELEVBQ3pCO0FBQUNVLE9BQUs7QUFBTixDQUR5QixDQUE3QjtBQUdlRCxzRUFBZiIsImZpbGUiOiIuL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSxjb21wb3NlfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmNvbnN0IHtjcmVhdGVXcmFwcGVyfSA9IHJlcXVpcmUoJ25leHQtcmVkdXgtd3JhcHBlcicpO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMvaW5kZXgnO1xuXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtdO1xuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcbiAgICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XG4gICAgcmV0dXJuIHN0b3JlO1xufTtcblxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsXG4gICAge2RlYnVnIDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCd9KTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ })

/******/ });