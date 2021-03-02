import './authorization/authorization.scss';
import { Authorization } from './authorization/authorization';
import { Calendar } from './calendar/calendar';
import { membersService } from './core/service/members.service';

const memberElement = JSON.parse(localStorage.getItem('member')) || [];

membersService.getAllMembers()
  .then((data) => {
    localStorage.setItem('members', JSON.stringify(data));
  })
  .then(() => {
    if (memberElement.name) {
      const calendar = new Calendar(document.body, memberElement._isAdmin, memberElement.name);
      calendar.render();
    } else {
      const authorization = new Authorization(document.body);
      authorization.render();
    }
  });
