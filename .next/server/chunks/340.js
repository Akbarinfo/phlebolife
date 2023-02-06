"use strict";
exports.id = 340;
exports.ids = [340];
exports.modules = {

/***/ 8300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ sendTelegram)
/* harmony export */ });
const sendTelegram = (data, setSuccess)=>{
    let bot = {
        token: "6065086630:AAFN2wNm_ZFJUhOcotq52-xc5V-xSDr_Jw0",
        chatID: "-1001739892818",
        message: `<b>Ism Familya:</b> +${data.name} %0A<b>Nomer:</b> +${data.tel} %0A<b>Shaxar:</b> +${data.city}`
    };
    fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chatID}&text=${bot.message}&parse_mode=html`, {
        method: "GET"
    }).then((success)=>{
        setSuccess(true);
        console.log("The msg has been sent successfully");
    }, (error)=>{
        console.log(error);
    });
};


/***/ }),

/***/ 2404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ YupValidation)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const YupValidation = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("required"),
    tel: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("required").min(13, "min-number").matches(/^[ 0-9+]+$/i, "tel-matches"),
    city: yup__WEBPACK_IMPORTED_MODULE_0__.string("city-required").required("city-required").nullable()
});


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

/***/ 9191:
/***/ ((module) => {

module.exports = JSON.parse('{"uz":[{"id":1,"city":"Тошкент"},{"id":2,"city":"Самарқанд"}],"ru":[{"id":1,"city":"Ташкент"},{"id":2,"city":"Самарканд"}]}');

/***/ }),

/***/ 4845:
/***/ ((module) => {

module.exports = JSON.parse('{"uz":[{"id":1,"name":"Исмингиз","type":"name","placeholder":"","maxLength":"","error":"errors.name?.message"},{"id":2,"name":"Телефон рақамингиз","type":"tel","placeholder":"+(998) ** *** ****","maxLength":13,"error":"errors.tel?.message"}],"ru":[{"id":1,"name":"Ваше имя","type":"name","placeholder":"","maxLength":"","error":"errors.name?.message"},{"id":2,"name":"Номер телефона","type":"tel","placeholder":"+(998) ** *** ****","maxLength":13,"error":"errors.tel?.message"}]}');

/***/ })

};
;