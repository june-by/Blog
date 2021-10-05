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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+wZM":
/***/ (function(module, exports) {

module.exports = require("react-icons/si");

/***/ }),

/***/ "/WcL":
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vL9u");


/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "1zst":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: Global

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "antd/lib/layout/layout"
var layout_ = __webpack_require__("Vn7o");

// EXTERNAL MODULE: external "react-icons/si"
var si_ = __webpack_require__("+wZM");

// EXTERNAL MODULE: external "react-icons/gr"
var gr_ = __webpack_require__("SfhN");

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__("UhKp");

// EXTERNAL MODULE: external "react-icons/ri"
var ri_ = __webpack_require__("Ib8v");

// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__("C9pf");

// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__("/WcL");

// EXTERNAL MODULE: external "react-icons/ti"
var ti_ = __webpack_require__("2FnJ");

// CONCATENATED MODULE: ./components/MenuComponent.js

var __jsx = external_react_default.a.createElement;

/* eslint-disable react/react-in-jsx-scope */










const MenuComponent = () => {
  return __jsx(external_antd_["Menu"], {
    style: {
      width: "256",
      borderRight: "none"
    },
    mode: "inline"
  }, __jsx(external_antd_["Menu"].Item, {
    key: "1"
  }, __jsx("a", {
    href: "/category/JavaScript"
  }, __jsx(si_["SiJavascript"], {
    style: {
      color: "gold",
      marginRight: "15px",
      verticalAlign: "middle"
    }
  }), "JavaScript")), __jsx(external_antd_["Menu"].Item, {
    key: "2"
  }, __jsx("a", {
    href: "/category/React"
  }, __jsx(gr_["GrReactjs"], {
    style: {
      color: "dodgerblue",
      marginRight: "15px",
      verticalAlign: "middle"
    }
  }), "React")), __jsx(external_antd_["Menu"].Item, {
    key: "3"
  }, __jsx("a", {
    href: "/category/NodeJs"
  }, __jsx(fa_["FaNodeJs"], {
    style: {
      color: "green",
      marginRight: "15px",
      verticalAlign: "middle"
    }
  }), "NodeJs")), __jsx(external_antd_["Menu"].Item, {
    key: "4"
  }, __jsx("a", {
    href: "/category/TypeScript"
  }, __jsx(si_["SiTypescript"], {
    style: {
      color: "dodgerblue",
      marginRight: "15px",
      verticalAlign: "middle"
    }
  }), "TypeScript")), __jsx(external_antd_["Menu"].Item, {
    key: "5"
  }, __jsx("a", {
    href: "/category/OperatingSystem"
  }, __jsx(ri_["RiComputerFill"], {
    style: {
      color: "forestgreen",
      marginRight: "15px",
      verticalAlign: "middle"
    }
  }), "OperatingSystem")), __jsx(external_antd_["Menu"].Item, {
    key: "6"
  }, __jsx("a", {
    href: "/category/DataStructure"
  }, __jsx(fi_["FiDatabase"], {
    style: {
      color: "dodgerblue",
      marginRight: "15px",
      verticalAlign: "middle"
    }
  }), "DataStructure")), __jsx(external_antd_["Menu"].Item, {
    key: "7"
  }, __jsx("a", {
    href: "/category/Algorithm"
  }, __jsx(ti_["TiFlowSwitch"], {
    style: {
      color: "lightpink",
      marginRight: "15px",
      verticalAlign: "middle"
    }
  }), "Algorithm")), __jsx(external_antd_["Menu"].Item, {
    key: "8"
  }, __jsx("a", {
    href: "/category/HTML-CSS"
  }, __jsx(ai_["AiOutlineHtml5"], {
    style: {
      color: "orangered",
      marginRight: "15px",
      verticalAlign: "middle"
    }
  }), "HTML-CSS")), __jsx(external_antd_["Menu"].Item, {
    key: "9"
  }, __jsx("a", {
    href: "/category/Error"
  }, __jsx(ri_["RiErrorWarningLine"], {
    style: {
      color: "red",
      marginRight: "15px",
      verticalAlign: "middle"
    }
  }), "Error")), __jsx(external_antd_["Menu"].Item, {
    key: "10"
  }, __jsx("a", {
    href: "/category/IntensiveEducation1"
  }, __jsx(io5_["IoSchoolOutline"], {
    style: {
      color: "steelblue",
      marginRight: "15px",
      verticalAlign: "middle"
    }
  }), "\uC9D1\uC911\uAD50\uC7211")), __jsx(external_antd_["Menu"].Item, {
    key: "11"
  }, __jsx("a", {
    href: "/category/IntensiveEducation2"
  }, __jsx(io5_["IoSchoolOutline"], {
    style: {
      color: "mediumseagreen",
      marginRight: "15px",
      verticalAlign: "middle"
    }
  }), "\uC9D1\uC911\uAD50\uC7212")));
};

/* harmony default export */ var components_MenuComponent = (MenuComponent);
// EXTERNAL MODULE: external "react-icons/gi"
var gi_ = __webpack_require__("kS/G");

// EXTERNAL MODULE: external "react-icons/di"
var di_ = __webpack_require__("Yz+/");

// CONCATENATED MODULE: ./components/Tags.js

var Tags_jsx = external_react_default.a.createElement;

/* eslint-disable react/react-in-jsx-scope */











const TagWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Tags__TagWrapper",
  componentId: "sc-1on6y1e-0"
})(["text-align:center;"]);
const Taged = external_styled_components_default()(external_antd_["Tag"]).withConfig({
  displayName: "Tags__Taged",
  componentId: "sc-1on6y1e-1"
})(["margin-bottom:10px;"]);

const Tags = () => {
  return Tags_jsx(external_react_default.a.Fragment, null, Tags_jsx(external_antd_["Divider"], {
    orientation: "center"
  }, "Tag"), Tags_jsx(TagWrapper, {
    style: {
      textAlign: "center"
    }
  }, Tags_jsx("div", null, Tags_jsx(Taged, {
    icon: Tags_jsx(si_["SiJavascript"], {
      style: {
        verticalAlign: "middle"
      }
    }),
    color: "yellow"
  }, " ", "JavaScript"), Tags_jsx(Taged, {
    icon: Tags_jsx(si_["SiJavascript"], {
      style: {
        verticalAlign: "middle"
      }
    }),
    color: "orange"
  }, " ", "JS")), Tags_jsx("div", null, Tags_jsx(Taged, {
    icon: Tags_jsx(ai_["AiOutlineHtml5"], {
      style: {
        verticalAlign: "middle"
      }
    }),
    color: "#f50"
  }, " ", "HTML"), Tags_jsx(Taged, {
    icon: Tags_jsx(di_["DiCss3"], {
      style: {
        verticalAlign: "middle"
      }
    }),
    color: "purple"
  }, " ", "CSS")), Tags_jsx("div", null, Tags_jsx(Taged, {
    color: "#2db7f5",
    icon: Tags_jsx(gr_["GrReactjs"], {
      style: {
        verticalAlign: "middle"
      }
    })
  }, " ", "React"), Tags_jsx(Taged, {
    color: "default",
    icon: Tags_jsx(gr_["GrReactjs"], {
      style: {
        verticalAlign: "middle"
      }
    })
  }, " ", "React Hooks")), Tags_jsx("div", null, Tags_jsx(Taged, {
    color: "violet",
    icon: Tags_jsx(si_["SiRedux"], {
      style: {
        verticalAlign: "middle"
      }
    })
  }, " ", "Redux"), Tags_jsx(Taged, {
    color: "blue",
    icon: Tags_jsx(si_["SiRedux"], {
      style: {
        verticalAlign: "middle"
      }
    })
  }, " ", "Redux Saga")), Tags_jsx("div", null, Tags_jsx(Taged, {
    icon: Tags_jsx(fi_["FiDatabase"], {
      style: {
        verticalAlign: "middle"
      }
    }),
    color: "magenta"
  }, " ", "\uC790\uB8CC\uAD6C\uC870"), Tags_jsx(Taged, {
    icon: Tags_jsx(fi_["FiDatabase"], {
      style: {
        verticalAlign: "middle"
      }
    }),
    color: "red"
  }, " ", "DataStructure"), Tags_jsx(Taged, {
    icon: Tags_jsx(fi_["FiDatabase"], {
      style: {
        verticalAlign: "middle"
      }
    }),
    color: "#87d068"
  }, " ", "\uC790\uAD6C")), Tags_jsx("div", null, Tags_jsx(Taged, {
    icon: Tags_jsx(si_["SiTypescript"], {
      style: {
        verticalAlign: "middle"
      }
    }),
    color: "#87d068"
  }, " ", "TypeScript"), Tags_jsx(Taged, {
    icon: Tags_jsx(si_["SiTypescript"], {
      style: {
        verticalAlign: "middle"
      }
    }),
    color: "geekblue"
  }, " ", "TS")), Tags_jsx("div", null, Tags_jsx(Taged, {
    icon: Tags_jsx(si_["SiNextDotJs"], {
      style: {
        verticalAlign: "middle"
      }
    }),
    color: "default"
  }, " ", "Next JS"), Tags_jsx(Taged, {
    icon: Tags_jsx(fi_["FiServer"], {
      style: {
        verticalAlign: "middle"
      }
    }),
    color: "default"
  }, " ", "ServersideRendering")), Tags_jsx("div", null, Tags_jsx(Taged, {
    icon: Tags_jsx(ri_["RiComputerFill"], {
      style: {
        verticalAlign: "middle"
      }
    }),
    color: "lime"
  }, " ", "\uC6B4\uC601\uCCB4\uC81C"), Tags_jsx(Taged, {
    icon: Tags_jsx(ri_["RiComputerFill"], {
      style: {
        verticalAlign: "middle"
      }
    }),
    color: "green"
  }, " ", "OperatingSystem"), Tags_jsx(Taged, {
    icon: Tags_jsx(ri_["RiComputerFill"], {
      style: {
        verticalAlign: "middle"
      }
    }),
    color: "cyan"
  }, " ", "OS")), Tags_jsx("div", null, Tags_jsx(Taged, {
    icon: Tags_jsx(ti_["TiFlowSwitch"], {
      style: {
        verticalAlign: "middle"
      }
    }),
    color: "pink"
  }, " ", "Algorithm"), Tags_jsx(Taged, {
    icon: Tags_jsx(ti_["TiFlowSwitch"], {
      style: {
        verticalAlign: "middle"
      }
    }),
    color: "violet"
  }, " ", "\uC54C\uACE0\uB9AC\uC998")), Tags_jsx("div", null, Tags_jsx(Taged, {
    icon: Tags_jsx(ri_["RiErrorWarningLine"], {
      style: {
        verticalAlign: "middle"
      }
    }),
    color: "red"
  }, " ", "Error"), Tags_jsx(Taged, {
    icon: Tags_jsx(ri_["RiErrorWarningLine"], {
      style: {
        verticalAlign: "middle"
      }
    }),
    color: "palevioletred"
  }, " ", "\uC5D0\uB7EC\uBAA8\uC74C")), Tags_jsx("div", null, Tags_jsx(Taged, {
    icon: Tags_jsx(ai_["AiFillCar"], {
      style: {
        verticalAlign: "middle"
      }
    }),
    color: "lightblue"
  }, " ", "\uC790\uB3D9\uCC28"), Tags_jsx(Taged, {
    icon: Tags_jsx(gi_["GiVendingMachine"], {
      style: {
        verticalAlign: "middle"
      }
    }),
    color: "default"
  }, " ", "ECU"))), Tags_jsx("div", {
    style: {
      textAlign: "center",
      fontSize: "16px",
      marginTop: "15px"
    }
  }, Tags_jsx(icons_["MailOutlined"], null), " ", Tags_jsx("div", {
    style: {
      display: "inline-block"
    }
  }, "neostgeart@gmail.com")), Tags_jsx("div", {
    style: {
      textAlign: "center",
      fontSize: "16px",
      marginTop: "15px"
    }
  }, Tags_jsx(icons_["GithubOutlined"], null), " ", Tags_jsx("a", {
    href: "https://github.com/BY-juun"
  }, "https://github.com/BY-juun")));
};

/* harmony default export */ var components_Tags = (Tags);
// CONCATENATED MODULE: ./components/AppLayout.js
var AppLayout_jsx = external_react_default.a.createElement;










const {
  Search
} = external_antd_["Input"];
const {
  Meta
} = external_antd_["Card"];
const SearchWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "AppLayout__SearchWrapper",
  componentId: "sc-18x68v7-0"
})(["width:80%;margin:auto;margin-top:25px;margin-bottom:25px;"]);
const RowWrapper = external_styled_components_default()(external_antd_["Row"]).withConfig({
  displayName: "AppLayout__RowWrapper",
  componentId: "sc-18x68v7-1"
})(["border-top:0.1px solid #f0f0f0;"]);
const ButtonWrapper = external_styled_components_default()(external_antd_["Button"]).withConfig({
  displayName: "AppLayout__ButtonWrapper",
  componentId: "sc-18x68v7-2"
})(["border:none;"]);
const Global = Object(external_styled_components_["createGlobalStyle"])([".ant-card-meta-title{margin-top:20px;}"]);

const AppLayout = ({
  children
}) => {
  const {
    me,
    logOutLoading
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: mobileview,
    1: setMobileview
  } = Object(external_react_["useState"])(false);
  const {
    0: collapsed,
    1: setCollapsed
  } = Object(external_react_["useState"])(false);
  const {
    0: mobileSearch,
    1: setMobileSearch
  } = Object(external_react_["useState"])(false);
  const onLogout = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: user["k" /* LOG_OUT_REQUEST */]
    });
  }, []);
  Object(external_react_["useEffect"])(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 576 ? setMobileview(true) : setMobileview(false);
    };

    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
  }, []);
  const onSearch = Object(external_react_["useCallback"])(value => {
    location.href = `/SearchPost/${value}`;
  }, []);
  const toggleCollapsed = Object(external_react_["useCallback"])(() => {
    if (!collapsed) {
      if (mobileSearch) {
        setMobileSearch(false);
      }
    }

    setCollapsed(!collapsed);
  }, [collapsed, mobileSearch]);
  const onClickSearchMenu = Object(external_react_["useCallback"])(() => {
    if (!mobileSearch) {
      if (collapsed) {
        setCollapsed(false);
      }
    }

    setMobileSearch(!mobileSearch);
  }, [mobileSearch, collapsed]);
  return AppLayout_jsx("div", null, AppLayout_jsx("div", {
    style: {
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      borderBottom: "0.1px solid lightgrey",
      backgroundColor: "white",
      boxShadow: "lightgrey 1px 1px 3px 1px"
    }
  }, !mobileview && AppLayout_jsx("a", {
    href: "https://byjuun.com"
  }, AppLayout_jsx("img", {
    style: {
      width: "100px",
      height: "50px",
      float: "left",
      backgroundColor: "white",
      marginLeft: "150px",
      marginRight: "150px",
      marginTop: "10px",
      marginBottom: "10px"
    },
    src: "/Original on Transparent.png"
  })), AppLayout_jsx(external_antd_["Menu"], {
    mode: "horizontal",
    style: {
      height: "57px",
      borderBottom: "none",
      marginTop: "15px"
    }
  }, mobileview && AppLayout_jsx(external_antd_["Menu"].Item, null, AppLayout_jsx(external_antd_["Button"], {
    onClick: toggleCollapsed,
    style: {
      marginBottom: 16,
      border: "none"
    }
  }, /*#__PURE__*/external_react_default.a.createElement(collapsed ? icons_["MenuUnfoldOutlined"] : icons_["MenuFoldOutlined"]))), AppLayout_jsx(external_antd_["Menu"].Item, null, AppLayout_jsx("a", {
    href: "https://byjuun.com"
  }, "Home")), me ? null : AppLayout_jsx(external_antd_["Menu"].Item, {
    style: {
      verticalAlign: "middle"
    }
  }, AppLayout_jsx(link_default.a, {
    href: "/login"
  }, AppLayout_jsx("a", null, "\uB85C\uADF8\uC778"))), !me && AppLayout_jsx(external_antd_["Menu"].Item, null, AppLayout_jsx(link_default.a, {
    href: "/signup"
  }, AppLayout_jsx("a", null, "\uD68C\uC6D0\uAC00\uC785"))), me && me.email === "neostgeart@gmail.com" && AppLayout_jsx(external_antd_["Menu"].Item, null, AppLayout_jsx(link_default.a, {
    href: "/Write"
  }, AppLayout_jsx("a", null, "\uAE00\uC4F0\uAE30"))), mobileview && AppLayout_jsx(external_antd_["Menu"].Item, {
    onClick: onClickSearchMenu
  }, "\uAC8C\uC2DC\uAE00 \uAC80\uC0C9"), AppLayout_jsx(external_antd_["Menu"].Item, null, AppLayout_jsx(link_default.a, {
    href: "/profile"
  }, AppLayout_jsx("a", null, "\uD504\uB85C\uD544"))))), AppLayout_jsx("div", {
    style: {
      paddingTop: "70px"
    }
  }, AppLayout_jsx(RowWrapper, null, AppLayout_jsx(external_antd_["Col"], {
    xs: 24,
    sm: 6,
    md: 5
  }, " ", me && !mobileview && AppLayout_jsx("div", {
    stlye: {
      textAlign: "center"
    }
  }, AppLayout_jsx(external_antd_["Card"], {
    actions: [AppLayout_jsx(ButtonWrapper, {
      key: "1",
      onClick: onLogout,
      loading: logOutLoading
    }, "\uB85C\uADF8\uC544\uC6C3"), AppLayout_jsx(ButtonWrapper, {
      key: "2",
      href: "/changeNickname"
    }, "\uB2C9\uB124\uC784\uBCC0\uACBD")],
    style: {
      minHeight: "172px"
    }
  }, AppLayout_jsx(Global, null), AppLayout_jsx(Meta, {
    avatar: AppLayout_jsx(external_antd_["Avatar"], {
      style: {
        backgroundColor: me.color
      },
      size: 64
    }, me.nickname[0]),
    title: `환영합니다! ${me.nickname}님`
  }))), !mobileview && AppLayout_jsx(external_react_default.a.Fragment, null, AppLayout_jsx(SearchWrapper, null, AppLayout_jsx(Search, {
    placeholder: "\uAC8C\uC2DC\uAE00 \uAC80\uC0C9",
    onSearch: onSearch,
    enterButton: true
  })), AppLayout_jsx(components_MenuComponent, null)), mobileview && mobileSearch && AppLayout_jsx(SearchWrapper, null, AppLayout_jsx(Search, {
    placeholder: "\uAC8C\uC2DC\uAE00 \uAC80\uC0C9",
    onSearch: onSearch,
    enterButton: true
  })), collapsed && mobileview && AppLayout_jsx("div", {
    style: {
      position: "fixed",
      zIndex: "2",
      width: "100%"
    }
  }, me && AppLayout_jsx("div", {
    stlye: {
      textAlign: "center"
    }
  }, AppLayout_jsx(external_antd_["Card"], {
    actions: [AppLayout_jsx(ButtonWrapper, {
      key: "1",
      onClick: onLogout,
      loading: logOutLoading
    }, "\uB85C\uADF8\uC544\uC6C3"), AppLayout_jsx(ButtonWrapper, {
      key: "2",
      href: "/changeNickname"
    }, "\uB2C9\uB124\uC784\uBCC0\uACBD")]
  }, AppLayout_jsx(Global, null), AppLayout_jsx(Meta, {
    avatar: AppLayout_jsx(external_antd_["Avatar"], {
      style: {
        backgroundColor: me.color
      },
      size: 64
    }, me.nickname[0]),
    title: `환영합니다! ${me.nickname}님`
  }))), AppLayout_jsx(components_MenuComponent, null))), AppLayout_jsx(external_antd_["Col"], {
    xs: 24,
    sm: 18,
    md: 13,
    style: {
      borderLeft: "0.1px solid #f0f0f0",
      borderRight: "0.1px solid #f0f0f0",
      height: "auto",
      minHeight: "881px"
    }
  }, children, mobileview && AppLayout_jsx("div", null, AppLayout_jsx("div", {
    style: {
      textAlign: 'center',
      fontSize: "16px",
      marginTop: "15px"
    }
  }, AppLayout_jsx(icons_["MailOutlined"], null), " ", AppLayout_jsx("div", {
    style: {
      display: "inline-block"
    }
  }, "neostgeart@gmail.com")), AppLayout_jsx("div", {
    style: {
      textAlign: 'center',
      fontSize: "16px",
      marginTop: "15px",
      marginBottom: "15px"
    }
  }, AppLayout_jsx(icons_["GithubOutlined"], null), " ", AppLayout_jsx("a", {
    href: "https://github.com/BY-juun"
  }, "https://github.com/BY-juun")))), AppLayout_jsx(external_antd_["Col"], {
    xs: 0,
    sm: 0,
    md: 6
  }, AppLayout_jsx(components_Tags, null)))), AppLayout_jsx(layout_["Footer"], {
    style: {
      textAlign: 'center',
      background: "lightsteelblue"
    }
  }, "ByJuun.com @2021 Created by By_Juun"));
};

/* harmony default export */ var components_AppLayout = __webpack_exports__["a"] = (AppLayout);

/***/ }),

/***/ "2FnJ":
/***/ (function(module, exports) {

module.exports = require("react-icons/ti");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3zrx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 //custom hook

/* harmony default export */ __webpack_exports__["a"] = ((initialValue = null) => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    //Component의 props로 넘겨주는 함수를 usecallback사용!
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
});

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

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
          post: post["y" /* default */]
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
/* eslint-disable no-unused-vars */




function addPostAPI(data) {
  return external_axios_default.a.post('/post', data);
}

function* addPost(action) {
  try {
    const result = yield Object(effects_["call"])(addPostAPI, action.data);
    yield Object(effects_["put"])({
      //put은 dispatch라고 생각
      type: post["f" /* ADD_POST_SUCCESS */],
      data: result.data //data : result.data //성공결과가 담긴다

    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["d" /* ADD_POST_FAILURE */],
      error: error.response //실패결과가 담긴다

    });
  }
}

function addCommentAPI(data) {
  return external_axios_default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(effects_["call"])(addCommentAPI, action.data);
    console.log("결과 : ", result);
    yield Object(effects_["put"])({
      //put은 dispatch라고 생각
      type: post["c" /* ADD_COMMENT_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["a" /* ADD_COMMENT_FAILURE */],
      error: error.response //실패결과가 담긴다

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
      //put은 dispatch라고 생각
      type: post["r" /* REMOVE_POST_SUCCESS */],
      data: result.data //성공결과가 담긴다

    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["p" /* REMOVE_POST_FAILURE */],
      data: error.response.data //실패결과가 담긴다

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
      //put은 dispatch라고 생각
      type: post["x" /* UPDATE_POST_SUCCESS */],
      data: result.data //성공결과가 담긴다

    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["v" /* UPDATE_POST_FAILURE */],
      data: error.response.data //실패결과가 담긴다

    });
  }
}

function loadPostsAPI() {
  return external_axios_default.a.get('/posts/load');
}

function* loadPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostsAPI);
    yield Object(effects_["put"])({
      //put은 dispatch라고 생각
      type: post["o" /* LOAD_POSTS_SUCCESS */],
      //data : result.data //성공결과가 담긴다
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["m" /* LOAD_POSTS_FAILURE */],
      data: error.response.data //실패결과가 담긴다

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
      //put은 dispatch라고 생각
      type: post["u" /* SEARCH_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["s" /* SEARCH_POSTS_FAILURE */],
      data: error.response.data //실패결과가 담긴다

    });
  }
}

function loadCategorypostsAPI(data) {
  return external_axios_default.a.get(`/posts/load/${data}`);
}

function* loadCategoryposts(action) {
  try {
    const result = yield Object(effects_["call"])(loadCategorypostsAPI, action.data);
    yield Object(effects_["put"])({
      //put은 dispatch라고 생각
      type: post["i" /* LOAD_CATEGORYPOSTS_SUCCESS */],
      //data : result.data //성공결과가 담긴다
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["g" /* LOAD_CATEGORYPOSTS_FAILURE */],
      data: error.response.data //실패결과가 담긴다

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
      //put은 dispatch라고 생각
      type: post["l" /* LOAD_CURPOST_SUCCESS */],
      //data : result.data //성공결과가 담긴다
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["j" /* LOAD_CURPOST_FAILURE */],
      data: error.response.data //실패결과가 담긴다

    });
  }
}

function* watchAddPost() {
  yield Object(effects_["takeLatest"])(post["e" /* ADD_POST_REQUEST */], addPost);
} //eventlistner와 비슷


function* watchAddComment() {
  yield Object(effects_["takeLatest"])(post["b" /* ADD_COMMENT_REQUEST */], addComment);
} //eventlistner와 비슷


function* watchRemovePost() {
  yield Object(effects_["takeLatest"])(post["q" /* REMOVE_POST_REQUEST */], removePost);
} //eventlistner와 비슷


function* watchUpdatePost() {
  yield Object(effects_["takeLatest"])(post["w" /* UPDATE_POST_REQUEST */], updatePost);
} //eventlistner와 비슷


function* watchLoadPost() {
  yield Object(effects_["takeLatest"])(post["n" /* LOAD_POSTS_REQUEST */], loadPosts);
} //eventlistner와 비슷


function* watchLoadCurpost() {
  yield Object(effects_["takeLatest"])(post["k" /* LOAD_CURPOST_REQUEST */], loadCurpost);
} //eventlistner와 비슷


function* watchLoadCatoryposts() {
  yield Object(effects_["takeLatest"])(post["h" /* LOAD_CATEGORYPOSTS_REQUEST */], loadCategoryposts);
} //eventlistner와 비슷


function* watchLoadSearchposts() {
  yield Object(effects_["takeLatest"])(post["t" /* SEARCH_POSTS_REQUEST */], searchPosts);
} //eventlistner와 비슷


function* postSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchAddPost), Object(effects_["fork"])(watchAddComment), Object(effects_["fork"])(watchRemovePost), Object(effects_["fork"])(watchUpdatePost), Object(effects_["fork"])(watchLoadPost), Object(effects_["fork"])(watchLoadCurpost), Object(effects_["fork"])(watchLoadCatoryposts), Object(effects_["fork"])(watchLoadSearchposts)]);
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

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "C9pf":
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "Ib8v":
/***/ (function(module, exports) {

module.exports = require("react-icons/ri");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

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

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "SfhN":
/***/ (function(module, exports) {

module.exports = require("react-icons/gr");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "UhKp":
/***/ (function(module, exports) {

module.exports = require("react-icons/io5");

/***/ }),

/***/ "Vn7o":
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout/layout");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "Yz+/":
/***/ (function(module, exports) {

module.exports = require("react-icons/di");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

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

/***/ "kS/G":
/***/ (function(module, exports) {

module.exports = require("react-icons/gi");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "p+NB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_CURPOST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_CURPOST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_CURPOST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_CATEGORYPOSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOAD_CATEGORYPOSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOAD_CATEGORYPOSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SEARCH_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return SEARCH_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SEARCH_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return UPDATE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return UPDATE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return UPDATE_POST_FAILURE; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ionj");

const initialState = {
  Posts: [],
  currentPost: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
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
const LOAD_CURPOST_REQUEST = 'LOAD_CURPOST_REQUEST';
const LOAD_CURPOST_SUCCESS = 'LOAD_CURPOST_SUCCESS';
const LOAD_CURPOST_FAILURE = 'LOAD_CURPOST_FAILURE';
const LOAD_CATEGORYPOSTS_REQUEST = 'LOAD_CATEGORYPOSTS_REQUEST';
const LOAD_CATEGORYPOSTS_SUCCESS = 'LOAD_CATEGORYPOSTS_SUCCESS';
const LOAD_CATEGORYPOSTS_FAILURE = 'LOAD_CATEGORYPOSTS_FAILURE';
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const SEARCH_POSTS_REQUEST = 'SEARCH_POSTS_REQUEST';
const SEARCH_POSTS_SUCCESS = 'SEARCH_POSTS_SUCCESS';
const SEARCH_POSTS_FAILURE = 'SEARCH_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

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

    case LOAD_POSTS_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = false;
      break;

    case LOAD_POSTS_SUCCESS:
      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.Posts = action.data.concat(draft.Posts);
      break;

    case LOAD_POSTS_FAILURE:
      draft.loadPostLoading = false;
      draft.loadPostError = action.error;
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
      draft.loadCatorypostLoading = true;
      draft.loadCatorypostDone = false;
      draft.loadCatorypostError = false;
      break;

    case LOAD_CATEGORYPOSTS_SUCCESS:
      draft.loadCatorypostLoading = false;
      draft.loadCatorypostDone = true;
      draft.Posts = action.data.concat(draft.Posts);
      break;

    case LOAD_CATEGORYPOSTS_FAILURE:
      draft.loadPCatorypostLoading = false;
      draft.loadCatorypostError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["y"] = (reducer);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "vL9u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Ib8v");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("LAVF");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("1zst");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("3zrx");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("AQn3");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("1fKG");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const SignUpFormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "signup__SignUpFormWrapper",
  componentId: "sc-1p4b2zk-0"
})(["margin:auto;margin-top:30px;padding:30px;height:530px;width:80%;"]);
const Input2 = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Input"]).withConfig({
  displayName: "signup__Input2",
  componentId: "sc-1p4b2zk-1"
})(["border-radius:20px;"]);
const Button3 = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "signup__Button3",
  componentId: "sc-1p4b2zk-2"
})(["display:block;margin:auto;width:100%;border-radius:30px;margin-bottom:10px;"]);
const Inputwrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "signup__Inputwrapper",
  componentId: "sc-1p4b2zk-3"
})(["margin-bottom:10px;"]);

const Signup = () => {
  const {
    0: passwordCheck,
    1: setPasswordCheck
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: term,
    1: setTerm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: passwordError,
    1: setPasswordError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: termError,
    1: setTermError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [email, onChangeEmail] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])('');
  const [nickname, onChangeNickname] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])('');
  const [password, onChangePassword] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])('');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    signUploading,
    me,
    signUpDone,
    signUpError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const id = me === null || me === void 0 ? void 0 : me.id;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (me && id) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error("로그인 한 사용자는 회원가입이 불가능 합니다 메인화면으로 이동합니다");
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/');
    }
  }, [me, id]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (signUpDone) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].success("회원가입이 완료되었습니다! 메인화면으로 이동합니다");
      setTimeout(() => {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
      }, 1000);
    }
  }, [signUpDone]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (signUpError) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(signUpError);
    }
  }, [signUpError]);
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    return dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__[/* SIGN_UP_REQUEST */ "n"],
      data: {
        email,
        password,
        nickname
      }
    });
  }, [email, password, passwordCheck, term]);
  const onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);
  const onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("title", null, "\uD68C\uC6D0\uAC00\uC785")), __jsx(SignUpFormWrapper, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmit,
    style: {
      padding: 10
    }
  }, __jsx(Inputwrapper, null, __jsx("label", {
    htmlFor: "user-email"
  }, "\uC774\uBA54\uC77C"), __jsx("br", null), __jsx(Input2, {
    name: "user-email",
    value: email,
    required: true,
    onChange: onChangeEmail
  })), __jsx(Inputwrapper, null, __jsx("label", {
    htmlFor: "user-nick"
  }, "\uB2C9\uB124\uC784"), __jsx("br", null), __jsx(Input2, {
    name: "user-nick",
    value: nickname,
    required: true,
    onChange: onChangeNickname
  })), __jsx(Inputwrapper, null, __jsx("label2", {
    htmlFor: "user-password"
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", null), __jsx(Input2, {
    name: "user-password",
    type: "password",
    value: password,
    required: true,
    onChange: onChangePassword
  })), __jsx(Inputwrapper, null, __jsx("label", {
    htmlFor: "user-password-check"
  }, "\uBE44\uBC00\uBC88\uD638\uCCB4\uD06C"), __jsx("br", null), __jsx(Input2, {
    name: "user-password-check",
    type: "password",
    value: passwordCheck,
    required: true,
    onChange: onChangePasswordCheck
  }), passwordError && __jsx("div", {
    style: {
      color: 'red'
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), __jsx(Inputwrapper, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    name: "user-term",
    checked: term,
    onChange: onChangeTerm
  }, "\uD68C\uC6D0\uAC00\uC785\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4."), termError && __jsx("div", {
    style: {
      color: 'red'
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.")), __jsx("div", {
    style: {
      marginTop: "10px"
    }
  }, __jsx(Button3, {
    type: "primary",
    htmlType: "submit",
    loading: signUploading
  }, "\uAC00\uC785\uD558\uAE30")), __jsx("div", {
    style: {
      marginTop: "10px"
    }
  }, __jsx(Button3, {
    href: "http://api.byjuun.com/user/kakao"
  }, __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__["RiKakaoTalkFill"], null), " \uCE74\uCE74\uC624 \uD68C\uC6D0\uAC00\uC785"), __jsx(Button3, {
    href: "http://api.byjuun.com/user/facebook"
  }, " ", __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__["RiFacebookBoxFill"], null), " \uD398\uC774\uC2A4\uBD81 \uD68C\uC6D0\uAC00\uC785"), __jsx(Button3, {
    href: "http://api.byjuun.com/user/google"
  }, " ", __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__["RiGoogleFill"], null), " \uAD6C\uAE00 \uD68C\uC6D0\uAC00\uC785")))));
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].getServerSideProps(async context => {
  console.log('getServerSideProps start');
  console.log(context.req.headers);
  const cookie = context.req ? context.req.headers.cookie : '';
  axios__WEBPACK_IMPORTED_MODULE_12___default.a.defaults.headers.Cookie = '';

  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_12___default.a.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__[/* LOAD_MY_INFO_REQUEST */ "e"]
  });
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_11__["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

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