export class Notification {
  constructor(parent, text, success, duration) {
    this.el = null;
    this.parent = parent;
    this.eventListeners = [];
    this.text = text;
    this.success = success;
    this.duration = duration;
  }

  get template() {
    return `    
        <div class="notification">
            <button id="delete-notification" class="delete is-medium"></button>
            <div>${this.text}<div>
        </div>      
      `;
  }

  renderNotification() {
    const elNotification = document.querySelector(".notification");
    this.success ? elNotification.classList.add("is-primary") : elNotification.classList.add("is-danger");
      
    this.timer = setTimeout(() => {this.destroy()}, this.duration);
  }

  init() {
    this.el = document.createElement("div");
    this.el.classList.add("content-notification")
  }

  afterInit() {
    this.deleteNotification = document.querySelector("#delete-notification");

    const listenerDeleteNotification = this.deleteNotification.addEventListener("click", () => { 
        clearTimeout(this.timer);
        this.destroy(); 
    });

    this.eventListeners.push(["click", listenerDeleteNotification, this.deleteNotification]);
  }

  render() {
    if (this.el) {
      this.destroy();
    }

    this.init();
    this.parent.appendChild(this.el);
    this.el.innerHTML = this.template;
    this.afterInit();
    this.renderNotification();
  }

  destroy() {
    if (!this.el) {
      return;
    }

    this.eventListeners.forEach(([type, handler, element]) => {
      element.removeEventListener(type, handler);
    });

    this.el.remove();
    this.el = null;
  }
}
