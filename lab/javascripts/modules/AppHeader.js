export default class AppHeader {
  constructor(el, options) {
    const defaults = {};
    this.el = el;
    this.settings = Object.assign(defaults, options);
    this.init();
  }

  init() {
    let headerHeight = this.el.offsetHeight;
    let headerOffset = headerHeight;
    let sidebar = document.querySelector(".app-sidebar");

    document.body.style.paddingTop = `${headerOffset}px`;
    sidebar.style.paddingTop = `${headerOffset}px`;
  }
}
