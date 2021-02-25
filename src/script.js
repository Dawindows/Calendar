import './authorization/authorization.scss';
import { Authorization } from './authorization/authorization';
import { Calendar } from './calendar/calendar';

const membersElements = JSON.parse(localStorage.getItem('user')) || [];

if (membersElements.name) {
  const calendar = new Calendar(document.body, membersElements._isAdmin, membersElements.name);
  calendar.render();
} else {
  const authorization = new Authorization(document.body);
  authorization.render();
}
