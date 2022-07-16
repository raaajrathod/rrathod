"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Tabs.jsx":
/*!*********************************!*\
  !*** ./src/components/Tabs.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-awesome-reveal */ \"./node_modules/react-awesome-reveal/dist/react-awesome-reveal.esm.js\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Tabs = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), currentTab = ref[0], setCurrentTab = ref[1];\n    var tabs = [\n        {\n            id: 1,\n            tabTitle: \"Wordpress Developer\",\n            company: \"31 Media\",\n            comapanyURL: \"https://31media.com/\",\n            location: \"London\",\n            range: \"April 2022 - Present\",\n            content: [\n                \"Analysed the company's website and identified the issues with the current website and identified the best solution for the issues.\",\n                \"Developed the new website using the WordPress CMS and oversaw the migration of the company's content to the new website.\",\n                \"Proposed and implemented solutions to the issues identified in the website related to design and Marketing.\", \n            ]\n        },\n        {\n            id: 2,\n            tabTitle: \"Javascript Developer\",\n            company: \"Sportz Interactive\",\n            comapanyURL: \"https://sportzinteractive.net/\",\n            location: \"Mumbai\",\n            range: \"September 2019 - July, 2021\",\n            content: [\n                \"Built and shipped Web application which provides the user with the ability to create and manage their own team.\",\n                \"Developed a Web application which generates infographics of the various sports in PDF, PNG and Word format.\",\n                \"Worked with multiple teams on projects such as the Graphics Broadcasting Tool which was used to broadcast Cricket Graphics on live stream for ECN and Fan Code.\",\n                \"Mentored and coached freshers on the best way to develop the application.\",\n                \"Proposed and Engineered various projects for in-house and client related to Football Analytics.\", \n            ]\n        },\n        {\n            id: 3,\n            tabTitle: \"Frontend Developer\",\n            company: \"Vaisansar Technologies\",\n            comapanyURL: \"https://vaisansar.com/\",\n            location: \"Mumbai\",\n            range: \"September 2018 - July, 2019\",\n            content: [\n                \"Developed and maintained code client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery\",\n                \"Architected and Implemented Front-end of Company's ERP Portal using RequiresJS, NodeJS and  MaterializeCSS, which reduced the load time by 50%\",\n                \"Worked closely with CEO and CTO to develop, document and manage ERP portal using NodeJS, SASS, Jquery, and MaterializeCSS\", \n            ]\n        }\n    ];\n    var handleTabClick = function(e) {\n        setCurrentTab(e.target.id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__.Fade, {\n            direction: \"bottom\",\n            triggerOnce: true,\n            delay: 200,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tab-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"tabs\",\n                        children: tabs.map(function(tab, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                id: tab.id,\n                                disabled: currentTab == \"\".concat(tab.id),\n                                onClick: handleTabClick,\n                                children: tab.tabTitle\n                            }, i, false, {\n                                fileName: \"D:\\\\Raj's WebApps\\\\rrathod_nextjs\\\\src\\\\components\\\\Tabs.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 29\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Raj's WebApps\\\\rrathod_nextjs\\\\src\\\\components\\\\Tabs.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"content\",\n                        children: tabs.map(function(tab, i) {\n                            var _this = _this1;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_2__.Fade, {\n                                direction: \"bottom\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"tab-content \".concat(currentTab == tab.id ? \"fadeIn\" : \"fadeOut\"),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: tab.tabTitle\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Raj's WebApps\\\\rrathod_nextjs\\\\src\\\\components\\\\Tabs.jsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 45\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"company\",\n                                                    children: [\n                                                        \" \",\n                                                        \"@\",\n                                                        \" \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: tab.comapanyURL,\n                                                            className: \"inline-link\",\n                                                            children: tab.company\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\Raj's WebApps\\\\rrathod_nextjs\\\\src\\\\components\\\\Tabs.jsx\",\n                                                            lineNumber: 74,\n                                                            columnNumber: 49\n                                                        }, _this1)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"D:\\\\Raj's WebApps\\\\rrathod_nextjs\\\\src\\\\components\\\\Tabs.jsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 45\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Raj's WebApps\\\\rrathod_nextjs\\\\src\\\\components\\\\Tabs.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 41\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"range\",\n                                            children: tab.range\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Raj's WebApps\\\\rrathod_nextjs\\\\src\\\\components\\\\Tabs.jsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 41\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                children: tab.content.map(function(content, i) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            children: content\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\Raj's WebApps\\\\rrathod_nextjs\\\\src\\\\components\\\\Tabs.jsx\",\n                                                            lineNumber: 83,\n                                                            columnNumber: 72\n                                                        }, _this)\n                                                    }, i, false, {\n                                                        fileName: \"D:\\\\Raj's WebApps\\\\rrathod_nextjs\\\\src\\\\components\\\\Tabs.jsx\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 60\n                                                    }, _this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Raj's WebApps\\\\rrathod_nextjs\\\\src\\\\components\\\\Tabs.jsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 45\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Raj's WebApps\\\\rrathod_nextjs\\\\src\\\\components\\\\Tabs.jsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 41\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Raj's WebApps\\\\rrathod_nextjs\\\\src\\\\components\\\\Tabs.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 37\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Raj's WebApps\\\\rrathod_nextjs\\\\src\\\\components\\\\Tabs.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 33\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Raj's WebApps\\\\rrathod_nextjs\\\\src\\\\components\\\\Tabs.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Raj's WebApps\\\\rrathod_nextjs\\\\src\\\\components\\\\Tabs.jsx\",\n                lineNumber: 59,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Raj's WebApps\\\\rrathod_nextjs\\\\src\\\\components\\\\Tabs.jsx\",\n            lineNumber: 58,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Raj's WebApps\\\\rrathod_nextjs\\\\src\\\\components\\\\Tabs.jsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, _this);\n};\n_s(Tabs, \"vpR6s6c+pWN9iYRRE4XhvQBqRwA=\");\n_c = Tabs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tabs);\nvar _c;\n$RefreshReg$(_c, \"Tabs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYWJzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7QUFBd0M7QUFFSTs7QUFDNUMsSUFBTUcsSUFBSSxHQUFHLFdBQU07OztJQUVmLElBQW9DRixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQXhDRyxVQUFVLEdBQW1CSCxHQUFXLEdBQTlCLEVBQUVJLGFBQWEsR0FBSUosR0FBVyxHQUFmO0lBQ2hDLElBQU1LLElBQUksR0FBRztRQUNUO1lBQ0lDLEVBQUUsRUFBRSxDQUFDO1lBQ0xDLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0JDLE9BQU8sRUFBRSxVQUFVO1lBQ25CQyxXQUFXLEVBQUUsc0JBQXNCO1lBQ25DQyxRQUFRLEVBQUUsUUFBUTtZQUNsQkMsS0FBSyxFQUFFLHNCQUFzQjtZQUM3QkMsT0FBTyxFQUFFO2dCQUNMLG9JQUFvSTtnQkFDcEksMEhBQTBIO2dCQUMxSCw2R0FBNkc7YUFDaEg7U0FDSjtRQUNEO1lBQ0lOLEVBQUUsRUFBRSxDQUFDO1lBQ0xDLFFBQVEsRUFBRSxzQkFBc0I7WUFDaENDLE9BQU8sRUFBRSxvQkFBb0I7WUFDN0JDLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0NDLFFBQVEsRUFBRSxRQUFRO1lBQ2xCQyxLQUFLLEVBQUUsNkJBQTZCO1lBQ3BDQyxPQUFPLEVBQUU7Z0JBQ0wsaUhBQWlIO2dCQUNqSCw2R0FBNkc7Z0JBQzdHLGlLQUFpSztnQkFDakssMkVBQTJFO2dCQUMzRSxpR0FBaUc7YUFDcEc7U0FDSjtRQUNEO1lBQ0lOLEVBQUUsRUFBRSxDQUFDO1lBQ0xDLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUJDLE9BQU8sRUFBRSx3QkFBd0I7WUFDakNDLFdBQVcsRUFBRSx3QkFBd0I7WUFDckNDLFFBQVEsRUFBRSxRQUFRO1lBQ2xCQyxLQUFLLEVBQUUsNkJBQTZCO1lBQ3BDQyxPQUFPLEVBQUU7Z0JBQ0wsdUdBQXVHO2dCQUN2RyxnSkFBZ0o7Z0JBQ2hKLDJIQUEySDthQUM5SDtTQUNKO0tBQ0o7SUFFRCxJQUFNQyxjQUFjLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1FBQzFCVixhQUFhLENBQUNVLENBQUMsQ0FBQ0MsTUFBTSxDQUFDVCxFQUFFLENBQUMsQ0FBQztLQUM5QjtJQUVELHFCQUNJLDhEQUFDVSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxXQUFXO2tCQUN0Qiw0RUFBQ2hCLHNEQUFJO1lBQUNpQixTQUFTLEVBQUMsUUFBUTtZQUFDQyxXQUFXLEVBQUUsSUFBSTtZQUFFQyxLQUFLLEVBQUUsR0FBRztzQkFDbEQsNEVBQUNKLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxlQUFlOztrQ0FDMUIsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxNQUFNO2tDQUNoQlosSUFBSSxDQUFDZ0IsR0FBRyxDQUFDLFNBQUNDLEdBQUcsRUFBRUMsQ0FBQztpREFDYiw4REFBQ0MsUUFBTTtnQ0FBU2xCLEVBQUUsRUFBRWdCLEdBQUcsQ0FBQ2hCLEVBQUU7Z0NBQUVtQixRQUFRLEVBQUV0QixVQUFVLElBQUksRUFBQyxDQUFTLE9BQVBtQixHQUFHLENBQUNoQixFQUFFLENBQUU7Z0NBQUVvQixPQUFPLEVBQUdiLGNBQWM7MENBQUlTLEdBQUcsQ0FBQ2YsUUFBUTsrQkFBNUZnQixDQUFDOzs7O3NDQUFxRzt5QkFBQSxDQUN0SDs7Ozs7NkJBQ0M7a0NBQ04sOERBQUNQLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxTQUFTO2tDQUNuQlosSUFBSSxDQUFDZ0IsR0FBRyxDQUFDLFNBQUNDLEdBQUcsRUFBRUMsQ0FBQyxFQUFLOzs0QkFDbEIscUJBQ0ksOERBQUN0QixzREFBSTtnQ0FBQ2lCLFNBQVMsRUFBQyxRQUFROzBDQUNwQiw0RUFBQ0YsS0FBRztvQ0FBRUMsU0FBUyxFQUFFLGNBQWEsQ0FBOEMsT0FBNUNkLFVBQVUsSUFBSW1CLEdBQUcsQ0FBQ2hCLEVBQUUsR0FBRyxRQUFRLEdBQUcsU0FBUyxDQUFFOztzREFDekUsOERBQUNxQixJQUFFOzs4REFDQyw4REFBQ0MsTUFBSTs4REFBRU4sR0FBRyxDQUFDZixRQUFROzs7OzswREFBUTs4REFDM0IsOERBQUNxQixNQUFJO29EQUFDWCxTQUFTLEVBQUMsU0FBUzs7d0RBQ3BCLEdBQUc7d0RBQUMsR0FBQzt3REFBQyxHQUFHO3NFQUNWLDhEQUFDWSxHQUFDOzREQUFDQyxJQUFJLEVBQUVSLEdBQUcsQ0FBQ2IsV0FBVzs0REFBRVEsU0FBUyxFQUFDLGFBQWE7c0VBQUVLLEdBQUcsQ0FBQ2QsT0FBTzs7Ozs7a0VBQUs7Ozs7OzswREFDaEU7Ozs7OztrREFDTjtzREFDTCw4REFBQ3VCLEdBQUM7NENBQUNkLFNBQVMsRUFBQyxPQUFPO3NEQUNmSyxHQUFHLENBQUNYLEtBQUs7Ozs7O2tEQUNWO3NEQUNKLDhEQUFDSyxLQUFHO3NEQUNBLDRFQUFDZ0IsSUFBRTswREFDRVYsR0FBRyxDQUFDVixPQUFPLENBQUNTLEdBQUcsQ0FBQyxTQUFDVCxPQUFPLEVBQUVXLENBQUMsRUFBSztvREFDN0IscUJBQU8sOERBQUNVLElBQUU7a0VBQVMsNEVBQUNGLEdBQUM7c0VBQUVuQixPQUFPOzs7OztpRUFBSzt1REFBbkJXLENBQUM7Ozs7NkRBQXVCO2lEQUMzQyxDQUFDOzs7OztzREFDRDs7Ozs7a0RBQ0g7Ozs7OzswQ0FDSjs7Ozs7c0NBQ0gsQ0FBQzt5QkFDZixDQUNBOzs7Ozs2QkFDQzs7Ozs7O3FCQUNKOzs7OztpQkFDRjs7Ozs7YUFDTCxDQUNUO0NBQ0w7R0EzRktyQixJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUE2RlYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UYWJzLmpzeD9lYjI2Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSBcInJlYWN0LWF3ZXNvbWUtcmV2ZWFsXCI7XHJcbmNvbnN0IFRhYnMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnRUYWIsIHNldEN1cnJlbnRUYWJdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCB0YWJzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIHRhYlRpdGxlOiAnV29yZHByZXNzIERldmVsb3BlcicsXHJcbiAgICAgICAgICAgIGNvbXBhbnk6ICczMSBNZWRpYScsXHJcbiAgICAgICAgICAgIGNvbWFwYW55VVJMOiBcImh0dHBzOi8vMzFtZWRpYS5jb20vXCIsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnTG9uZG9uJyxcclxuICAgICAgICAgICAgcmFuZ2U6IFwiQXByaWwgMjAyMiAtIFByZXNlbnRcIixcclxuICAgICAgICAgICAgY29udGVudDogW1xyXG4gICAgICAgICAgICAgICAgXCJBbmFseXNlZCB0aGUgY29tcGFueSdzIHdlYnNpdGUgYW5kIGlkZW50aWZpZWQgdGhlIGlzc3VlcyB3aXRoIHRoZSBjdXJyZW50IHdlYnNpdGUgYW5kIGlkZW50aWZpZWQgdGhlIGJlc3Qgc29sdXRpb24gZm9yIHRoZSBpc3N1ZXMuXCIsXHJcbiAgICAgICAgICAgICAgICBcIkRldmVsb3BlZCB0aGUgbmV3IHdlYnNpdGUgdXNpbmcgdGhlIFdvcmRQcmVzcyBDTVMgYW5kIG92ZXJzYXcgdGhlIG1pZ3JhdGlvbiBvZiB0aGUgY29tcGFueSdzIGNvbnRlbnQgdG8gdGhlIG5ldyB3ZWJzaXRlLlwiLFxyXG4gICAgICAgICAgICAgICAgXCJQcm9wb3NlZCBhbmQgaW1wbGVtZW50ZWQgc29sdXRpb25zIHRvIHRoZSBpc3N1ZXMgaWRlbnRpZmllZCBpbiB0aGUgd2Vic2l0ZSByZWxhdGVkIHRvIGRlc2lnbiBhbmQgTWFya2V0aW5nLlwiLFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICB0YWJUaXRsZTogJ0phdmFzY3JpcHQgRGV2ZWxvcGVyJyxcclxuICAgICAgICAgICAgY29tcGFueTogJ1Nwb3J0eiBJbnRlcmFjdGl2ZScsXHJcbiAgICAgICAgICAgIGNvbWFwYW55VVJMOiBcImh0dHBzOi8vc3BvcnR6aW50ZXJhY3RpdmUubmV0L1wiLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJNdW1iYWlcIixcclxuICAgICAgICAgICAgcmFuZ2U6IFwiU2VwdGVtYmVyIDIwMTkgLSBKdWx5LCAyMDIxXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFtcclxuICAgICAgICAgICAgICAgIFwiQnVpbHQgYW5kIHNoaXBwZWQgV2ViIGFwcGxpY2F0aW9uIHdoaWNoIHByb3ZpZGVzIHRoZSB1c2VyIHdpdGggdGhlIGFiaWxpdHkgdG8gY3JlYXRlIGFuZCBtYW5hZ2UgdGhlaXIgb3duIHRlYW0uXCIsXHJcbiAgICAgICAgICAgICAgICBcIkRldmVsb3BlZCBhIFdlYiBhcHBsaWNhdGlvbiB3aGljaCBnZW5lcmF0ZXMgaW5mb2dyYXBoaWNzIG9mIHRoZSB2YXJpb3VzIHNwb3J0cyBpbiBQREYsIFBORyBhbmQgV29yZCBmb3JtYXQuXCIsXHJcbiAgICAgICAgICAgICAgICBcIldvcmtlZCB3aXRoIG11bHRpcGxlIHRlYW1zIG9uIHByb2plY3RzIHN1Y2ggYXMgdGhlIEdyYXBoaWNzIEJyb2FkY2FzdGluZyBUb29sIHdoaWNoIHdhcyB1c2VkIHRvIGJyb2FkY2FzdCBDcmlja2V0IEdyYXBoaWNzIG9uIGxpdmUgc3RyZWFtIGZvciBFQ04gYW5kIEZhbiBDb2RlLlwiLFxyXG4gICAgICAgICAgICAgICAgXCJNZW50b3JlZCBhbmQgY29hY2hlZCBmcmVzaGVycyBvbiB0aGUgYmVzdCB3YXkgdG8gZGV2ZWxvcCB0aGUgYXBwbGljYXRpb24uXCIsXHJcbiAgICAgICAgICAgICAgICBcIlByb3Bvc2VkIGFuZCBFbmdpbmVlcmVkIHZhcmlvdXMgcHJvamVjdHMgZm9yIGluLWhvdXNlIGFuZCBjbGllbnQgcmVsYXRlZCB0byBGb290YmFsbCBBbmFseXRpY3MuXCIsXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgIHRhYlRpdGxlOiAnRnJvbnRlbmQgRGV2ZWxvcGVyJyxcclxuICAgICAgICAgICAgY29tcGFueTogJ1ZhaXNhbnNhciBUZWNobm9sb2dpZXMnLFxyXG4gICAgICAgICAgICBjb21hcGFueVVSTDogXCJodHRwczovL3ZhaXNhbnNhci5jb20vXCIsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnTXVtYmFpJyxcclxuICAgICAgICAgICAgcmFuZ2U6IFwiU2VwdGVtYmVyIDIwMTggLSBKdWx5LCAyMDE5XCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFtcclxuICAgICAgICAgICAgICAgIFwiRGV2ZWxvcGVkIGFuZCBtYWludGFpbmVkIGNvZGUgY2xpZW50IHdlYnNpdGVzIHByaW1hcmlseSB1c2luZyBIVE1MLCBDU1MsIFNhc3MsIEphdmFTY3JpcHQsIGFuZCBqUXVlcnlcIixcclxuICAgICAgICAgICAgICAgIFwiQXJjaGl0ZWN0ZWQgYW5kIEltcGxlbWVudGVkIEZyb250LWVuZCBvZiBDb21wYW55J3MgRVJQIFBvcnRhbCB1c2luZyBSZXF1aXJlc0pTLCBOb2RlSlMgYW5kICBNYXRlcmlhbGl6ZUNTUywgd2hpY2ggcmVkdWNlZCB0aGUgbG9hZCB0aW1lIGJ5IDUwJVwiLFxyXG4gICAgICAgICAgICAgICAgXCJXb3JrZWQgY2xvc2VseSB3aXRoIENFTyBhbmQgQ1RPIHRvIGRldmVsb3AsIGRvY3VtZW50IGFuZCBtYW5hZ2UgRVJQIHBvcnRhbCB1c2luZyBOb2RlSlMsIFNBU1MsIEpxdWVyeSwgYW5kIE1hdGVyaWFsaXplQ1NTXCIsXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRhYkNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBzZXRDdXJyZW50VGFiKGUudGFyZ2V0LmlkKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICA8RmFkZSBkaXJlY3Rpb249XCJib3R0b21cIiB0cmlnZ2VyT25jZT17dHJ1ZX0gZGVsYXk9ezIwMH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFicyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWJzLm1hcCgodGFiLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e2l9IGlkPXt0YWIuaWR9IGRpc2FibGVkPXtjdXJyZW50VGFiID09IGAke3RhYi5pZH1gfSBvbkNsaWNrPXsoaGFuZGxlVGFiQ2xpY2spfT57dGFiLnRhYlRpdGxlfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RhYnMubWFwKCh0YWIsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGUgZGlyZWN0aW9uPVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17YHRhYi1jb250ZW50ICR7Y3VycmVudFRhYiA9PSB0YWIuaWQgPyBcImZhZGVJblwiIDogXCJmYWRlT3V0XCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RhYi50YWJUaXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb21wYW55Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifUB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3RhYi5jb21hcGFueVVSTH0gY2xhc3NOYW1lPSdpbmxpbmUtbGluayc+e3RhYi5jb21wYW55fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmFuZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFiLnJhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWIuY29udGVudC5tYXAoKGNvbnRlbnQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfT48cD57Y29udGVudH08L3A+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9GYWRlID5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZhZGUiLCJUYWJzIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJ0YWJzIiwiaWQiLCJ0YWJUaXRsZSIsImNvbXBhbnkiLCJjb21hcGFueVVSTCIsImxvY2F0aW9uIiwicmFuZ2UiLCJjb250ZW50IiwiaGFuZGxlVGFiQ2xpY2siLCJlIiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiZGlyZWN0aW9uIiwidHJpZ2dlck9uY2UiLCJkZWxheSIsIm1hcCIsInRhYiIsImkiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJoMyIsInNwYW4iLCJhIiwiaHJlZiIsInAiLCJ1bCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Tabs.jsx\n"));

/***/ })

});