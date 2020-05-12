webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/molecules/Article/index.js":
/*!***************************************************!*\
  !*** ./src/components/molecules/Article/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Article_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Article.module.scss */ \"./src/components/molecules/Article/Article.module.scss\");\n/* harmony import */ var _Article_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Article_module_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/didier/Projects/digest/src/components/molecules/Article/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Article = function Article(_ref) {\n  _s();\n\n  var article = _ref.article,\n      excerpt = _ref.excerpt;\n  var title = article.title,\n      url = article.url,\n      author = article.author,\n      source = article.source,\n      sourceUrl = article.sourceUrl,\n      post = article.post;\n  var rawUrl = sourceUrl.replace('https://', '').replace('http://', '');\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      error = _useState[0],\n      setError = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isLoaded = _useState2[0],\n      setIsLoaded = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      items = _useState3[0],\n      setItems = _useState3[1]; // Note: the empty deps array [] means\n  // this useEffect will run once\n  // similar to componentDidMount()\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetch(\"/api/shares?url=\".concat(url)).then(function (res) {\n      return res.json();\n    }).then(function (result) {\n      setItems(result);\n      setIsLoaded(true);\n    }, // Note: it's important to handle errors here\n    // instead of a catch() block so that we don't swallow\n    // exceptions from actual bugs in components.\n    function (error) {\n      setIsLoaded(true);\n      setError(error);\n    });\n  }, []);\n  return __jsx(\"article\", {\n    className: post,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: url,\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, title)), __jsx(\"cite\", {\n    className: _Article_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"cite\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    className: _Article_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"favicon\"],\n    src: \"https://api.faviconkit.com/\".concat(rawUrl, \"/144\"),\n    alt: \"\".concat(rawUrl, \" logo.\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }), \" \\u2014 \".concat(author, \", \"), __jsx(\"a\", {\n    href: sourceUrl,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 127\n    }\n  }, source)), \" \", __jsx(\"h6\", {\n    className: _Article_module_scss__WEBPACK_IMPORTED_MODULE_1__[\"shares\"],\n    title: \"The amount of times this article has been mentioned on social media\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, isLoaded === true ? new Intl.NumberFormat().format(items['Facebook']['share_count']) : 'Loading', \" shares\", isLoaded === true ? null : '...'));\n};\n\n_s(Article, \"m9AscAN57M/MODoTwSsNC5AuztA=\");\n\n_c = Article;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\nvar _c;\n\n$RefreshReg$(_c, \"Article\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvQXJ0aWNsZS9pbmRleC5qcz81OWNiIl0sIm5hbWVzIjpbIkFydGljbGUiLCJhcnRpY2xlIiwiZXhjZXJwdCIsInRpdGxlIiwidXJsIiwiYXV0aG9yIiwic291cmNlIiwic291cmNlVXJsIiwicG9zdCIsInJhd1VybCIsInJlcGxhY2UiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJpc0xvYWRlZCIsInNldElzTG9hZGVkIiwiaXRlbXMiLCJzZXRJdGVtcyIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJjaXRlIiwiZmF2aWNvbiIsInNoYXJlcyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUEwQjtBQUFBOztBQUFBLE1BQXZCQyxPQUF1QixRQUF2QkEsT0FBdUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFBQSxNQUV0Q0MsS0FGc0MsR0FRcENGLE9BUm9DLENBRXRDRSxLQUZzQztBQUFBLE1BR3RDQyxHQUhzQyxHQVFwQ0gsT0FSb0MsQ0FHdENHLEdBSHNDO0FBQUEsTUFJdENDLE1BSnNDLEdBUXBDSixPQVJvQyxDQUl0Q0ksTUFKc0M7QUFBQSxNQUt0Q0MsTUFMc0MsR0FRcENMLE9BUm9DLENBS3RDSyxNQUxzQztBQUFBLE1BTXRDQyxTQU5zQyxHQVFwQ04sT0FSb0MsQ0FNdENNLFNBTnNDO0FBQUEsTUFPdENDLElBUHNDLEdBUXBDUCxPQVJvQyxDQU90Q08sSUFQc0M7QUFVeEMsTUFBTUMsTUFBTSxHQUNWRixTQUFTLENBQ05HLE9BREgsQ0FDVyxVQURYLEVBQ3VCLEVBRHZCLEVBRUdBLE9BRkgsQ0FFVyxTQUZYLEVBRXNCLEVBRnRCLENBREY7O0FBVndDLGtCQWVkQyxzREFBUSxDQUFDLElBQUQsQ0FmTTtBQUFBLE1BZWpDQyxLQWZpQztBQUFBLE1BZTFCQyxRQWYwQjs7QUFBQSxtQkFnQlJGLHNEQUFRLENBQUMsS0FBRCxDQWhCQTtBQUFBLE1BZ0JqQ0csUUFoQmlDO0FBQUEsTUFnQnZCQyxXQWhCdUI7O0FBQUEsbUJBaUJkSixzREFBUSxDQUFDLEVBQUQsQ0FqQk07QUFBQSxNQWlCakNLLEtBakJpQztBQUFBLE1BaUIxQkMsUUFqQjBCLGtCQW1CeEM7QUFDQTtBQUNBOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFNBQUssMkJBQW9CZixHQUFwQixFQUFMLENBQ0dnQixJQURILENBQ1EsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsS0FEWCxFQUVHRixJQUZILENBR0ksVUFBQ0csTUFBRCxFQUFZO0FBQ1ZOLGNBQVEsQ0FBQ00sTUFBRCxDQUFSO0FBQ0FSLGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBRUQsS0FQTCxFQVFJO0FBQ0E7QUFDQTtBQUNBLGNBQUNILEtBQUQsRUFBVztBQUNURyxpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBRixjQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNELEtBZEw7QUFnQkQsR0FqQlEsRUFpQk4sRUFqQk0sQ0FBVDtBQXFCQSxTQUNFO0FBQVMsYUFBUyxFQUFFSixJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQUcsUUFBSSxFQUFFSixHQUFUO0FBQWMsVUFBTSxFQUFDLFFBQXJCO0FBQThCLE9BQUcsRUFBQyxxQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5REQsS0FBekQsQ0FBSixDQUZGLEVBTUU7QUFBTSxhQUFTLEVBQUVxQix5REFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFQyw0REFBaEI7QUFBeUIsT0FBRyx1Q0FBZ0NoQixNQUFoQyxTQUE1QjtBQUEwRSxPQUFHLFlBQUtBLE1BQUwsV0FBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLG9CQUM2R0osTUFEN0csU0FDd0g7QUFBRyxRQUFJLEVBQUVFLFNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQkQsTUFBckIsQ0FEeEgsQ0FORixPQVVFO0FBQUksYUFBUyxFQUFFb0IsMkRBQWY7QUFBdUIsU0FBSyxFQUFDLHFFQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0daLFFBQVEsS0FBSyxJQUFiLEdBRUcsSUFBSWEsSUFBSSxDQUFDQyxZQUFULEdBQXdCQyxNQUF4QixDQUErQmIsS0FBSyxDQUFDLFVBQUQsQ0FBTCxDQUFrQixhQUFsQixDQUEvQixDQUZILEdBR0ssU0FKUixhQUkwQkYsUUFBUSxLQUFLLElBQWIsR0FBb0IsSUFBcEIsR0FBMkIsS0FKckQsQ0FWRixDQURGO0FBbUJELENBOUREOztHQUFNZCxPOztLQUFBQSxPO0FBZ0VTQSxzRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9BcnRpY2xlL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcG9zdCwgY2l0ZSwgZmF2aWNvbiwgc2hhcmVzIH0gZnJvbSAnLi9BcnRpY2xlLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBBcnRpY2xlID0gKHsgYXJ0aWNsZSwgZXhjZXJwdCB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZSxcbiAgICB1cmwsXG4gICAgYXV0aG9yLFxuICAgIHNvdXJjZSxcbiAgICBzb3VyY2VVcmwsXG4gICAgcG9zdFxuICB9ID0gYXJ0aWNsZVxuXG4gIGNvbnN0IHJhd1VybCA9XG4gICAgc291cmNlVXJsXG4gICAgICAucmVwbGFjZSgnaHR0cHM6Ly8nLCAnJylcbiAgICAgIC5yZXBsYWNlKCdodHRwOi8vJywgJycpXG5cbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vIE5vdGU6IHRoZSBlbXB0eSBkZXBzIGFycmF5IFtdIG1lYW5zXG4gIC8vIHRoaXMgdXNlRWZmZWN0IHdpbGwgcnVuIG9uY2VcbiAgLy8gc2ltaWxhciB0byBjb21wb25lbnREaWRNb3VudCgpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goYC9hcGkvc2hhcmVzP3VybD0ke3VybH1gKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihcbiAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHNldEl0ZW1zKHJlc3VsdCk7XG4gICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XG5cbiAgICAgICAgfSxcbiAgICAgICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXG4gICAgICAgIC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xuICAgICAgICAvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSk7XG4gICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICApXG4gIH0sIFtdKVxuXG5cblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17cG9zdH0+XG5cbiAgICAgIDxoMj48YSBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj57dGl0bGV9PC9hPjwvaDI+XG4gICAgICB7LyogPHAgY2xhc3NOYW1lPVwiZXhjZXJwdFwiPlxuICAgICAgICB7ZXhjZXJwdCA/IGAke3Bvc3Quc2xpY2UoMCwgMTQwKX0uLi5gIDogcG9zdH1cbiAgICAgIDwvcD4gKi99XG4gICAgICA8Y2l0ZSBjbGFzc05hbWU9e2NpdGV9PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17ZmF2aWNvbn0gc3JjPXtgaHR0cHM6Ly9hcGkuZmF2aWNvbmtpdC5jb20vJHtyYXdVcmx9LzE0NGB9IGFsdD17YCR7cmF3VXJsfSBsb2dvLmB9IC8+e2Ag4oCUICR7YXV0aG9yfSwgYH08YSBocmVmPXtzb3VyY2VVcmx9Pntzb3VyY2V9PC9hPlxuICAgICAgPC9jaXRlPlxuICAgICAge2AgYH1cbiAgICAgIDxoNiBjbGFzc05hbWU9e3NoYXJlc30gdGl0bGU9XCJUaGUgYW1vdW50IG9mIHRpbWVzIHRoaXMgYXJ0aWNsZSBoYXMgYmVlbiBtZW50aW9uZWQgb24gc29jaWFsIG1lZGlhXCI+XG4gICAgICAgIHtpc0xvYWRlZCA9PT0gdHJ1ZSA/XG4gICAgICAgICAgKFxuICAgICAgICAgICAgbmV3IEludGwuTnVtYmVyRm9ybWF0KCkuZm9ybWF0KGl0ZW1zWydGYWNlYm9vayddWydzaGFyZV9jb3VudCddKVxuICAgICAgICAgICkgOiAnTG9hZGluZyd9IHNoYXJlc3tpc0xvYWRlZCA9PT0gdHJ1ZSA/IG51bGwgOiAnLi4uJ31cbiAgICAgIDwvaDY+XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/molecules/Article/index.js\n");

/***/ })

})