export default class Toggle {
  constructor(el) {
    this.el = el;
    this.init();
  }

  init() {
    this.addEventListeners();
  }

  addEventListeners() {
    this.el.addEventListener("click", this.handleToggle);
  }

  handleToggle() {
    this.classList.toggle("is-active");
  }
}
