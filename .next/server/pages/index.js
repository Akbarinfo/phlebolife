"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/consultation.a62ec9f5.png","height":25,"width":25,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVMaXEvYa0vYa0uYK0uYa0vYa0vYa0vYa0vYa0vYa3QoZMTAAAACnRSTlMAW4UebZcRSMc5NUNpaQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBJREFUeJwdy7kRADAQwkCB73H/FXtwpA0Aps8aYB0HggqwqtJoklH3XUAqKZvjf34U5QCE60p1cwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Common_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);
/* harmony import */ var _src_database_db_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6458);
/* harmony import */ var _src_context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2417);
/* harmony import */ var _src_components_Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9050);
/* harmony import */ var _src_components_About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2051);
/* harmony import */ var _src_components_Diseases__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1527);
/* harmony import */ var _src_components_Treatments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3702);
/* harmony import */ var _src_components_Advantages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6778);
/* harmony import */ var _src_components_Doctors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7805);
/* harmony import */ var _src_components_Master__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2974);
/* harmony import */ var _src_utils_fetchers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9712);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Banner__WEBPACK_IMPORTED_MODULE_5__, _src_components_Diseases__WEBPACK_IMPORTED_MODULE_7__, _src_components_Treatments__WEBPACK_IMPORTED_MODULE_8__, _src_components_Doctors__WEBPACK_IMPORTED_MODULE_10__, _src_components_Master__WEBPACK_IMPORTED_MODULE_11__]);
([_src_components_Banner__WEBPACK_IMPORTED_MODULE_5__, _src_components_Diseases__WEBPACK_IMPORTED_MODULE_7__, _src_components_Treatments__WEBPACK_IMPORTED_MODULE_8__, _src_components_Doctors__WEBPACK_IMPORTED_MODULE_10__, _src_components_Master__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const HomePage = ({ db , locale , database  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_context_AppContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"].Provider */ .Z.Provider, {
        value: {
            database,
            db: db[locale],
            locale
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_12___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Главная | Клиника современной флебологии Phlebolife"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_Common_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Banner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_About__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Diseases__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        data: database.chronicDiseases
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Treatments__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        data: database.treatmentServices
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Advantages__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Doctors__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        data: database.doctors
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Master__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        data: database.masters
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);
const getStaticProps = async ({ locale  })=>{
    const { data: chronicDiseases  } = await (0,_src_utils_fetchers__WEBPACK_IMPORTED_MODULE_13__/* .getData */ .Y)({
        url: "https://webpark.uz/",
        endpoint: `api/chronic-diseases?locale=${locale}`
    });
    const { data: treatmentServices  } = await (0,_src_utils_fetchers__WEBPACK_IMPORTED_MODULE_13__/* .getData */ .Y)({
        url: "https://webpark.uz/",
        endpoint: `api/treatment-services?locale=${locale}`
    });
    const { data: doctors  } = await (0,_src_utils_fetchers__WEBPACK_IMPORTED_MODULE_13__/* .getData */ .Y)({
        url: "https://webpark.uz/",
        endpoint: `api/doctors?populate=photo&locale=${locale}`
    });
    const { data: masters  } = await (0,_src_utils_fetchers__WEBPACK_IMPORTED_MODULE_13__/* .getData */ .Y)({
        url: "https://webpark.uz/",
        endpoint: `api/masterclasses?populate=*&locale=${locale}`
    });
    return {
        props: {
            db: _src_database_db_json__WEBPACK_IMPORTED_MODULE_3__,
            locale,
            database: {
                chronicDiseases,
                treatmentServices,
                doctors,
                masters
            },
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__.serverSideTranslations)(locale, [
                "common",
                "banner",
                "request",
                "about",
                "diseases",
                "treatments",
                "advantages",
                "doctors",
                "masters",
                "footer"
            ])
        },
        revalidate: 10
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Common/Section.js
var Section = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/assets/images/phone-call.png
/* harmony default export */ const phone_call = ({"src":"/_next/static/media/phone-call.5257dffa.png","height":24,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUAAABMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC57EdMAAAACnRSTlNhAH9wMCcOTxo0qYZjKAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNJREFUeJwdxskNwDAMBLHZQ7LTf8NBAn5I7b1G+DksAToRmAlIe1H4LJJhjpGUtH80uC8YcQCgI7hIugAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./src/context/AppContext.js
var AppContext = __webpack_require__(2417);
// EXTERNAL MODULE: ./src/components/Common/ReadMore.js + 1 modules
var ReadMore = __webpack_require__(5946);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/About/Main.js







const Main = ()=>{
    const { db  } = (0,external_react_.useContext)(AppContext/* default */.Z);
    const { t: translate  } = (0,external_next_i18next_.useTranslation)("about");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "main",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: "main__title",
                children: [
                    translate("title.original", {
                        returnObjects: true
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "accent",
                        children: translate("title.accent")
                    })
                ]
            }),
            translate("paragraphs", {
                returnObjects: true
            }).map((paragraph, index)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "main__paragraph",
                    children: paragraph
                }, index)),
            /*#__PURE__*/ jsx_runtime_.jsx(ReadMore/* default */.Z, {
                className: "main__link",
                href: "/about-us",
                children: translate("read-more")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "main-contacts",
                children: db.branches.map(({ city , phone  }, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: "main-contacts__item",
                        children: [
                            city,
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "main-contacts__phone",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        width: 20,
                                        quality: 100,
                                        src: phone_call,
                                        alt: "call"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: `tel:${phone.href}`,
                                        children: phone.render
                                    })
                                ]
                            })
                        ]
                    }, index))
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Common/Rectangle.js

const Rectangle = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "rectangle",
        children: children
    });
};
/* harmony default export */ const Common_Rectangle = (Rectangle);

;// CONCATENATED MODULE: ./src/components/About/index.js





const About = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
        className: "about",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Main, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Common_Rectangle, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "image-wrapper",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        quality: 100,
                        priority: true,
                        width: 390,
                        height: 600,
                        src: "/images/doctor002.png",
                        alt: "phlebolife specialist"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_About = (About);


/***/ }),

/***/ 6778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Advantages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Common/Section.js
var Section = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Advantages/Advantage.js

const Advantage = ({ children , name , ...props })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "advantage",
        ...props,
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: name
            })
        ]
    });
};
/* harmony default export */ const Advantages_Advantage = (Advantage);

// EXTERNAL MODULE: ./src/context/AppContext.js
var AppContext = __webpack_require__(2417);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/legacy/image.js
var legacy_image = __webpack_require__(9755);
var image_default = /*#__PURE__*/__webpack_require__.n(legacy_image);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/Advantages/index.js








const Advantages = ()=>{
    const { db  } = (0,external_react_.useContext)(AppContext/* default */.Z);
    const { t: translate  } = (0,external_next_i18next_.useTranslation)("advantages");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
        className: "advantages",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: "advantages__title",
                children: [
                    translate("title.original", {
                        returnObjects: true
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "accent",
                        children: translate("title.accent", {
                            returnObjects: true
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "advantages__list",
                children: db.advantages.map(({ name , icon  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Advantages_Advantage, {
                        className: "advantage",
                        name: name,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: icon,
                            width: 75,
                            height: 75,
                            objectFit: "contain",
                            quality: 100,
                            alt: "transparent img"
                        })
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const components_Advantages = (Advantages);


/***/ }),

/***/ 279:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ Cta)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_consultation_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1568);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Request_Request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9986);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Request_Request__WEBPACK_IMPORTED_MODULE_5__]);
_Request_Request__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Cta = ()=>{
    const { t: translate  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("banner");
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        active ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
    }, [
        active
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "cta",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: "cta__title",
                        children: [
                            "Phlebo",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "accent",
                                children: "Life"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "cta__subtitle",
                        children: translate("subtitle")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "cta__description",
                        children: translate("description")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        onClick: ()=>setActive(true),
                        className: "cta__btn",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                alt: "Консультация",
                                width: 23,
                                src: _assets_images_consultation_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                                quality: 100,
                                priority: true
                            }),
                            translate("consultation")
                        ]
                    })
                ]
            }),
            active ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Request_Request__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                active: active,
                setActive: setActive
            }) : ""
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ Statistics)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2417);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Statistics = ()=>{
    const { db  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: "statistics",
        children: db.statistics.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                className: "statistics__item",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "statistics__number",
                        children: item.number
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "statistics__description",
                        children: item.name
                    })
                ]
            }, index))
    });
};


/***/ }),

/***/ 6718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* binding */ Woman)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/assets/images/woman.png
/* harmony default export */ const woman = ({"src":"/_next/static/media/woman.805a5f96.png","height":786,"width":571,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAV1BMVEVMaXEzgsuvxsWPtrtuaV5lcXYXZLIecr3L3MpTpdiw0tdjnMPRqopnmM9orMsAVrAreb9yfopwna89eKN8jJydkIsEd9RGlci5qp2Oem1ZpdN5msKYucPY18l5AAAAGHRSTlMAxMpPM+7+/g81oJHu+tMhp8Xewf79Tfwf3bMBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVR4nBXHRxKAIBAAwUHCgqIEE4j/f6dl3xr8NAPo9gbAb/XfVU4VSDJWySwiziliO+5nx9jerfkALyoB/k7SbVsAAAAASUVORK5CYII=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/Banner/Woman.js



const Woman = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "woman",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                width: 450,
                src: woman,
                alt: "Phlebolife",
                quality: 100,
                priority: true
            }),
            children
        ]
    });
};


/***/ }),

/***/ 9050:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6786);
/* harmony import */ var _Cta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(279);
/* harmony import */ var _Statistics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7104);
/* harmony import */ var _Woman__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6718);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Cta__WEBPACK_IMPORTED_MODULE_2__]);
_Cta__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Banner = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "banner fadeIn",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "content",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cta__WEBPACK_IMPORTED_MODULE_2__/* .Cta */ ._, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Woman__WEBPACK_IMPORTED_MODULE_4__/* .Woman */ .r, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "woman__decoration"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Statistics__WEBPACK_IMPORTED_MODULE_3__/* .Statistics */ .g, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Card = ({ children , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: className,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 1252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Cards = ({ children , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: className,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cards);


/***/ }),

/***/ 5946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Common_ReadMore)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/assets/images/arrow-left.png
/* harmony default export */ const arrow_left = ({"src":"/_next/static/media/arrow-left.7bcbb4dc.png","height":24,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVMaXG+HjW+HjS+HzW9HjW+HzW+HzXgtCykAAAAB3RSTlMAZQOYPz7o8ioUsAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACVJREFUeJxjYAABJgjByghhMTAwg1ksjIyMbIwMSAy4FLJiEA0ACTIAQQa+NcsAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/Common/ReadMore.js




const ReadMore = ({ children , href , className , newWindow  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        legacyBehavior: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            target: newWindow ? "_blank" : "",
            className: className,
            children: [
                children,
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: arrow_left,
                    alt: "read more"
                })
            ]
        })
    });
};
/* harmony default export */ const Common_ReadMore = (ReadMore);


/***/ }),

/***/ 6786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Section = ({ children , className  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "content",
            children: children
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);


/***/ }),

/***/ 1527:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6786);
/* harmony import */ var _Common_Cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1252);
/* harmony import */ var _Common_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5054);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2417);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Common_ReadMore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5946);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3135);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_8__]);
react_markdown__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Diseases = ({ data  })=>{
    const { db , locale  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    const { t: translate  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)("diseases");
    const [itemsPerPage, setItemsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(3);
    const [limit, setLimit] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(3);
    const [animated, setAnimated] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        setAnimated(true);
        setTimeout(()=>{
            setAnimated(false);
        }, 500);
    }, [
        data,
        limit
    ]);
    const handleLoadLess = ()=>{
        return setLimit((prev)=>prev = itemsPerPage);
    };
    const handleLoadMore = ()=>{
        const { length  } = data;
        if (limit < length) {
            setLimit((prev)=>prev = prev + itemsPerPage);
        }
        if (limit % 2 === 0 && length % 2 !== 0) {
            return setLimit((prev)=>prev = length);
        }
        return limit >= length - itemsPerPage && setLimit((prev)=>prev = length);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Common_Section__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        className: "diseases",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "progress",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_9__.BiShowAlt, {}),
                    " ",
                    limit,
                    " / ",
                    data.length
                ]
            }),
            locale === "ru" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                className: "diseases__title",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "accent",
                        children: [
                            translate("title.original", {
                                returnObjects: true
                            }),
                            " "
                        ]
                    }),
                    translate("title.accent", {
                        returnObjects: true
                    })
                ]
            }),
            locale === "uz" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                className: "diseases__title",
                children: [
                    translate("title.original", {
                        returnObjects: true
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "accent",
                        children: translate("title.accent", {
                            returnObjects: true
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_Cards__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: "list-of-diseases",
                children: data?.slice(0, limit).map(({ id , attributes  }, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Common_Card__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        className: `disease ${animated ? "fadeIn" : ""}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "disease__name",
                                children: attributes.heading
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                className: "disease__body",
                                children: attributes.description.substring(0, 175) + "..."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_ReadMore__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                className: "disease__link",
                                href: `/chronic-diseases/${attributes.slug}`,
                                children: translate("read-more")
                            })
                        ]
                    }, id + "-" + attributes.slug))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: limit === data.length ? handleLoadLess : handleLoadMore,
                className: "diseases__load-more",
                children: translate(`${limit === data.length ? "load-less" : "load-more"}`)
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Diseases);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9755);
/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Common_ReadMore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5946);



const Doctor = ({ attributes  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "doctor",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "doctor__photo",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_legacy_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    quality: 100,
                    width: 600,
                    height: 600,
                    layout: "responsive",
                    src: `https://webpark.uz${attributes.photo.data.attributes.url}`,
                    alt: attributes.photo.data.attributes.alternativeText,
                    objectFit: "contain"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "doctor__title",
                children: attributes.speciality
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "doctor__name",
                children: attributes.full_name
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "doctor__para",
                children: [
                    attributes.description.substring(0, 60),
                    "..."
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_ReadMore__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                newWindow: true,
                className: "doctor__link",
                href: `/doctors/${attributes.slug}`,
                children: "Узнать больше"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Doctor);


/***/ }),

/***/ 7805:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6786);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2417);
/* harmony import */ var _Doctor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6946);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8547);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3877);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9241);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_7__, swiper__WEBPACK_IMPORTED_MODULE_8__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_7__, swiper__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








// Import Swiper React components

// import required modules

// Import Swiper styles




const Doctors = ({ data  })=>{
    const [thumbsSwiper, setThumbsSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { db  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const { t: translate  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)("doctors");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Common_Section__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        className: "doctors",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                className: "doctors__title",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "accent",
                        children: translate("title.accent", {
                            returnObject: true
                        })
                    }),
                    " ",
                    translate("title.original", {
                        returnObject: true
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.Swiper, {
                className: "carousel",
                navigation: true,
                pagination: true,
                modules: [
                    swiper__WEBPACK_IMPORTED_MODULE_8__.FreeMode,
                    swiper__WEBPACK_IMPORTED_MODULE_8__.Navigation,
                    swiper__WEBPACK_IMPORTED_MODULE_8__.Pagination
                ],
                slidesPerView: 3,
                spaceBetween: 50,
                children: data.map((doctor, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Doctor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            ...doctor
                        })
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Doctors);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9755);
/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_1__);


const Event = ({ attributes  })=>{
    console.log(attributes.images.data[0].attributes.url);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "event",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col col__info",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "event__title",
                        children: attributes.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "event__description",
                        children: attributes.description
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col col__image",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_legacy_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    alt: "Мастерклассы",
                    src: `https://webpark.uz${attributes.images.data[0].attributes.url}`,
                    width: 700,
                    height: 600,
                    layout: "responsive"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Event);


/***/ }),

/***/ 2974:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6786);
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1077);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








// Import Swiper styles


const Master = ({ data  })=>{
    const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const { t: translate  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)("masters");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Common_Section__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        className: "master",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                className: "master__title",
                children: [
                    translate("title.original", {
                        returnObject: true
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "accent",
                        children: translate("title.accent", {
                            returnObject: true
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "master__list",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                        ref: swiperRef,
                        pagination: {
                            clickable: true
                        },
                        speed: 500,
                        modules: [
                            swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination
                        ],
                        className: "carousel",
                        loop: true,
                        children: data.map((master)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Event__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    ...master
                                })
                            }, master.id);
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "controllers",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>swiperRef.current.swiper.slidePrev(),
                                className: "controllers__prev prev",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsArrowLeft, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>swiperRef.current.swiper.slideNext(),
                                className: "controllers__next next",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsArrowRight, {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Master);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9986:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1908);
/* harmony import */ var _SendTelegram__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8300);
/* harmony import */ var _YupValidation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2404);
/* harmony import */ var _NamePHone_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4845);
/* harmony import */ var _City_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9191);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




//Validation



//database


//tranlation


//icon


function Request({ setActive  }) {
    let [close, setClose] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    let [check, setCheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [t] = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)("request");
    const closeHandler = ()=>{
        setClose(false);
        setTimeout(()=>{
            setActive(false);
        }, 300);
    };
    const { register , handleSubmit , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__.yupResolver)(_YupValidation__WEBPACK_IMPORTED_MODULE_4__/* .YupValidation */ .Q)
    });
    const onSubmit = (data)=>{
        (0,_SendTelegram__WEBPACK_IMPORTED_MODULE_11__/* .sendTelegram */ .G)(data, setSuccess);
        setTimeout(()=>{
            closeHandler();
        }, 5000);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `request__black ${close ? "" : "request__close"}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: `request ${close ? "" : "request__close-big"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "request__bigbox",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "request__box",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "request__topbox",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "request__title",
                                            children: t("request")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: closeHandler,
                                            className: "request__xbtn",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_9__.FiX, {})
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    onSubmit: handleSubmit(onSubmit),
                                    className: "request__form",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "request__ibox",
                                            children: _NamePHone_json__WEBPACK_IMPORTED_MODULE_5__[locale].map((post, key)=>{
                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: "request__label",
                                                    htmlFor: post.type,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            test: true,
                                                            className: "request__name",
                                                            children: t(post.name)
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            maxLength: post.maxLength,
                                                            placeholder: post.placeholder,
                                                            name: post.type,
                                                            id: post.type,
                                                            ...register(post.type),
                                                            className: `request__input ${eval(post.error) ? "request__input-error" : ""}`
                                                        }),
                                                        eval(post.error) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "request__error",
                                                            children: t(eval(post.error))
                                                        })
                                                    ]
                                                }, key + 997);
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "request__ibox",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "request__name",
                                                    children: t("city")
                                                }),
                                                _City_json__WEBPACK_IMPORTED_MODULE_6__[locale].map((post, key)=>{
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        className: "request__rlabel",
                                                        htmlFor: post.city,
                                                        onClick: ()=>setCheck(post.city),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "request__radio",
                                                                type: "radio",
                                                                name: "city",
                                                                id: post.city,
                                                                value: post.city,
                                                                ...register("city")
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                htmlFor: post.city,
                                                                children: [
                                                                    check === post.city ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_10__.MdOutlineCheckBox, {
                                                                        className: "request__radio-icon"
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_10__.MdCheckBoxOutlineBlank, {
                                                                        className: `request__radio-icon ${errors.city?.message ? "request__radio-error" : ""}`
                                                                    }),
                                                                    t(post.city)
                                                                ]
                                                            })
                                                        ]
                                                    }, key + 234);
                                                }),
                                                errors.city?.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "request__error",
                                                    children: t(errors.city?.message)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "request__btn",
                                            type: "submit",
                                            children: t("Send a request")
                                        }),
                                        success ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "request__success",
                                                    children: t("The message has...")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "request__desc",
                                                    children: t("Thank you for...")
                                                })
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "request__desc",
                                            children: t("By clicking this button")
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Request);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3702:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6786);
/* harmony import */ var _Common_Cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1252);
/* harmony import */ var _Common_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5054);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2417);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Common_ReadMore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5946);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3135);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_8__]);
react_markdown__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Treatments = ({ data  })=>{
    const { db , locale  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    const { t: translate  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)("treatments");
    const [itemsPerPage, setItemsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(3);
    const [limit, setLimit] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(3);
    const [animated, setAnimated] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        setAnimated(true);
        setTimeout(()=>{
            setAnimated(false);
        }, 500);
    }, [
        data,
        limit
    ]);
    const handleLoadLess = ()=>{
        return setLimit((prev)=>prev = itemsPerPage);
    };
    const handleLoadMore = ()=>{
        const { length  } = data;
        if (limit < length) {
            setLimit((prev)=>prev = prev + itemsPerPage);
        }
        if (limit % 2 === 0 && length % 2 !== 0) {
            return setLimit((prev)=>prev = length);
        }
        return limit >= length - itemsPerPage && setLimit((prev)=>prev = length);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Common_Section__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        className: "treatments",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "progress",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_9__.BiShowAlt, {}),
                    " ",
                    limit,
                    " / ",
                    data.length
                ]
            }),
            locale === "ru" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                className: "treatments__title",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "accent",
                        children: [
                            translate("title.original", {
                                returnObjects: true
                            }),
                            " "
                        ]
                    }),
                    translate("title.accent", {
                        returnObjects: true
                    })
                ]
            }),
            locale === "uz" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                className: "treatments__title",
                children: [
                    translate("title.original", {
                        returnObjects: true
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "accent",
                        children: translate("title.accent", {
                            returnObjects: true
                        })
                    })
                ]
            }),
            data && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_Cards__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: "list-of-treatments",
                children: data?.slice(0, limit).map(({ id , attributes  }, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Common_Card__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        className: `treatment ${animated ? "fadeIn" : ""}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "treatment__name",
                                children: attributes.heading
                            }),
                            locale !== "uz" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                className: "treatment__body",
                                children: attributes.body && attributes.description.substring(0, 175) + "..."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_ReadMore__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                className: "treatment__link",
                                href: `/treatment-services/${attributes.slug}`,
                                children: translate("read-more")
                            })
                        ]
                    }, id + "-" + attributes.slug))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: limit === data.length ? handleLoadLess : handleLoadMore,
                className: "treatments__load-more",
                children: translate(`${limit === data.length ? "load-less" : "load-more"}`)
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Treatments);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

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

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 8547:
/***/ ((module) => {

module.exports = require("react-icons/gr");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 1908:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,945,462,340], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();