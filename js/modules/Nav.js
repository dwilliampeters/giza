export default class Nav {
  constructor(el) {
    this.el = el;
  }

  init() {
    console.log(`${this.name} has initialised`);
    this.dom = this.cacheDom();
    this.addEventListeners();
  }

  cacheDom() {
    return {
      dropdownMenuParent: this.el.querySelectorAll(".is-dropdown-button"),
      accordionMenuParent: this.el.querySelectorAll(".is-accordion-button")
    };
  }

  addEventListeners() {
    forEach(this.dom.dropdownMenuParent, (menuItemParent, index) => {
      menuItemParent.addEventListener("click", e => {
        e.preventDefault();
        this.handleParentClick(
          e,
          index,
          this.dom.dropdownMenuParent[index].parentNode
        );
      });
    });

    forEach(this.dom.accordionMenuParent, (menuItemParent, index) => {
      menuItemParent.addEventListener("click", e => {
        e.preventDefault();
        this.handleParentClick(
          e,
          index,
          this.dom.accordionMenuParent[index].parentNode
        );
      });
    });
  }

  handleParentClick(e, item, itemParent) {
    if (itemParent.classList.contains("is-active")) {
      itemParent.classList.remove("is-active");
    } else {
      itemParent.classList.add("is-active");
    }
  }
}
