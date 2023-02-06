"use strict";
(() => {
var exports = {};
exports.id = 782;
exports.ids = [782];
exports.modules = {

/***/ 9913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ price_list),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: ./src/utils/fetchers.js
var fetchers = __webpack_require__(9712);
;// CONCATENATED MODULE: external "react-number-format"
const external_react_number_format_namespaceObject = require("react-number-format");
;// CONCATENATED MODULE: ./pages/price-list/index.js





const PriceListPage = ({ data  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "price-page page",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                className: "price-page__home",
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsArrowLeft, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "price-page__main",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        children: [
                            "Прайс лист на ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "accent",
                                children: "наши услуги"
                            })
                        ]
                    }),
                    data.map((item)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "price-page__row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: item.attributes.category
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "price-page__list",
                                    children: item.attributes.services.data.map((service)=>{
                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "price-page__item",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "service-name",
                                                    children: service.attributes.service
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "price",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_number_format_namespaceObject.NumericFormat, {
                                                            value: service.attributes.cost,
                                                            thousandSeparator: " ",
                                                            displayType: "text",
                                                            renderText: (value)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: value
                                                                })
                                                        }),
                                                        " ",
                                                        "сум"
                                                    ]
                                                })
                                            ]
                                        });
                                    })
                                })
                            ]
                        });
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "extra",
                        children: [
                            "Лазерная облитерация лазером длиной волны 1470 нм и 1940 нм и инновационных световодов фирмы",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                rel: "noreferrer",
                                target: "_blank",
                                href: "https://lightguide.uz",
                                children: "Lightguide"
                            }),
                            " ",
                            "(Латвия). Подкожная вена - Большая подкожная вена, Малая подкожная вена, Передняя добавочная большая подкожная вена, Перфорантная вена. Радиочастотная эндовенозная облитерация на аппарате VNUS Closure фирмы Covidien с использованием катетера ClosureFAST (США)."
                        ]
                    })
                ]
            })
        ]
    });
};
const getServerSideProps = async ({ locale , params  })=>{
    const { data  } = await (0,fetchers/* getData */.Y)({
        url: "https://webpark.uz",
        endpoint: `/api/kategoriya-uslugs?populate=*`
    });
    if (!data.length) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            data: data,
            locale
        }
    };
};
/* harmony default export */ const price_list = (PriceListPage);


/***/ }),

/***/ 9712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ getData)
/* harmony export */ });
const getData = async ({ url , endpoint  })=>{
    try {
        return await (await fetch(`${url}${endpoint}`)).json();
    } catch (error) {
        throw new Error(error);
    }
};


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664], () => (__webpack_exec__(9913)));
module.exports = __webpack_exports__;

})();