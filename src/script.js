import './add-event/add-event.scss';
import './calendar/calendar.scss';
import './modal/modal.scss';
import './notification/notification.scss';
import './event/event.scss';
import { Calendar } from './calendar/calendar';

const calendar = new Calendar(document.body);

calendar.render();
