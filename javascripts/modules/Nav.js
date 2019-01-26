export default class Nav {
  constructor(el) {
    this.el = el;
    this.init();
  }

  init() {
    this.dom = this.cacheDom();
    this.addEventListeners();
  }

  cacheDom() {
    return {
      menuParent: this.el.querySelectorAll(
        ".is-dropdown-button, .is-accordion-button"
      )
    };
  }

  addEventListeners() {
    for (let i = 0, len = this.dom.menuParent.length; i < len; i++) {
      this.dom.menuParent[i].addEventListener("click", e => {
        e.preventDefault();
        this.handleParentClick(e, i, this.dom.menuParent[i].parentNode);
      });
    }
  }

  handleParentClick(e, item, itemParent) {
    if (itemParent.classList.contains("is-active")) {
      itemParent.classList.remove("is-active");
    } else {
      itemParent.classList.add("is-active");
    }
  }
}
