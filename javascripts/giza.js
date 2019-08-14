import "./modules";
import "svgxuse"; //Polyfill for IE11 to support "use" tags in SVGs

// Open external links in a new window
function externalLinks() {
  for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
    var b = c[a];
    b.getAttribute("href") &&
      b.hostname !== location.hostname &&
      (b.target = "_blank");
  }
}
externalLinks();

console.log(`app.js has loaded!`);
