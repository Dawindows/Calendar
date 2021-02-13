export class Modal {
  constructor(parent, text, title, modalCallback) {
    this.el = null;
    this.parent = parent;
    this.eventListeners = [];
    this.text = text;
    this.title = title;
    this.modalCallback = modalCallback;
  }

  get template() {
    return `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">
                       Delete "${this.title}" event
                    </p>
                </header>
                <section class="modal-card-body">
                    ${this.text}
                </section>
                <footer class="modal-card-foot is-pulled-right">
                    <button id="button-ok" class="button is-success">OK</button>
                    <button id="button-cancel" class="button">Cancel</button>
                </footer>
            </div>
        </div>
        
    `;
  }

  init() {
    this.el = document.createElement('div');
  }

  afterInit() {
    this.buttonCancel = document.querySelector('#button-cancel');
    this.buttonOk = document.querySelector('#button-ok');

    const listenerCancel = this.buttonCancel.addEventListener('click', () => {
      this.modalCallback(false);
      this.destroy();
    });

    const listenerOk = this.buttonOk.addEventListener('click', () => {
      this.modalCallback(true);
      this.destroy();
    });

    this.eventListeners.push(['click', listenerCancel, this.buttonCancel]);
    this.eventListeners.push(['click', listenerOk, this.buttonOk]);
  }

  render() {
    if (this.el) {
      this.destroy();
    }

    this.init();
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
