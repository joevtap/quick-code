webpackHotUpdate_N_E("pages/index",{

/***/ "./contexts/ModalContext.jsx":
/*!***********************************!*\
  !*** ./contexts/ModalContext.jsx ***!
  \***********************************/
/*! exports provided: ModalContext, ModalProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalContext\", function() { return ModalContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalProvider\", function() { return ModalProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/joevtap/Desktop/modal-consuming-context/contexts/ModalContext.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar ModalContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nvar ModalProvider = function ModalProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isModalActive = _useState[0],\n      setIsModalActive = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      target = _useState2[0],\n      setTarget = _useState2[1];\n\n  var showModal = function showModal(e) {\n    console.log(e.target.name);\n    setIsModalActive(true);\n  };\n\n  var hideModal = function hideModal() {\n    setIsModalActive(false);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ModalContext.Provider, {\n    value: {\n      showModal: showModal,\n      isModalActive: isModalActive,\n      setIsModalActive: setIsModalActive,\n      hideModal: hideModal\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(ModalProvider, \"82uO9R8LVEPj234xD11JBchTl6E=\");\n\n_c = ModalProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ModalProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvTW9kYWxDb250ZXh0LmpzeD82ZTEwIl0sIm5hbWVzIjpbIk1vZGFsQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJNb2RhbFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImlzTW9kYWxBY3RpdmUiLCJzZXRJc01vZGFsQWN0aXZlIiwidGFyZ2V0Iiwic2V0VGFyZ2V0Iiwic2hvd01vZGFsIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiaGlkZU1vZGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFZLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBbEM7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDLEtBQUQsQ0FEUDtBQUFBLE1BQ3BDQyxhQURvQztBQUFBLE1BQ3JCQyxnQkFEcUI7O0FBQUEsbUJBRWZGLHNEQUFRLENBQUMsSUFBRCxDQUZPO0FBQUEsTUFFcENHLE1BRm9DO0FBQUEsTUFFNUJDLFNBRjRCOztBQUkzQyxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxDQUFELEVBQU87QUFDckJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFDLENBQUNILE1BQUYsQ0FBU00sSUFBckI7QUFDQVAsb0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNILEdBSEQ7O0FBS0EsTUFBTVEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQlIsb0JBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNILEdBRkQ7O0FBSUEsc0JBQ0kscUVBQUMsWUFBRCxDQUFjLFFBQWQ7QUFDSSxTQUFLLEVBQUU7QUFBRUcsZUFBUyxFQUFUQSxTQUFGO0FBQWFKLG1CQUFhLEVBQWJBLGFBQWI7QUFBNEJDLHNCQUFnQixFQUFoQkEsZ0JBQTVCO0FBQThDUSxlQUFTLEVBQVRBO0FBQTlDLEtBRFg7QUFBQSxjQUdLWDtBQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU9ILENBcEJNOztHQUFNRCxhOztLQUFBQSxhIiwiZmlsZSI6Ii4vY29udGV4dHMvTW9kYWxDb250ZXh0LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBNb2RhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcblxuZXhwb3J0IGNvbnN0IE1vZGFsUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgW2lzTW9kYWxBY3RpdmUsIHNldElzTW9kYWxBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt0YXJnZXQsIHNldFRhcmdldF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IHNob3dNb2RhbCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xuICAgICAgICBzZXRJc01vZGFsQWN0aXZlKHRydWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoaWRlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHNldElzTW9kYWxBY3RpdmUoZmFsc2UpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TW9kYWxDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICB2YWx1ZT17eyBzaG93TW9kYWwsIGlzTW9kYWxBY3RpdmUsIHNldElzTW9kYWxBY3RpdmUsIGhpZGVNb2RhbCB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvTW9kYWxDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/ModalContext.jsx\n");

/***/ })

})