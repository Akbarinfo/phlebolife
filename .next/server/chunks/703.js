"use strict";
exports.id = 703;
exports.ids = [703];
exports.modules = {

/***/ 1009:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export getServerSideProps */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1908);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _Request_YupValidation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2404);
/* harmony import */ var _Request_NamePHone_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4845);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Request_City_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9191);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Request_SendTelegram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8300);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);
([_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





//database



//translation

//icon


function PageRequest({ locale  }) {
    let [close, setClose] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    let [check, setCheck] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    let [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [t] = (0,next_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)("request");
    const { register , reset , handleSubmit , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_1__.yupResolver)(_Request_YupValidation__WEBPACK_IMPORTED_MODULE_4__/* .YupValidation */ .Q)
    });
    const onSubmit = (data)=>{
        (0,_Request_SendTelegram__WEBPACK_IMPORTED_MODULE_10__/* .sendTelegram */ .G)(data, setSuccess);
        reset();
        setTimeout(()=>{
            setSuccess(false);
        }, 5000);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: handleSubmit(onSubmit),
            className: "sign-up",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: locale === "ru" ? "Оставьте заявку на консультацию" : "Флеболог кўригига ёзилинг"
                }),
                _Request_NamePHone_json__WEBPACK_IMPORTED_MODULE_5__[locale].map((post, key)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "sign-up__field field",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: t(post.name)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                maxLength: post.maxLength,
                                placeholder: post.placeholder,
                                name: post.type,
                                id: post.type,
                                ...register(post.type),
                                className: `sign-up__input ${eval(post.error) ? "sign-up__input-error" : ""}`
                            }),
                            eval(post.error) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "sign-up__error",
                                children: t(eval(post.error))
                            })
                        ]
                    }, key + 3644);
                }),
                _Request_City_json__WEBPACK_IMPORTED_MODULE_7__[locale].map((post, key)=>{
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
                                    check === post.city ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdOutlineCheckBox, {
                                        className: "sign-up__radio-icon"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdCheckBoxOutlineBlank, {
                                        className: `sign-up__radio-icon ${errors.city?.message ? "sign-up__radio-error" : ""}`
                                    }),
                                    t(post.city)
                                ]
                            })
                        ]
                    }, key + 2132);
                }),
                errors.city?.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "sign-up__error",
                    children: t(errors.city?.message)
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
                }) : "",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "submit",
                    value: locale === "ru" ? "Отправить" : "Юбориш"
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageRequest);
async function getServerSideProps({ locale  }) {
    return {
        props: {
            ...await serverSideTranslations(locale, [
                "request"
            ])
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8567:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3135);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_1__]);
react_markdown__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const RichContent = ({ children , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
            className: "markdown",
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RichContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;