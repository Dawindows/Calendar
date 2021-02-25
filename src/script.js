import './authorization/authorization.scss';
import { Authorization } from './authorization/authorization';
import { Calendar } from './calendar/calendar';

const memberElement = JSON.parse(localStorage.getItem('member')) || [];

if (memberElement.name) {
  const calendar = new Calendar(document.body, memberElement._isAdmin, memberElement.name);
  calendar.render();
} else {
  const authorization = new Authorization(document.body);
  authorization.render();
}
