import { AddEvent } from "../add-event/add-event-component.js";
import { Modal } from "../modal/modal.js";
import { Event } from "../event/event.js";


export class Calendar {
  constructor(parent) {
    this.el = null;
    this.parent = parent;
    this.eventListeners = [];
    this.calendarEvents = JSON.parse(localStorage.getItem("events")) || [];
  }

  get template() {
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
            <tr>
                <td>10:00</td>
                <td id="monday-10" class="container"></td>
                <td id="tuesday-10" class="container"></td>
                <td id="wednesday-10" class="container"></td>
                <td id="thursday-10" class="container"></td>
                <td id="friday-10" class="container"></td>
            </tr>
            <tr>
                <td>11:00</td>
                <td id="monday-11" class="container"></td>
                <td id="tuesday-11" class="container"></td>
                <td id="wednesday-11" class="container"></td>
                <td id="thursday-11" class="container"></td>
                <td id="friday-11" class="container"></td>
            </tr>
            <tr>
                <td>12:00</td>
                <td id="monday-12" class="container"></td>
                <td id="tuesday-12" class="container"></td>
                <td id="wednesday-12" class="container"></td>
                <td id="thursday-12" class="container"></td>
                <td id="friday-12" class="container"></td>
            </tr>
            <tr>
                <td>13:00</td>
                <td id="monday-13" class="container"></td>
                <td id="tuesday-13" class="container"></td>
                <td id="wednesday-13" class="container"></td>
                <td id="thursday-13" class="container"></td>
                <td id="friday-13" class="container"></td>
            </tr>
            <tr>
                <td>14:00</td>
                <td id="monday-14" class="container"></td>
                <td id="tuesday-14" class="container"></td>
                <td id="wednesday-14" class="container"></td>
                <td id="thursday-14" class="container"></td>
                <td id="friday-14" class="container"></td>
            </tr>
            <tr>
                <td>15:00</td>
                <td id="monday-15" class="container"></td>
                <td id="tuesday-15" class="container"></td>
                <td id="wednesday-15" class="container"></td>
                <td id="thursday-15" class="container"></td>
                <td id="friday-15" class="container"></td>
            </tr>
            <tr>
                <td>16:00</td>
                <td id="monday-16" class="container"></td>
                <td id="tuesday-16" class="container"></td>
                <td id="wednesday-16" class="container"></td>
                <td id="thursday-16" class="container"></td>
                <td id="friday-16" class="container"></td>
            </tr>
            <tr>
                <td>17:00</td>
                <td id="monday-17" class="container"></td>
                <td id="tuesday-17" class="container"></td>
                <td id="wednesday-17 class="container"></td>
                <td id="thursday-17" class="container"></td>
                <td id="friday-17" class="container"></td>
            </tr>
            <tr>
                <td>18:00</td>
                <td id="monday-18" class="container"></td>
                <td id="tuesday-18" class="container"></td>
                <td id="wednesday-18" class="container"></td>
                <td id="thursday-18" class="container"></td>
                <td id="friday-18" class="container"></td>
            </tr>  
        </table>
      </div>
          `;
  }

  init() {
    this.el = document.createElement("div");
    this.el.classList.add("card");
    this.el.classList.add("calendar");
  }

  initAddEvent() {
    this.addEvent = document.querySelector("#add-event");
    const listenerAddEvent = this.addEvent.addEventListener("click", (event) => {
      const addEvent = new AddEvent(document.body);
      addEvent.render();
      this.destroy();
    });

    this.eventListeners.push(["click", listenerAddEvent, this.addEvent]);
  }

  calendarFilter() {
    const filterMenu = document.querySelector("#user");
    const listenerFilterMenu = filterMenu.addEventListener("change", (event) => {
      const getContentMessage = document.querySelectorAll(".message");
      getContentMessage.forEach((item) => {
        item.classList.remove("show", "hide");
        item.classList.add("hide");

        if (filterMenu.value === "All members") {
          item.classList.remove("show", "hide");
          item.classList.add("show");
        }

        if (item.classList.contains(filterMenu.value)) {
          item.classList.remove("show", "hide");
          item.classList.add("show");
        }
      });
    });
  }

  renderEvents() {
    this.calendarEvents.forEach((item, key) => {
      let str = "";
      str = item.weekdays + "-" + item.time.replace(/(:00)/, "");
      this.container = document.querySelector("#" + str.toLowerCase());
      const allCalendarEvents = new Event(this.container,  item.members, item.id, item.eventName)
      allCalendarEvents.render()
    })
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
