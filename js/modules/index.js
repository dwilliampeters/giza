/*
  Automatically instantiates modules based on data-attributes
  specifying module file-names.
*/

const moduleElements = document.querySelectorAll("[data-module]");

window.Giza = [];

for (var i = 0; i < moduleElements.length; i++) {
  const el = moduleElements[i];
  const name = el.getAttribute("data-module");
  let options = {};
  const dataOptions = el.getAttribute("data-options");
  if (dataOptions) {
    options = JSON.parse(dataOptions);
  }

  import(`./${name}`).then(Module => {
    const module = new Module.default(el, options);
    window.Giza.push(module);
  });
}

/*
  Usage:
  ======
  html
  ----
  <button data-module="disappear">disappear!</button>
  js
  --
  // modules/disappear.js
  export default class Disappear {
    constructor(el) {
      el.style.display = 'none'
    }
  }
*/
