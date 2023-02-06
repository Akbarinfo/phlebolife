"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[933],{1009:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(7533),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7294),react_hook_form__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7536),_Request_YupValidation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2404),_Request_NamePHone_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4845),next_router__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1163),next_router__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__),_Request_City_json__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9191),next_i18next__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4505),react_icons_md__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(5434),_Request_SendTelegram__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(8300);function PageRequest(param){var ref;let{locale}=param,[close,setClose]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),[check,setCheck]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),[success,setSuccess]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[t]=(0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.$G)("request"),{register,reset,handleSubmit,formState:{errors}}=(0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.cI)({resolver:(0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__.X)(_Request_YupValidation__WEBPACK_IMPORTED_MODULE_2__.Q)}),onSubmit=e=>{(0,_Request_SendTelegram__WEBPACK_IMPORTED_MODULE_9__.G)(e,setSuccess),reset(),setTimeout(()=>{setSuccess(!1)},5e3)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",{onSubmit:handleSubmit(onSubmit),className:"sign-up",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{children:"ru"===locale?"Оставьте заявку на консультацию":"Флеболог кўригига ёзилинг"}),_Request_NamePHone_json__WEBPACK_IMPORTED_MODULE_3__[locale].map((post,key)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"sign-up__field field",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{children:t(post.name)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"text",maxLength:post.maxLength,placeholder:post.placeholder,name:post.type,id:post.type,...register(post.type),className:"sign-up__input ".concat(eval(post.error)?"sign-up__input-error":"")}),eval(post.error)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"sign-up__error",children:t(eval(post.error))})]},key+3644)),_Request_City_json__WEBPACK_IMPORTED_MODULE_5__[locale].map((e,a)=>{var i;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{className:"request__rlabel",htmlFor:e.city,onClick:()=>setCheck(e.city),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{className:"request__radio",type:"radio",name:"city",id:e.city,value:e.city,...register("city")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{htmlFor:e.city,children:[check===e.city?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_10__.wBz,{className:"sign-up__radio-icon"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_10__.hrt,{className:"sign-up__radio-icon ".concat((null===(i=errors.city)||void 0===i?void 0:i.message)?"sign-up__radio-error":"")}),t(e.city)]})]},a+2132)}),(null===(ref=errors.city)||void 0===ref?void 0:ref.message)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"sign-up__error",children:t(null===(ref=errors.city)||void 0===ref?void 0:ref.message)}),success?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"request__success",children:t("The message has...")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"request__desc",children:t("Thank you for...")})]}):"",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"submit",value:"ru"===locale?"Отправить":"Юбориш"})]})})}async function getServerSideProps(e){let{locale:a}=e;return{props:{...await serverSideTranslations(a,["request"])}}}__webpack_exports__.Z=PageRequest},8300:function(e,a,i){i.d(a,{G:function(){return s}});let s=(e,a)=>{let i={token:"6065086630:AAFN2wNm_ZFJUhOcotq52-xc5V-xSDr_Jw0",chatID:"-1001739892818",message:"<b>Ism Familya:</b> +".concat(e.name," %0A<b>Nomer:</b> +").concat(e.tel," %0A<b>Shaxar:</b> +").concat(e.city)};fetch("https://api.telegram.org/bot".concat(i.token,"/sendMessage?chat_id=").concat(i.chatID,"&text=").concat(i.message,"&parse_mode=html"),{method:"GET"}).then(e=>{a(!0),console.log("The msg has been sent successfully")},e=>{console.log(e)})}},2404:function(e,a,i){i.d(a,{Q:function(){return n}});var s=i(4231);let n=s.Ry().shape({name:s.Z_().required("required"),tel:s.Z_().required("required").min(13,"min-number").matches(/^[ 0-9+]+$/i,"tel-matches"),city:s.Z_("city-required").required("city-required").nullable()})},8567:function(e,a,i){var s=i(5893),n=i(697);let t=e=>{let{children:a,...i}=e;return(0,s.jsx)("article",{...i,children:(0,s.jsx)(n.D,{className:"markdown",children:a})})};a.Z=t},9191:function(e){e.exports=JSON.parse('{"uz":[{"id":1,"city":"Тошкент"},{"id":2,"city":"Самарқанд"}],"ru":[{"id":1,"city":"Ташкент"},{"id":2,"city":"Самарканд"}]}')},4845:function(e){e.exports=JSON.parse('{"uz":[{"id":1,"name":"Исмингиз","type":"name","placeholder":"","maxLength":"","error":"errors.name?.message"},{"id":2,"name":"Телефон рақамингиз","type":"tel","placeholder":"+(998) ** *** ****","maxLength":13,"error":"errors.tel?.message"}],"ru":[{"id":1,"name":"Ваше имя","type":"name","placeholder":"","maxLength":"","error":"errors.name?.message"},{"id":2,"name":"Номер телефона","type":"tel","placeholder":"+(998) ** *** ****","maxLength":13,"error":"errors.tel?.message"}]}')},6458:function(e){e.exports=JSON.parse('{"ru":{"navigation":[{"id":1,"title":"О клинике","path":"about"},{"id":2,"title":"Заболевания","path":"diseases"},{"id":3,"title":"Методы лечения","path":"treatments"},{"id":4,"title":"Наши специалисты","path":"doctors"},{"id":5,"title":"Цены","path":"/price-list"},{"id":6,"title":"Контакты","path":"footer"}],"statistics":[{"id":1,"number":"20000+","name":"обращений"},{"id":2,"number":"2000+","name":"лазерных операций"},{"id":3,"number":"15+","name":"Мастер классов"}],"branches":[{"id":1,"city":"г. Ташкент","phone":{"render":"+998 (71) 235-61-00","href":"+998954106100"}},{"id":2,"city":"г. Самарканд","phone":{"render":"+998 (95) 410-61-00","href":"+998954106100"}}],"diseases":[{"id":1,"name":"Варикозная болезнь вен нижних конечностей","description":"Варикозная болезнь вен нижних конечностей или варикозное расширение вен нижних конечностей — расширение поверхностных вен, сопровождающееся несостоятельностью клапанов и нарушением..."},{"id":2,"name":"Сосудистые звездочки","description":"Сосудистые звездочки, сосудистые сетки, сосудистые сеточки или телеангиоэктазии (телеангиэктазии), — это расширение кровеносных сосудов. Чаще всего они образуются на ногах, на лице..."},{"id":3,"name":"Посттромботическая болезнь","description":"Заболевание, при котором имеет место затруднение венозного оттока из пораженной конечности, возникающее после перенесенного тромбоза глубоких вен и проявляющееся симптомами хронической..."},{"id":4,"name":"Варикозное расширение вен малого таза","description":"Варикозная болезнь вен малого таза — это патология, которая встречается преимущественно у женщин детородного возраста. В литературе данное заболевание известно также как: варикоцеле..."},{"id":5,"name":"Венозная трофическая язва","description":"Венозная трофическая язва — длительно не заживающий дефект тканей, возникающий при тяжелом нарушении венозного оттока по глубоким и поверхностным венам. Они отмечаются у 1% всего населения и у 20% пациентов с заболеваниями..."},{"id":6,"name":"Анатомия вен нижних конечностей","description":"Анатомия венозной системы нижних конечностей отличается большой вариабельностью. Большую роль в оценке данных инструментального обследования в выборе правильного метода лечения играет знание индивидуальных..."},{"id":7,"name":"Анатомия вен нижних конечностей","description":"Анатомия венозной системы нижних конечностей отличается большой вариабельностью. Большую роль в оценке данных инструментального обследования в выборе правильного метода лечения играет знание индивидуальных..."}],"treatments":[{"id":1,"name":"Эндовенозная лазерная облитерация"},{"id":2,"name":"Радиочастотная эндовенозная облитерация"},{"id":3,"name":"Эхо склеротерапия"},{"id":4,"name":"Лимфопрессотерапия"},{"id":5,"name":"Микропенная склеротерапия"},{"id":6,"name":"Амбулаторная минифлебэктомия"},{"id":7,"name":"Амбулаторный, стриппинг"},{"id":8,"name":"Лечение лимфедемы (лимфостаза)"}],"advantages":[{"id":1,"name":"Амбулаторное лечение (1-2 часа)","icon":"/images/hospital-room.png"},{"id":2,"name":"Местная анестезия","icon":"/images/injection.png"},{"id":3,"name":"Отсутствие реабилитации","icon":"/images/reabilitation.png"},{"id":4,"name":"Отсутствие разрезов, швов и шрамов","icon":"/images/scalpel.png"},{"id":5,"name":"Операция под контролем УЗИ","icon":"/images/radioactive.png"},{"id":6,"name":"Безболезненность","icon":"/images/blood-cells.png"},{"id":7,"name":"Сохраняется трудоспособность","icon":"/images/disabled.png"},{"id":8,"name":"Риск рецидива минимальный","icon":"/images/pain.png"},{"id":9,"name":"Возможность лечения пожилых пациентов","icon":"/images/insurance.png"}],"doctors":[{"id":1,"title":"Сосудистый хирург, флеболог","name":"Темиров Суръат","paragraphs":["Опыт работы более 20 лет, проводит консультацию, диагностику и лечение заболеваний вен нижних конечностей и малого таза. Владеет навыками рентгенэндоваскулярной хирургии.","Всегда стремится оставаться в курсе самых современных достижений в области сосудистой хирургии и флебологии, имеет особый интерес к лечению варикозно-расширенных вен с помощью мало инвазивных методик — эндовенозной лазерной и радиочастотной коагуляции, минифлебэктомии и склеротерапии. Этим методам лечения он учился у ведущих флебологов, таких как проф. Uldis Maurins (Латвия), проф. Zoltan Varady (Германия), проф. Мазайшвили К.В. (Россия), проф. Богачев В.Ю. (Москва)."],"photo":"/images/doctor001.png"},{"id":2,"title":"Сосудистый хирург, флеболог","name":"Зокиров Шахзод","paragraphs":["Опыт работы более 20 лет, проводит консультацию, диагностику и лечение заболеваний вен нижних конечностей и малого таза. Владеет навыками рентгенэндоваскулярной хирургии.","Всегда стремится оставаться в курсе самых современных достижений в области сосудистой хирургии и флебологии, имеет особый интерес к лечению варикозно-расширенных вен с помощью мало инвазивных методик — эндовенозной лазерной и радиочастотной коагуляции, минифлебэктомии и склеротерапии. Этим методам лечения он учился у ведущих флебологов, таких как проф. Uldis Maurins (Латвия), проф. Zoltan Varady (Германия), проф. Мазайшвили К.В. (Россия), проф. Богачев В.Ю. (Москва)."],"photo":"/images/doctor002.png"},{"id":3,"title":"Сосудистый хирург, флеболог","name":"Анаркулов Отабек","paragraphs":["Опыт работы более 20 лет, проводит консультацию, диагностику и лечение заболеваний вен нижних конечностей и малого таза. Владеет навыками рентгенэндоваскулярной хирургии.","Всегда стремится оставаться в курсе самых современных достижений в области сосудистой хирургии и флебологии, имеет особый интерес к лечению варикозно-расширенных вен с помощью мало инвазивных методик — эндовенозной лазерной и радиочастотной коагуляции, минифлебэктомии и склеротерапии. Этим методам лечения он учился у ведущих флебологов, таких как проф. Uldis Maurins (Латвия), проф. Zoltan Varady (Германия), проф. Мазайшвили К.В. (Россия), проф. Богачев В.Ю. (Москва)."],"photo":"/images/doctor003.png"},{"id":4,"title":"Сосудистый хирург, флеболог","name":"Султанова Севара","paragraphs":["Опыт работы более 20 лет, проводит консультацию, диагностику и лечение заболеваний вен нижних конечностей и малого таза. Владеет навыками рентгенэндоваскулярной хирургии.","Всегда стремится оставаться в курсе самых современных достижений в области сосудистой хирургии и флебологии, имеет особый интерес к лечению варикозно-расширенных вен с помощью мало инвазивных методик — эндовенозной лазерной и радиочастотной коагуляции, минифлебэктомии и склеротерапии. Этим методам лечения он учился у ведущих флебологов, таких как проф. Uldis Maurins (Латвия), проф. Zoltan Varady (Германия), проф. Мазайшвили К.В. (Россия), проф. Богачев В.Ю. (Москва)."],"photo":"/images/doctor004.png"}],"events":[{"id":1,"name":"Хирургическое лечение венозной трофической язвы в Ташкенте Эндовенозная лазерная облитерация с Shave терапией и аутодермопластикой трофической язвы","images":["/images/masterclass001.jpg","/images/masterclass002.jpg","/images/masterclass003.jpg"],"member":"Богачёв Вадим Юрьевич"},{"id":2,"name":"Хирургическое лечение венозной трофической язвы в Ташкенте Эндовенозная лазерная облитерация с Shave терапией и аутодермопластикой трофической язвы","images":["/images/masterclass001.jpg","/images/masterclass002.jpg","/images/masterclass003.jpg"],"member":"Богачёв Вадим Юрьевич"},{"id":3,"name":"Хирургическое лечение венозной трофической язвы в Ташкенте Эндовенозная лазерная облитерация с Shave терапией и аутодермопластикой трофической язвы","images":["/images/masterclass001.jpg","/images/masterclass002.jpg","/images/masterclass003.jpg"],"member":"Богачёв Вадим Юрьевич"}],"contacts":[{"city":"Ташкент","location":"г. Ташкент, ул. Чингиза Айматова, 38","phone":{"render":"+998 (71) 235-61-00","href":"+998712356100"},"email":"phlebolife@gmail.com"},{"city":"Самарканд","location":"г. Самарканд, ул.Амира Темура, 162","phone":{"render":"+998 (95) 410-61-00","href":"++998954106100"},"email":"phlebolife@gmail.com"}]},"uz":{"navigation":[{"id":1,"title":"Клиника хақида","path":"about"},{"id":2,"title":"Касалликлар","path":"diseases"},{"id":3,"title":"Даволаш усуллари","path":"treatments"},{"id":4,"title":"Мутахассислар","path":"doctors"},{"id":5,"title":"Нархлар","path":"/price-list"},{"id":6,"title":"Боғланиш","path":"footer"}],"statistics":[{"id":1,"number":"20000+","name":"Мурожаатлар"},{"id":2,"number":"2000+","name":"Даволанган пациентлар"},{"id":3,"number":"15+","name":"Мастер-класслар"}],"branches":[{"id":1,"city":"Тошкент шахри","phone":{"render":"+998 (71) 235-61-00","href":"+998954106100"}},{"id":2,"city":"Самарқанд шахри","phone":{"render":"+998 (95) 410-61-00","href":"+998954106100"}}],"diseases":[{"id":1,"name":"Оёқлар варикоз касаллиги","description":"Оёқ варикоз касаллиги ёки оёқ веналари варикоз кенгайган томирлар - юзаки томирларнинг кенгайиши, клапан етишмовчилиги ва қон оқимининг бузилиши билан кечади. Бу энг кенг тарқалган."},{"id":2,"name":"Томирли юлдузча","description":"Қон томир юлдузчалари, майда қон томирлар, ўргимчак томирчалар ёки телеангиоэктазиялар - қон томирларининг кенгайиши ҳисобланади. Кўпинча улар оёқларда, юзда (купероз), айниқса бурун қанотларида ҳосил бўлади ва ҳатто ошқозонда ҳам топилади. Статистик маълумотларга кўра, қон томир муаммоси катталарнинг 90% дан кўпроғида учрайди."},{"id":3,"name":"Посттромбофлебетик касаллик","description":"Чуқур томир тромбозидан кейин юзага келадиган ва сурункали веноз этишмовчилик (CВИ) белгилари сифатида намоён бўладиган зарарланган оёқлардан веноз қоннинг қайтиши қийин бўлган касаллик. Пост-тромботик касаллик (ПТД) шунингдек, пост-тромбофлебитик синдроми (ПТФС) деб ҳам аталади."},{"id":4,"name":"Кичик чаноқ бўшлиғининг варикози","description":"Кичик чаноқ аъзоларининг варикоз асосан туғиш ёшидаги аёлларда учрайдиган патология ҳисобланади. Адабиётда бу касаллик, шунингдек, аёл варикоцелиси, кичик чаноқ аъзоларининг варикози, сурункали чаноқ оғриғи синдроми сифатида ҳам танилган. Бундай беморлар қориннинг пастки қисмидаги оғриқларга"},{"id":5,"name":"Оёқлар веноз трофик яра","description":"Веноз трофик яра - бу чуқур ва юзаки томирлар орқали веноз чиқишининг жиддий бузилиши билан юзага келадиган узоқ муддатли даволанмайдиган тери тўқимаси нуқсони. Улар умумий аҳолининг 1 фоизида ва веноз касаллиги бўлган беморларнинг 20 фоизида учрайди. Эртами-кечми даволанмаган варикоз томирлари билан оғриган ҳар бешинчи беморда трофик яра пайдо бўлади. Трофик яралар варикоз томирларининг ривожланган босқичларида ва чуқур томир тромбофлебити натижасида пайдо бўлади."},{"id":6,"name":"Оёқлар веналар анатомияси","description":"Оёқнинг веноз тизими анатомияси жуда ўзгарувчан. Инструментал текширув маълумотларини баҳолаш, инсон веноз тизимининг тузилишининг индивидуал хусусиятларини билиш, даволашнинг тўғри усулини танлашда мухим ўрин тутади"}],"treatments":[{"id":1,"name":"Эндовеноз лазер облитерация"},{"id":2,"name":"Радиочастотали эндовеноз облитерация"},{"id":3,"name":"Эхо склеротерапия"},{"id":4,"name":"Лимфопрессотерапия"},{"id":5,"name":"Микрокўпикли склеротерапия"},{"id":6,"name":"Амбулатор минифлебэктомия"},{"id":7,"name":"Амбулатор стриппинг"},{"id":8,"name":"Лимфедема (лимфостаз)-ни даволаш"}],"advantages":[{"id":1,"name":"Амбулаторли даво (1-2 соатгача)","icon":"/images/hospital-room.png"},{"id":2,"name":"Махалий оғриқсизлантириш","icon":"/images/injection.png"},{"id":3,"name":"Реабилитациянинг йўқлиги","icon":"/images/reabilitation.png"},{"id":4,"name":"Кесиш, чок ва шрамларсиз","icon":"/images/scalpel.png"},{"id":5,"name":"Жаррохлик УТТ назоратида","icon":"/images/radioactive.png"},{"id":6,"name":"Деярли оғриқсиз","icon":"/images/blood-cells.png"},{"id":7,"name":"Ишлаш қобилияти сақланиши","icon":"/images/disabled.png"},{"id":8,"name":"Кайталаш эхтимоли паст","icon":"/images/pain.png"},{"id":9,"name":"Қарияларни даволаш имкони","icon":"/images/insurance.png"}],"doctors":[{"id":1,"title":"Сосудистый хирург, флеболог","name":"Темиров Суръат","paragraphs":["Опыт работы более 20 лет, проводит консультацию, диагностику и лечение заболеваний вен нижних конечностей и малого таза. Владеет навыками рентгенэндоваскулярной хирургии.","Всегда стремится оставаться в курсе самых современных достижений в области сосудистой хирургии и флебологии, имеет особый интерес к лечению варикозно-расширенных вен с помощью мало инвазивных методик — эндовенозной лазерной и радиочастотной коагуляции, минифлебэктомии и склеротерапии. Этим методам лечения он учился у ведущих флебологов, таких как проф. Uldis Maurins (Латвия), проф. Zoltan Varady (Германия), проф. Мазайшвили К.В. (Россия), проф. Богачев В.Ю. (Москва)."],"photo":"/images/doctor001.png"},{"id":2,"title":"Сосудистый хирург, флеболог","name":"Зокиров Шахзод","paragraphs":["Опыт работы более 20 лет, проводит консультацию, диагностику и лечение заболеваний вен нижних конечностей и малого таза. Владеет навыками рентгенэндоваскулярной хирургии.","Всегда стремится оставаться в курсе самых современных достижений в области сосудистой хирургии и флебологии, имеет особый интерес к лечению варикозно-расширенных вен с помощью мало инвазивных методик — эндовенозной лазерной и радиочастотной коагуляции, минифлебэктомии и склеротерапии. Этим методам лечения он учился у ведущих флебологов, таких как проф. Uldis Maurins (Латвия), проф. Zoltan Varady (Германия), проф. Мазайшвили К.В. (Россия), проф. Богачев В.Ю. (Москва)."],"photo":"/images/doctor002.png"},{"id":3,"title":"Сосудистый хирург, флеболог","name":"Анаркулов Отабек","paragraphs":["Опыт работы более 20 лет, проводит консультацию, диагностику и лечение заболеваний вен нижних конечностей и малого таза. Владеет навыками рентгенэндоваскулярной хирургии.","Всегда стремится оставаться в курсе самых современных достижений в области сосудистой хирургии и флебологии, имеет особый интерес к лечению варикозно-расширенных вен с помощью мало инвазивных методик — эндовенозной лазерной и радиочастотной коагуляции, минифлебэктомии и склеротерапии. Этим методам лечения он учился у ведущих флебологов, таких как проф. Uldis Maurins (Латвия), проф. Zoltan Varady (Германия), проф. Мазайшвили К.В. (Россия), проф. Богачев В.Ю. (Москва)."],"photo":"/images/doctor003.png"},{"id":4,"title":"Сосудистый хирург, флеболог","name":"Султанова Севара","paragraphs":["Опыт работы более 20 лет, проводит консультацию, диагностику и лечение заболеваний вен нижних конечностей и малого таза. Владеет навыками рентгенэндоваскулярной хирургии.","Всегда стремится оставаться в курсе самых современных достижений в области сосудистой хирургии и флебологии, имеет особый интерес к лечению варикозно-расширенных вен с помощью мало инвазивных методик — эндовенозной лазерной и радиочастотной коагуляции, минифлебэктомии и склеротерапии. Этим методам лечения он учился у ведущих флебологов, таких как проф. Uldis Maurins (Латвия), проф. Zoltan Varady (Германия), проф. Мазайшвили К.В. (Россия), проф. Богачев В.Ю. (Москва)."],"photo":"/images/doctor004.png"}],"events":[{"id":1,"name":"Хирургическое лечение венозной трофической язвы в Ташкенте Эндовенозная лазерная облитерация с Shave терапией и аутодермопластикой трофической язвы","images":["/images/masterclass001.jpg","/images/masterclass002.jpg","/images/masterclass003.jpg"],"member":"Богачёв Вадим Юрьевич"},{"id":2,"name":"Хирургическое лечение венозной трофической язвы в Ташкенте Эндовенозная лазерная облитерация с Shave терапией и аутодермопластикой трофической язвы","images":["/images/masterclass001.jpg","/images/masterclass002.jpg","/images/masterclass003.jpg"],"member":"Богачёв Вадим Юрьевич"},{"id":3,"name":"Хирургическое лечение венозной трофической язвы в Ташкенте Эндовенозная лазерная облитерация с Shave терапией и аутодермопластикой трофической язвы","images":["/images/masterclass001.jpg","/images/masterclass002.jpg","/images/masterclass003.jpg"],"member":"Богачёв Вадим Юрьевич"}],"contacts":[{"city":"Тошкент","location":"Тошкент шахри,Чингиз Айматов кўчаси, 38","phone":{"render":"+998 (71) 235-61-00","href":"+998712356100"},"email":"phlebolife@gmail.com"},{"city":"Самарқанд","location":"Самарқанд шахри, Амир Темур кўчаси, 162","phone":{"render":"+998 (95) 410-61-00","href":"++998954106100"},"email":"phlebolife@gmail.com"}]}}')}}]);