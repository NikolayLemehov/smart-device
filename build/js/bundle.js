/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/footer.js":
/*!**********************!*\
  !*** ./js/footer.js ***!
  \**********************/
/*! exports provided: activeFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activeFooter\", function() { return activeFooter; });\n/* harmony import */ var _page_footer_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-footer-toggle */ \"./js/page-footer-toggle.js\");\n\nvar toggleSectionClasses = [\"page-footer__menu\", \"page-footer__our-contacts\"];\nvar toggleSections = toggleSectionClasses.map(function (it) {\n  return new _page_footer_toggle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](it);\n});\n\nvar onViewChange = function onViewChange() {\n  if (toggleSections.forEach(function (it) {\n    return it.isAllExisting;\n  })) {\n    return;\n  }\n\n  toggleSections.forEach(function (it) {\n    if (!it.isClosed) {\n      it.close();\n    }\n  });\n};\n\nvar activeFooterSection = function activeFooterSection(section) {\n  if (!section.isAllExisting) {\n    return;\n  }\n\n  section.removeNoJs();\n  section.toggle.addEventListener(\"click\", function () {\n    if (section.isClosed) {\n      onViewChange();\n      section.open();\n    } else {\n      section.close();\n    }\n  });\n};\n\nvar activeFooter = function activeFooter() {\n  toggleSections.forEach(function (it) {\n    return activeFooterSection(it);\n  });\n};\n\n\n\n//# sourceURL=webpack:///./js/footer.js?");

/***/ }),

/***/ "./js/main-questions-section.js":
/*!**************************************!*\
  !*** ./js/main-questions-section.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainQuestionsSection; });\n/* harmony import */ var _questions_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions-section */ \"./js/questions-section.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar MainQuestionsSection =\n/*#__PURE__*/\nfunction (_QuestionsSection) {\n  _inherits(MainQuestionsSection, _QuestionsSection);\n\n  function MainQuestionsSection() {\n    _classCallCheck(this, MainQuestionsSection);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(MainQuestionsSection).apply(this, arguments));\n  }\n\n  _createClass(MainQuestionsSection, [{\n    key: \"validateQuestions\",\n    value: function validateQuestions() {\n      var _this = this;\n\n      _get(_getPrototypeOf(MainQuestionsSection.prototype), \"validateQuestions\", this).call(this);\n\n      this.submitBtn.addEventListener(\"click\", function (evt) {\n        _this._validatePhone();\n\n        if (_this.form.checkValidity()) {\n          evt.preventDefault();\n        }\n      });\n    }\n  }]);\n\n  return MainQuestionsSection;\n}(_questions_section__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./js/main-questions-section.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ \"./js/footer.js\");\n/* harmony import */ var _smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smooth-scroll */ \"./js/smooth-scroll.js\");\n/* harmony import */ var _main_questions_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-questions-section */ \"./js/main-questions-section.js\");\n/* harmony import */ var _popup_questions_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup-questions-section */ \"./js/popup-questions-section.js\");\n\n\n\n\nvar showBtn = document.querySelector(\".main-nav__recall a\");\nObject(_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__[\"activeSmoothScroll\"])();\nObject(_footer__WEBPACK_IMPORTED_MODULE_0__[\"activeFooter\"])();\nvar mainQuestionsSection = new _main_questions_section__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document.querySelector(\"main .questions\"));\nmainQuestionsSection.validateQuestions();\nvar popupQuestionsSection = new _popup_questions_section__WEBPACK_IMPORTED_MODULE_3__[\"default\"](document.querySelector(\"body > .questions\"), showBtn);\npopupQuestionsSection.validateQuestions();\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/page-footer-toggle.js":
/*!**********************************!*\
  !*** ./js/page-footer-toggle.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PageFooterToggle; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar PageFooterToggle =\n/*#__PURE__*/\nfunction () {\n  function PageFooterToggle(className) {\n    _classCallCheck(this, PageFooterToggle);\n\n    this.className = className;\n    this.element = document.querySelector(\".\" + className);\n    this.toggle = this.element.querySelector(\".page-footer__toggle\");\n    this.plus = this.toggle.querySelector(\".page-footer__plus\");\n    this.minus = this.toggle.querySelector(\".page-footer__minus\");\n    this.isClosed = this.element.classList.contains(this.className + \"--closed\");\n    this.isAllExisting = this.element && this.toggle && this.plus && this.minus;\n  }\n\n  _createClass(PageFooterToggle, [{\n    key: \"close\",\n    value: function close() {\n      this.element.classList.add(this.className + \"--closed\");\n      this.plus.style.display = \"block\";\n      this.minus.style.display = \"none\";\n      this.isClosed = true;\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      this.element.classList.remove(this.className + \"--closed\");\n      this.plus.style.display = \"none\";\n      this.minus.style.display = \"block\";\n      this.isClosed = false;\n    }\n  }, {\n    key: \"removeNoJs\",\n    value: function removeNoJs() {\n      this.element.classList.remove(this.className + \"--nojs\");\n    }\n  }]);\n\n  return PageFooterToggle;\n}();\n\n\n\n//# sourceURL=webpack:///./js/page-footer-toggle.js?");

/***/ }),

/***/ "./js/popup-questions-section.js":
/*!***************************************!*\
  !*** ./js/popup-questions-section.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PopupQuestionsSection; });\n/* harmony import */ var _questions_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions-section */ \"./js/questions-section.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./js/utils.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar PopupQuestionsSection =\n/*#__PURE__*/\nfunction (_QuestionsSection) {\n  _inherits(PopupQuestionsSection, _QuestionsSection);\n\n  function PopupQuestionsSection(section, showBtn) {\n    var _this;\n\n    _classCallCheck(this, PopupQuestionsSection);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(PopupQuestionsSection).call(this, section));\n    _this.showBtn = showBtn;\n    _this.closeBtn = section.querySelector(\".questions__close\");\n    _this.isAllExisting = _this.isAllExisting && _this.showBtn && _this.closeBtn;\n    _this._onDocumentPopupEscKeyDown = _this._onDocumentPopupEscKeyDown.bind(_assertThisInitialized(_this));\n    _this._onClickOutsideForm = _this._onClickOutsideForm.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(PopupQuestionsSection, [{\n    key: \"validateQuestions\",\n    value: function validateQuestions() {\n      var _this2 = this;\n\n      _get(_getPrototypeOf(PopupQuestionsSection.prototype), \"validateQuestions\", this).call(this);\n\n      var storage = {\n        name: \"\",\n        phone: \"\",\n        question: \"\",\n        isSupport: true\n      };\n\n      try {\n        storage.name = localStorage.getItem(\"nameField\");\n        storage.phone = localStorage.getItem(\"phoneField\");\n        storage.question = localStorage.getItem(\"questionField\");\n      } catch (err) {\n        storage.isSupport = false;\n      }\n\n      this.closeBtn.addEventListener(\"click\", function (evt) {\n        evt.preventDefault();\n\n        _this2._closePopup();\n      });\n      this.showBtn.addEventListener(\"click\", function (evt) {\n        evt.preventDefault();\n\n        _this2._showPopup(storage);\n      });\n      this.submitBtn.addEventListener(\"click\", function (evt) {\n        _this2._validatePhone();\n\n        if (_this2.form.checkValidity()) {\n          evt.preventDefault();\n\n          if (storage.isSupport) {\n            localStorage.setItem(\"nameField\", _this2.name.value);\n            localStorage.setItem(\"phoneField\", _this2.phone.value);\n            localStorage.setItem(\"questionField\", _this2.question.value);\n          }\n        }\n      });\n    }\n  }, {\n    key: \"_showPopup\",\n    value: function _showPopup(storage) {\n      document.documentElement.style.overflow = \"hidden\";\n      document.documentElement.style.paddingRight = \"\".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getScrollbarWidth\"])(), \"px\");\n      this.section.style.display = \"flex\";\n\n      if (storage.name) {\n        this.name.value = storage.name;\n      }\n\n      if (storage.phone) {\n        this.phone.value = storage.phone;\n      }\n\n      if (storage.question) {\n        this.question.value = storage.question;\n      }\n\n      this.name.focus();\n      document.addEventListener(\"keydown\", this._onDocumentPopupEscKeyDown);\n      window.addEventListener(\"click\", this._onClickOutsideForm);\n    }\n  }, {\n    key: \"_closePopup\",\n    value: function _closePopup() {\n      document.documentElement.style.overflow = \"\";\n      document.documentElement.style.paddingRight = \"\";\n      this.section.style.display = \"none\";\n      document.removeEventListener(\"keydown\", this._onDocumentPopupEscKeyDown);\n      window.removeEventListener(\"click\", this._onClickOutsideForm);\n    }\n  }, {\n    key: \"_onDocumentPopupEscKeyDown\",\n    value: function _onDocumentPopupEscKeyDown(evt) {\n      if (evt.keyCode === _utils__WEBPACK_IMPORTED_MODULE_1__[\"KeyCode\"].ESC) {\n        this._closePopup();\n      }\n    }\n  }, {\n    key: \"_onClickOutsideForm\",\n    value: function _onClickOutsideForm(evt) {\n      if (evt.target.classList.contains(\"questions--popup\")) {\n        this._closePopup();\n      }\n    }\n  }]);\n\n  return PopupQuestionsSection;\n}(_questions_section__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./js/popup-questions-section.js?");

/***/ }),

/***/ "./js/questions-section.js":
/*!*********************************!*\
  !*** ./js/questions-section.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QuestionsSection; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./js/utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar QuestionsSection =\n/*#__PURE__*/\nfunction () {\n  function QuestionsSection(section) {\n    _classCallCheck(this, QuestionsSection);\n\n    this.section = section;\n    this.form = section.querySelector(\"form\");\n    this.questionsPhone = this.form.querySelector(\".questions__phone\");\n    this.submitBtn = this.form.querySelector(\"button[type=\\\"submit\\\"]\");\n    this.name = this.form.querySelector(\"[name=\\\"name\\\"]\");\n    this.phone = this.form.querySelector(\"[name=\\\"phone\\\"]\");\n    this.question = this.form.querySelector(\"[name=\\\"question\\\"]\");\n    this.isAllExisting = !!this.form && !!this.questionsPhone && !!this.submitBtn && !!this.name && !!this.phone && !!this.question;\n  }\n\n  _createClass(QuestionsSection, [{\n    key: \"_validatePhone\",\n    value: function _validatePhone() {\n      var questionsPhone = this.questionsPhone;\n      var phoneInput = this.phone;\n      var string = phoneInput.value;\n      var result = string.match(/\\+7\\(\\d{3}\\)\\d{7}/);\n      var foundMatch = result ? result[0] : null;\n\n      if (foundMatch === string) {\n        if (questionsPhone.classList.contains(\"questions__phone--no-match\")) {\n          questionsPhone.classList.remove(\"questions__phone--no-match\");\n        }\n\n        phoneInput.setCustomValidity(\"\");\n      } else {\n        questionsPhone.classList.add(\"questions__phone--no-match\");\n        phoneInput.setCustomValidity(\"\\u041D\\u043E\\u043C\\u0435\\u0440 \\u0442\\u0435\\u043B\\u0435\\u0444\\u043E\\u043D\\u0430 \\u0434\\u043E\\u043B\\u0436\\u0435\\u043D \\u0441\\u043E\\u043E\\u0442\\u0432\\u0435\\u0442\\u0441\\u0442\\u0432\\u043E\\u0432\\u0430\\u0442\\u044C \\u0441\\u043B\\u0435\\u0434\\u0443\\u044E\\u0449\\u0438\\u0439 \\u043C\\u0430\\u0441\\u043A\\u0435 +7(000)0000000\");\n      }\n    }\n  }, {\n    key: \"_subscribePhoneEvents\",\n    value: function _subscribePhoneEvents() {\n      var _this = this;\n\n      var questionsPhone = this.questionsPhone;\n      var phoneInput = this.phone;\n\n      var findStringMatch = function findStringMatch(matchResult) {\n        return matchResult ? matchResult[0] : null;\n      };\n\n      phoneInput.addEventListener(\"focus\", function () {\n        if (phoneInput.value === \"\") {\n          phoneInput.value = \"+7(\";\n        }\n      });\n      phoneInput.addEventListener(\"change\", function () {\n        _this._validatePhone();\n      });\n      phoneInput.addEventListener(\"keyup\", function (evt) {\n        var string = phoneInput.value;\n\n        if (evt.keyCode === _utils__WEBPACK_IMPORTED_MODULE_0__[\"KeyCode\"].BACKSPACE && string.match(/\\+7\\(\\d{3}/) && !string.match(/\\+7\\(\\d{3}\\)\\d*/)) {\n          phoneInput.value = string.slice(0, -1);\n          return;\n        }\n\n        if (findStringMatch(string.match(/\\+7\\(\\d{3}/)) === string) {\n          phoneInput.value = string + \")\";\n        }\n\n        if (findStringMatch(string.match(/(\\+7\\((\\d){3}\\)?(\\d){0,7})|\\+7\\((\\d){0,3}/)) === string) {\n          if (questionsPhone.classList.contains(\"questions__phone--no-match\")) {\n            questionsPhone.classList.remove(\"questions__phone--no-match\");\n          }\n        } else {\n          questionsPhone.classList.add(\"questions__phone--no-match\");\n          phoneInput.setCustomValidity(\"\\u041D\\u043E\\u043C\\u0435\\u0440 \\u0442\\u0435\\u043B\\u0435\\u0444\\u043E\\u043D\\u0430 \\u0434\\u043E\\u043B\\u0436\\u0435\\u043D \\u0441\\u043E\\u043E\\u0442\\u0432\\u0435\\u0442\\u0441\\u0442\\u0432\\u043E\\u0432\\u0430\\u0442\\u044C \\u0441\\u043B\\u0435\\u0434\\u0443\\u044E\\u0449\\u0438\\u0439 \\u043C\\u0430\\u0441\\u043A\\u0435 +7(000)0000000\");\n        }\n      });\n    }\n  }, {\n    key: \"validateQuestions\",\n    value: function validateQuestions() {\n      if (!this.isAllExisting) {\n        return;\n      }\n\n      this._subscribePhoneEvents();\n    }\n  }]);\n\n  return QuestionsSection;\n}();\n\n\n\n//# sourceURL=webpack:///./js/questions-section.js?");

/***/ }),

/***/ "./js/smooth-scroll.js":
/*!*****************************!*\
  !*** ./js/smooth-scroll.js ***!
  \*****************************/
/*! exports provided: activeSmoothScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activeSmoothScroll\", function() { return activeSmoothScroll; });\nvar activeSmoothScroll = function activeSmoothScroll() {\n  var anchors = document.querySelectorAll(\"a.scroll-to\");\n\n  if (typeof NodeList.prototype.forEach !== \"function\") {\n    NodeList.prototype.forEach = Array.prototype.forEach;\n  }\n\n  anchors.forEach(function (anchor) {\n    anchor.addEventListener(\"click\", function (evt) {\n      evt.preventDefault();\n      var blockID = anchor.getAttribute(\"href\");\n      var target = document.querySelector(blockID);\n      doScrolling(target.getBoundingClientRect().top, 800);\n    });\n  });\n};\n\nvar doScrolling = function doScrolling(elementY, duration) {\n  var startingY = window.pageYOffset;\n  var diff = elementY - startingY;\n  var start; // Bootstrap our animation - it will get called right before next frame shall be rendered.\n\n  window.requestAnimationFrame(function step(timestamp) {\n    if (!start) {\n      start = timestamp;\n    } // Elapsed milliseconds since start of scrolling.\n\n\n    var time = timestamp - start; // Get percent of completion in range [0, 1].\n\n    var percent = Math.min(time / duration, 1);\n    window.scrollTo(0, startingY + diff * percent); // Proceed with animation as long as we wanted it to.\n\n    if (time < duration) {\n      window.requestAnimationFrame(step);\n    }\n  });\n};\n\n\n\n//# sourceURL=webpack:///./js/smooth-scroll.js?");

/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/*! exports provided: KeyCode, getScrollbarWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KeyCode\", function() { return KeyCode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getScrollbarWidth\", function() { return getScrollbarWidth; });\nvar KeyCode = {\n  BACKSPACE: 8,\n  ESC: 27\n};\n\nvar getScrollbarWidth = function getScrollbarWidth() {\n  var outer = document.createElement(\"div\");\n  outer.style.visibility = \"hidden\";\n  outer.style.overflow = \"scroll\";\n  outer.style.msOverflowStyle = \"scrollbar\";\n  document.body.appendChild(outer);\n  var inner = document.createElement(\"div\");\n  outer.appendChild(inner);\n  var scrollbarWidth = outer.offsetWidth - inner.offsetWidth;\n  outer.parentNode.removeChild(outer);\n  return scrollbarWidth;\n};\n\n\n\n//# sourceURL=webpack:///./js/utils.js?");

/***/ })

/******/ });