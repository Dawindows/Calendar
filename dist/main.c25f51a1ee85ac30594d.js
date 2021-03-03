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

/***/ "./add-event/add-event.js":
/*!********************************!*\
  !*** ./add-event/add-event.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddEvent\": () => /* binding */ AddEvent\n/* harmony export */ });\n/* harmony import */ var _calendar_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calendar/calendar */ \"./calendar/calendar.js\");\n/* harmony import */ var _core_constants_days__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/constants/days */ \"./core/constants/days.js\");\n/* harmony import */ var _core_constants_times__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/constants/times */ \"./core/constants/times.js\");\n/* harmony import */ var _notification_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notification/notification */ \"./notification/notification.js\");\n/* harmony import */ var _core_service_server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/service/server.service */ \"./core/service/server.service.js\");\n/* harmony import */ var _add_event_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-event.scss */ \"./add-event/add-event.scss\");\n\n\n\n\n\n\nclass AddEvent {\n  constructor(parent, name, data, members) {\n    this.el = null;\n    this.parent = parent;\n    this.eventListeners = [];\n    this.days = _core_constants_days__WEBPACK_IMPORTED_MODULE_1__.DAYS;\n    this.times = _core_constants_times__WEBPACK_IMPORTED_MODULE_2__.TIMES;\n    this.name = name;\n    this.data = data;\n    this.members = members;\n  }\n\n  get template() {\n    const membersElements = this.members.map(member => `\n        <option class=\"member\" value=\"${member.name}\">${member.name}</option>\n      `).join('');\n    const daysElements = this.days.map(day => `\n        <option value=\"${day.toLowerCase()}\">${day}</option>\n      `).join('');\n    const timeElements = this.times.map(time => `\n        <option value=\"${time}\">${time}:00</option>\n      `).join('');\n    return `\n      <div class=\"card-header\">\n          <p class=\"card-header-title\">Create new event</p>\n      </div>\n      <div id=\"event-content\" class=\"card-content\">\n          <div class=\"field\">\n              <div class=\"control\">\n                  <input id=\"event-name\" class=\"input\" type=\"text\" placeholder=\"Event name\"> \n              </div>\n          </div>\n          <div class=\"field\">\n              <div class=\"control is-expanded\">\n                  <div class=\"select is-fullwidth is-multiple\">\n                      <select id=\"members\" multiple size=\"4\">\n                          <option selected>All members</option>\n                          ${membersElements}\n                      </select>\n                  </div>\n              </div>\n          </div>\n          <div class=\"field\">\n              <div class=\"control is-expanded\">\n                  <div class=\"select is-fullwidth\">\n                      <select id=\"weekday\">\n                          ${daysElements}\n                      </select>\n                  </div>\n              </div>\n          </div>\n          <div class=\"field\">\n              <div class=\"control is-expanded\">\n                  <div class=\"select is-fullwidth\">\n                      <select id=\"time\">\n                          ${timeElements}\n                      </select>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"field is-grouped card-footer  is-justify-content-flex-end\">\n          <p class=\"control\" id=\"create-event\">\n              <a class=\"button is-primary\">\n                  Submit\n              </a>\n          </p>\n          <p class=\"control\" id=\"cancel\">\n              <a class=\"button is-light\">\n                  Cancel\n              </a>\n          </p>\n      </div>\n    `;\n  }\n\n  init() {\n    this.el = document.createElement('div');\n    this.el.classList.add('card');\n    this.el.classList.add('add-event');\n  }\n\n  afterInit() {\n    this.cancel = this.el.querySelector('#cancel');\n    this.createEvent = this.el.querySelector('#create-event');\n    this.eventName = document.querySelector('#event-name');\n    this.membersSelected = document.querySelector('#members');\n    this.memberOptions = document.querySelectorAll('.member');\n    this.weekday = document.querySelector('#weekday');\n    this.time = document.querySelector('#time');\n    const listenerCancel = this.cancel.addEventListener('click', () => {\n      this.destroy();\n      const calendar = new _calendar_calendar__WEBPACK_IMPORTED_MODULE_0__.Calendar(document.body, true, this.name);\n      calendar.render();\n    });\n    const listenerCreateEvent = this.createEvent.addEventListener('click', () => {\n      this.checkDate();\n    });\n    this.eventListeners.push(['click', listenerCreateEvent, this.createEvent]);\n    this.eventListeners.push(['click', listenerCancel, this.cancel]);\n  }\n\n  async checkDate() {\n    if (this.data) {\n      this.dateInfo = this.data.find(item => item.weekday === this.weekday.value && item.time === this.time.value);\n    }\n\n    if (this.eventName.value.length <= 3) {\n      this.renderNotification('Filed to create an event. Event name is too short', false);\n    } else if (this.dateInfo) {\n      this.renderNotification('Filed to create an event. Time slot is already booked', false);\n    } else {\n      await this.addEvent();\n      this.destroy();\n      this.renderNotification('Event created', true);\n      setTimeout(() => {\n        const calendar = new _calendar_calendar__WEBPACK_IMPORTED_MODULE_0__.Calendar(document.body, true, this.name);\n        calendar.render();\n      }, 300);\n    }\n  }\n\n  renderNotification(textValue, booleanValue) {\n    if (this.notification) {\n      this.notification.destroy();\n    }\n\n    this.notification = new _notification_notification__WEBPACK_IMPORTED_MODULE_3__.Notification(document.querySelector('#header'), textValue, booleanValue, 3000);\n    this.notification.render();\n  }\n\n  addEvent() {\n    const members = Array.prototype.filter.apply(this.memberOptions, [item => item.selected]).map(item => item.value);\n    const newEvent = {\n      eventName: this.eventName.value,\n      members: this.membersSelected.value === 'All members' ? this.members.map(item => item.name) : members,\n      weekday: this.weekday.value.toLowerCase(),\n      time: this.time.value.replace(/(:00)/, ''),\n      dataId: `${this.weekday.value.toLowerCase()}-${this.time.value.replace(/(:00)/, '')}`\n    };\n    _core_service_server_service__WEBPACK_IMPORTED_MODULE_4__.serverService.createDataOnServer('events', newEvent);\n  }\n\n  render() {\n    if (this.el) {\n      this.destroy();\n    }\n\n    this.init();\n    this.el.innerHTML = this.template;\n    this.parent.appendChild(this.el);\n    this.afterInit();\n  }\n\n  destroy() {\n    this.eventListeners.forEach(([type, handler, element]) => {\n      element.removeEventListener(type, handler);\n    });\n    this.el.remove();\n    this.el = null;\n  }\n\n}\n\n//# sourceURL=webpack:///./add-event/add-event.js?");

/***/ }),

/***/ "./authorization/authorization.js":
/*!****************************************!*\
  !*** ./authorization/authorization.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Authorization\": () => /* binding */ Authorization\n/* harmony export */ });\n/* harmony import */ var _calendar_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calendar/calendar */ \"./calendar/calendar.js\");\n/* harmony import */ var _core_service_members_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/service/members.service */ \"./core/service/members.service.js\");\n\n\nclass Authorization {\n  constructor(parent) {\n    this.el = null;\n    this.parent = parent;\n    this.eventListeners = [];\n  }\n\n  get template() {\n    this.membersElements = this.members.map(member => `\n          <option class=\"member\" value=\"${member.name}\">${member.name}</option>\n    `).join('');\n    return `\n        <div class=\"modal is-active\" id=\"authorization\">\n            <div class=\"modal-background\"></div>\n            <div class=\"modal-card\">\n                <header class=\"modal-card-head\">\n                    <p class=\"modal-card-title\">\n                       Please authorize\n                    </p>\n                </header>\n                <section class=\"modal-card-body\">\n                    <div id=\"event\" class=\"select is-fullwidth\">\n                        <select id=\"user\">\n                            ${this.membersElements}\n                        </select>\n                    </div>\n                </section>\n                <footer class=\"modal-card-foot is-pulled-right\">\n                    <button id=\"authorization-button-ok\" class=\"button is-success\">Confirm</button>\n                </footer>\n            </div>\n        </div>\n   \n    `;\n  }\n\n  async init() {\n    this.el = document.createElement('div');\n    this.members = await _core_service_members_service__WEBPACK_IMPORTED_MODULE_1__.membersService.getAllMembers().then(data => data);\n  }\n\n  afterInit() {\n    this.buttonOk = document.querySelector('#authorization-button-ok');\n    const nameUser = this.el.querySelector('#user');\n    const listenerOk = this.buttonOk.addEventListener('click', () => {\n      const memberElement = this.members.find(index => index.name === nameUser.value);\n      localStorage.setItem('member', JSON.stringify(memberElement));\n      const calendar = new _calendar_calendar__WEBPACK_IMPORTED_MODULE_0__.Calendar(document.body, memberElement._isAdmin, memberElement.name);\n      this.destroy();\n      calendar.render();\n    });\n    this.eventListeners.push(['click', listenerOk, this.buttonOk]);\n  }\n\n  async render() {\n    if (this.el) {\n      this.destroy();\n    }\n\n    await this.init();\n    this.el.innerHTML = this.template;\n    this.parent.appendChild(this.el);\n    this.afterInit();\n  }\n\n  destroy() {\n    this.eventListeners.forEach(([type, handler, element]) => {\n      element.removeEventListener(type, handler);\n    });\n    this.el.remove();\n    this.el = null;\n  }\n\n}\n\n//# sourceURL=webpack:///./authorization/authorization.js?");

/***/ }),

/***/ "./calendar/calendar.js":
/*!******************************!*\
  !*** ./calendar/calendar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Calendar\": () => /* binding */ Calendar\n/* harmony export */ });\n/* harmony import */ var _add_event_add_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-event/add-event */ \"./add-event/add-event.js\");\n/* harmony import */ var _event_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event/event */ \"./event/event.js\");\n/* harmony import */ var _core_constants_days__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/constants/days */ \"./core/constants/days.js\");\n/* harmony import */ var _core_constants_times__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/constants/times */ \"./core/constants/times.js\");\n/* harmony import */ var _authorization_authorization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authorization/authorization */ \"./authorization/authorization.js\");\n/* harmony import */ var _core_service_server_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/service/server.service */ \"./core/service/server.service.js\");\n/* harmony import */ var _core_service_members_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/service/members.service */ \"./core/service/members.service.js\");\n/* harmony import */ var _calendar_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar.scss */ \"./calendar/calendar.scss\");\n\n\n\n\n\n\n\n\nclass Calendar {\n  constructor(parent, isAdmin, name) {\n    this.el = null;\n    this.parent = parent;\n    this.eventListeners = [];\n    this.days = _core_constants_days__WEBPACK_IMPORTED_MODULE_2__.DAYS;\n    this.times = _core_constants_times__WEBPACK_IMPORTED_MODULE_3__.TIMES;\n    this.isAdmin = isAdmin;\n    this.name = name;\n  }\n\n  get template() {\n    const table = this.times.map(time => {\n      const items = this.days.map(day => `<td id=\"${day.toLowerCase()}-${time}\" class=\"container\"></td>`).join('');\n      return `\n        <tr>\n          <td>${time}:00</td>\n          ${items}\n        </tr>\n      `;\n    }).join('');\n    const members = this.members.map(member => `\n        <option class=\"member\" value=\"${member.name}\">${member.name}</option>\n      `).join('');\n    return `\n      <div id=\"calendar\" class=\"card-content\">\n        <div id=\"calendar-header\">\n          <div class=\"card-header-title is-justify-content-space-between\">\n            <span>Calendar</span>\n              <div>\n                <div id=\"event\" class=\"select\">\n                    <select id=\"user\">\n                        <option selected>All events</option>\n                        ${members}\n                    </select>\n                </div>\n                <button id=\"add-event\" class=\"button is-primary\">New event +</button>\n              </div>\n          </div>\n        </div>\n        <table class=\"table is-bordered is-narrow\">\n            <tr>\n                <th>Name</th>\n                <th>Mon</th>\n                <th>Tue</th>\n                <th>Wed</th>\n                <th>Thu</th>\n                <th>Fri</th>\n            </tr>\n            ${table}\n        </table>\n        <div class=calendar-footer>\n          <div>${this.name}</div>\n          <a id=\"sign-out\">sign out</a>\n        </div>\n      </div>\n    `;\n  }\n\n  async init() {\n    this.el = document.createElement('div');\n    this.el.classList.add('card');\n    this.el.classList.add('calendar');\n    this.members = await _core_service_members_service__WEBPACK_IMPORTED_MODULE_6__.membersService.getAllMembers().then(data => data);\n    this.data = await _core_service_server_service__WEBPACK_IMPORTED_MODULE_5__.serverService.getDataFromServer('events').then(data => data);\n    this.getData = this.data.map(item => JSON.parse(item.data));\n  }\n\n  initAddEvent() {\n    this.addEvent = document.querySelector('#add-event');\n    const listenerAddEvent = this.addEvent.addEventListener('click', () => {\n      const addEvent = new _add_event_add_event__WEBPACK_IMPORTED_MODULE_0__.AddEvent(document.body, this.name, this.getData, this.members);\n      addEvent.render();\n      this.destroy();\n    });\n    this.eventListeners.push(['click', listenerAddEvent, this.addEvent]);\n  }\n\n  checkAdmin() {\n    if (!this.isAdmin) {\n      document.querySelector('#add-event').classList.add('hide');\n    }\n  }\n\n  calendarFilter() {\n    const filterMenu = this.el.querySelector('#user');\n    filterMenu.addEventListener('change', () => {\n      const getContentMessage = document.querySelectorAll('.message');\n      getContentMessage.forEach(item => {\n        item.classList.remove('show', 'hide');\n        item.classList.add('hide');\n\n        if (filterMenu.value === 'All events') {\n          item.classList.remove('show', 'hide');\n          item.classList.add('show');\n        }\n\n        if (item.classList.contains(filterMenu.value)) {\n          item.classList.remove('show', 'hide');\n          item.classList.add('show');\n        }\n      });\n    });\n  }\n\n  renderEvents() {\n    if (this.data) {\n      this.data.forEach(element => {\n        const elementData = JSON.parse(element.data);\n        const elementId = element.id;\n        const id = `${elementData.weekday}-${elementData.time}`;\n        this.container = document.querySelector(`#${id.toLowerCase()}`);\n        const allCalendarEvents = new _event_event__WEBPACK_IMPORTED_MODULE_1__.Event(this.container, elementData.members, elementId, elementData.dataId, elementData.eventName, this.render.bind(this), this.isAdmin, this.getData);\n        allCalendarEvents.render();\n      });\n    }\n  }\n\n  initSignOutHandler() {\n    const signOut = document.querySelector('#sign-out');\n    signOut.addEventListener('click', () => {\n      localStorage.removeItem('user');\n      const authorization = new _authorization_authorization__WEBPACK_IMPORTED_MODULE_4__.Authorization(document.body);\n      authorization.render();\n      this.destroy();\n    });\n  }\n\n  async render() {\n    if (this.el) {\n      this.destroy();\n    }\n\n    await this.init();\n    this.el.innerHTML = this.template;\n    this.parent.appendChild(this.el);\n    this.initAddEvent();\n    this.renderEvents();\n    this.calendarFilter();\n    this.checkAdmin();\n    this.initSignOutHandler();\n  }\n\n  destroy() {\n    this.eventListeners.forEach(([type, handler, element]) => {\n      element.removeEventListener(type, handler);\n    });\n    this.el.remove();\n    this.el = null;\n  }\n\n}\n\n//# sourceURL=webpack:///./calendar/calendar.js?");

/***/ }),

/***/ "./core/constants/days.js":
/*!********************************!*\
  !*** ./core/constants/days.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DAYS\": () => /* binding */ DAYS\n/* harmony export */ });\nconst DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];\n\n//# sourceURL=webpack:///./core/constants/days.js?");

/***/ }),

/***/ "./core/constants/times.js":
/*!*********************************!*\
  !*** ./core/constants/times.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TIMES\": () => /* binding */ TIMES\n/* harmony export */ });\nconst TIMES = ['10', '11', '12', '13', '14', '15', '16', '17', '18'];\n\n//# sourceURL=webpack:///./core/constants/times.js?");

/***/ }),

/***/ "./core/create-member/create-member.js":
/*!*********************************************!*\
  !*** ./core/create-member/create-member.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMember\": () => /* binding */ getMember\n/* harmony export */ });\n/* harmony import */ var _modals_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modals/user */ \"./core/modals/user.js\");\n/* harmony import */ var _modals_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/admin */ \"./core/modals/admin.js\");\n/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/server.service */ \"./core/service/server.service.js\");\n\n\n\n\nfunction createNewMember(name, isAdmin) {\n  return isAdmin === 'true' ? new _modals_admin__WEBPACK_IMPORTED_MODULE_1__.Admin(name) : new _modals_user__WEBPACK_IMPORTED_MODULE_0__.User(name);\n}\n\nconst getMember = async () => {\n  const members = await _service_server_service__WEBPACK_IMPORTED_MODULE_2__.serverService.getDataFromServer('members');\n  const data = members.map(element => createNewMember(JSON.parse(element.data).name, JSON.parse(element.data).isAdmin));\n  return data;\n};\n\n//# sourceURL=webpack:///./core/create-member/create-member.js?");

/***/ }),

/***/ "./core/error-decorator/error-decorator.js":
/*!*************************************************!*\
  !*** ./core/error-decorator/error-decorator.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"errorDecorator\": () => /* binding */ errorDecorator\n/* harmony export */ });\n/* harmony import */ var _notification_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../notification/notification */ \"./notification/notification.js\");\n\nconst errorDecorator = (target, key, descriptor) => {\n  const origina = descriptor.value;\n\n  descriptor.value = async function descriptorValue(...args) {\n    try {\n      return await origina.apply(this, args);\n    } catch (err) {\n      const notification = new _notification_notification__WEBPACK_IMPORTED_MODULE_0__.Notification(document.querySelector('#header'), err, false, 100000);\n      notification.render();\n    }\n  };\n\n  return descriptor;\n};\n\n//# sourceURL=webpack:///./core/error-decorator/error-decorator.js?");

/***/ }),

/***/ "./core/modals/admin.js":
/*!******************************!*\
  !*** ./core/modals/admin.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Admin\": () => /* binding */ Admin\n/* harmony export */ });\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./core/modals/user.js\");\n\nclass Admin extends _user__WEBPACK_IMPORTED_MODULE_0__.User {\n  constructor(name) {\n    super(name);\n    this._isAdmin = true;\n  }\n\n}\n\n//# sourceURL=webpack:///./core/modals/admin.js?");

/***/ }),

/***/ "./core/modals/user.js":
/*!*****************************!*\
  !*** ./core/modals/user.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": () => /* binding */ User\n/* harmony export */ });\nclass User {\n  constructor(name) {\n    this.name = name;\n    this._isAdmin = false;\n  }\n\n  get isAdmin() {\n    return this._isAdmin;\n  }\n\n}\n\n//# sourceURL=webpack:///./core/modals/user.js?");

/***/ }),

/***/ "./core/service/members.service.js":
/*!*****************************************!*\
  !*** ./core/service/members.service.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"membersService\": () => /* binding */ membersService\n/* harmony export */ });\n/* harmony import */ var _create_member_create_member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-member/create-member */ \"./core/create-member/create-member.js\");\n\n\nclass MembersService {\n  getAllMembers() {\n    return (0,_create_member_create_member__WEBPACK_IMPORTED_MODULE_0__.getMember)().then(data => data);\n  }\n\n}\n\nconst membersService = new MembersService();\n\n//# sourceURL=webpack:///./core/service/members.service.js?");

/***/ }),

/***/ "./core/service/server.service.js":
/*!****************************************!*\
  !*** ./core/service/server.service.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"serverService\": () => /* binding */ serverService\n/* harmony export */ });\n/* harmony import */ var _error_decorator_error_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error-decorator/error-decorator */ \"./core/error-decorator/error-decorator.js\");\nvar _class;\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }\n\n\nlet ServerService = (_class = class ServerService {\n  constructor() {\n    this.url = 'http://158.101.166.74:8080/api/data/david_sokur';\n\n    if (typeof ServerService.instance === 'object') {\n      return ServerService.instance;\n    }\n\n    ServerService.instance = this;\n    return this;\n  }\n\n  async getDataFromServer(entityName) {\n    const response = await fetch(`${this.url}/${entityName}`);\n    const content = await response.json();\n    return content;\n  }\n\n  async deleteDataOnServer(entityName, DataId) {\n    await fetch(`${this.url}/${entityName}/${DataId}`, {\n      method: 'DELETE',\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8'\n      }\n    });\n  }\n\n  async createDataOnServer(entityName, newDataContent) {\n    await fetch(`${this.url}/${entityName}`, {\n      method: 'POST',\n      headers: {\n        Accept: 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        data: JSON.stringify(newDataContent)\n      })\n    });\n  }\n\n  async ChangeDataOnServer(entityName, changeDataContent, DataId) {\n    await fetch(`${this.url}/${entityName}/${DataId}`, {\n      method: 'PUT',\n      headers: {\n        Accept: 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        data: changeDataContent\n      })\n    });\n  }\n\n}, (_applyDecoratedDescriptor(_class.prototype, \"getDataFromServer\", [_error_decorator_error_decorator__WEBPACK_IMPORTED_MODULE_0__.errorDecorator], Object.getOwnPropertyDescriptor(_class.prototype, \"getDataFromServer\"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, \"deleteDataOnServer\", [_error_decorator_error_decorator__WEBPACK_IMPORTED_MODULE_0__.errorDecorator], Object.getOwnPropertyDescriptor(_class.prototype, \"deleteDataOnServer\"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, \"createDataOnServer\", [_error_decorator_error_decorator__WEBPACK_IMPORTED_MODULE_0__.errorDecorator], Object.getOwnPropertyDescriptor(_class.prototype, \"createDataOnServer\"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, \"ChangeDataOnServer\", [_error_decorator_error_decorator__WEBPACK_IMPORTED_MODULE_0__.errorDecorator], Object.getOwnPropertyDescriptor(_class.prototype, \"ChangeDataOnServer\"), _class.prototype)), _class);\nconst serverService = new ServerService();\n\n//# sourceURL=webpack:///./core/service/server.service.js?");

/***/ }),

/***/ "./event/event.js":
/*!************************!*\
  !*** ./event/event.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Event\": () => /* binding */ Event\n/* harmony export */ });\n/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal/modal */ \"./modal/modal.js\");\n/* harmony import */ var _core_service_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/service/server.service */ \"./core/service/server.service.js\");\n/* harmony import */ var _event_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.scss */ \"./event/event.scss\");\n\n\n\nclass Event {\n  constructor(parent, members, id, dataId, eventName, eventCallback, isAdmin, data) {\n    this.el = null;\n    this.parent = parent;\n    this.eventListeners = [];\n    this.members = members;\n    this.id = id;\n    this.dataId = dataId;\n    this.eventCallback = eventCallback;\n    this.eventName = eventName;\n    this.isAdmin = isAdmin;\n    this.data = data;\n  }\n\n  get template() {\n    return `\n        <div class=\"message is-info ${this.members.join(' ')}\" data-item=\"${this.dataId}\" data-id=\"${this.id}\" draggable=\"true\">\n        <span class=\"message-header\">\n            ${this.eventName}\n            <button class=\"delete-event delete is-small\" event-id=\"${this.dataId}\"></button>\n        </span>\n        </div>\n    `;\n  }\n\n  init() {\n    this.el = document.createElement('div');\n  }\n\n  initEventListeners() {\n    this.deleteButton = this.el.querySelector('.delete-event');\n    const id = this.deleteButton.getAttribute('event-id');\n    const listenerBtn = this.deleteButton.addEventListener('click', this.openConfirmationModal.bind(this, id));\n    this.eventListeners.push(['click', listenerBtn, this.deleteButton]);\n  }\n\n  checkAdmin() {\n    const buttonDeleteEvent = document.querySelectorAll('.delete-event');\n\n    if (!this.isAdmin) {\n      buttonDeleteEvent.forEach(item => {\n        item.classList.add('hide');\n      });\n    } else {\n      this.dropsDrag();\n    }\n  }\n\n  openConfirmationModal() {\n    const myModal = new _modal_modal__WEBPACK_IMPORTED_MODULE_0__.Modal(document.body, `Are you sure you want to delete \"${this.eventName}\" event?`, this.eventName, del => {\n      if (del) {\n        this.deleteCallback();\n      }\n    });\n    myModal.render();\n  }\n\n  deleteCallback() {\n    _core_service_server_service__WEBPACK_IMPORTED_MODULE_1__.serverService.deleteDataOnServer('events', this.id);\n    this.destroy();\n  }\n\n  dropsDrag() {\n    const dragItems = document.querySelectorAll('.message');\n    const dragZones = document.querySelectorAll('.container');\n    const self = this;\n\n    function handlerDragstart(event) {\n      event.dataTransfer.setData('dragItem', JSON.stringify({\n        item: this.dataset.item,\n        id: this.dataset.id\n      }));\n      this.classList.add('drag-item-start');\n    }\n\n    function handlerDragend() {\n      this.classList.remove('drag-item-start');\n    }\n\n    function handlerDrag() {}\n\n    function handlerDragsenter(event) {\n      event.preventDefault();\n      this.classList.add('drag-zone-active');\n    }\n\n    function handlerDragleave() {\n      this.classList.remove('drag-zone-active');\n    }\n\n    function handlerDragover(event) {\n      event.preventDefault();\n    }\n\n    function handlerDrop(event) {\n      const dragFlag = event.dataTransfer.getData('dragItem');\n      const eventTargetId = event.target.id;\n\n      if (eventTargetId) {\n        self.updateEvent(eventTargetId, dragFlag);\n      }\n    }\n\n    dragItems.forEach(dragItem => {\n      dragItem.addEventListener('dragstart', handlerDragstart);\n      dragItem.addEventListener('dragend', handlerDragend);\n      dragItem.addEventListener('drag', handlerDrag);\n    });\n    dragZones.forEach(dragZone => {\n      dragZone.addEventListener('dragenter', handlerDragsenter);\n      dragZone.addEventListener('dragleave', handlerDragleave);\n      dragZone.addEventListener('dragover', handlerDragover);\n      dragZone.addEventListener('drop', handlerDrop);\n    });\n  }\n\n  updateEvent(eventNewId, eventPriviousId) {\n    const eventFromServer = this.data.find(item => item.dataId === JSON.parse(eventPriviousId).item);\n    [eventFromServer.weekday, eventFromServer.time] = eventNewId.split('-');\n    const changeEvent = {\n      eventName: eventFromServer.eventName,\n      members: eventFromServer.members,\n      weekday: eventFromServer.weekday,\n      time: eventFromServer.time,\n      dataId: eventNewId\n    };\n    _core_service_server_service__WEBPACK_IMPORTED_MODULE_1__.serverService.ChangeDataOnServer('events', JSON.stringify(changeEvent), JSON.parse(eventPriviousId).id);\n    setTimeout(() => {\n      this.eventCallback();\n    }, 500);\n  }\n\n  render() {\n    if (this.el) {\n      this.destroy();\n    }\n\n    this.init();\n    this.parent.appendChild(this.el);\n    this.parent.classList.remove('container');\n    this.el.innerHTML = this.template;\n    this.initEventListeners();\n    this.checkAdmin();\n  }\n\n  destroy() {\n    this.eventListeners.forEach(([type, handler, element]) => {\n      element.removeEventListener(type, handler);\n    });\n    this.el.remove();\n    this.el = null;\n  }\n\n}\n\n//# sourceURL=webpack:///./event/event.js?");

/***/ }),

/***/ "./modal/modal.js":
/*!************************!*\
  !*** ./modal/modal.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => /* binding */ Modal\n/* harmony export */ });\n/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.scss */ \"./modal/modal.scss\");\n\nclass Modal {\n  constructor(parent, text, title, modalCallback) {\n    this.el = null;\n    this.parent = parent;\n    this.eventListeners = [];\n    this.text = text;\n    this.title = title;\n    this.modalCallback = modalCallback;\n  }\n\n  get template() {\n    return `\n        <div class=\"modal is-active\">\n            <div class=\"modal-background\"></div>\n            <div class=\"modal-card\">\n                <header class=\"modal-card-head\">\n                    <p class=\"modal-card-title\">\n                       Delete \"${this.title}\" event\n                    </p>\n                </header>\n                <section class=\"modal-card-body\">\n                    ${this.text}\n                </section>\n                <footer class=\"modal-card-foot is-pulled-right\">\n                    <button id=\"button-ok\" class=\"button is-success\">OK</button>\n                    <button id=\"button-cancel\" class=\"button\">Cancel</button>\n                </footer>\n            </div>\n        </div>\n        \n    `;\n  }\n\n  init() {\n    this.el = document.createElement('div');\n  }\n\n  afterInit() {\n    this.buttonCancel = document.querySelector('#button-cancel');\n    this.buttonOk = document.querySelector('#button-ok');\n    const listenerCancel = this.buttonCancel.addEventListener('click', () => {\n      this.modalCallback(false);\n      this.destroy();\n    });\n    const listenerOk = this.buttonOk.addEventListener('click', () => {\n      this.modalCallback(true);\n      this.destroy();\n    });\n    this.eventListeners.push(['click', listenerCancel, this.buttonCancel]);\n    this.eventListeners.push(['click', listenerOk, this.buttonOk]);\n  }\n\n  render() {\n    if (this.el) {\n      this.destroy();\n    }\n\n    this.init();\n    this.el.innerHTML = this.template;\n    this.parent.appendChild(this.el);\n    this.afterInit();\n  }\n\n  destroy() {\n    this.eventListeners.forEach(([type, handler, element]) => {\n      element.removeEventListener(type, handler);\n    });\n    this.el.remove();\n    this.el = null;\n  }\n\n}\n\n//# sourceURL=webpack:///./modal/modal.js?");

/***/ }),

/***/ "./notification/notification.js":
/*!**************************************!*\
  !*** ./notification/notification.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Notification\": () => /* binding */ Notification\n/* harmony export */ });\n/* harmony import */ var _notification_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.scss */ \"./notification/notification.scss\");\n\nclass Notification {\n  constructor(parent, text, success, duration) {\n    this.el = null;\n    this.parent = parent;\n    this.eventListeners = [];\n    this.text = text;\n    this.success = success;\n    this.duration = duration;\n  }\n\n  get template() {\n    return `    \n        <div class=\"notification is-light\">\n            <button id=\"delete-notification\" class=\"delete is-medium\"></button>\n            <div>${this.text}<div>\n        </div>      \n      `;\n  }\n\n  renderNotification() {\n    const elNotification = document.querySelector('.notification');\n\n    if (this.success) {\n      elNotification.classList.add('is-primary');\n    } else {\n      elNotification.classList.add('is-danger');\n    }\n\n    this.timer = setTimeout(() => {\n      this.destroy();\n    }, this.duration);\n  }\n\n  init() {\n    this.el = document.createElement('div');\n    this.el.classList.add('content-notification');\n  }\n\n  afterInit() {\n    this.deleteNotification = document.querySelector('#delete-notification');\n    const listenerDeleteNotification = this.deleteNotification.addEventListener('click', () => {\n      clearTimeout(this.timer);\n      this.destroy();\n    });\n    this.eventListeners.push(['click', listenerDeleteNotification, this.deleteNotification]);\n  }\n\n  render() {\n    if (this.el) {\n      this.destroy();\n    }\n\n    this.init();\n    this.parent.appendChild(this.el);\n    this.el.innerHTML = this.template;\n    this.afterInit();\n    this.renderNotification();\n  }\n\n  destroy() {\n    if (!this.el) {\n      return;\n    }\n\n    this.eventListeners.forEach(([type, handler, element]) => {\n      element.removeEventListener(type, handler);\n    });\n    this.el.remove();\n    this.el = null;\n  }\n\n}\n\n//# sourceURL=webpack:///./notification/notification.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _authorization_authorization_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorization/authorization.scss */ \"./authorization/authorization.scss\");\n/* harmony import */ var _authorization_authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorization/authorization */ \"./authorization/authorization.js\");\n/* harmony import */ var _calendar_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar/calendar */ \"./calendar/calendar.js\");\n\n\n\nconst memberElement = JSON.parse(localStorage.getItem('member')) || [];\n\nif (memberElement.name) {\n  const calendar = new _calendar_calendar__WEBPACK_IMPORTED_MODULE_2__.Calendar(document.body, memberElement._isAdmin, memberElement.name);\n  calendar.render();\n} else {\n  const authorization = new _authorization_authorization__WEBPACK_IMPORTED_MODULE_1__.Authorization(document.body);\n  authorization.render();\n}\n\n//# sourceURL=webpack:///./script.js?");

/***/ }),

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