import { AddEvent } from "../add-event/add-event-component.js";
import { Modal } from "../modal/modal.js";

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
                <td id="wednesday-17 class="container""></td>
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
    const listnerAddEvent = this.addEvent.addEventListener("click", (event) => {
      const addEvent = new AddEvent(document.body);
      addEvent.render();
      this.destroy();
    });

    this.eventListeners.push(["click", listnerAddEvent, this.addEvent]);
  }

  calendarFilter() {
    const filterMenu = document.querySelector("#user");
    const listnerfilterMenu = filterMenu.addEventListener("change", (event) => {
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
      const addContent = document.querySelector("#" + str.toLowerCase());
      addContent.innerHTML += `
          <div class="message is-success ${item.members.join(" ")}">
            <span class="message-header">
              ${item.eventName}
              <button class="delete-event delete is-small" event-id="${item.id}"></button>
            </span>
          </div>
      `;
    });

    this.deleteBtns = this.el.querySelectorAll(".delete-event");
    this.deleteBtns.forEach((btn) => {
      const id = btn.getAttribute("event-id");
      const listnerBtn = btn.addEventListener("click",this.deleteEvent.bind(this, id));

      this.eventListeners.push(["click", listnerBtn, btn]);
    });
  }

  deleteEvent(eventId) {
    const event = this.calendarEvents.find(
      (item) => eventId === item.id.toString()
    );

    const myModal = new Modal( document.body, `Are you sure you want to delete "${event.eventName}" event?`, event.eventName,
      (del) => {
        if (del) {
          this.deleteCallback(event);
        }
      }
    );

    myModal.render();
  }

  deleteCallback(event) {
    const index = this.calendarEvents.findIndex((item) => event.id === item.id.toString());
    this.calendarEvents.splice(index, 1);
    localStorage.setItem("events", JSON.stringify(this.calendarEvents));
    this.render();
  }

  dropsDrag() {
    const eventElement = document.querySelectorAll(".message");
    
    for (const event of eventElement) {
      event.draggable = true;
    }
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
    this.dropsDrag();
  }

  destroy() {
    this.eventListeners.forEach(([type, handler, element]) => {
      element.removeEventListener(type, handler);
    });

    this.el.remove();
    this.el = null;
  }
}
