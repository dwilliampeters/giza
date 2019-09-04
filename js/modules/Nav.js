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
        ".is-dropdown-button, .is-accordion-button, .nav--tabs .nav__link"
      )
    };
  }

  addEventListeners() {
    for (let i = 0, len = this.dom.menuParent.length; i < len; i++) {
      this.dom.menuParent[i].addEventListener("click", e => {
        e.preventDefault();
        this.handleParentClick(e);
      });
    }
  }

  handleParentClick(e) {
    var getClosest = function(elem, selector) {
      for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
      }
      return null;
    };

    let clickedParent = getClosest(e.target, ".nav__item");
    console.log(clickedParent);

    if (clickedParent.classList.contains("is-active")) {
      clickedParent.classList.remove("is-active");
      return;
    }

    let items = clickedParent.parentNode.querySelectorAll(".nav__item");

    for (let i = 0, len = items.length; i < len; i++) {
      items[i].classList.remove("is-active");
    }

    clickedParent.classList.add("is-active");
  }

  handleTabs() {}
}
