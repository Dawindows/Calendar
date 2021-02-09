import "./add-event/add-event-component.scss";
import "./calendar/calendar.scss";
import "./notification/notification.scss";
import "./modal/modal.scss";
// import "./darg-and-drops/drag-and-drops"
import { Modal } from "./modal/modal.js"
import { AddEvent } from "./add-event/add-event-component.js"
import { Calendar } from "./calendar/calendar.js"
import { Notification } from "./notification/notification.js"


const caledar = new Calendar(document.body);
caledar.render();

// const notification = new Notification(document.querySelector("#header"), "Filed to create an event. Time slot is already booked", true, 5000);
// notification.render()