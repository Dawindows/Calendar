import { Calendar } from "../calendar/calendar.js";
import { Notification } from "./../notification/notification.js";

export class AddEvent {
  constructor(parent) {
    this.el = null;
    this.parent = parent;
    this.eventListeners = [];
    this.members = ["Maria", "Bob", "Alex"];
    this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    this.times = [
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
    ];
    this.calendarEvents = JSON.parse(localStorage.getItem("events")) || [];
  }

  get template() {
    const memersElements = this.members
      .map((member) => {
        return `
          <option>${member}</option>
        `;
      })
      .join("");

    const daysElements = this.days
      .map((day) => {
        return `
        <option>${day}</option>
        `;
      })
      .join("");

    const timeElements = this.times
      .map((time) => {
        return `
        <option>${time}</option>
        `;
      })
      .join("");

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
                  <div class="select is-fullwidth">
                      <select id="members">
                          <option>All members</option>
                          ${memersElements}
                      </select>
                  </div>
              </div>
          </div>
          <div class="field">
              <div class="control is-expanded">
                  <div class="select is-fullwidth">
                      <select id="weekdays">
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
    this.el = document.createElement("div");
    this.el.classList.add("card");
    this.el.classList.add("add-event");
  }

  addEvent() {
    const event = {
      eventName: this.eventName.value,
      members:
        this.members.value === "All members"
          ? ["Maria", "Bob", "Alex"]
          : [this.members.value],
      weekdays: this.weekdays.value,
      time: this.time.value,
      id: this.weekdays.value + this.time.value,
    };

    this.calendarEvents.push(event);
    localStorage.setItem("events", JSON.stringify(this.calendarEvents));
  }

  timeCheck() {
    const dateInfo = this.calendarEvents.find((item, key) => {
      return item.weekdays === weekdays.value && item.time === time.value;
    });

    if (!dateInfo) {
      this.addEvent()
      this.destroy();
      const caledar = new Calendar(document.body);
      caledar.render();
    }

    const notification = new Notification(
      document.querySelector("#header"),
      dateInfo ? "Filed to create an event. Time slot is already bookedt": "Create an event",
      dateInfo ? false : true,
      5000
    );
    
    notification.render();
    console.log("object");
  }

  afterInit() {
    this.cancel = this.el.querySelector("#cancel");
    this.createEvent = this.el.querySelector("#create-event");

    this.eventName = document.querySelector("#event-name");
    this.members = document.querySelector("#members");
    this.weekdays = document.querySelector("#weekdays");
    this.time = document.querySelector("#time");

    const listnerCancee = this.cancel.addEventListener("click", () => {
      this.destroy();
      const caledar = new Calendar(document.body);
      caledar.render();
    });

    const listenerCreateEvent = this.createEvent.addEventListener(
      "click",
      () => {
        this.timeCheck();
      }
    );

    this.eventListeners.push(["click", listenerCreateEvent, this.createEvent]);
    this.eventListeners.push(["click", listnerCancee, this.cancel]);
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
