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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__("TpwP");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./store/configureStore.js + 4 modules
var configureStore = __webpack_require__("AQn3");

// EXTERNAL MODULE: ./styles.css
var styles = __webpack_require__("L1EO");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./lib/ga/index.js
const pageview = url => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url
  });
};
// CONCATENATED MODULE: ./pages/_app.js
var __jsx = external_react_default.a.createElement;

/* eslint-disable react/prop-types */
//page의 공통 부분 처리


 //Head component






const ByJuun = ({
  Component
}) => {
  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    const handleRouteChange = url => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return __jsx(external_react_default.a.Fragment, null, __jsx(head_default.a, null, __jsx("meta", {
    charSet: "utf-8"
  }), __jsx("title", null, "BY-juun Blog"), __jsx("link", {
    rel: "shortcut icon",
    href: "/favicon.ico"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/base16/rebecca.min.css"
  }), __jsx("script", {
    src: "//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"
  }), __jsx("script", null, "hljs.highlightAll();")), __jsx(Component, null));
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (configureStore["a" /* default */].withRedux(ByJuun));

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "AQn3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: ./reducers/post.js
var post = __webpack_require__("p+NB");

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// CONCATENATED MODULE: ./reducers/index.js



 //(이전상태, 액션) => 다음상태

const rootReducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      return action.payload;

    default:
      {
        const combinedReducers = Object(external_redux_["combineReducers"])({
          user: user["p" /* default */],
          post: post["C" /* default */]
        });
        return combinedReducers(state, action);
      }
  }
};

/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./sagas/post.js




function addPostAPI(data) {
  return external_axios_default.a.post('/post', data);
}

function* addPost(action) {
  try {
    const result = yield Object(effects_["call"])(addPostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["f" /* ADD_POST_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["d" /* ADD_POST_FAILURE */],
      error: error.response
    });
  }
}

function addCommentAPI(data) {
  return external_axios_default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(effects_["call"])(addCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: post["c" /* ADD_COMMENT_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["a" /* ADD_COMMENT_FAILURE */],
      error: error.response
    });
  }
}

function removePostAPI(data) {
  return external_axios_default.a.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield Object(effects_["call"])(removePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["u" /* REMOVE_POST_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["s" /* REMOVE_POST_FAILURE */],
      data: error.response.data
    });
  }
}

function updatePostAPI(data) {
  return external_axios_default.a.patch(`/post/${data.id}`, data);
}

function* updatePost(action) {
  try {
    const result = yield Object(effects_["call"])(updatePostAPI, action.data);
    console.log(result.data);
    yield Object(effects_["put"])({
      type: post["B" /* UPDATE_POST_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["z" /* UPDATE_POST_FAILURE */],
      data: error.response.data
    });
  }
}

function loadMainPostsAPI(data) {
  return external_axios_default.a.get(`/posts/load/main/${data.page}`);
}

function* loadMainPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadMainPostsAPI, action.data);
    yield Object(effects_["put"])({
      type: post["o" /* LOAD_MAIN_POSTS_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: post["y" /* SET_CURRENT_PAGENUM */],
      data: action.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["m" /* LOAD_MAIN_POSTS_FAILURE */],
      data: error.response.data
    });
  }
}

function searchPostsAPI(data) {
  return external_axios_default.a.get(`/posts/search/${encodeURIComponent(data)}`);
}

function* searchPosts(action) {
  try {
    console.log("action.data : ", action.data);
    const result = yield Object(effects_["call"])(searchPostsAPI, action.data);
    yield Object(effects_["put"])({
      type: post["x" /* SEARCH_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["v" /* SEARCH_POSTS_FAILURE */],
      data: error.response.data
    });
  }
}

function loadCategorypostsAPI(data) {
  return external_axios_default.a.get(`/posts/load/${data.category}/${data.page}`);
}

function* loadCategoryposts(action) {
  try {
    const result = yield Object(effects_["call"])(loadCategorypostsAPI, action.data);
    yield Object(effects_["put"])({
      type: post["i" /* LOAD_CATEGORYPOSTS_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: post["y" /* SET_CURRENT_PAGENUM */],
      data: action.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["g" /* LOAD_CATEGORYPOSTS_FAILURE */],
      data: error.response.data
    });
  }
}

function loadCurpostAPI(data) {
  return external_axios_default.a.get(`/post/load/${data}`);
}

function* loadCurpost(action) {
  try {
    const result = yield Object(effects_["call"])(loadCurpostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["l" /* LOAD_CURPOST_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["j" /* LOAD_CURPOST_FAILURE */],
      data: error.response.data
    });
  }
}

function loadPostNumAPI(data) {
  return external_axios_default.a.get(`/posts/load/length/${data}`);
}

function* loadPostNum(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostNumAPI, action.data);
    yield Object(effects_["put"])({
      type: post["r" /* LOAD_POSTNUM_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["p" /* LOAD_POSTNUM_FAILURE */],
      data: error.response.data
    });
  }
}

function* watchAddPost() {
  yield Object(effects_["takeLatest"])(post["e" /* ADD_POST_REQUEST */], addPost);
}

function* watchAddComment() {
  yield Object(effects_["takeLatest"])(post["b" /* ADD_COMMENT_REQUEST */], addComment);
}

function* watchRemovePost() {
  yield Object(effects_["takeLatest"])(post["t" /* REMOVE_POST_REQUEST */], removePost);
}

function* watchUpdatePost() {
  yield Object(effects_["takeLatest"])(post["A" /* UPDATE_POST_REQUEST */], updatePost);
}

function* watchLoadMainPost() {
  yield Object(effects_["takeLatest"])(post["n" /* LOAD_MAIN_POSTS_REQUEST */], loadMainPosts);
}

function* watchLoadCurpost() {
  yield Object(effects_["takeLatest"])(post["k" /* LOAD_CURPOST_REQUEST */], loadCurpost);
}

function* watchLoadCatoryposts() {
  yield Object(effects_["takeLatest"])(post["h" /* LOAD_CATEGORYPOSTS_REQUEST */], loadCategoryposts);
}

function* watchLoadSearchposts() {
  yield Object(effects_["takeLatest"])(post["w" /* SEARCH_POSTS_REQUEST */], searchPosts);
}

function* watchLoadPostnum() {
  yield Object(effects_["takeLatest"])(post["q" /* LOAD_POSTNUM_REQUEST */], loadPostNum);
}

function* postSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchAddPost), Object(effects_["fork"])(watchAddComment), Object(effects_["fork"])(watchRemovePost), Object(effects_["fork"])(watchUpdatePost), Object(effects_["fork"])(watchLoadMainPost), Object(effects_["fork"])(watchLoadCurpost), Object(effects_["fork"])(watchLoadCatoryposts), Object(effects_["fork"])(watchLoadSearchposts), Object(effects_["fork"])(watchLoadPostnum)]);
}
// CONCATENATED MODULE: ./sagas/user.js
/* eslint-disable no-unused-vars */




function changeNicknameAPI(data) {
  return external_axios_default.a.patch('/user/changeNickname', {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    const result = yield Object(effects_["call"])(changeNicknameAPI, action.data);
    yield Object(effects_["put"])({
      type: user["c" /* CHANGE_NICKNAME_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["a" /* CHANGE_NICKNAME_FAILURE */],
      error: err.response.data
    });
  }
}

function logInAPI(data) {
  return external_axios_default.a.post('/user/login', data);
}

function* logIn(action) {
  try {
    const result = yield Object(effects_["call"])(logInAPI, action.data);
    yield Object(effects_["put"])({
      type: user["i" /* LOG_IN_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["g" /* LOG_IN_FAILURE */],
      error: err.response.data
    });
  }
}

function logOutAPI() {
  return external_axios_default.a.get('/user/logout');
}

function* logOut() {
  try {
    yield Object(effects_["call"])(logOutAPI);
    yield Object(effects_["put"])({
      type: user["l" /* LOG_OUT_SUCCESS */]
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["j" /* LOG_OUT_FAILURE */],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return external_axios_default.a.post('/user/signup', data);
}

function* signUp(action) {
  console.log("dd");

  try {
    const result = yield Object(effects_["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(effects_["put"])({
      type: user["o" /* SIGN_UP_SUCCESS */]
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["m" /* SIGN_UP_FAILURE */],
      error: err.response.data
    });
  }
}

function loadUserAPI() {
  return external_axios_default.a.get('/user');
}

function* loadUser(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserAPI);
    yield Object(effects_["put"])({
      type: user["f" /* LOAD_MY_INFO_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["d" /* LOAD_MY_INFO_FAILURE */],
      error: err.response.data
    });
  }
}

function* watchLogIn() {
  yield Object(effects_["takeLatest"])(user["h" /* LOG_IN_REQUEST */], logIn);
}

function* watchLogOut() {
  yield Object(effects_["takeLatest"])(user["k" /* LOG_OUT_REQUEST */], logOut);
}

function* watchSignUp() {
  yield Object(effects_["takeLatest"])(user["n" /* SIGN_UP_REQUEST */], signUp);
}

function* watchLoadUser() {
  yield Object(effects_["takeLatest"])(user["e" /* LOAD_MY_INFO_REQUEST */], loadUser);
}

function* watchChangeNickname() {
  yield Object(effects_["takeLatest"])(user["b" /* CHANGE_NICKNAME_REQUEST */], changeNickname);
}

function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLoadUser), Object(effects_["fork"])(watchSignUp), Object(effects_["fork"])(watchLogIn), Object(effects_["fork"])(watchLogOut), Object(effects_["fork"])(watchChangeNickname)]);
}
// EXTERNAL MODULE: ./config/config.js
var config = __webpack_require__("OcYQ");

// CONCATENATED MODULE: ./sagas/index.js




 //rootsaga를 만들고 거기에 만들고싶은 비동기action들을 넣어준다

external_axios_default.a.defaults.baseURL = config["a" /* backUrl */];
external_axios_default.a.defaults.withCredentials = true; //모든 요청에 withCredentials : true를 해준다.

function* rootSaga() {
  //중단점이 있는 함수
  yield Object(effects_["all"])([//all은 배열을 받음 > 동시에 실행
  Object(effects_["fork"])(postSaga), Object(effects_["fork"])(userSaga)]);
}
// CONCATENATED MODULE: ./store/configureStore.js
/* eslint-disable no-unused-vars */







const configureStore = context => {
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : undefined;
  const store = Object(external_redux_["createStore"])(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ var store_configureStore = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "L1EO":
/***/ (function(module, exports) {



/***/ }),

/***/ "LAVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOG_IN_FAILURE; });
/* unused harmony export KAKAO_LOG_IN_REQUEST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOAD_MY_INFO_FAILURE; });
/* unused harmony export loginRequestAction */
/* unused harmony export logoutRequestAction */
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ionj");

const initialState = {
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const KAKAO_LOG_IN_REQUEST = 'KAKAO_LOG_IN_REQUEST';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST
});

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(state, draft => {
  switch (action.type) {
    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoDone = false;
      draft.loadMyInfoError = null;
      break;

    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoDone = true;
      draft.me = action.data;
      break;

    case LOAD_MY_INFO_FAILURE:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;

    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.me = action.data;
      draft.logInDone = true;
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutError = null;
      draft.logOutDone = false;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      break;

    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;

    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpError = null;
      draft.signUpDone = false;
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;

    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;

    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameError = null;
      draft.changeNicknameDone = false;
      break;

    case CHANGE_NICKNAME_SUCCESS:
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      draft.me = action.data;
      break;

    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["p"] = (reducer);

/***/ }),

/***/ "OcYQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backUrl; });
const backUrl = "https://api.byjuun.com";

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TpwP":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ionj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ((...args) => {
  Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(...args);
});

/***/ }),

/***/ "p+NB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return SET_CURRENT_PAGENUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_POSTNUM_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_POSTNUM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_POSTNUM_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_CURPOST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_CURPOST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_CURPOST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_CATEGORYPOSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOAD_CATEGORYPOSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOAD_CATEGORYPOSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_MAIN_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_MAIN_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_MAIN_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return SEARCH_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return SEARCH_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return SEARCH_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return UPDATE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return UPDATE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return UPDATE_POST_FAILURE; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ionj");

const initialState = {
  Posts: [],
  currentPageNum: null,
  currentPost: null,
  PostNum: null,
  loadMainPostsLoading: false,
  loadMainPostsDone: false,
  loadMainPostsError: null,
  loadCategorypostsLoading: false,
  loadCategorypostsDone: false,
  loadCategorypostsError: null,
  loadCurpostLoading: false,
  loadCurpostDone: false,
  loadCurpostError: null,
  searchPostsLoading: false,
  searchPostsDone: false,
  searchPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null
};
const SET_CURRENT_PAGENUM = "SET_CURRENT_PAGENUM";
const LOAD_POSTNUM_REQUEST = "LOAD_POSTNUM_REQUEST";
const LOAD_POSTNUM_SUCCESS = "LOAD_POSTNUM_SUCCESS";
const LOAD_POSTNUM_FAILURE = "LOAD_POSTNUM_FAILURE";
const LOAD_CURPOST_REQUEST = "LOAD_CURPOST_REQUEST";
const LOAD_CURPOST_SUCCESS = "LOAD_CURPOST_SUCCESS";
const LOAD_CURPOST_FAILURE = "LOAD_CURPOST_FAILURE";
const LOAD_CATEGORYPOSTS_REQUEST = "LOAD_CATEGORYPOSTS_REQUEST";
const LOAD_CATEGORYPOSTS_SUCCESS = "LOAD_CATEGORYPOSTS_SUCCESS";
const LOAD_CATEGORYPOSTS_FAILURE = "LOAD_CATEGORYPOSTS_FAILURE";
const LOAD_MAIN_POSTS_REQUEST = "LOAD_MAIN_POSTS_REQUEST";
const LOAD_MAIN_POSTS_SUCCESS = "LOAD_MAIN_POSTS_SUCCESS";
const LOAD_MAIN_POSTS_FAILURE = "LOAD_MAIN_POSTS_FAILURE";
const SEARCH_POSTS_REQUEST = "SEARCH_POSTS_REQUEST";
const SEARCH_POSTS_SUCCESS = "SEARCH_POSTS_SUCCESS";
const SEARCH_POSTS_FAILURE = "SEARCH_POSTS_FAILURE";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const UPDATE_POST_REQUEST = "UPDATE_POST_REQUEST";
const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
const UPDATE_POST_FAILURE = "UPDATE_POST_FAILURE";

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(state, draft => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = false;
      break;

    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.Posts.unshift(action.data);
      break;

    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;

    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;

    case ADD_COMMENT_SUCCESS:
      {
        draft.currentPost.Comments = draft.currentPost.Comments.concat(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = false;
      break;

    case REMOVE_POST_SUCCESS:
      draft.removePostLoading = false;
      draft.removePostDone = true;
      draft.Posts = draft.Posts.filter(v => v.id !== action.data);
      break;

    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false;
      draft.removePostError = action.error;
      break;

    case UPDATE_POST_REQUEST:
      draft.updatePostLoading = true;
      draft.updatePostDone = false;
      draft.updatePostError = false;
      break;

    case UPDATE_POST_SUCCESS:
      draft.updatePostLoading = false;
      draft.updatePostDone = action.data.message;
      break;

    case UPDATE_POST_FAILURE:
      draft.updatePostLoading = false;
      draft.updatePostError = action.error;
      break;

    case LOAD_MAIN_POSTS_REQUEST:
      draft.loadMainPostLoading = true;
      draft.loadMainPostDone = false;
      draft.loadMainPostError = false;
      break;

    case LOAD_MAIN_POSTS_SUCCESS:
      draft.loadMainPostLoading = false;
      draft.loadMainPostDone = true;
      draft.Posts = action.data;
      break;

    case LOAD_MAIN_POSTS_FAILURE:
      draft.loadMainPostLoading = false;
      draft.loadMainPostError = action.error;
      break;

    case SEARCH_POSTS_REQUEST:
      draft.searchPostsLoading = true;
      draft.searchPostDone = false;
      draft.searchPostError = false;
      break;

    case SEARCH_POSTS_SUCCESS:
      draft.searchPostsLoading = false;
      draft.searchPostsDone = true;
      draft.Posts = action.data.concat(draft.Posts);
      break;

    case SEARCH_POSTS_FAILURE:
      draft.searchPostsLoading = false;
      draft.searchPostsError = action.error;
      break;

    case LOAD_CURPOST_REQUEST:
      draft.loadCurpostLoading = true;
      draft.loadCurpostDone = false;
      draft.loadCurpostError = false;
      break;

    case LOAD_CURPOST_SUCCESS:
      draft.loadCurpostLoading = false;
      draft.loadCurpostDone = true;
      draft.currentPost = action.data;
      break;

    case LOAD_CURPOST_FAILURE:
      draft.loadPCurpostLoading = false;
      draft.loadCurpostError = action.error;
      break;

    case LOAD_CATEGORYPOSTS_REQUEST:
      draft.loadCategorypostsLoading = true;
      draft.loadCategorypostsDone = false;
      draft.loadCategorypostsError = false;
      break;

    case LOAD_CATEGORYPOSTS_SUCCESS:
      draft.loadCategorypostsLoading = false;
      draft.loadCategorypostsDone = true;
      draft.Posts = action.data;
      break;

    case LOAD_CATEGORYPOSTS_FAILURE:
      draft.loadCategorypostsLoading = false;
      draft.loadCategorypostsError = action.error;
      break;

    case SET_CURRENT_PAGENUM:
      draft.currentPageNum = action.data.page;
      break;

    case LOAD_POSTNUM_SUCCESS:
      draft.PostNum = action.data.length;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["C"] = (reducer);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });