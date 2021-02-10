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

/***/ "./add-event/add-event-component.scss":
/*!********************************************!*\
  !*** ./add-event/add-event-component.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./add-event/add-event-component.scss?");

/***/ }),

/***/ "./calendar/calendar.scss":
/*!********************************!*\
  !*** ./calendar/calendar.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./calendar/calendar.scss?");

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

/***/ "./add-event/add-event-component.js":
/*!******************************************!*\
  !*** ./add-event/add-event-component.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddEvent\": () => /* binding */ AddEvent\n/* harmony export */ });\n/* harmony import */ var _calendar_calendar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calendar/calendar.js */ \"./calendar/calendar.js\");\n/* harmony import */ var _notification_notification_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notification/notification.js */ \"./notification/notification.js\");\n\r\n\r\n\r\nclass AddEvent {\r\n  constructor(parent) {\r\n    this.el = null;\r\n    this.parent = parent;\r\n    this.eventListeners = [];\r\n    this.members = [\"Maria\", \"Bob\", \"Alex\"];\r\n    this.days = [\"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\"];\r\n    this.times = [\r\n      \"10:00\",\r\n      \"11:00\",\r\n      \"12:00\",\r\n      \"13:00\",\r\n      \"14:00\",\r\n      \"15:00\",\r\n      \"16:00\",\r\n      \"17:00\",\r\n      \"18:00\",\r\n    ];\r\n    this.calendarEvents = JSON.parse(localStorage.getItem(\"events\")) || [];\r\n  }\r\n\r\n  get template() {\r\n    const memersElements = this.members.map((member) => {\r\n      return `\r\n        <option>${member}</option>\r\n      `;\r\n      }).join(\"\");\r\n\r\n    const daysElements = this.days.map((day) => {\r\n      return `\r\n      <option>${day}</option>\r\n      `;\r\n      }).join(\"\");\r\n\r\n    const timeElements = this.times.map((time) => {\r\n      return `\r\n      <option>${time}</option>\r\n      `;\r\n      }).join(\"\");\r\n\r\n    return `\r\n      <div class=\"card-header\">\r\n          <p class=\"card-header-title\">Create new event</p>\r\n      </div>\r\n      <div id=\"event-content\" class=\"card-content\">\r\n          <div class=\"field\">\r\n              <div class=\"control\">\r\n                  <input id=\"event-name\" class=\"input\" type=\"text\" placeholder=\"Event name\"> \r\n              </div>\r\n          </div>\r\n          <div class=\"field\">\r\n              <div class=\"control is-expanded\">\r\n                  <div class=\"select is-fullwidth\">\r\n                      <select id=\"members\">\r\n                          <option>All members</option>\r\n                          ${memersElements}\r\n                      </select>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"field\">\r\n              <div class=\"control is-expanded\">\r\n                  <div class=\"select is-fullwidth\">\r\n                      <select id=\"weekdays\">\r\n                          ${daysElements}\r\n                      </select>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"field\">\r\n              <div class=\"control is-expanded\">\r\n                  <div class=\"select is-fullwidth\">\r\n                      <select id=\"time\">\r\n                          ${timeElements}\r\n                      </select>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"field is-grouped card-footer  is-justify-content-flex-end\">\r\n          <p class=\"control\" id=\"create-event\">\r\n              <a class=\"button is-primary\">\r\n                  Submit\r\n              </a>\r\n          </p>\r\n          <p class=\"control\" id=\"cancel\">\r\n              <a class=\"button is-light\">\r\n                  Cancel\r\n              </a>\r\n          </p>\r\n      </div>\r\n    `;\r\n  }\r\n\r\n  init() {\r\n    this.el = document.createElement(\"div\");\r\n    this.el.classList.add(\"card\");\r\n    this.el.classList.add(\"add-event\");\r\n  }\r\n\r\n  afterInit() {\r\n    this.cancel = this.el.querySelector(\"#cancel\");\r\n    this.createEvent = this.el.querySelector(\"#create-event\");\r\n    this.eventName = document.querySelector(\"#event-name\");\r\n    this.members = document.querySelector(\"#members\");\r\n    this.weekdays = document.querySelector(\"#weekdays\");\r\n    this.time = document.querySelector(\"#time\");\r\n\r\n    const listnerCancee = this.cancel.addEventListener(\"click\", () => {\r\n      this.destroy();\r\n      const caledar = new _calendar_calendar_js__WEBPACK_IMPORTED_MODULE_0__.Calendar(document.body);\r\n      caledar.render();\r\n    });\r\n\r\n    const listenerCreateEvent = this.createEvent.addEventListener(\"click\", () => {\r\n        this.checkDate();\r\n    });\r\n\r\n    this.eventListeners.push([\"click\", listenerCreateEvent, this.createEvent]);\r\n    this.eventListeners.push([\"click\", listnerCancee, this.cancel]);\r\n  }\r\n\r\n  checkDate() {\r\n    const dateInfo = this.calendarEvents.find((item, key) => {\r\n      return item.weekdays === weekdays.value && item.time === time.value;\r\n    });\r\n\r\n    if (this.eventName.value.length <= 3) {\r\n      this.renderNotification(\r\n        \"Filed to create an event. Event name is too short\",\r\n        false\r\n      );\r\n    } else if (dateInfo) {\r\n      this.renderNotification(\r\n        \"Filed to create an event. Time slot is already booked\",\r\n        false\r\n      );\r\n    } else {\r\n      this.addEvent();\r\n      this.destroy();\r\n      const caledar = new _calendar_calendar_js__WEBPACK_IMPORTED_MODULE_0__.Calendar(document.body);\r\n      caledar.render();\r\n      this.renderNotification(\"Event created\", true);\r\n    }\r\n  }\r\n\r\n  renderNotification(textValue, booleanValue) {\r\n    this.elNotification = document.querySelector(\".content-notification\");\r\n    if(this.elNotification) {\r\n      this.elNotification.remove()\r\n    }\r\n    \r\n    const notification = new _notification_notification_js__WEBPACK_IMPORTED_MODULE_1__.Notification(\r\n      document.querySelector(\"#header\"),\r\n      textValue,\r\n      booleanValue,\r\n      5000\r\n    );\r\n    notification.render();\r\n  }\r\n\r\n  addEvent() {\r\n    const event = {\r\n      eventName: this.eventName.value,\r\n      members:\r\n        this.members.value === \"All members\"\r\n          ? [\"Maria\", \"Bob\", \"Alex\"]\r\n          : [this.members.value],\r\n      weekdays: this.weekdays.value,\r\n      time: this.time.value,\r\n      id: this.weekdays.value + this.time.value,\r\n    };\r\n\r\n    this.calendarEvents.push(event);\r\n    localStorage.setItem(\"events\", JSON.stringify(this.calendarEvents));\r\n  }\r\n\r\n  render() {\r\n    if (this.el) {\r\n      this.destroy();\r\n    }\r\n\r\n    this.init();\r\n    this.el.innerHTML = this.template;\r\n    this.parent.appendChild(this.el);\r\n    this.afterInit();\r\n  }\r\n\r\n  destroy() {\r\n    this.eventListeners.forEach(([type, handler, element]) => {\r\n      element.removeEventListener(type, handler);\r\n    });\r\n\r\n    this.el.remove();\r\n    this.el = null;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./add-event/add-event-component.js?");

/***/ }),

/***/ "./calendar/calendar.js":
/*!******************************!*\
  !*** ./calendar/calendar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Calendar\": () => /* binding */ Calendar\n/* harmony export */ });\n/* harmony import */ var _add_event_add_event_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-event/add-event-component.js */ \"./add-event/add-event-component.js\");\n/* harmony import */ var _modal_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal/modal.js */ \"./modal/modal.js\");\n\r\n\r\n\r\nclass Calendar {\r\n  constructor(parent) {\r\n    this.el = null;\r\n    this.parent = parent;\r\n    this.eventListeners = [];\r\n    this.calendarEvents = JSON.parse(localStorage.getItem(\"events\")) || [];\r\n  }\r\n\r\n  get template() {\r\n    return `\r\n      <div id=\"calendar\" class=\"card-content\">\r\n        <div id=\"calendar-header\">\r\n          <div class=\"card-header-title is-justify-content-space-between\">\r\n            <span>Calendar</span>\r\n              <div>\r\n                <div id=\"event\" class=\"select\">\r\n                    <select id=\"user\">\r\n                        <option selected>All members</option>\r\n                        <option>Maria</option>\r\n                        <option>Bob</option>\r\n                        <option>Alex</option>\r\n                    </select>\r\n                </div>\r\n                <button id=\"add-event\" class=\"button is-primary\">New event +</button>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <table class=\"table is-bordered is-narrow\">\r\n            <tr>\r\n                <th>Name</th>\r\n                <th>Mon</th>\r\n                <th>Tue</th>\r\n                <th>Wed</th>\r\n                <th>Thu</th>\r\n                <th>Fri</th>\r\n            </tr>\r\n            <tr>\r\n                <td>10:00</td>\r\n                <td id=\"monday-10\" class=\"container\"></td>\r\n                <td id=\"tuesday-10\" class=\"container\"></td>\r\n                <td id=\"wednesday-10\" class=\"container\"></td>\r\n                <td id=\"thursday-10\" class=\"container\"></td>\r\n                <td id=\"friday-10\" class=\"container\"></td>\r\n            </tr>\r\n            <tr>\r\n                <td>11:00</td>\r\n                <td id=\"monday-11\" class=\"container\"></td>\r\n                <td id=\"tuesday-11\" class=\"container\"></td>\r\n                <td id=\"wednesday-11\" class=\"container\"></td>\r\n                <td id=\"thursday-11\" class=\"container\"></td>\r\n                <td id=\"friday-11\" class=\"container\"></td>\r\n            </tr>\r\n            <tr>\r\n                <td>12:00</td>\r\n                <td id=\"monday-12\" class=\"container\"></td>\r\n                <td id=\"tuesday-12\" class=\"container\"></td>\r\n                <td id=\"wednesday-12\" class=\"container\"></td>\r\n                <td id=\"thursday-12\" class=\"container\"></td>\r\n                <td id=\"friday-12\" class=\"container\"></td>\r\n            </tr>\r\n            <tr>\r\n                <td>13:00</td>\r\n                <td id=\"monday-13\" class=\"container\"></td>\r\n                <td id=\"tuesday-13\" class=\"container\"></td>\r\n                <td id=\"wednesday-13\" class=\"container\"></td>\r\n                <td id=\"thursday-13\" class=\"container\"></td>\r\n                <td id=\"friday-13\" class=\"container\"></td>\r\n            </tr>\r\n            <tr>\r\n                <td>14:00</td>\r\n                <td id=\"monday-14\" class=\"container\"></td>\r\n                <td id=\"tuesday-14\" class=\"container\"></td>\r\n                <td id=\"wednesday-14\" class=\"container\"></td>\r\n                <td id=\"thursday-14\" class=\"container\"></td>\r\n                <td id=\"friday-14\" class=\"container\"></td>\r\n            </tr>\r\n            <tr>\r\n                <td>15:00</td>\r\n                <td id=\"monday-15\" class=\"container\"></td>\r\n                <td id=\"tuesday-15\" class=\"container\"></td>\r\n                <td id=\"wednesday-15\" class=\"container\"></td>\r\n                <td id=\"thursday-15\" class=\"container\"></td>\r\n                <td id=\"friday-15\" class=\"container\"></td>\r\n            </tr>\r\n            <tr>\r\n                <td>16:00</td>\r\n                <td id=\"monday-16\" class=\"container\"></td>\r\n                <td id=\"tuesday-16\" class=\"container\"></td>\r\n                <td id=\"wednesday-16\" class=\"container\"></td>\r\n                <td id=\"thursday-16\" class=\"container\"></td>\r\n                <td id=\"friday-16\" class=\"container\"></td>\r\n            </tr>\r\n            <tr>\r\n                <td>17:00</td>\r\n                <td id=\"monday-17\" class=\"container\"></td>\r\n                <td id=\"tuesday-17\" class=\"container\"></td>\r\n                <td id=\"wednesday-17 class=\"container\"\"></td>\r\n                <td id=\"thursday-17\" class=\"container\"></td>\r\n                <td id=\"friday-17\" class=\"container\"></td>\r\n            </tr>\r\n            <tr>\r\n                <td>18:00</td>\r\n                <td id=\"monday-18\" class=\"container\"></td>\r\n                <td id=\"tuesday-18\" class=\"container\"></td>\r\n                <td id=\"wednesday-18\" class=\"container\"></td>\r\n                <td id=\"thursday-18\" class=\"container\"></td>\r\n                <td id=\"friday-18\" class=\"container\"></td>\r\n            </tr>  \r\n        </table>\r\n      </div>\r\n          `;\r\n  }\r\n\r\n  init() {\r\n    this.el = document.createElement(\"div\");\r\n    this.el.classList.add(\"card\");\r\n    this.el.classList.add(\"calendar\");\r\n  }\r\n\r\n  initAddEvent() {\r\n    this.addEvent = document.querySelector(\"#add-event\");\r\n    const listnerAddEvent = this.addEvent.addEventListener(\"click\", (event) => {\r\n      const addEvent = new _add_event_add_event_component_js__WEBPACK_IMPORTED_MODULE_0__.AddEvent(document.body);\r\n      addEvent.render();\r\n      this.destroy();\r\n    });\r\n\r\n    this.eventListeners.push([\"click\", listnerAddEvent, this.addEvent]);\r\n  }\r\n\r\n  calendarFilter() {\r\n    const filterMenu = document.querySelector(\"#user\");\r\n    const listnerfilterMenu = filterMenu.addEventListener(\"change\", (event) => {\r\n      const getContentMessage = document.querySelectorAll(\".message\");\r\n      getContentMessage.forEach((item) => {\r\n        item.classList.remove(\"show\", \"hide\");\r\n        item.classList.add(\"hide\");\r\n\r\n        if (filterMenu.value === \"All members\") {\r\n          item.classList.remove(\"show\", \"hide\");\r\n          item.classList.add(\"show\");\r\n        }\r\n\r\n        if (item.classList.contains(filterMenu.value)) {\r\n          item.classList.remove(\"show\", \"hide\");\r\n          item.classList.add(\"show\");\r\n        }\r\n      });\r\n    });\r\n  }\r\n\r\n  renderEvents() {\r\n    this.calendarEvents.forEach((item, key) => {\r\n      let str = \"\";\r\n      str = item.weekdays + \"-\" + item.time.replace(/(:00)/, \"\");\r\n      const addContent = document.querySelector(\"#\" + str.toLowerCase());\r\n      addContent.innerHTML += `\r\n          <div class=\"message is-success ${item.members.join(\" \")}\">\r\n            <span class=\"message-header\">\r\n              ${item.eventName}\r\n              <button class=\"delete-event delete is-small\" event-id=\"${item.id}\"></button>\r\n            </span>\r\n          </div>\r\n      `;\r\n    });\r\n\r\n    this.deleteBtns = this.el.querySelectorAll(\".delete-event\");\r\n    this.deleteBtns.forEach((btn) => {\r\n      const id = btn.getAttribute(\"event-id\");\r\n      const listnerBtn = btn.addEventListener(\"click\",this.deleteEvent.bind(this, id));\r\n\r\n      this.eventListeners.push([\"click\", listnerBtn, btn]);\r\n    });\r\n  }\r\n\r\n  deleteEvent(eventId) {\r\n    const event = this.calendarEvents.find(\r\n      (item) => eventId === item.id.toString()\r\n    );\r\n\r\n    const myModal = new _modal_modal_js__WEBPACK_IMPORTED_MODULE_1__.Modal( document.body, `Are you sure you want to delete \"${event.eventName}\" event?`, event.eventName,\r\n      (del) => {\r\n        if (del) {\r\n          this.deleteCallback(event);\r\n        }\r\n      }\r\n    );\r\n\r\n    myModal.render();\r\n  }\r\n\r\n  deleteCallback(event) {\r\n    const index = this.calendarEvents.findIndex((item) => event.id === item.id.toString());\r\n    this.calendarEvents.splice(index, 1);\r\n    localStorage.setItem(\"events\", JSON.stringify(this.calendarEvents));\r\n    this.render();\r\n  }\r\n\r\n  dropsDrag() {\r\n    const eventElement = document.querySelectorAll(\".message\");\r\n    \r\n    for (const event of eventElement) {\r\n      event.draggable = true;\r\n    }\r\n  }\r\n\r\n  render() {\r\n    if (this.el) {\r\n      this.destroy();\r\n    }\r\n\r\n    this.init();\r\n    this.el.innerHTML = this.template;\r\n    this.parent.appendChild(this.el);\r\n    this.initAddEvent();\r\n    this.renderEvents();\r\n    this.calendarFilter();\r\n    this.dropsDrag();\r\n  }\r\n\r\n  destroy() {\r\n    this.eventListeners.forEach(([type, handler, element]) => {\r\n      element.removeEventListener(type, handler);\r\n    });\r\n\r\n    this.el.remove();\r\n    this.el = null;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./calendar/calendar.js?");

/***/ }),

/***/ "./modal/modal.js":
/*!************************!*\
  !*** ./modal/modal.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => /* binding */ Modal\n/* harmony export */ });\nclass Modal {\r\n  constructor(parent, text, title, modalCallback) {\r\n    this.el = null;\r\n    this.parent = parent;\r\n    this.eventListeners = [];\r\n    this.text = text;\r\n    this.title = title;\r\n    this.modalCallback = modalCallback;\r\n  }\r\n\r\n  get template() {\r\n    return `\r\n        <div class=\"modal is-active\">\r\n            <div class=\"modal-background\"></div>\r\n            <div class=\"modal-card\">\r\n                <header class=\"modal-card-head\">\r\n                    <p class=\"modal-card-title\">\r\n                       Delete \"${this.title}\" event\r\n                    </p>\r\n                </header>\r\n                <section class=\"modal-card-body\">\r\n                    ${this.text}\r\n                </section>\r\n                <footer class=\"modal-card-foot is-pulled-right\">\r\n                    <button id=\"button-ok\" class=\"button is-success\">OK</button>\r\n                    <button id=\"button-cancle\" class=\"button\">Cancel</button>\r\n                </footer>\r\n            </div>\r\n        </div>\r\n        \r\n    `;\r\n  }\r\n\r\n  init() {\r\n    this.el = document.createElement(\"div\");\r\n  }\r\n\r\n  afterInit() {\r\n    this.buttonCancle = document.querySelector(\"#button-cancle\");\r\n    this.buttonOk = document.querySelector(\"#button-ok\");\r\n\r\n    const listenerCancel = this.buttonCancle.addEventListener(\"click\", () => {\r\n      this.modalCallback(false);\r\n      this.destroy();\r\n    });\r\n\r\n    const listenerOk = this.buttonOk.addEventListener(\"click\", () => {\r\n      this.modalCallback(true);\r\n      this.destroy();\r\n    });\r\n\r\n    this.eventListeners.push([\"click\", listenerCancel, this.buttonCancle]);\r\n    this.eventListeners.push([\"click\", listenerOk, this.buttonOk]);\r\n    \r\n  }\r\n\r\n  render() {\r\n    if (this.el) {\r\n      this.destroy();\r\n    }\r\n\r\n    this.init();\r\n    this.el.innerHTML = this.template;\r\n    this.parent.appendChild(this.el);\r\n    this.afterInit();\r\n  }\r\n\r\n  destroy() {\r\n    this.eventListeners.forEach(([type, handler, element]) => {\r\n      element.removeEventListener(type, handler);\r\n    });\r\n\r\n    this.el.remove();\r\n    this.el = null;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./modal/modal.js?");

/***/ }),

/***/ "./notification/notification.js":
/*!**************************************!*\
  !*** ./notification/notification.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Notification\": () => /* binding */ Notification\n/* harmony export */ });\nclass Notification {\r\n  constructor(parent, text, success, duration) {\r\n    this.el = null;\r\n    this.parent = parent;\r\n    this.eventListeners = [];\r\n    this.text = text;\r\n    this.success = success;\r\n    this.duration = duration;\r\n  }\r\n\r\n  get template() {\r\n    return `    \r\n        <div class=\"notification\">\r\n            <button id=\"delete-notification\" class=\"delete is-medium\"></button>\r\n            <div>${this.text}<div>\r\n        </div>      \r\n      `;\r\n  }\r\n\r\n  renderNotification() {\r\n    const elNotification = document.querySelector(\".notification\");\r\n    this.success ? elNotification.classList.add(\"is-primary\") : elNotification.classList.add(\"is-danger\");\r\n      \r\n    this.timer = setTimeout(() => {this.destroy()}, this.duration);\r\n  }\r\n\r\n  init() {\r\n    this.el = document.createElement(\"div\");\r\n    this.el.classList.add(\"content-notification\")\r\n  }\r\n\r\n  afterInit() {\r\n    this.deleteNotification = document.querySelector(\"#delete-notification\");\r\n\r\n    const listenerDeleteNotification = this.deleteNotification.addEventListener(\"click\", () => { \r\n        clearTimeout(this.timer);\r\n        this.destroy(); \r\n    });\r\n\r\n    this.eventListeners.push([\"click\", listenerDeleteNotification, this.deleteNotification]);\r\n  }\r\n\r\n  render() {\r\n    if (this.el) {\r\n      this.destroy();\r\n    }\r\n\r\n    this.init();\r\n    this.parent.appendChild(this.el);\r\n    this.el.innerHTML = this.template;\r\n    this.afterInit();\r\n    this.renderNotification();\r\n  }\r\n\r\n  destroy() {\r\n    this.eventListeners.forEach(([type, handler, element]) => {\r\n      element.removeEventListener(type, handler);\r\n    });\r\n\r\n    this.el.remove();\r\n    this.el = null;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./notification/notification.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_event_add_event_component_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-event/add-event-component.scss */ \"./add-event/add-event-component.scss\");\n/* harmony import */ var _calendar_calendar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar/calendar.scss */ \"./calendar/calendar.scss\");\n/* harmony import */ var _modal_modal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/modal.scss */ \"./modal/modal.scss\");\n/* harmony import */ var _notification_notification_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification/notification.scss */ \"./notification/notification.scss\");\n/* harmony import */ var _modal_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/modal.js */ \"./modal/modal.js\");\n/* harmony import */ var _add_event_add_event_component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-event/add-event-component.js */ \"./add-event/add-event-component.js\");\n/* harmony import */ var _calendar_calendar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar/calendar.js */ \"./calendar/calendar.js\");\n/* harmony import */ var _notification_notification_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification/notification.js */ \"./notification/notification.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst caledar = new _calendar_calendar_js__WEBPACK_IMPORTED_MODULE_6__.Calendar(document.body);\r\ncaledar.render();\n\n//# sourceURL=webpack:///./script.js?");

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