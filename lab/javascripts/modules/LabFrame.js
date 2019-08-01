export default class LabFrame {
  constructor(el) {
    this.el = el;
    this.init();
  }

  init() {
    const frame = this.el;

    frame.onload = function() {
      frame.style.height =
        frame.contentWindow.document.body.scrollHeight + "px";
    };
  }
}
