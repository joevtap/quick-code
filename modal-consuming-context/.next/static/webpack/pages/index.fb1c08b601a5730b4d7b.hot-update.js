webpackHotUpdate_N_E("pages/index",{

/***/ "./contexts/ModalContext.jsx":
/*!***********************************!*\
  !*** ./contexts/ModalContext.jsx ***!
  \***********************************/
/*! exports provided: ModalContext, ModalProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalContext\", function() { return ModalContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalProvider\", function() { return ModalProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/joevtap/Desktop/modal-consuming-context/contexts/ModalContext.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar ModalContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nvar ModalProvider = function ModalProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isModalActive = _useState[0],\n      setIsModalActive = _useState[1];\n\n  var showModal = function showModal(e) {\n    console.log(e.target.name);\n    setIsModalActive(true);\n  };\n\n  var hideModal = function hideModal() {\n    setIsModalActive(false);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ModalContext.Provider, {\n    value: {\n      showModal: showModal,\n      isModalActive: isModalActive,\n      setIsModalActive: setIsModalActive,\n      hideModal: hideModal\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(ModalProvider, \"TUpuAXXHIk8LQPksACdVv8djDT4=\");\n\n_c = ModalProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ModalProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvTW9kYWxDb250ZXh0LmpzeD82ZTEwIl0sIm5hbWVzIjpbIk1vZGFsQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJNb2RhbFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImlzTW9kYWxBY3RpdmUiLCJzZXRJc01vZGFsQWN0aXZlIiwic2hvd01vZGFsIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJuYW1lIiwiaGlkZU1vZGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFZLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBbEM7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDLEtBQUQsQ0FEUDtBQUFBLE1BQ3BDQyxhQURvQztBQUFBLE1BQ3JCQyxnQkFEcUI7O0FBRzNDLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLENBQUQsRUFBTztBQUNyQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxJQUFyQjtBQUNBTixvQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0gsR0FIRDs7QUFLQSxNQUFNTyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCUCxvQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSSxxRUFBQyxZQUFELENBQWMsUUFBZDtBQUNJLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQVRBLFNBQUY7QUFBYUYsbUJBQWEsRUFBYkEsYUFBYjtBQUE0QkMsc0JBQWdCLEVBQWhCQSxnQkFBNUI7QUFBOENPLGVBQVMsRUFBVEE7QUFBOUMsS0FEWDtBQUFBLGNBR0tWO0FBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBT0gsQ0FuQk07O0dBQU1ELGE7O0tBQUFBLGEiLCJmaWxlIjoiLi9jb250ZXh0cy9Nb2RhbENvbnRleHQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IE1vZGFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuXG5leHBvcnQgY29uc3QgTW9kYWxQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCBbaXNNb2RhbEFjdGl2ZSwgc2V0SXNNb2RhbEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBzaG93TW9kYWwgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcbiAgICAgICAgc2V0SXNNb2RhbEFjdGl2ZSh0cnVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGlkZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBzZXRJc01vZGFsQWN0aXZlKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgdmFsdWU9e3sgc2hvd01vZGFsLCBpc01vZGFsQWN0aXZlLCBzZXRJc01vZGFsQWN0aXZlLCBoaWRlTW9kYWwgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L01vZGFsQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/ModalContext.jsx\n");

/***/ })

})