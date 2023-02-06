(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/app.scss
var app = __webpack_require__(8446);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/utils/usePageLoading.js


const usePageLoading = ()=>{
    const [isPageLoading, setIsPageLoading] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const routeEventStart = ()=>{
            setIsPageLoading(true);
        };
        const routeEventEnd = ()=>{
            setIsPageLoading(false);
        };
        router_default().events.on("routeChangeStart", routeEventStart);
        router_default().events.on("routeChangeComplete", routeEventEnd);
        router_default().events.on("routeChangeError", routeEventEnd);
        return ()=>{
            router_default().events.off("routeChangeStart", routeEventStart);
            router_default().events.off("routeChangeComplete", routeEventEnd);
            router_default().events.off("routeChangeError", routeEventEnd);
        };
    }, []);
    return {
        isPageLoading
    };
};

;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    const { locale  } = (0,router_.useRouter)();
    const { isPageLoading  } = usePageLoading();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: isPageLoading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "loading-wrapper",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    class: "lds-ring",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: locale == "ru" ? "Пожалуйста подождите, страница загружается..." : "Илтимос кутинг, сахифа юкланмоқда..."
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = ((0,external_next_i18next_.appWithTranslation)(MyApp));


/***/ }),

/***/ 8446:
/***/ (() => {



/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(833));
module.exports = __webpack_exports__;

})();