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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Modal.jsx":
/*!******************************!*\
  !*** ./components/Modal.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ModalContext_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ModalContext.jsx */ \"./contexts/ModalContext.jsx\");\n\nvar _jsxFileName = \"/home/joevtap/quick-code/modal-consuming-context/components/Modal.jsx\";\n\n\n\nconst Modal = () => {\n  const {\n    hideModal,\n    target,\n    isModalActive\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_ModalContext_jsx__WEBPACK_IMPORTED_MODULE_2__[\"ModalContext\"]);\n  if (!isModalActive) return null;\n\n  switch (target) {\n    case \"modal1\":\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Modal 1\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          onClick: hideModal,\n          children: \"Sumir\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, undefined);\n\n    case \"modal2\":\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Modal 2\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          onClick: hideModal,\n          children: \"Sumir\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, undefined);\n\n    case \"modal3\":\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Modal 3\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          onClick: hideModal,\n          children: \"Sumir\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, undefined);\n\n    default:\n      return null;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vZGFsLmpzeD81MTVmIl0sIm5hbWVzIjpbIk1vZGFsIiwiaGlkZU1vZGFsIiwidGFyZ2V0IiwiaXNNb2RhbEFjdGl2ZSIsInVzZUNvbnRleHQiLCJNb2RhbENvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUNoQixRQUFNO0FBQUVDLGFBQUY7QUFBYUMsVUFBYjtBQUFxQkM7QUFBckIsTUFBdUNDLHdEQUFVLENBQUNDLHVFQUFELENBQXZEO0FBRUEsTUFBSSxDQUFDRixhQUFMLEVBQW9CLE9BQU8sSUFBUDs7QUFFcEIsVUFBUUQsTUFBUjtBQUNJLFNBQUssUUFBTDtBQUNJLDBCQUNJO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFPLEVBQUVELFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjs7QUFRSixTQUFLLFFBQUw7QUFDSSwwQkFDSTtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBTyxFQUFFQSxTQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7O0FBUUosU0FBSyxRQUFMO0FBQ0ksMEJBQ0k7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQU8sRUFBRUEsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKOztBQVFKO0FBQ0ksYUFBTyxJQUFQO0FBN0JSO0FBK0JILENBcENEOztBQXNDZUQsb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01vZGFsLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9Nb2RhbENvbnRleHQuanN4XCI7XG5cbmNvbnN0IE1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaGlkZU1vZGFsLCB0YXJnZXQsIGlzTW9kYWxBY3RpdmUgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcblxuICAgIGlmICghaXNNb2RhbEFjdGl2ZSkgcmV0dXJuIG51bGw7XG5cbiAgICBzd2l0Y2ggKHRhcmdldCkge1xuICAgICAgICBjYXNlIFwibW9kYWwxXCI6XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5Nb2RhbCAxPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGlkZU1vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFN1bWlyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgY2FzZSBcIm1vZGFsMlwiOlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDE+TW9kYWwgMjwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hpZGVNb2RhbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBTdW1pclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIGNhc2UgXCJtb2RhbDNcIjpcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPk1vZGFsIDM8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoaWRlTW9kYWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgU3VtaXJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Modal.jsx\n");

/***/ }),

/***/ "./contexts/ModalContext.jsx":
/*!***********************************!*\
  !*** ./contexts/ModalContext.jsx ***!
  \***********************************/
/*! exports provided: ModalContext, ModalProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalContext\", function() { return ModalContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalProvider\", function() { return ModalProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/joevtap/quick-code/modal-consuming-context/contexts/ModalContext.jsx\";\n\nconst ModalContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nconst ModalProvider = ({\n  children\n}) => {\n  const {\n    0: isModalActive,\n    1: setIsModalActive\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: target,\n    1: setTarget\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n\n  const showModal = e => {\n    setTarget(e.target.name);\n    console.log(e.target.innerHTML);\n    setIsModalActive(true);\n  };\n\n  const hideModal = () => {\n    setIsModalActive(false);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ModalContext.Provider, {\n    value: {\n      showModal,\n      isModalActive,\n      setIsModalActive,\n      hideModal,\n      target\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9Nb2RhbENvbnRleHQuanN4PzZlMTAiXSwibmFtZXMiOlsiTW9kYWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIk1vZGFsUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzTW9kYWxBY3RpdmUiLCJzZXRJc01vZGFsQWN0aXZlIiwidXNlU3RhdGUiLCJ0YXJnZXQiLCJzZXRUYXJnZXQiLCJzaG93TW9kYWwiLCJlIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJpbm5lckhUTUwiLCJoaWRlTW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsWUFBWSxnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQWxDO0FBRUEsTUFBTUMsYUFBYSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQzNDLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DQyxzREFBUSxDQUFDLEtBQUQsQ0FBbEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JGLHNEQUFRLENBQUMsSUFBRCxDQUFwQzs7QUFFQSxRQUFNRyxTQUFTLEdBQUlDLENBQUQsSUFBTztBQUNyQkYsYUFBUyxDQUFDRSxDQUFDLENBQUNILE1BQUYsQ0FBU0ksSUFBVixDQUFUO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxDQUFDLENBQUNILE1BQUYsQ0FBU08sU0FBckI7QUFDQVQsb0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNILEdBSkQ7O0FBTUEsUUFBTVUsU0FBUyxHQUFHLE1BQU07QUFDcEJWLG9CQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDSCxHQUZEOztBQUlBLHNCQUNJLHFFQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQ0ksU0FBSyxFQUFFO0FBQ0hJLGVBREc7QUFFSEwsbUJBRkc7QUFHSEMsc0JBSEc7QUFJSFUsZUFKRztBQUtIUjtBQUxHLEtBRFg7QUFBQSxjQVNLSjtBQVRMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWFILENBM0JNIiwiZmlsZSI6Ii4vY29udGV4dHMvTW9kYWxDb250ZXh0LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBNb2RhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcblxuZXhwb3J0IGNvbnN0IE1vZGFsUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgW2lzTW9kYWxBY3RpdmUsIHNldElzTW9kYWxBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt0YXJnZXQsIHNldFRhcmdldF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IHNob3dNb2RhbCA9IChlKSA9PiB7XG4gICAgICAgIHNldFRhcmdldChlLnRhcmdldC5uYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaW5uZXJIVE1MKTtcbiAgICAgICAgc2V0SXNNb2RhbEFjdGl2ZSh0cnVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGlkZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBzZXRJc01vZGFsQWN0aXZlKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICBzaG93TW9kYWwsXG4gICAgICAgICAgICAgICAgaXNNb2RhbEFjdGl2ZSxcbiAgICAgICAgICAgICAgICBzZXRJc01vZGFsQWN0aXZlLFxuICAgICAgICAgICAgICAgIGhpZGVNb2RhbCxcbiAgICAgICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvTW9kYWxDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/ModalContext.jsx\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_ModalContext_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ModalContext.jsx */ \"./contexts/ModalContext.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Modal_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Modal.jsx */ \"./components/Modal.jsx\");\n\nvar _jsxFileName = \"/home/joevtap/quick-code/modal-consuming-context/pages/index.jsx\";\n\n\n\n\nconst Home = () => {\n  const {\n    showModal\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_contexts_ModalContext_jsx__WEBPACK_IMPORTED_MODULE_1__[\"ModalContext\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Um unico \\\"modal\\\" com conteudo dinamico\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Modal_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      name: \"modal1\",\n      type: \"button\",\n      onClick: showModal,\n      children: \"Mostrar 1\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      name: \"modal2\",\n      type: \"button\",\n      onClick: showModal,\n      children: \"Mostrar 2\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      name: \"modal3\",\n      type: \"button\",\n      onClick: showModal,\n      children: \"Mostrar 3\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/NzBjNSJdLCJuYW1lcyI6WyJIb21lIiwic2hvd01vZGFsIiwidXNlQ29udGV4dCIsIk1vZGFsQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQ2YsUUFBTTtBQUFFQztBQUFGLE1BQWdCQyx3REFBVSxDQUFDQyx1RUFBRCxDQUFoQztBQUVBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBSUk7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixVQUFJLEVBQUMsUUFBM0I7QUFBb0MsYUFBTyxFQUFFRixTQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQU9JO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsVUFBSSxFQUFDLFFBQTNCO0FBQW9DLGFBQU8sRUFBRUEsU0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEosZUFVSTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLFVBQUksRUFBQyxRQUEzQjtBQUFvQyxhQUFPLEVBQUVBLFNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBZ0JILENBbkJEOztBQXFCZUQsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvTW9kYWxDb250ZXh0LmpzeFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsLmpzeFwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2hvd01vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlVtIHVuaWNvIFwibW9kYWxcIiBjb20gY29udGV1ZG8gZGluYW1pY288L2gxPlxuICAgICAgICAgICAgPE1vZGFsIC8+XG5cbiAgICAgICAgICAgIDxidXR0b24gbmFtZT1cIm1vZGFsMVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtzaG93TW9kYWx9PlxuICAgICAgICAgICAgICAgIE1vc3RyYXIgMVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCJtb2RhbDJcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17c2hvd01vZGFsfT5cbiAgICAgICAgICAgICAgICBNb3N0cmFyIDJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBuYW1lPVwibW9kYWwzXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3Nob3dNb2RhbH0+XG4gICAgICAgICAgICAgICAgTW9zdHJhciAzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });