import "./add-event/add-event-component.scss";
import "./calendar/calendar.scss";
import "./modal/modal.scss";
import "./notification/notification.scss";
import "./event/event.scss";
import { Calendar } from "./calendar/calendar.js"


const calendar = new Calendar(document.body);
calendar.render();