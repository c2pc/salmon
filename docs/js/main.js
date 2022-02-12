/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_main_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/main-button.js */ \"./src/js/module/main-button.js\");\n/* harmony import */ var _module_main_button_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_module_main_button_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _module_questions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/questions.js */ \"./src/js/module/questions.js\");\n/* harmony import */ var _module_test_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/test.js */ \"./src/js/module/test.js\");\n/* harmony import */ var _module_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/end.js */ \"./src/js/module/end.js\");\n/* harmony import */ var _module_end_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_module_end_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _module_share_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/share.js */ \"./src/js/module/share.js\");\n/* harmony import */ var _module_share_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_module_share_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/end.js":
/*!******************************!*\
  !*** ./src/js/module/end.js ***!
  \******************************/
/***/ (function() {

eval("const buttonEnd = document.querySelector(\".end .button__end\")\nconst present = document.querySelector(\".end .present\")\nconst closeButton = document.querySelector(\".end .present .close__button\")\nconst copy = document.querySelector(\".end .present .copy\")\nconst code = document.querySelector(\".end .present .name\")\n\nbuttonEnd.addEventListener('click', () => {\n  document.querySelector(\"body\").style.overflow = \"hidden\"\n  present.classList.remove('hidden')\n})\ncloseButton.addEventListener('click', () => {\n\n  document.querySelector(\"body\").style.overflow = \"auto\"\n  present.classList.add('hidden')\n})\n\ncopy.addEventListener('click', () => navigator.clipboard.writeText(code.textContent))\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/end.js?");

/***/ }),

/***/ "./src/js/module/main-button.js":
/*!**************************************!*\
  !*** ./src/js/module/main-button.js ***!
  \**************************************/
/***/ (function() {

eval("const mainButton = document.querySelector(\".button__container.button__container__mob\")\n\nconst mainButtonScrolling = () => {\n  if (window.screen.width > 1300){\n    return;\n  }\n\n  const button = mainButton.querySelector(\".button\")\n  const rec = mainButton.getBoundingClientRect()\n\n  if (rec.bottom > (window.screen.height - 20)){\n    button.classList.add(\"button__main__fixed\")\n  }else{\n    button.classList.remove(\"button__main__fixed\")\n  }\n}\n\nmainButtonScrolling()\nwindow.addEventListener(\"scroll\", mainButtonScrolling)\n\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/main-button.js?");

/***/ }),

/***/ "./src/js/module/present.js":
/*!**********************************!*\
  !*** ./src/js/module/present.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"presents\": function() { return /* binding */ presents; }\n/* harmony export */ });\nconst presents = {\n  20: {\n    text: \"Кажется, вы часто думаете сначала о потребностях других людей, а потом уже — о своих. Лосось Леонид вас понимает — он тоже не сразу научился ставить себя на первое место. И он уверен, что у вас получится обозначить границы и искренне полюбить себя.\"\n  },\n  40: {\n    text: \"Не сомневаемся, что вы заслуживаете большего. Лосось Леонид уже направил волну чистой любви к себе в вашу сторону. Ещё он передаёт, что пара его друзей-осьминогов искренне вами восхищаются.\"\n  },\n  60: {\n    text: \"Неплохой результат, но лосось Леонид знает, что вы можете относиться к себе бережнее. Мы уверены, что со временем у вас получится полюбить себя чистой рыбьей любовью на все 100%.\"\n  },\n  80: {\n    text: \"Вы — рыба мечты лосося Леонида. У вас получается выбирать себя почти во всех ситуациях. Но даже если вам сложно кому-то сказать нет, помните: Леонид всегда на вашей стороне.\"\n  },\n  100: {\n    text: \"Лосось Леонид вами гордится, рассказывает о вас своим подругам-медузам и уже заказал ваш портрет в своё подводное царство. Ему даже есть чему у вас поучиться!\"\n  },\n}\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/present.js?");

/***/ }),

/***/ "./src/js/module/questions.js":
/*!************************************!*\
  !*** ./src/js/module/questions.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"questions\": function() { return /* binding */ questions; }\n/* harmony export */ });\nconst questions = [\n  {\n    text: \"Когда вы в последний раз хорошенько отдохнули и восстановились? Какое событие вспомнили?\",\n    answers: [\n      {\n        text: \"Это точно были последние выходные. А ещё мне удалось выспаться сегодня ночью\",\n        points: 3\n      },\n      {\n        text: \"Вспомнился отпуск в прошлом году. Смотрите, вот я держу солнышко на ладошке!\",\n        points: 2\n      },\n      {\n        text: \"В голове заиграло «звук-сверчка-неловкая-ситуация». Кажется, последний отдых у меня был в прошлой жизни\",\n        points: 1\n      },\n    ]\n  },\n  {\n    text: \"В конце рабочего дня начальник просит вас подготовить забавные тексты для валентинок компаниям-партнёрам. Дедлайн — следующее утро. Как поступите?\",\n    answers: [\n      {\n        text: \"Займусь прямо сейчас. Дорогие коллеги, за нашу дружбу в интернете!\",\n        points: 1\n      },\n      {\n        text: \"Откажусь — это не моя зона ответственности. Вообще-то я работаю аналитиком, а шутить предпочитаю в Твиттере.\",\n        points: 3\n      },\n      {\n        text: \"Сначала спрошу, можно ли подвинуть дедлайн. Работать ночью я соглашусь только в самом крайнем случае\",\n        points: 2\n      },\n    ]\n  },\n  {\n    text: \"В субботу вы планировали обложиться роллами и посмотреть новые эпизоды любимого сериала. В пятницу пишет друг и предлагает уехать на выходные за город — фотографировать бобров. Как поступите?\",\n    answers: [\n      {\n        text: \"За городом я не смогу отдохнуть и расслабиться. Да и бобров не очень люблю, так что откажусь\",\n        points: 3\n      },\n      {\n        text: \"Подстроюсь под друга — сериалы никуда не денутся. Бобрам тоже надо дать шанс, может, сейчас они мне понравятся!\",\n        points: 1\n      },\n      {\n        text: \"Завлеку друга к себе домой роллами, предложу посмотреть сериал вместе. Если откажется — едем к бобрам, но я возьму ноутбук с сериалом.\",\n        points: 2\n      },\n    ]\n  },\n  {\n    text: \"Вы научились мыть кота в ванной и решили поделиться своим опытом в Инстаграме. Кто-то пишет, что вы всё сделали неправильно. Говорит, хвост у кота не отвалился только чудом. Как отреагируете?\",\n    answers: [\n      {\n        text: \"Посмеюсь и проигнорирую — я делаю всё по рекомендациям ветеринаров\",\n        points: 3\n      },\n      {\n        text: \"Раз в интернете всегда кто-то неправ, этим человеком не могу быть я. Пойду доказывать свою точку зрения\",\n        points: 2\n      },\n      {\n        text: \"Расстроюсь и начну сомневаться в себе. Ещё проверю хвост у кота — вдруг и правда отвалился?\",\n        points: 1\n      },\n    ]\n  },\n  {\n    text: \"Вы пришли в кино на модный боевик, которым в один голос восхищаются и кинокритики, и ваши друзья — редкое совпадение. Но вам совсем не нравится. К тому же вы очень хотите пить. Как поступите?\",\n    answers: [\n      {\n        text: \"Неловко беспокоить людей, которые сидят в моём ряду. Воспользуюсь советом «Представь, что уже попил/попила» и сосредоточусь на фильме.\",\n        points: 1\n      },\n      {\n        text: \"Сразу же пойду за водой, но пить буду нервно — что, если пропущу важную сцену, из-за которой все фильмом и восхищаются?\",\n        points: 2\n      },\n      {\n        text: \"Раз мне скучно и хочется чего-то другого, уйду с фильма. И воды попью, и домой пораньше вернусь — одни плюсы!\",\n        points: 3\n      },\n    ]\n  },\n  {\n    text: \"Вы записались в поликлинику на прививку, но в день вакцинации перепутали время. На вас ворчит женщина из регистратуры и осуждающе смотрит вся очередь. Что почувствуете?\",\n    answers: [\n      {\n        text: \"Ну, бывает. Спокойно посижу в очереди, может, ещё получится договориться с доктором и привиться сегодня\",\n        points: 3\n      },\n      {\n        text: \"Захочу провалиться сквозь землю, но испугаюсь, что меня даже под землёй продолжат осуждать — туда ведь я тоже без записи.\",\n        points: 1\n      },\n      {\n        text: \"Перед всеми извинюсь и постараюсь перенести запись на другой день. Очередь подождёт, это дело пяти минут.\",\n        points: 2\n      },\n    ]\n  },\n  {\n    text: \"После сложного дня вам хочется расслабиться и посмотреть лекцию про историю русского рэпа. Ваш партнёр вызвался приготовить ужин, но каждые пять минут отвлекает вопросами, как делать ризотто. Как будете реагировать?\",\n    answers: [\n      {\n        text: \"Мягко объясню партнёру, что не хочу сейчас принимать никаких решений — даже если нужно выбрать специи к рису\",\n        points: 3\n      },\n      {\n        text: \"Пойду готовить ужин вместе с ним, а потом вернусь к разбору текстов Моргенштерна\",\n        points: 2\n      },\n      {\n        text: \"Буду ставить на паузу каждый раз, когда нужно ответить. «Да, рис в зелёной банке! Нет, карри не подойдёт! Да, я тоже тебя люблю!!!»\",\n        points: 1\n      },\n    ]\n  },\n  {\n    text: \"Вы возвращаетесь из отпуска, ваш рейс задержали на два часа. С учётом разницы во времени вы попадёте домой поздно и не сможете выспаться перед первым рабочим днём. В вас закипает злость, что сделаете с этим чувством?\",\n    answers: [\n      {\n        text: \"Я имею право злиться. Запишу парочку гневных голосовых про ситуацию близкому другу и почувствую себя лучше\",\n        points: 3\n      },\n      {\n        text: \"Попытаюсь замять это чувство и сфокусироваться на том, какой красивый закат был в последний день отдыха.\",\n        points: 1\n      },\n      {\n        text: \"Всякое бывает, но всё равно бесит. До посадки меня будет раздражать любая мелочь.\",\n        points: 2\n      },\n    ]\n  },\n];\n\n\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/questions.js?");

/***/ }),

/***/ "./src/js/module/share.js":
/*!********************************!*\
  !*** ./src/js/module/share.js ***!
  \********************************/
/***/ (function() {

eval("let win = function(set) {\n  if (!set.url) return;\n  set = Object.assign({}, {\n    w: 650,\n    h: 570,\n    name: \"\"\n  }, set);\n  let dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left,\n    dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top,\n    width = window.innerWidth ? window.innerWidth : d.documentElement.clientWidth ? d.documentElement.clientWidth : screen.width,\n    height = window.innerHeight ? window.innerHeight : d.documentElement.clientHeight ? d.documentElement.clientHeight : screen.height,\n    left = ((width / 2) - (set.w / 2)) + dualScreenLeft,\n    top = ((height / 2) - (set.h / 2)) + dualScreenTop;\n  let open = window.open(set.url, set.name, 'scrollbars=yes, width=' + set.w + ', height=' + set.h + ', top=' + top + ', left=' + left);\n  if (window.focus) open.focus();\n};\n\n/**\n * Функция открытия сервиса share\n * @param {Event} e - событие, получаемое при \"click\"\n */\nlet shareIt = function(e) {\n  let u = window.location.href; // url\n  let t = document.title; // title\n  let d = document.head.querySelector(\"meta[name=description]\") || \"\"; // meta description\n  switch (e.target.getAttribute(\"data-type\")) {\n    case \"vk\":\n      win({\n        url: \"//vk.com/share.php?url=\" + u + \"&title=\" + t + \"&description=\" + d,\n        name: \"vk\"\n      });\n      break;\n    case \"fb\":\n      win({\n        url: \"//facebook.com/sharer.php?m2w&\" + 'u=' + u,\n        name: \"fb\"\n      });\n      break;\n    default:\n      return false;\n  }\n};\n\n// обработчик клика для блока share\nshareBox.addEventListener(\"click\", function(e) {\n  if (e.target !== e.currentTarget) shareIt(e);\n  e.preventDefault();\n});\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/share.js?");

/***/ }),

/***/ "./src/js/module/test.js":
/*!*******************************!*\
  !*** ./src/js/module/test.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _questions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions */ \"./src/js/module/questions.js\");\n/* harmony import */ var _present__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./present */ \"./src/js/module/present.js\");\n\n\n\nconst getStages = (...stages) => {\n  return ['main', 'tests', 'end'].filter(item => !stages.includes(item))\n}\nconst main = document.querySelector(\".main-container\")\nconst end = document.querySelector(\".end-block\")\nconst tests = document.querySelector(\".test-container\")\nconst body = document.querySelector(\"body\")\nconst number = tests.querySelector(\".test__number\")\nconst question = tests.querySelector(\".test__question\")\nconst answers = tests.querySelector(\".test__answers\")\n\nconst Test = {\n  questions: [],\n  stage: '',\n  points: 0,\n  test: 0,\n  setStageMain: function () {\n    this.setBody('main')\n    this.stage = 'main'\n    this.setHidden(tests)\n    this.setVisible(main)\n  },\n  setStageEnd: function () {\n    this.calcPoints()\n    this.setBody('ends')\n    this.stage = 'end'\n    this.setHidden(main)\n    this.setHidden(tests)\n    this.setVisible(end)\n  },\n  setStageTest: function () {\n    this.setBody('tests')\n    this.stage = 'test'\n    this.setQuestions()\n    this.setTest(0)\n    this.setPoints(0)\n    this.setHidden(main)\n    this.setVisible(tests)\n  },\n  calcPoints: function () {\n    this.points = this.questions.reduce((sum, question) => sum + question.answers[question.answer].points, 0)\n    switch (this.points) {\n      case 11:\n      case 12:\n      case 13:\n        this.setPresent(40, 20)\n        break;\n      case 14:\n      case 15:\n      case 16:\n      case 17:\n        this.setPresent(60, 60)\n        break;\n      case 18:\n      case 19:\n      case 20:\n      case 21:\n        this.setPresent(80, 60)\n        break;\n      case 22:\n      case 23:\n      case 24:\n        this.setPresent(100, 100)\n        break;\n      case 8:\n      case 9:\n      case 10:\n      default:\n        this.setPresent(20, 20)\n        break;\n    }\n  },\n  setPresent: function (percent, salmon) {\n    end.querySelector(\".heart img\").src = `img/heart${percent}.svg`\n    end.querySelector(\".heart source\").srcset = `img/heart${percent}.svg`\n\n    end.querySelector(\".salmon picture:first-child\").src = `img/salmon${salmon}.png`\n    end.querySelector(\".salmon  picture:first-child source\").srcset = `img/salmon${salmon}.png`\n\n    end.querySelector(\".salmon picture:last-child\").src = `img/salmon${salmon}-mob.png`\n    end.querySelector(\".salmon  picture:last-child source\").srcset = `img/salmon${salmon}-mob.png`\n\n    const present = _present__WEBPACK_IMPORTED_MODULE_1__.presents[percent]\n    end.querySelector(\".present-container .header\").innerHTML = `Вы лосось, влюблённый в себя на ${percent}%`\n    end.querySelector(\".present-container .description\").innerHTML = present.text\n  },\n  setBody: function (classname) {\n    body.classList.add(classname)\n    body.classList.remove(...getStages(classname))\n  },\n  setQuestions: function () {\n    this.questions = _questions__WEBPACK_IMPORTED_MODULE_0__.questions\n  },\n  setPoints: function (point) {\n    this.points = point\n  },\n  setTest: function (test) {\n    this.test = test\n\n    number.innerHTML = `Вопрос ${test + 1} из ${this.questions.length}`\n    question.innerHTML = this.questions[test].text\n\n    let answersHtml = ''\n    this.questions[test].answers.forEach((answer, index) => {\n      answersHtml += `\n        <div class=\"answer\" id=\"answer${index}\">\n          <div class=\"check\"></div>\n          <div class=\"text\">${answer.text}</div>\n        </div>\n      `\n    })\n\n    answers.innerHTML = answersHtml\n\n    answers.querySelectorAll(\".answer\")\n      .forEach((answer, index) =>\n        answer.addEventListener(\"click\", () => this.selectAnswer(index)))\n  },\n  setVisible: function (el) {\n    el.classList.remove(\"hidden\")\n  },\n  setHidden: function (el) {\n    el.classList.add(\"hidden\")\n  },\n  checkQuestion: function () {\n    if (this.questions[this.test].answer !== undefined) {\n      if (this.test !== this.questions.length - 1) {\n        this.setTest(++this.test)\n      } else {\n        this.setStageEnd()\n      }\n    }\n  },\n  selectAnswer: function (index) {\n    this.questions[this.test].answer = index;\n    answers.querySelectorAll(\".answer.selected\")\n      .forEach(answer => answer.classList.remove('selected'))\n    answers.querySelector(\"#answer\" + index).classList.add('selected')\n  },\n}\n\nconst test = Object.create(Test);\ntest.setStageMain()\n\nconst mainButtons = main.querySelectorAll(\".button__main\")\nmainButtons.forEach(item => item.addEventListener('click', () => test.setStageTest()));\n\nconst buttonTest = tests.querySelector(\".button__container\")\nbuttonTest.addEventListener('click', () => test.checkQuestion())\ndocument.addEventListener('keypress', (e) => {\n  if (e.keyCode === 13) {\n    if (test.stage === 'test') {\n      test.checkQuestion()\n    } else if (test.stage === 'main') {\n      test.setStageTest()\n    }\n  }\n})\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/test.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;