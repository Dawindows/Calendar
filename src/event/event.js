import { Modal } from "../modal/modal.js";

export class Event {
  constructor(parent, members, id, eventName) {
    this.el = null;
    this.parent = parent;
    this.eventListeners = [];
    this.members = members;
    this.id = id;
    this.eventName = eventName
    this.calendarEvents = JSON.parse(localStorage.getItem("events")) || [];
  }

  get template() {
    return `
        <div class="message is-link ${this.members.join(" ")}" data-item="${this.id}">
        <span class="message-header">
            ${this.eventName}
            <button class="delete-event delete is-small" event-id="${this.id}"></button>
        </span>
        </div>
    `;
  }

  init() {
    this.el = document.createElement("div");
  }

  initEventListeners() {
    this.deleteButton = this.el.querySelector(".delete-event");

      const id = this.deleteButton.getAttribute("event-id");
      const listenerBtn = this.deleteButton.addEventListener("click", this.openConfirmationModal.bind(this, id));

      this.eventListeners.push(["click", listenerBtn, this.deleteButton]);
     
  }

  openConfirmationModal(eventId) {
    const myModal = new Modal(
      document.body,
      `Are you sure you want to delete "${this.eventName}" event?`,
      this.eventName,
      (del) => {
        if (del) {
          this.deleteCallback();
        }
      }
    );
    myModal.render();
  }

  deleteCallback() {
    const index = this.calendarEvents.findIndex(
      (item) => this.id === item.id.toString()
    );
    this.calendarEvents.splice(index, 1);
    localStorage.setItem("events", JSON.stringify(this.calendarEvents));
    this.destroy();
  }

  dropsDrag() {
    const dragItems = document.querySelectorAll(".message");
    const dragZones = document.querySelectorAll(".container");
    const self = this;

    dragItems.forEach((dragItem) => {
      dragItem.draggable = true;
      dragItem.addEventListener("dragstart", handlerDragstart);
      dragItem.addEventListener("dragend", handlerDragend);
      dragItem.addEventListener("drag", handlerDrag);
    });

    dragZones.forEach((dragZones) => {
      dragZones.addEventListener("dragenter", handlerDragsenter);
      dragZones.addEventListener("dragleave", handlerDragleave);
      dragZones.addEventListener("dragover", handlerDragover);
      dragZones.addEventListener("drop", handlerDrop);
    });

    //dragitem
    function handlerDragstart(event) {
      event.dataTransfer.setData("dragItem", this.dataset.item);
      this.classList.add("drag-item-start");
    }

    function handlerDragend(event) {
      this.classList.remove("drag-item-start");
    }

    function handlerDrag(event) {}

    //dragzone
    function handlerDragsenter(event) {
      event.preventDefault();
      this.classList.add("drag-zone-active");
    }

    function handlerDragleave(event) {
      this.classList.remove("drag-zone-active");
    }

    function handlerDragover(event) {
      event.preventDefault();
    }

    function handlerDrop(event) {
      const dragFlag = event.dataTransfer.getData("dragItem");
      const eventTargetId = event.target.id;
      self.updateIvent(eventTargetId, dragFlag)

      const dragItem = document.querySelector(`[data-item="${dragFlag}"]`);
      this.append(dragItem);
    }
  }


  updateIvent(eventNewId, eventPriviousId) {
    const eventFromlocalStorage = this.calendarEvents.find(item => item.id === eventPriviousId);
    eventFromlocalStorage.id = eventNewId;
    [eventFromlocalStorage.weekday, eventFromlocalStorage.time] = eventNewId.split("-");
    localStorage.setItem("events", JSON.stringify(this.calendarEvents));
    debugger;
    const a = this.el.querySelector(".message");
    a.dataset.item = eventNewId;
      console.log(JSON.parse(localStorage.getItem("events")));  
  }

  render() {
    if (this.el) {
      this.destroy();
    }

    this.init();
    this.parent.appendChild(this.el);
    this.el.innerHTML = this.template;
    this.initEventListeners();
    this.dropsDrag();
  }

  destroy() {
    this.eventListeners.forEach(([type, handler, element]) => {
      element.removeEventListener(type, handler);
    });

    this.el.remove();
    this.el = null;
  }
}
