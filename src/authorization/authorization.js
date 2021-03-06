import { Calendar } from '../calendar/calendar';
import { membersService } from '../core/service/members.service';
import './authorization.scss';

export class Authorization {
  constructor(parent) {
    this.el = null;
    this.parent = parent;
    this.eventListeners = [];
  }

  get template() {
    this.membersElements = this.members
      .map(
        (member) => `
          <option class="member" value="${member.name}">${member.name}</option>
    `
      )
      .join('');

    return `
        <div class="authorization modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">
                       Please authorize
                    </p>
                </header>
                <section class="modal-card-body">
                    <div id="event" class="select is-fullwidth">
                        <select id="user">
                            ${this.membersElements}
                        </select>
                    </div>
                </section>
                <footer class="modal-card-foot is-pulled-right">
                    <button id="authorization-button-ok" class="button is-success">Confirm</button>
                </footer>
            </div>
        </div>
   
    `;
  }

  async init() {
    this.el = document.createElement('div');
    this.members = await membersService.getAllMembers().then((data) => data);
  }

  afterInit() {
    this.buttonOk = document.querySelector('#authorization-button-ok');
    const nameUser = this.el.querySelector('#user');

    const listenerOk = this.buttonOk.addEventListener('click', () => {
      const memberElement = this.members.find(
        (index) => index.name === nameUser.value
      );
      localStorage.setItem('member', JSON.stringify(memberElement));
      const calendar = new Calendar(
        document.body,
        memberElement._isAdmin,
        memberElement.name
      );
      this.destroy();
      calendar.render();
    });

    this.eventListeners.push(['click', listenerOk, this.buttonOk]);
  }

  async render() {
    if (this.el) {
      this.destroy();
    }

    await this.init();
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
