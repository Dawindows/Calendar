import { Calendar } from '../calendar/calendar';
import { DAYS } from '../constants/days';
import { TIMES } from '../constants/times';
import { Notification } from '../notification/notification';

export class AddEvent {
  constructor(parent) {
    this.el = null;
    this.parent = parent;
    this.eventListeners = [];
    this.members = ['Maria', 'Bob', 'Alex'];
    this.days = DAYS;
    this.times = TIMES;
  }

  get template() {
    const membersElements = this.members.map((member) => (
      `
        <option class="member" value="${member}">${member}</option>
      `
    )).join('');

    const daysElements = this.days.map((day) => (
      `
        <option value="${day.toLowerCase()}">${day}</option>
      `
    )).join('');

    const timeElements = this.times.map((time) => (
      `
        <option value="${time}">${time}:00</option>
      `
    )).join('');

    return `
      <div class="card-header">
          <p class="card-header-title">Create new event</p>
      </div>
      <div id="event-content" class="card-content">
          <div class="field">
              <div class="control">
                  <input id="event-name" class="input" type="text" placeholder="Event name"> 
              </div>
          </div>
          <div class="field">
              <div class="control is-expanded">
                  <div class="select is-fullwidth is-multiple">
                      <select id="members" multiple size="4">
                          <option selected>All members</option>
                          ${membersElements}
                      </select>
                  </div>
              </div>
          </div>
          <div class="field">
              <div class="control is-expanded">
                  <div class="select is-fullwidth">
                      <select id="weekday">
                          ${daysElements}
                      </select>
                  </div>
              </div>
          </div>
          <div class="field">
              <div class="control is-expanded">
                  <div class="select is-fullwidth">
                      <select id="time">
                          ${timeElements}
                      </select>
                  </div>
              </div>
          </div>
      </div>
      <div class="field is-grouped card-footer  is-justify-content-flex-end">
          <p class="control" id="create-event">
              <a class="button is-primary">
                  Submit
              </a>
          </p>
          <p class="control" id="cancel">
              <a class="button is-light">
                  Cancel
              </a>
          </p>
      </div>
    `;
  }

  init() {
    this.el = document.createElement('div');
    this.el.classList.add('card');
    this.el.classList.add('add-event');
    this.calendarEvents = JSON.parse(localStorage.getItem('events')) || [];
  }

  afterInit() {
    this.cancel = this.el.querySelector('#cancel');
    this.createEvent = this.el.querySelector('#create-event');
    this.eventName = document.querySelector('#event-name');
    this.members = document.querySelector('#members');
    this.memberOptions = document.querySelectorAll('.member');
    this.weekday = document.querySelector('#weekday');
    this.time = document.querySelector('#time');

    const listenerCancel = this.cancel.addEventListener('click', () => {
      this.destroy();
      const calendar = new Calendar(document.body);
      calendar.render();
    });

    const listenerCreateEvent = this.createEvent.addEventListener('click', () => {
      this.checkDate();
    });

    this.eventListeners.push(['click', listenerCreateEvent, this.createEvent]);
    this.eventListeners.push(['click', listenerCancel, this.cancel]);
  }

  checkDate() {
    const dateInfo = this.calendarEvents.find((item) => (
      item.weekday === this.weekday.value && item.time === this.time.value
    ));

    if (this.eventName.value.length <= 3) {
      this.renderNotification(
        'Filed to create an event. Event name is too short',
        false,
      );
    } else if (dateInfo) {
      this.renderNotification(
        'Filed to create an event. Time slot is already booked',
        false,
      );
    } else {
      this.addEvent();
      this.destroy();
      const calendar = new Calendar(document.body);
      calendar.render();
      this.renderNotification('Event created', true);
    }
  }

  renderNotification(textValue, booleanValue) {
    if (this.notification) {
      this.notification.destroy();
    }
    this.notification = new Notification(
      document.querySelector('#header'),
      textValue,
      booleanValue,
      3000,
    );
    this.notification.render();
  }

  addEvent() {
    const members = Array.prototype.filter
      .apply(this.memberOptions, [(item) => item.selected])
      .map((item) => item.value);
    const event = {
      eventName: this.eventName.value,
      members:
        this.members.value === 'All members'
          ? ['Maria', 'Bob', 'Alex']
          : members,
      weekday: this.weekday.value.toLowerCase(),
      time: this.time.value.replace(/(:00)/, ''),
      id: `${this.weekday.value.toLowerCase()} '-'  ${this.time.value.replace(/(:00)/, '')}`,
    };

    this.calendarEvents.push(event);
    localStorage.setItem('events', JSON.stringify(this.calendarEvents));
  }

  render() {
    if (this.el) {
      this.destroy();
    }

    this.init();
    this.el.innerHTML = this.template;
    this.parent.appendChild(this.el);
    this.afterInit();
  }

  destroy() {
    this.eventListeners.forEach(([type, handler, element]) => {
      element.removeEventListener(type, handler);
    });

    this.el.remove();
    this.el = null;
  }
}
