import { AddEvent } from '../add-event/add-event';
import { Event } from '../event/event';
import { DAYS } from '../constants/days';
import { TIMES } from '../constants/times';

export class Calendar {
  constructor(parent) {
    this.el = null;
    this.parent = parent;
    this.eventListeners = [];
    this.days = DAYS;
    this.times = TIMES;
  }

  get template() {
    const table = this.times.map((time) => {
      const items = this.days.map((day) => (
        `<td id="${day.toLowerCase()}-${time}" class="container"></td>`
      )).join('');

      return `
        <tr>
          <td>${time}:00</td>
          ${items}
        </tr>
      `;
    }).join('');

    return `
      <div id="calendar" class="card-content">
        <div id="calendar-header">
          <div class="card-header-title is-justify-content-space-between">
            <span>Calendar</span>
              <div>
                <div id="event" class="select">
                    <select id="user">
                        <option selected>All members</option>
                        <option>Maria</option>
                        <option>Bob</option>
                        <option>Alex</option>
                    </select>
                </div>
                <button id="add-event" class="button is-primary">New event +</button>
              </div>
          </div>
        </div>
        <table class="table is-bordered is-narrow">
            <tr>
                <th>Name</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
            </tr>
            ${table}
        </table>
      </div>
          `;
  }

  init() {
    this.el = document.createElement('div');
    this.el.classList.add('card');
    this.el.classList.add('calendar');
    this.calendarEvents = JSON.parse(localStorage.getItem('events')) || [];
  }

  initAddEvent() {
    this.addEvent = document.querySelector('#add-event');
    const listenerAddEvent = this.addEvent.addEventListener('click', () => {
      const addEvent = new AddEvent(document.body);
      addEvent.render();
      this.destroy();
    });

    this.eventListeners.push(['click', listenerAddEvent, this.addEvent]);
  }

  calendarFilter() {
    const filterMenu = this.el.querySelector('#user');
    filterMenu.addEventListener('change', () => {
      const getContentMessage = document.querySelectorAll('.message');
      getContentMessage.forEach((item) => {
        item.classList.remove('show', 'hide');
        item.classList.add('hide');

        if (filterMenu.value === 'All members') {
          item.classList.remove('show', 'hide');
          item.classList.add('show');
        }

        if (item.classList.contains(filterMenu.value)) {
          item.classList.remove('show', 'hide');
          item.classList.add('show');
        }
      });
    });
  }

  renderEvents() {
    this.calendarEvents.forEach((item) => {
      const id = `${item.weekday}-${item.time}`;
      this.container = document.querySelector(`#${id.toLowerCase()}`);
      const allCalendarEvents = new Event(
        this.container,
        item.members,
        item.id,
        item.eventName,
        this.render.bind(this),
      );
      allCalendarEvents.render();
    });
  }

  render() {
    if (this.el) {
      this.destroy();
    }

    this.init();
    this.el.innerHTML = this.template;
    this.parent.appendChild(this.el);
    this.initAddEvent();
    this.renderEvents();
    this.calendarFilter();
  }

  destroy() {
    this.eventListeners.forEach(([type, handler, element]) => {
      element.removeEventListener(type, handler);
    });

    this.el.remove();
    this.el = null;
  }
}
