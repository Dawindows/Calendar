import { Modal } from '../modal/modal';
import './event.scss';

export class Event {
  constructor(parent, members, id, eventName, eventCallback, isAdmin) {
    this.el = null;
    this.parent = parent;
    this.eventListeners = [];
    this.members = members;
    this.id = id;
    this.eventCallback = eventCallback;
    this.eventName = eventName;
    this.isAdmin = isAdmin;
  }

  get template() {
    return `
        <div class="message is-info ${this.members.join(' ')}" data-item="${this.id}" draggable="true">
        <span class="message-header">
            ${this.eventName}
            <button class="delete-event delete is-small" event-id="${this.id}"></button>
        </span>
        </div>
    `;
  }

  init() {
    this.el = document.createElement('div');
    this.calendarEvents = JSON.parse(localStorage.getItem('events')) || [];
  }

  initEventListeners() {
    this.deleteButton = this.el.querySelector('.delete-event');

    const id = this.deleteButton.getAttribute('event-id');
    const listenerBtn = this.deleteButton.addEventListener(
      'click',
      this.openConfirmationModal.bind(this, id),
    );

    this.eventListeners.push(['click', listenerBtn, this.deleteButton]);
  }

  checkAdmin() {
    const buttonDeleteEvent = document.querySelectorAll('.delete-event');
    if (!this.isAdmin) {
      buttonDeleteEvent.forEach((item) => {
        item.classList.add('hide');
      });
    } else {
      this.dropsDrag();
    }
  }

  openConfirmationModal() {
    const myModal = new Modal(
      document.body,
      `Are you sure you want to delete "${this.eventName}" event?`,
      this.eventName,
      (del) => {
        if (del) {
          this.deleteCallback();
        }
      },
    );

    myModal.render();
  }

  deleteCallback() {
    this.calendarEventsToDelete = JSON.parse(localStorage.getItem('events')) || [];
    const index = this.calendarEventsToDelete.findIndex(
      (item) => this.id === item.id.toString(),
    );

    this.calendarEventsToDelete.splice(index, 1);
    localStorage.setItem('events', JSON.stringify(this.calendarEventsToDelete));
    this.destroy();
  }

  dropsDrag() {
    const dragItems = document.querySelectorAll('.message');
    const dragZones = document.querySelectorAll('.container');
    const self = this;

    function handlerDragstart(event) {
      event.dataTransfer.setData('dragItem', this.dataset.item);
      this.classList.add('drag-item-start');
    }

    function handlerDragend() {
      this.classList.remove('drag-item-start');
    }

    function handlerDrag() {}

    function handlerDragsenter(event) {
      event.preventDefault();
      this.classList.add('drag-zone-active');
    }

    function handlerDragleave() {
      this.classList.remove('drag-zone-active');
    }

    function handlerDragover(event) {
      event.preventDefault();
    }

    function handlerDrop(event) {
      const dragFlag = event.dataTransfer.getData('dragItem');
      const eventTargetId = event.target.id;

      if (eventTargetId) {
        self.updateEvent(eventTargetId, dragFlag);
      }
    }

    dragItems.forEach((dragItem) => {
      dragItem.addEventListener('dragstart', handlerDragstart);
      dragItem.addEventListener('dragend', handlerDragend);
      dragItem.addEventListener('drag', handlerDrag);
    });

    dragZones.forEach((dragZone) => {
      dragZone.addEventListener('dragenter', handlerDragsenter);
      dragZone.addEventListener('dragleave', handlerDragleave);
      dragZone.addEventListener('dragover', handlerDragover);
      dragZone.addEventListener('drop', handlerDrop);
    });
  }

  updateEvent(eventNewId, eventPriviousId) {
    this.calendarEventsStorage = JSON.parse(localStorage.getItem('events'));
    const eventFromlocalStorage = this.calendarEventsStorage.find(
      (item) => item.id === eventPriviousId,
    );

    [
      eventFromlocalStorage.weekday,
      eventFromlocalStorage.time,
    ] = eventNewId.split('-');

    localStorage.setItem('events', JSON.stringify(this.calendarEventsStorage));
    this.eventCallback();
  }

  render() {
    if (this.el) {
      this.destroy();
    }

    this.init();
    this.parent.appendChild(this.el);
    this.parent.classList.remove('container');
    this.el.innerHTML = this.template;
    this.initEventListeners();
    this.checkAdmin();
  }

  destroy() {
    this.eventListeners.forEach(([type, handler, element]) => {
      element.removeEventListener(type, handler);
    });

    this.el.remove();
    this.el = null;
  }
}
