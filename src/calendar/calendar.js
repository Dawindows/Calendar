import { AddEvent } from '../add-event/add-event';
import { Event } from '../event/event';
import { DAYS } from '../core/constants/days';
import { TIMES } from '../core/constants/times';
import { Authorization } from '../authorization/authorization';
import { getDataFromServer } from '../core/server/api';
import { membersService } from '../core/service/members.service';
import './calendar.scss';

export class Calendar {
  constructor(parent, isAdmin, name) {
    this.el = null;
    this.parent = parent;
    this.eventListeners = [];
    this.days = DAYS;
    this.times = TIMES;
    this.isAdmin = isAdmin;
    this.name = name;
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

    const members = this.members.map((member) => (
      `
        <option class="member" value="${member.name}">${member.name}</option>
      `
    )).join('');

    return `
      <div id="calendar" class="card-content">
        <div id="calendar-header">
          <div class="card-header-title is-justify-content-space-between">
            <span>Calendar</span>
              <div>
                <div id="event" class="select">
                    <select id="user">
                        <option selected>All events</option>
                        ${members}
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
        <div class=calendar-footer>
          <div>${this.name}</div>
          <a id="sign-out">sign out</a>
        </div>
      </div>
    `;
  }

  async init() {
    this.el = document.createElement('div');
    this.el.classList.add('card');
    this.el.classList.add('calendar');
    this.members = await membersService.getAllMembers().then((data) => data);
    this.data = await getDataFromServer('events').then((data) => data);
  }

  initAddEvent() {
    this.addEvent = document.querySelector('#add-event');
    const listenerAddEvent = this.addEvent.addEventListener('click', () => {
      const addEvent = new AddEvent(document.body, this.name);
      addEvent.render();
      this.destroy();
    });

    this.eventListeners.push(['click', listenerAddEvent, this.addEvent]);
  }

  checkAdmin() {
    if (!this.isAdmin) {
      document.querySelector('#add-event').classList.add('hide');
    }
  }

  calendarFilter() {
    const filterMenu = this.el.querySelector('#user');
    filterMenu.addEventListener('change', () => {
      const getContentMessage = document.querySelectorAll('.message');
      getContentMessage.forEach((item) => {
        item.classList.remove('show', 'hide');
        item.classList.add('hide');

        if (filterMenu.value === 'All events') {
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
    if (this.data) {
      this.data.forEach((element) => {
        const elementData = JSON.parse(element.data);
        const elementId = element.id;

        const id = `${elementData.weekday}-${elementData.time}`;
        this.container = document.querySelector(`#${id.toLowerCase()}`);

        const allCalendarEvents = new Event(
          this.container,
          elementData.members,
          elementId,
          elementData.dataId,
          elementData.eventName,
          this.render.bind(this),
          this.isAdmin,
        );

        allCalendarEvents.render();
      });
    }
  }

  initSignOutHandler() {
    const signOut = document.querySelector('#sign-out');
    signOut.addEventListener('click', () => {
      localStorage.removeItem('user');
      const authorization = new Authorization(document.body);
      authorization.render();
      this.destroy();
    });
  }

  async render() {
    if (this.el) {
      this.destroy();
    }

    await this.init();
    this.el.innerHTML = this.template;
    this.parent.appendChild(this.el);
    this.initAddEvent();
    this.renderEvents();
    this.calendarFilter();
    this.checkAdmin();
    this.initSignOutHandler();
  }

  destroy() {
    this.eventListeners.forEach(([type, handler, element]) => {
      element.removeEventListener(type, handler);
    });

    this.el.remove();
    this.el = null;
  }
}
