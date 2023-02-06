"use strict";
exports.id = 462;
exports.ids = [462];
exports.modules = {

/***/ 78:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Common_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/assets/images/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.a2132123.png","height":220,"width":687,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAKlBMVEUrLjtLV55MaXHRGS25HzW4HjK0IDUsMEF4JzvDHjR7OmUyW6IkYq4rZLN0ZI+/AAAADnRSTlMSFQAYW31qAysqamB+Nb2r104AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAfSURBVHicY2DhZGZm5GVkYmBhY2Xl4uFmYuBgAAN2AAZtAGsWVavLAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":3});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Logo/index.js




const Logo = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "logo",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: "/",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    width: 220,
                    src: logo,
                    quality: 100,
                    priority: true,
                    alt: "Phlebolife"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: "Главная страница"
                })
            ]
        })
    });
/* harmony default export */ const components_Logo = (Logo);

// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3094);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/context/AppContext.js
var AppContext = __webpack_require__(2417);
;// CONCATENATED MODULE: ./src/components/Nav/index.js






const Nav = ()=>{
    const { db  } = (0,external_react_.useContext)(AppContext/* default */.Z);
    const [activeLink, setActiveLink] = (0,external_react_.useState)();
    const activeLinkHandler = (index)=>setActiveLink((prevState)=>prevState = index);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "nav",
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: "nav-list",
            children: db.navigation.map((item, index)=>{
                if (item.path[0] === "/") {
                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: `${index == activeLink ? "nav-list__item nav-list__item--active" : "nav-list__item"}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            legacyBehavior: true,
                            href: item.path,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: item.title
                            })
                        })
                    }, index);
                }
                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: `${index == activeLink ? "nav-list__item nav-list__item--active" : "nav-list__item"}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_.Link, {
                        smooth: true,
                        spy: true,
                        to: item.path,
                        children: item.title
                    })
                }, index);
            })
        })
    });
};
/* harmony default export */ const components_Nav = (Nav);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/LangChanger/index.js



const LangChanger = ()=>{
    const { locales , asPath  } = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "locales",
        children: locales.map((locale, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "locales__item",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: asPath,
                    locale: locale,
                    children: locale
                })
            }, i))
    });
};
/* harmony default export */ const components_LangChanger = (LangChanger);

;// CONCATENATED MODULE: ./src/components/Header/index.js




const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Nav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_LangChanger, {})
        ]
    });
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/Footer/index.js









const Footer = ()=>{
    const { locale  } = (0,router_.useRouter)();
    const { db  } = (0,external_react_.useContext)(AppContext/* default */.Z);
    const [currentTabIndex, setCurrentTabIndex] = (0,external_react_.useState)(0);
    const { t: translate  } = (0,external_next_i18next_.useTranslation)("footer");
    const handleTabChange = (index)=>{
        setCurrentTabIndex((prevState)=>prevState = index);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "footer",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "footer__about",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: translate("about")
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "socials",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                rel: "noreferrer",
                                target: "_blank",
                                href: "https://www.instagram.com/phlebolife/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsInstagram, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                rel: "noreferrer",
                                target: "_blank",
                                href: "https://t.me/phlebolife",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsTelegram, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                rel: "noreferrer",
                                target: "_blank",
                                href: "https://www.facebook.com/phlebolife/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsFacebook, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                rel: "noreferrer",
                                target: "_blank",
                                href: "https://www.youtube.com/channel/UCKR4jQwKNNkC3Ov7kJzGVGw",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsYoutube, {})
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "footer__tab",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "controllers",
                        children: db.contacts.map(({ city  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: `${currentTabIndex == index ? "active" : ""}`,
                                onClick: ()=>handleTabChange(index),
                                children: city
                            }, index))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "body",
                        children: db.contacts.map(({ location , phone  }, index)=>index === currentTabIndex && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("address", {
                                className: "address",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "address__location",
                                        children: location
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "address__phone",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlinePhone, {}),
                                            phone.render
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "address__email",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(md_.MdOutlineEmail, {}),
                                            "phlebolife@gmail.com"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "address__tg",
                                        children: [
                                            locale === "ru" ? "Подпишитесь на наш телеграм:" : "Телеграм каналимизга обуна бўлинг",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "https://t.me/phlebolife",
                                                children: [
                                                    " ",
                                                    "https://t.me/phlebolife"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "footer__schedule",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineFieldTime, {
                        className: "calendar"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "accent",
                                children: translate("schedule.title.accent", {
                                    returnObject: true
                                })
                            }),
                            " ",
                            translate("schedule.title.original", {
                                returnObject: true
                            })
                        ]
                    }),
                    currentTabIndex == 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            locale == "ru" ? "Понедельник" : "Душанба",
                                            " |"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: " 9:00 - 18:00"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            locale == "ru" ? "Вторник" : "Сешанба",
                                            " |"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: " 9:00 - 18:00"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            locale == "ru" ? "Среда" : "Чоршанба",
                                            " |"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: " 9:00 - 18:00"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            locale == "ru" ? "Четверг" : "Пайшанба",
                                            " |"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: " 9:00 - 18:00"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            locale == "ru" ? "Пятница" : "Жума",
                                            " |"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: " 9:00 - 18:00"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            locale == "ru" ? "Суббота" : "Шанба",
                                            " |"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: " 9:00 - 18:00"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            locale == "ru" ? "Воскресенье" : "Якшанба",
                                            " | "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: locale == "ru" ? "Выходной" : "Дам олиш куни"
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            locale == "ru" ? "Понедельник" : "Душанба",
                                            " |"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: " 9:00 - 18:00"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            locale == "ru" ? "Вторник" : "Сешанба",
                                            " |"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: " 9:00 - 18:00"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            locale == "ru" ? "Среда" : "Чоршанба",
                                            " |"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: " 9:00 - 18:00"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            locale == "ru" ? "Четверг" : "Пайшанба",
                                            " |"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: " 9:00 - 18:00"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            locale == "ru" ? "Пятница" : "Жума",
                                            " |"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: " 9:00 - 18:00"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            locale == "ru" ? "Суббота" : "Шанба",
                                            " | "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: locale == "ru" ? "Выходной" : "Дам олиш куни"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            locale == "ru" ? "Воскресенье" : "Якшанба",
                                            " |"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: " 9:00 - 18:00 "
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/Common/Layout.js



const Layout = ({ children , navigation , ...props })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
                navigation: navigation
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
/* harmony default export */ const Common_Layout = (Layout);


/***/ }),

/***/ 2417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);


/***/ }),

/***/ 6458:
/***/ ((module) => {

module.exports = JSON.parse('{"ru":{"navigation":[{"id":1,"title":"О клинике","path":"about"},{"id":2,"title":"Заболевания","path":"diseases"},{"id":3,"title":"Методы лечения","path":"treatments"},{"id":4,"title":"Наши специалисты","path":"doctors"},{"id":5,"title":"Цены","path":"/price-list"},{"id":6,"title":"Контакты","path":"footer"}],"statistics":[{"id":1,"number":"20000+","name":"обращений"},{"id":2,"number":"2000+","name":"лазерных операций"},{"id":3,"number":"15+","name":"Мастер классов"}],"branches":[{"id":1,"city":"г. Ташкент","phone":{"render":"+998 (71) 235-61-00","href":"+998954106100"}},{"id":2,"city":"г. Самарканд","phone":{"render":"+998 (95) 410-61-00","href":"+998954106100"}}],"diseases":[{"id":1,"name":"Варикозная болезнь вен нижних конечностей","description":"Варикозная болезнь вен нижних конечностей или варикозное расширение вен нижних конечностей — расширение поверхностных вен, сопровождающееся несостоятельностью клапанов и нарушением..."},{"id":2,"name":"Сосудистые звездочки","description":"Сосудистые звездочки, сосудистые сетки, сосудистые сеточки или телеангиоэктазии (телеангиэктазии), — это расширение кровеносных сосудов. Чаще всего они образуются на ногах, на лице..."},{"id":3,"name":"Посттромботическая болезнь","description":"Заболевание, при котором имеет место затруднение венозного оттока из пораженной конечности, возникающее после перенесенного тромбоза глубоких вен и проявляющееся симптомами хронической..."},{"id":4,"name":"Варикозное расширение вен малого таза","description":"Варикозная болезнь вен малого таза — это патология, которая встречается преимущественно у женщин детородного возраста. В литературе данное заболевание известно также как: варикоцеле..."},{"id":5,"name":"Венозная трофическая язва","description":"Венозная трофическая язва — длительно не заживающий дефект тканей, возникающий при тяжелом нарушении венозного оттока по глубоким и поверхностным венам. Они отмечаются у 1% всего населения и у 20% пациентов с заболеваниями..."},{"id":6,"name":"Анатомия вен нижних конечностей","description":"Анатомия венозной системы нижних конечностей отличается большой вариабельностью. Большую роль в оценке данных инструментального обследования в выборе правильного метода лечения играет знание индивидуальных..."},{"id":7,"name":"Анатомия вен нижних конечностей","description":"Анатомия венозной системы нижних конечностей отличается большой вариабельностью. Большую роль в оценке данных инструментального обследования в выборе правильного метода лечения играет знание индивидуальных..."}],"treatments":[{"id":1,"name":"Эндовенозная лазерная облитерация"},{"id":2,"name":"Радиочастотная эндовенозная облитерация"},{"id":3,"name":"Эхо склеротерапия"},{"id":4,"name":"Лимфопрессотерапия"},{"id":5,"name":"Микропенная склеротерапия"},{"id":6,"name":"Амбулаторная минифлебэктомия"},{"id":7,"name":"Амбулаторный, стриппинг"},{"id":8,"name":"Лечение лимфедемы (лимфостаза)"}],"advantages":[{"id":1,"name":"Амбулаторное лечение (1-2 часа)","icon":"/images/hospital-room.png"},{"id":2,"name":"Местная анестезия","icon":"/images/injection.png"},{"id":3,"name":"Отсутствие реабилитации","icon":"/images/reabilitation.png"},{"id":4,"name":"Отсутствие разрезов, швов и шрамов","icon":"/images/scalpel.png"},{"id":5,"name":"Операция под контролем УЗИ","icon":"/images/radioactive.png"},{"id":6,"name":"Безболезненность","icon":"/images/blood-cells.png"},{"id":7,"name":"Сохраняется трудоспособность","icon":"/images/disabled.png"},{"id":8,"name":"Риск рецидива минимальный","icon":"/images/pain.png"},{"id":9,"name":"Возможность лечения пожилых пациентов","icon":"/images/insurance.png"}],"doctors":[{"id":1,"title":"Сосудистый хирург, флеболог","name":"Темиров Суръат","paragraphs":["Опыт работы более 20 лет, проводит консультацию, диагностику и лечение заболеваний вен нижних конечностей и малого таза. Владеет навыками рентгенэндоваскулярной хирургии.","Всегда стремится оставаться в курсе самых современных достижений в области сосудистой хирургии и флебологии, имеет особый интерес к лечению варикозно-расширенных вен с помощью мало инвазивных методик — эндовенозной лазерной и радиочастотной коагуляции, минифлебэктомии и склеротерапии. Этим методам лечения он учился у ведущих флебологов, таких как проф. Uldis Maurins (Латвия), проф. Zoltan Varady (Германия), проф. Мазайшвили К.В. (Россия), проф. Богачев В.Ю. (Москва)."],"photo":"/images/doctor001.png"},{"id":2,"title":"Сосудистый хирург, флеболог","name":"Зокиров Шахзод","paragraphs":["Опыт работы более 20 лет, проводит консультацию, диагностику и лечение заболеваний вен нижних конечностей и малого таза. Владеет навыками рентгенэндоваскулярной хирургии.","Всегда стремится оставаться в курсе самых современных достижений в области сосудистой хирургии и флебологии, имеет особый интерес к лечению варикозно-расширенных вен с помощью мало инвазивных методик — эндовенозной лазерной и радиочастотной коагуляции, минифлебэктомии и склеротерапии. Этим методам лечения он учился у ведущих флебологов, таких как проф. Uldis Maurins (Латвия), проф. Zoltan Varady (Германия), проф. Мазайшвили К.В. (Россия), проф. Богачев В.Ю. (Москва)."],"photo":"/images/doctor002.png"},{"id":3,"title":"Сосудистый хирург, флеболог","name":"Анаркулов Отабек","paragraphs":["Опыт работы более 20 лет, проводит консультацию, диагностику и лечение заболеваний вен нижних конечностей и малого таза. Владеет навыками рентгенэндоваскулярной хирургии.","Всегда стремится оставаться в курсе самых современных достижений в области сосудистой хирургии и флебологии, имеет особый интерес к лечению варикозно-расширенных вен с помощью мало инвазивных методик — эндовенозной лазерной и радиочастотной коагуляции, минифлебэктомии и склеротерапии. Этим методам лечения он учился у ведущих флебологов, таких как проф. Uldis Maurins (Латвия), проф. Zoltan Varady (Германия), проф. Мазайшвили К.В. (Россия), проф. Богачев В.Ю. (Москва)."],"photo":"/images/doctor003.png"},{"id":4,"title":"Сосудистый хирург, флеболог","name":"Султанова Севара","paragraphs":["Опыт работы более 20 лет, проводит консультацию, диагностику и лечение заболеваний вен нижних конечностей и малого таза. Владеет навыками рентгенэндоваскулярной хирургии.","Всегда стремится оставаться в курсе самых современных достижений в области сосудистой хирургии и флебологии, имеет особый интерес к лечению варикозно-расширенных вен с помощью мало инвазивных методик — эндовенозной лазерной и радиочастотной коагуляции, минифлебэктомии и склеротерапии. Этим методам лечения он учился у ведущих флебологов, таких как проф. Uldis Maurins (Латвия), проф. Zoltan Varady (Германия), проф. Мазайшвили К.В. (Россия), проф. Богачев В.Ю. (Москва)."],"photo":"/images/doctor004.png"}],"events":[{"id":1,"name":"Хирургическое лечение венозной трофической язвы в Ташкенте Эндовенозная лазерная облитерация с Shave терапией и аутодермопластикой трофической язвы","images":["/images/masterclass001.jpg","/images/masterclass002.jpg","/images/masterclass003.jpg"],"member":"Богачёв Вадим Юрьевич"},{"id":2,"name":"Хирургическое лечение венозной трофической язвы в Ташкенте Эндовенозная лазерная облитерация с Shave терапией и аутодермопластикой трофической язвы","images":["/images/masterclass001.jpg","/images/masterclass002.jpg","/images/masterclass003.jpg"],"member":"Богачёв Вадим Юрьевич"},{"id":3,"name":"Хирургическое лечение венозной трофической язвы в Ташкенте Эндовенозная лазерная облитерация с Shave терапией и аутодермопластикой трофической язвы","images":["/images/masterclass001.jpg","/images/masterclass002.jpg","/images/masterclass003.jpg"],"member":"Богачёв Вадим Юрьевич"}],"contacts":[{"city":"Ташкент","location":"г. Ташкент, ул. Чингиза Айматова, 38","phone":{"render":"+998 (71) 235-61-00","href":"+998712356100"},"email":"phlebolife@gmail.com"},{"city":"Самарканд","location":"г. Самарканд, ул.Амира Темура, 162","phone":{"render":"+998 (95) 410-61-00","href":"++998954106100"},"email":"phlebolife@gmail.com"}]},"uz":{"navigation":[{"id":1,"title":"Клиника хақида","path":"about"},{"id":2,"title":"Касалликлар","path":"diseases"},{"id":3,"title":"Даволаш усуллари","path":"treatments"},{"id":4,"title":"Мутахассислар","path":"doctors"},{"id":5,"title":"Нархлар","path":"/price-list"},{"id":6,"title":"Боғланиш","path":"footer"}],"statistics":[{"id":1,"number":"20000+","name":"Мурожаатлар"},{"id":2,"number":"2000+","name":"Даволанган пациентлар"},{"id":3,"number":"15+","name":"Мастер-класслар"}],"branches":[{"id":1,"city":"Тошкент шахри","phone":{"render":"+998 (71) 235-61-00","href":"+998954106100"}},{"id":2,"city":"Самарқанд шахри","phone":{"render":"+998 (95) 410-61-00","href":"+998954106100"}}],"diseases":[{"id":1,"name":"Оёқлар варикоз касаллиги","description":"Оёқ варикоз касаллиги ёки оёқ веналари варикоз кенгайган томирлар - юзаки томирларнинг кенгайиши, клапан етишмовчилиги ва қон оқимининг бузилиши билан кечади. Бу энг кенг тарқалган."},{"id":2,"name":"Томирли юлдузча","description":"Қон томир юлдузчалари, майда қон томирлар, ўргимчак томирчалар ёки телеангиоэктазиялар - қон томирларининг кенгайиши ҳисобланади. Кўпинча улар оёқларда, юзда (купероз), айниқса бурун қанотларида ҳосил бўлади ва ҳатто ошқозонда ҳам топилади. Статистик маълумотларга кўра, қон томир муаммоси катталарнинг 90% дан кўпроғида учрайди."},{"id":3,"name":"Посттромбофлебетик касаллик","description":"Чуқур томир тромбозидан кейин юзага келадиган ва сурункали веноз этишмовчилик (CВИ) белгилари сифатида намоён бўладиган зарарланган оёқлардан веноз қоннинг қайтиши қийин бўлган касаллик. Пост-тромботик касаллик (ПТД) шунингдек, пост-тромбофлебитик синдроми (ПТФС) деб ҳам аталади."},{"id":4,"name":"Кичик чаноқ бўшлиғининг варикози","description":"Кичик чаноқ аъзоларининг варикоз асосан туғиш ёшидаги аёлларда учрайдиган патология ҳисобланади. Адабиётда бу касаллик, шунингдек, аёл варикоцелиси, кичик чаноқ аъзоларининг варикози, сурункали чаноқ оғриғи синдроми сифатида ҳам танилган. Бундай беморлар қориннинг пастки қисмидаги оғриқларга"},{"id":5,"name":"Оёқлар веноз трофик яра","description":"Веноз трофик яра - бу чуқур ва юзаки томирлар орқали веноз чиқишининг жиддий бузилиши билан юзага келадиган узоқ муддатли даволанмайдиган тери тўқимаси нуқсони. Улар умумий аҳолининг 1 фоизида ва веноз касаллиги бўлган беморларнинг 20 фоизида учрайди. Эртами-кечми даволанмаган варикоз томирлари билан оғриган ҳар бешинчи беморда трофик яра пайдо бўлади. Трофик яралар варикоз томирларининг ривожланган босқичларида ва чуқур томир тромбофлебити натижасида пайдо бўлади."},{"id":6,"name":"Оёқлар веналар анатомияси","description":"Оёқнинг веноз тизими анатомияси жуда ўзгарувчан. Инструментал текширув маълумотларини баҳолаш, инсон веноз тизимининг тузилишининг индивидуал хусусиятларини билиш, даволашнинг тўғри усулини танлашда мухим ўрин тутади"}],"treatments":[{"id":1,"name":"Эндовеноз лазер облитерация"},{"id":2,"name":"Радиочастотали эндовеноз облитерация"},{"id":3,"name":"Эхо склеротерапия"},{"id":4,"name":"Лимфопрессотерапия"},{"id":5,"name":"Микрокўпикли склеротерапия"},{"id":6,"name":"Амбулатор минифлебэктомия"},{"id":7,"name":"Амбулатор стриппинг"},{"id":8,"name":"Лимфедема (лимфостаз)-ни даволаш"}],"advantages":[{"id":1,"name":"Амбулаторли даво (1-2 соатгача)","icon":"/images/hospital-room.png"},{"id":2,"name":"Махалий оғриқсизлантириш","icon":"/images/injection.png"},{"id":3,"name":"Реабилитациянинг йўқлиги","icon":"/images/reabilitation.png"},{"id":4,"name":"Кесиш, чок ва шрамларсиз","icon":"/images/scalpel.png"},{"id":5,"name":"Жаррохлик УТТ назоратида","icon":"/images/radioactive.png"},{"id":6,"name":"Деярли оғриқсиз","icon":"/images/blood-cells.png"},{"id":7,"name":"Ишлаш қобилияти сақланиши","icon":"/images/disabled.png"},{"id":8,"name":"Кайталаш эхтимоли паст","icon":"/images/pain.png"},{"id":9,"name":"Қарияларни даволаш имкони","icon":"/images/insurance.png"}],"doctors":[{"id":1,"title":"Сосудистый хирург, флеболог","name":"Темиров Суръат","paragraphs":["Опыт работы более 20 лет, проводит консультацию, диагностику и лечение заболеваний вен нижних конечностей и малого таза. Владеет навыками рентгенэндоваскулярной хирургии.","Всегда стремится оставаться в курсе самых современных достижений в области сосудистой хирургии и флебологии, имеет особый интерес к лечению варикозно-расширенных вен с помощью мало инвазивных методик — эндовенозной лазерной и радиочастотной коагуляции, минифлебэктомии и склеротерапии. Этим методам лечения он учился у ведущих флебологов, таких как проф. Uldis Maurins (Латвия), проф. Zoltan Varady (Германия), проф. Мазайшвили К.В. (Россия), проф. Богачев В.Ю. (Москва)."],"photo":"/images/doctor001.png"},{"id":2,"title":"Сосудистый хирург, флеболог","name":"Зокиров Шахзод","paragraphs":["Опыт работы более 20 лет, проводит консультацию, диагностику и лечение заболеваний вен нижних конечностей и малого таза. Владеет навыками рентгенэндоваскулярной хирургии.","Всегда стремится оставаться в курсе самых современных достижений в области сосудистой хирургии и флебологии, имеет особый интерес к лечению варикозно-расширенных вен с помощью мало инвазивных методик — эндовенозной лазерной и радиочастотной коагуляции, минифлебэктомии и склеротерапии. Этим методам лечения он учился у ведущих флебологов, таких как проф. Uldis Maurins (Латвия), проф. Zoltan Varady (Германия), проф. Мазайшвили К.В. (Россия), проф. Богачев В.Ю. (Москва)."],"photo":"/images/doctor002.png"},{"id":3,"title":"Сосудистый хирург, флеболог","name":"Анаркулов Отабек","paragraphs":["Опыт работы более 20 лет, проводит консультацию, диагностику и лечение заболеваний вен нижних конечностей и малого таза. Владеет навыками рентгенэндоваскулярной хирургии.","Всегда стремится оставаться в курсе самых современных достижений в области сосудистой хирургии и флебологии, имеет особый интерес к лечению варикозно-расширенных вен с помощью мало инвазивных методик — эндовенозной лазерной и радиочастотной коагуляции, минифлебэктомии и склеротерапии. Этим методам лечения он учился у ведущих флебологов, таких как проф. Uldis Maurins (Латвия), проф. Zoltan Varady (Германия), проф. Мазайшвили К.В. (Россия), проф. Богачев В.Ю. (Москва)."],"photo":"/images/doctor003.png"},{"id":4,"title":"Сосудистый хирург, флеболог","name":"Султанова Севара","paragraphs":["Опыт работы более 20 лет, проводит консультацию, диагностику и лечение заболеваний вен нижних конечностей и малого таза. Владеет навыками рентгенэндоваскулярной хирургии.","Всегда стремится оставаться в курсе самых современных достижений в области сосудистой хирургии и флебологии, имеет особый интерес к лечению варикозно-расширенных вен с помощью мало инвазивных методик — эндовенозной лазерной и радиочастотной коагуляции, минифлебэктомии и склеротерапии. Этим методам лечения он учился у ведущих флебологов, таких как проф. Uldis Maurins (Латвия), проф. Zoltan Varady (Германия), проф. Мазайшвили К.В. (Россия), проф. Богачев В.Ю. (Москва)."],"photo":"/images/doctor004.png"}],"events":[{"id":1,"name":"Хирургическое лечение венозной трофической язвы в Ташкенте Эндовенозная лазерная облитерация с Shave терапией и аутодермопластикой трофической язвы","images":["/images/masterclass001.jpg","/images/masterclass002.jpg","/images/masterclass003.jpg"],"member":"Богачёв Вадим Юрьевич"},{"id":2,"name":"Хирургическое лечение венозной трофической язвы в Ташкенте Эндовенозная лазерная облитерация с Shave терапией и аутодермопластикой трофической язвы","images":["/images/masterclass001.jpg","/images/masterclass002.jpg","/images/masterclass003.jpg"],"member":"Богачёв Вадим Юрьевич"},{"id":3,"name":"Хирургическое лечение венозной трофической язвы в Ташкенте Эндовенозная лазерная облитерация с Shave терапией и аутодермопластикой трофической язвы","images":["/images/masterclass001.jpg","/images/masterclass002.jpg","/images/masterclass003.jpg"],"member":"Богачёв Вадим Юрьевич"}],"contacts":[{"city":"Тошкент","location":"Тошкент шахри,Чингиз Айматов кўчаси, 38","phone":{"render":"+998 (71) 235-61-00","href":"+998712356100"},"email":"phlebolife@gmail.com"},{"city":"Самарқанд","location":"Самарқанд шахри, Амир Темур кўчаси, 162","phone":{"render":"+998 (95) 410-61-00","href":"++998954106100"},"email":"phlebolife@gmail.com"}]}}');

/***/ })

};
;