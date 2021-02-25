/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./add-event/add-event.scss":
/*!**********************************!*\
  !*** ./add-event/add-event.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./add-event/add-event.scss?");

/***/ }),

/***/ "./authorization/authorization.scss":
/*!******************************************!*\
  !*** ./authorization/authorization.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./authorization/authorization.scss?");

/***/ }),

/***/ "./calendar/calendar.scss":
/*!********************************!*\
  !*** ./calendar/calendar.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./calendar/calendar.scss?");

/***/ }),

/***/ "./event/event.scss":
/*!**************************!*\
  !*** ./event/event.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./event/event.scss?");

/***/ }),

/***/ "./modal/modal.scss":
/*!**************************!*\
  !*** ./modal/modal.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./modal/modal.scss?");

/***/ }),

/***/ "./notification/notification.scss":
/*!****************************************!*\
  !*** ./notification/notification.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./notification/notification.scss?");

/***/ }),

/***/ "./add-event/add-event.js":
/*!********************************!*\
  !*** ./add-event/add-event.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddEvent\": () => /* binding */ AddEvent\n/* harmony export */ });\n/* harmony import */ var _calendar_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calendar/calendar */ \"./calendar/calendar.js\");\n/* harmony import */ var _core_constants_days__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/constants/days */ \"./core/constants/days.js\");\n/* harmony import */ var _core_constants_times__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/constants/times */ \"./core/constants/times.js\");\n/* harmony import */ var _notification_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notification/notification */ \"./notification/notification.js\");\n/* harmony import */ var _core_service_members_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/service/members.service */ \"./core/service/members.service.js\");\n/* harmony import */ var _add_event_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-event.scss */ \"./add-event/add-event.scss\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass AddEvent {\r\n  constructor(parent, name) {\r\n    this.el = null;\r\n    this.parent = parent;\r\n    this.eventListeners = [];\r\n    this.members = _core_service_members_service__WEBPACK_IMPORTED_MODULE_4__.Members;\r\n    this.days = _core_constants_days__WEBPACK_IMPORTED_MODULE_1__.DAYS;\r\n    this.times = _core_constants_times__WEBPACK_IMPORTED_MODULE_2__.TIMES;\r\n    this.name = name;\r\n  }\r\n\r\n  get template() {\r\n    const membersElements = this.members.map((member) => (\r\n      `\r\n        <option class=\"member\" value=\"${member.name}\">${member.name}</option>\r\n      `\r\n    )).join('');\r\n\r\n    const daysElements = this.days.map((day) => (\r\n      `\r\n        <option value=\"${day.toLowerCase()}\">${day}</option>\r\n      `\r\n    )).join('');\r\n\r\n    const timeElements = this.times.map((time) => (\r\n      `\r\n        <option value=\"${time}\">${time}:00</option>\r\n      `\r\n    )).join('');\r\n\r\n    return `\r\n      <div class=\"card-header\">\r\n          <p class=\"card-header-title\">Create new event</p>\r\n      </div>\r\n      <div id=\"event-content\" class=\"card-content\">\r\n          <div class=\"field\">\r\n              <div class=\"control\">\r\n                  <input id=\"event-name\" class=\"input\" type=\"text\" placeholder=\"Event name\"> \r\n              </div>\r\n          </div>\r\n          <div class=\"field\">\r\n              <div class=\"control is-expanded\">\r\n                  <div class=\"select is-fullwidth is-multiple\">\r\n                      <select id=\"members\" multiple size=\"4\">\r\n                          <option selected>All members</option>\r\n                          ${membersElements}\r\n                      </select>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"field\">\r\n              <div class=\"control is-expanded\">\r\n                  <div class=\"select is-fullwidth\">\r\n                      <select id=\"weekday\">\r\n                          ${daysElements}\r\n                      </select>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"field\">\r\n              <div class=\"control is-expanded\">\r\n                  <div class=\"select is-fullwidth\">\r\n                      <select id=\"time\">\r\n                          ${timeElements}\r\n                      </select>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"field is-grouped card-footer  is-justify-content-flex-end\">\r\n          <p class=\"control\" id=\"create-event\">\r\n              <a class=\"button is-primary\">\r\n                  Submit\r\n              </a>\r\n          </p>\r\n          <p class=\"control\" id=\"cancel\">\r\n              <a class=\"button is-light\">\r\n                  Cancel\r\n              </a>\r\n          </p>\r\n      </div>\r\n    `;\r\n  }\r\n\r\n  init() {\r\n    this.el = document.createElement('div');\r\n    this.el.classList.add('card');\r\n    this.el.classList.add('add-event');\r\n    this.calendarEvents = JSON.parse(localStorage.getItem('events')) || [];\r\n  }\r\n\r\n  afterInit() {\r\n    this.cancel = this.el.querySelector('#cancel');\r\n    this.createEvent = this.el.querySelector('#create-event');\r\n    this.eventName = document.querySelector('#event-name');\r\n    this.membersSelected = document.querySelector('#members');\r\n    this.memberOptions = document.querySelectorAll('.member');\r\n    this.weekday = document.querySelector('#weekday');\r\n    this.time = document.querySelector('#time');\r\n\r\n    const listenerCancel = this.cancel.addEventListener('click', () => {\r\n      this.destroy();\r\n      const calendar = new _calendar_calendar__WEBPACK_IMPORTED_MODULE_0__.Calendar(document.body, true, this.name);\r\n      calendar.render();\r\n    });\r\n\r\n    const listenerCreateEvent = this.createEvent.addEventListener('click', () => {\r\n      this.checkDate();\r\n    });\r\n\r\n    this.eventListeners.push(['click', listenerCreateEvent, this.createEvent]);\r\n    this.eventListeners.push(['click', listenerCancel, this.cancel]);\r\n  }\r\n\r\n  checkDate() {\r\n    const dateInfo = this.calendarEvents.find((item) => (\r\n      item.weekday === this.weekday.value && item.time === this.time.value\r\n    ));\r\n\r\n    if (this.eventName.value.length <= 3) {\r\n      this.renderNotification(\r\n        'Filed to create an event. Event name is too short',\r\n        false,\r\n      );\r\n    } else if (dateInfo) {\r\n      this.renderNotification(\r\n        'Filed to create an event. Time slot is already booked',\r\n        false,\r\n      );\r\n    } else {\r\n      this.addEvent();\r\n      this.destroy();\r\n      const calendar = new _calendar_calendar__WEBPACK_IMPORTED_MODULE_0__.Calendar(document.body, true, this.name);\r\n      calendar.render();\r\n      this.renderNotification('Event created', true);\r\n    }\r\n  }\r\n\r\n  renderNotification(textValue, booleanValue) {\r\n    if (this.notification) {\r\n      this.notification.destroy();\r\n    }\r\n    this.notification = new _notification_notification__WEBPACK_IMPORTED_MODULE_3__.Notification(\r\n      document.querySelector('#header'),\r\n      textValue,\r\n      booleanValue,\r\n      3000,\r\n    );\r\n    this.notification.render();\r\n  }\r\n\r\n  addEvent() {\r\n    const members = Array.prototype.filter\r\n      .apply(this.memberOptions, [(item) => item.selected])\r\n      .map((item) => item.value);\r\n\r\n    const event = {\r\n      eventName: this.eventName.value,\r\n      members:\r\n        this.membersSelected.value === 'All members'\r\n          ? this.members.map((item) => item.name)\r\n          : members,\r\n      weekday: this.weekday.value.toLowerCase(),\r\n      time: this.time.value.replace(/(:00)/, ''),\r\n      id: `${this.weekday.value.toLowerCase()}-${this.time.value.replace(/(:00)/, '')}`,\r\n    };\r\n\r\n    this.calendarEvents.push(event);\r\n    localStorage.setItem('events', JSON.stringify(this.calendarEvents));\r\n  }\r\n\r\n  render() {\r\n    if (this.el) {\r\n      this.destroy();\r\n    }\r\n\r\n    this.init();\r\n    this.el.innerHTML = this.template;\r\n    this.parent.appendChild(this.el);\r\n    this.afterInit();\r\n  }\r\n\r\n  destroy() {\r\n    this.eventListeners.forEach(([type, handler, element]) => {\r\n      element.removeEventListener(type, handler);\r\n    });\r\n\r\n    this.el.remove();\r\n    this.el = null;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./add-event/add-event.js?");

/***/ }),

/***/ "./authorization/authorization.js":
/*!****************************************!*\
  !*** ./authorization/authorization.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Authorization\": () => /* binding */ Authorization\n/* harmony export */ });\n/* harmony import */ var _calendar_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calendar/calendar */ \"./calendar/calendar.js\");\n/* harmony import */ var _core_service_members_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/service/members.service */ \"./core/service/members.service.js\");\n\r\n\r\n\r\nclass Authorization {\r\n  constructor(parent) {\r\n    this.el = null;\r\n    this.parent = parent;\r\n    this.eventListeners = [];\r\n    this.members = _core_service_members_service__WEBPACK_IMPORTED_MODULE_1__.Members;\r\n  }\r\n\r\n  get template() {\r\n    const membersElements = this.members.map((member) => (`\r\n          <option class=\"member\" value=\"${member.name}\">${member.name}</option>\r\n    `\r\n    )).join('');\r\n\r\n    return `\r\n        <div class=\"modal is-active\" id=\"authorization\">\r\n            <div class=\"modal-background\"></div>\r\n            <div class=\"modal-card\">\r\n                <header class=\"modal-card-head\">\r\n                    <p class=\"modal-card-title\">\r\n                       Please authorize\r\n                    </p>\r\n                </header>\r\n                <section class=\"modal-card-body\">\r\n                    <div id=\"event\" class=\"select is-fullwidth\">\r\n                        <select id=\"user\">\r\n                            ${membersElements}\r\n                        </select>\r\n                    </div>\r\n                </section>\r\n                <footer class=\"modal-card-foot is-pulled-right\">\r\n                    <button id=\"authorization-button-ok\" class=\"button is-success\">Confirm</button>\r\n                </footer>\r\n            </div>\r\n        </div>\r\n   \r\n    `;\r\n  }\r\n\r\n  init() {\r\n    this.el = document.createElement('div');\r\n  }\r\n\r\n  afterInit() {\r\n    this.buttonOk = document.querySelector('#authorization-button-ok');\r\n    const nameUser = this.el.querySelector('#user');\r\n\r\n    const listenerOk = this.buttonOk.addEventListener('click', () => {\r\n      const indexUser = this.members.find((index) => index.name === nameUser.value);\r\n      this.destroy();\r\n      localStorage.setItem('user', JSON.stringify(indexUser));\r\n      const calendar = new _calendar_calendar__WEBPACK_IMPORTED_MODULE_0__.Calendar(document.body, indexUser.isAdmin, indexUser.name);\r\n      calendar.render();\r\n    });\r\n\r\n    this.eventListeners.push(['click', listenerOk, this.buttonOk]);\r\n  }\r\n\r\n  render() {\r\n    if (this.el) {\r\n      this.destroy();\r\n    }\r\n\r\n    this.init();\r\n    this.el.innerHTML = this.template;\r\n    this.parent.appendChild(this.el);\r\n    this.afterInit();\r\n  }\r\n\r\n  destroy() {\r\n    this.eventListeners.forEach(([type, handler, element]) => {\r\n      element.removeEventListener(type, handler);\r\n    });\r\n\r\n    this.el.remove();\r\n    this.el = null;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./authorization/authorization.js?");

/***/ }),

/***/ "./calendar/calendar.js":
/*!******************************!*\
  !*** ./calendar/calendar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Calendar\": () => /* binding */ Calendar\n/* harmony export */ });\n/* harmony import */ var _add_event_add_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-event/add-event */ \"./add-event/add-event.js\");\n/* harmony import */ var _event_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event/event */ \"./event/event.js\");\n/* harmony import */ var _core_constants_days__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/constants/days */ \"./core/constants/days.js\");\n/* harmony import */ var _core_constants_times__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/constants/times */ \"./core/constants/times.js\");\n/* harmony import */ var _core_service_members_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/service/members.service */ \"./core/service/members.service.js\");\n/* harmony import */ var _authorization_authorization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authorization/authorization */ \"./authorization/authorization.js\");\n/* harmony import */ var _calendar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar.scss */ \"./calendar/calendar.scss\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Calendar {\r\n  constructor(parent, isAdmin, name) {\r\n    this.el = null;\r\n    this.parent = parent;\r\n    this.eventListeners = [];\r\n    this.days = _core_constants_days__WEBPACK_IMPORTED_MODULE_2__.DAYS;\r\n    this.members = _core_service_members_service__WEBPACK_IMPORTED_MODULE_4__.Members;\r\n    this.times = _core_constants_times__WEBPACK_IMPORTED_MODULE_3__.TIMES;\r\n    this.isAdmin = isAdmin;\r\n    this.name = name;\r\n  }\r\n\r\n  get template() {\r\n    const table = this.times.map((time) => {\r\n      const items = this.days.map((day) => (\r\n        `<td id=\"${day.toLowerCase()}-${time}\" class=\"container\"></td>`\r\n      )).join('');\r\n\r\n      return `\r\n        <tr>\r\n          <td>${time}:00</td>\r\n          ${items}\r\n        </tr>\r\n      `;\r\n    }).join('');\r\n\r\n    const members = this.members.map((member) => (\r\n      `\r\n        <option class=\"member\" value=\"${member.name}\">${member.name}</option>\r\n      `\r\n    )).join('');\r\n\r\n    return `\r\n      <div id=\"calendar\" class=\"card-content\">\r\n        <div id=\"calendar-header\">\r\n          <div class=\"card-header-title is-justify-content-space-between\">\r\n            <span>Calendar</span>\r\n              <div>\r\n                <div id=\"event\" class=\"select\">\r\n                    <select id=\"user\">\r\n                        <option selected>All events</option>\r\n                        ${members}\r\n                    </select>\r\n                </div>\r\n                <button id=\"add-event\" class=\"button is-primary\">New event +</button>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <table class=\"table is-bordered is-narrow\">\r\n            <tr>\r\n                <th>Name</th>\r\n                <th>Mon</th>\r\n                <th>Tue</th>\r\n                <th>Wed</th>\r\n                <th>Thu</th>\r\n                <th>Fri</th>\r\n            </tr>\r\n            ${table}\r\n        </table>\r\n        <div class=calendar-footer>\r\n          <div>${this.name}</div>\r\n          <a id=\"sign-out\">sign out</a>\r\n        </div>\r\n      </div>\r\n\r\n    `;\r\n  }\r\n\r\n  init() {\r\n    this.el = document.createElement('div');\r\n    this.el.classList.add('card');\r\n    this.el.classList.add('calendar');\r\n    this.calendarEvents = JSON.parse(localStorage.getItem('events')) || [];\r\n  }\r\n\r\n  initAddEvent() {\r\n    this.addEvent = document.querySelector('#add-event');\r\n    const listenerAddEvent = this.addEvent.addEventListener('click', () => {\r\n      const addEvent = new _add_event_add_event__WEBPACK_IMPORTED_MODULE_0__.AddEvent(document.body, this.name);\r\n      addEvent.render();\r\n      this.destroy();\r\n    });\r\n\r\n    this.eventListeners.push(['click', listenerAddEvent, this.addEvent]);\r\n  }\r\n\r\n  checkAdmin() {\r\n    if (!this.isAdmin) {\r\n      document.querySelector('#add-event').classList.add('hide');\r\n    }\r\n  }\r\n\r\n  calendarFilter() {\r\n    const filterMenu = this.el.querySelector('#user');\r\n    filterMenu.addEventListener('change', () => {\r\n      const getContentMessage = document.querySelectorAll('.message');\r\n      getContentMessage.forEach((item) => {\r\n        item.classList.remove('show', 'hide');\r\n        item.classList.add('hide');\r\n\r\n        if (filterMenu.value === 'All events') {\r\n          item.classList.remove('show', 'hide');\r\n          item.classList.add('show');\r\n        }\r\n\r\n        if (item.classList.contains(filterMenu.value)) {\r\n          item.classList.remove('show', 'hide');\r\n          item.classList.add('show');\r\n        }\r\n      });\r\n    });\r\n  }\r\n\r\n  renderEvents() {\r\n    this.calendarEvents.forEach((item) => {\r\n      const id = `${item.weekday}-${item.time}`;\r\n      this.container = document.querySelector(`#${id.toLowerCase()}`);\r\n\r\n      const allCalendarEvents = new _event_event__WEBPACK_IMPORTED_MODULE_1__.Event(\r\n        this.container,\r\n        item.members,\r\n        item.id,\r\n        item.eventName,\r\n        this.render.bind(this),\r\n        this.isAdmin,\r\n      );\r\n\r\n      allCalendarEvents.render();\r\n    });\r\n  }\r\n\r\n  initSignOutHandler() {\r\n    const signOut = document.querySelector('#sign-out');\r\n    signOut.addEventListener('click', () => {\r\n      localStorage.removeItem('user');\r\n      const authorization = new _authorization_authorization__WEBPACK_IMPORTED_MODULE_5__.Authorization(document.body);\r\n      authorization.render();\r\n      this.destroy();\r\n    });\r\n  }\r\n\r\n  render() {\r\n    if (this.el) {\r\n      this.destroy();\r\n    }\r\n\r\n    this.init();\r\n    this.el.innerHTML = this.template;\r\n    this.parent.appendChild(this.el);\r\n    this.initAddEvent();\r\n    this.renderEvents();\r\n    this.calendarFilter();\r\n    this.checkAdmin();\r\n    this.initSignOutHandler();\r\n  }\r\n\r\n  destroy() {\r\n    this.eventListeners.forEach(([type, handler, element]) => {\r\n      element.removeEventListener(type, handler);\r\n    });\r\n\r\n    this.el.remove();\r\n    this.el = null;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./calendar/calendar.js?");

/***/ }),

/***/ "./core/constants/days.js":
/*!********************************!*\
  !*** ./core/constants/days.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DAYS\": () => /* binding */ DAYS\n/* harmony export */ });\nconst DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];\r\n\n\n//# sourceURL=webpack:///./core/constants/days.js?");

/***/ }),

/***/ "./core/constants/members.js":
/*!***********************************!*\
  !*** ./core/constants/members.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Users\": () => /* binding */ Users,\n/* harmony export */   \"Admins\": () => /* binding */ Admins\n/* harmony export */ });\n/* harmony import */ var _modals_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modals/user */ \"./core/modals/user.js\");\n/* harmony import */ var _modals_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/admin */ \"./core/modals/admin.js\");\n\r\n\r\n\r\nconst Users = [\r\n  new _modals_user__WEBPACK_IMPORTED_MODULE_0__.User('Maria'),\r\n  new _modals_user__WEBPACK_IMPORTED_MODULE_0__.User('Alex'),\r\n  new _modals_user__WEBPACK_IMPORTED_MODULE_0__.User('Regina'),\r\n];\r\n\r\nconst Admins = [\r\n  new _modals_admin__WEBPACK_IMPORTED_MODULE_1__.Admin('David'),\r\n];\r\n\n\n//# sourceURL=webpack:///./core/constants/members.js?");

/***/ }),

/***/ "./core/constants/times.js":
/*!*********************************!*\
  !*** ./core/constants/times.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TIMES\": () => /* binding */ TIMES\n/* harmony export */ });\nconst TIMES = ['10', '11', '12', '13', '14', '15', '16', '17', '18'];\r\n\n\n//# sourceURL=webpack:///./core/constants/times.js?");

/***/ }),

/***/ "./core/modals/admin.js":
/*!******************************!*\
  !*** ./core/modals/admin.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Admin\": () => /* binding */ Admin\n/* harmony export */ });\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./core/modals/user.js\");\n\r\n\r\nclass Admin extends _user__WEBPACK_IMPORTED_MODULE_0__.User {\r\n  constructor(name) {\r\n    super(name);\r\n    this._isAdmin = true;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./core/modals/admin.js?");

/***/ }),

/***/ "./core/modals/user.js":
/*!*****************************!*\
  !*** ./core/modals/user.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": () => /* binding */ User\n/* harmony export */ });\nclass User {\r\n  constructor(name) {\r\n    this.name = name;\r\n    this._isAdmin = false;\r\n  }\r\n\r\n  get isAdmin() {\r\n    return this._isAdmin;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./core/modals/user.js?");

/***/ }),

/***/ "./core/service/members.service.js":
/*!*****************************************!*\
  !*** ./core/service/members.service.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MembersUsers\": () => /* binding */ MembersUsers,\n/* harmony export */   \"MembersAdmins\": () => /* binding */ MembersAdmins,\n/* harmony export */   \"Members\": () => /* binding */ Members\n/* harmony export */ });\n/* harmony import */ var _constants_members__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/members */ \"./core/constants/members.js\");\n\r\n\r\nconst MembersUsers = [..._constants_members__WEBPACK_IMPORTED_MODULE_0__.Users];\r\nconst MembersAdmins = [..._constants_members__WEBPACK_IMPORTED_MODULE_0__.Admins];\r\nconst Members = [..._constants_members__WEBPACK_IMPORTED_MODULE_0__.Admins, ..._constants_members__WEBPACK_IMPORTED_MODULE_0__.Users];\r\n\n\n//# sourceURL=webpack:///./core/service/members.service.js?");

/***/ }),

/***/ "./event/event.js":
/*!************************!*\
  !*** ./event/event.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Event\": () => /* binding */ Event\n/* harmony export */ });\n/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal/modal */ \"./modal/modal.js\");\n/* harmony import */ var _event_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event.scss */ \"./event/event.scss\");\n\r\n\r\n\r\nclass Event {\r\n  constructor(parent, members, id, eventName, eventCallback, isAdmin) {\r\n    this.el = null;\r\n    this.parent = parent;\r\n    this.eventListeners = [];\r\n    this.members = members;\r\n    this.id = id;\r\n    this.eventCallback = eventCallback;\r\n    this.eventName = eventName;\r\n    this.isAdmin = isAdmin;\r\n  }\r\n\r\n  get template() {\r\n    return `\r\n        <div class=\"message is-info ${this.members.join(' ')}\" data-item=\"${this.id}\" draggable=\"true\">\r\n        <span class=\"message-header\">\r\n            ${this.eventName}\r\n            <button class=\"delete-event delete is-small\" event-id=\"${this.id}\"></button>\r\n        </span>\r\n        </div>\r\n    `;\r\n  }\r\n\r\n  init() {\r\n    this.el = document.createElement('div');\r\n    this.calendarEvents = JSON.parse(localStorage.getItem('events')) || [];\r\n  }\r\n\r\n  initEventListeners() {\r\n    this.deleteButton = this.el.querySelector('.delete-event');\r\n\r\n    const id = this.deleteButton.getAttribute('event-id');\r\n    const listenerBtn = this.deleteButton.addEventListener(\r\n      'click',\r\n      this.openConfirmationModal.bind(this, id),\r\n    );\r\n\r\n    this.eventListeners.push(['click', listenerBtn, this.deleteButton]);\r\n  }\r\n\r\n  checkAdmin() {\r\n    const buttonDeleteEvent = document.querySelectorAll('.delete-event');\r\n    if (!this.isAdmin) {\r\n      buttonDeleteEvent.forEach((item) => {\r\n        item.classList.add('hide');\r\n      });\r\n    } else {\r\n      this.dropsDrag();\r\n    }\r\n  }\r\n\r\n  openConfirmationModal() {\r\n    const myModal = new _modal_modal__WEBPACK_IMPORTED_MODULE_0__.Modal(\r\n      document.body,\r\n      `Are you sure you want to delete \"${this.eventName}\" event?`,\r\n      this.eventName,\r\n      (del) => {\r\n        if (del) {\r\n          this.deleteCallback();\r\n        }\r\n      },\r\n    );\r\n\r\n    myModal.render();\r\n  }\r\n\r\n  deleteCallback() {\r\n    this.calendarEventsToDelete = JSON.parse(localStorage.getItem('events')) || [];\r\n    const index = this.calendarEventsToDelete.findIndex(\r\n      (item) => this.id === item.id.toString(),\r\n    );\r\n\r\n    this.calendarEventsToDelete.splice(index, 1);\r\n    localStorage.setItem('events', JSON.stringify(this.calendarEventsToDelete));\r\n    this.destroy();\r\n  }\r\n\r\n  dropsDrag() {\r\n    const dragItems = document.querySelectorAll('.message');\r\n    const dragZones = document.querySelectorAll('.container');\r\n    const self = this;\r\n\r\n    function handlerDragstart(event) {\r\n      event.dataTransfer.setData('dragItem', this.dataset.item);\r\n      this.classList.add('drag-item-start');\r\n    }\r\n\r\n    function handlerDragend() {\r\n      this.classList.remove('drag-item-start');\r\n    }\r\n\r\n    function handlerDrag() {}\r\n\r\n    function handlerDragsenter(event) {\r\n      event.preventDefault();\r\n      this.classList.add('drag-zone-active');\r\n    }\r\n\r\n    function handlerDragleave() {\r\n      this.classList.remove('drag-zone-active');\r\n    }\r\n\r\n    function handlerDragover(event) {\r\n      event.preventDefault();\r\n    }\r\n\r\n    function handlerDrop(event) {\r\n      const dragFlag = event.dataTransfer.getData('dragItem');\r\n      const eventTargetId = event.target.id;\r\n\r\n      if (eventTargetId) {\r\n        self.updateEvent(eventTargetId, dragFlag);\r\n      }\r\n    }\r\n\r\n    dragItems.forEach((dragItem) => {\r\n      dragItem.addEventListener('dragstart', handlerDragstart);\r\n      dragItem.addEventListener('dragend', handlerDragend);\r\n      dragItem.addEventListener('drag', handlerDrag);\r\n    });\r\n\r\n    dragZones.forEach((dragZone) => {\r\n      dragZone.addEventListener('dragenter', handlerDragsenter);\r\n      dragZone.addEventListener('dragleave', handlerDragleave);\r\n      dragZone.addEventListener('dragover', handlerDragover);\r\n      dragZone.addEventListener('drop', handlerDrop);\r\n    });\r\n  }\r\n\r\n  updateEvent(eventNewId, eventPriviousId) {\r\n    this.calendarEventsStorage = JSON.parse(localStorage.getItem('events'));\r\n    const eventFromlocalStorage = this.calendarEventsStorage.find(\r\n      (item) => item.id === eventPriviousId,\r\n    );\r\n\r\n    [\r\n      eventFromlocalStorage.weekday,\r\n      eventFromlocalStorage.time,\r\n    ] = eventNewId.split('-');\r\n\r\n    localStorage.setItem('events', JSON.stringify(this.calendarEventsStorage));\r\n    this.eventCallback();\r\n  }\r\n\r\n  render() {\r\n    if (this.el) {\r\n      this.destroy();\r\n    }\r\n\r\n    this.init();\r\n    this.parent.appendChild(this.el);\r\n    this.parent.classList.remove('container');\r\n    this.el.innerHTML = this.template;\r\n    this.initEventListeners();\r\n    this.checkAdmin();\r\n  }\r\n\r\n  destroy() {\r\n    this.eventListeners.forEach(([type, handler, element]) => {\r\n      element.removeEventListener(type, handler);\r\n    });\r\n\r\n    this.el.remove();\r\n    this.el = null;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./event/event.js?");

/***/ }),

/***/ "./modal/modal.js":
/*!************************!*\
  !*** ./modal/modal.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => /* binding */ Modal\n/* harmony export */ });\n/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.scss */ \"./modal/modal.scss\");\n\r\n\r\nclass Modal {\r\n  constructor(parent, text, title, modalCallback) {\r\n    this.el = null;\r\n    this.parent = parent;\r\n    this.eventListeners = [];\r\n    this.text = text;\r\n    this.title = title;\r\n    this.modalCallback = modalCallback;\r\n  }\r\n\r\n  get template() {\r\n    return `\r\n        <div class=\"modal is-active\">\r\n            <div class=\"modal-background\"></div>\r\n            <div class=\"modal-card\">\r\n                <header class=\"modal-card-head\">\r\n                    <p class=\"modal-card-title\">\r\n                       Delete \"${this.title}\" event\r\n                    </p>\r\n                </header>\r\n                <section class=\"modal-card-body\">\r\n                    ${this.text}\r\n                </section>\r\n                <footer class=\"modal-card-foot is-pulled-right\">\r\n                    <button id=\"button-ok\" class=\"button is-success\">OK</button>\r\n                    <button id=\"button-cancel\" class=\"button\">Cancel</button>\r\n                </footer>\r\n            </div>\r\n        </div>\r\n        \r\n    `;\r\n  }\r\n\r\n  init() {\r\n    this.el = document.createElement('div');\r\n  }\r\n\r\n  afterInit() {\r\n    this.buttonCancel = document.querySelector('#button-cancel');\r\n    this.buttonOk = document.querySelector('#button-ok');\r\n\r\n    const listenerCancel = this.buttonCancel.addEventListener('click', () => {\r\n      this.modalCallback(false);\r\n      this.destroy();\r\n    });\r\n\r\n    const listenerOk = this.buttonOk.addEventListener('click', () => {\r\n      this.modalCallback(true);\r\n      this.destroy();\r\n    });\r\n\r\n    this.eventListeners.push(['click', listenerCancel, this.buttonCancel]);\r\n    this.eventListeners.push(['click', listenerOk, this.buttonOk]);\r\n  }\r\n\r\n  render() {\r\n    if (this.el) {\r\n      this.destroy();\r\n    }\r\n\r\n    this.init();\r\n    this.el.innerHTML = this.template;\r\n    this.parent.appendChild(this.el);\r\n    this.afterInit();\r\n  }\r\n\r\n  destroy() {\r\n    this.eventListeners.forEach(([type, handler, element]) => {\r\n      element.removeEventListener(type, handler);\r\n    });\r\n\r\n    this.el.remove();\r\n    this.el = null;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./modal/modal.js?");

/***/ }),

/***/ "./notification/notification.js":
/*!**************************************!*\
  !*** ./notification/notification.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Notification\": () => /* binding */ Notification\n/* harmony export */ });\n/* harmony import */ var _notification_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.scss */ \"./notification/notification.scss\");\n\r\n\r\nclass Notification {\r\n  constructor(parent, text, success, duration) {\r\n    this.el = null;\r\n    this.parent = parent;\r\n    this.eventListeners = [];\r\n    this.text = text;\r\n    this.success = success;\r\n    this.duration = duration;\r\n  }\r\n\r\n  get template() {\r\n    return `    \r\n        <div class=\"notification is-light\">\r\n            <button id=\"delete-notification\" class=\"delete is-medium\"></button>\r\n            <div>${this.text}<div>\r\n        </div>      \r\n      `;\r\n  }\r\n\r\n  renderNotification() {\r\n    const elNotification = document.querySelector('.notification');\r\n    if (this.success) {\r\n      elNotification.classList.add('is-primary');\r\n    } else {\r\n      elNotification.classList.add('is-danger');\r\n    }\r\n    this.timer = setTimeout(() => { this.destroy(); }, this.duration);\r\n  }\r\n\r\n  init() {\r\n    this.el = document.createElement('div');\r\n    this.el.classList.add('content-notification');\r\n  }\r\n\r\n  afterInit() {\r\n    this.deleteNotification = document.querySelector('#delete-notification');\r\n\r\n    const listenerDeleteNotification = this.deleteNotification.addEventListener('click', () => {\r\n      clearTimeout(this.timer);\r\n      this.destroy();\r\n    });\r\n\r\n    this.eventListeners.push(['click', listenerDeleteNotification, this.deleteNotification]);\r\n  }\r\n\r\n  render() {\r\n    if (this.el) {\r\n      this.destroy();\r\n    }\r\n\r\n    this.init();\r\n    this.parent.appendChild(this.el);\r\n    this.el.innerHTML = this.template;\r\n    this.afterInit();\r\n    this.renderNotification();\r\n  }\r\n\r\n  destroy() {\r\n    if (!this.el) {\r\n      return;\r\n    }\r\n\r\n    this.eventListeners.forEach(([type, handler, element]) => {\r\n      element.removeEventListener(type, handler);\r\n    });\r\n\r\n    this.el.remove();\r\n    this.el = null;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./notification/notification.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _authorization_authorization_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorization/authorization.scss */ \"./authorization/authorization.scss\");\n/* harmony import */ var _authorization_authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorization/authorization */ \"./authorization/authorization.js\");\n/* harmony import */ var _calendar_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar/calendar */ \"./calendar/calendar.js\");\n\r\n\r\n\r\n\r\nconst membersElements = JSON.parse(localStorage.getItem('user')) || [];\r\n\r\nif (membersElements.name) {\r\n  const calendar = new _calendar_calendar__WEBPACK_IMPORTED_MODULE_2__.Calendar(document.body, membersElements._isAdmin, membersElements.name);\r\n  calendar.render();\r\n} else {\r\n  const authorization = new _authorization_authorization__WEBPACK_IMPORTED_MODULE_1__.Authorization(document.body);\r\n  authorization.render();\r\n}\r\n\n\n//# sourceURL=webpack:///./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;