import "./add-event/add-event-component.scss";
import "./calendar/calendar.scss";
import "./modal/modal.scss";
import "./notification/notification.scss";
import { Modal } from "./modal/modal.js"
import { AddEvent } from "./add-event/add-event-component.js"
import { Calendar } from "./calendar/calendar.js"
import { Notification } from "./notification/notification.js"


const caledar = new Calendar(document.body);
caledar.render();