'use strict';

var passingElement = document.querySelector("#contact");
var anotherElement = document.querySelector("#contactimage");

function createObserver() {
  var options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  };

  var observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(passingElement);
}

function handleIntersect(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.intersectionRatio < 1.0) {
      entry.target.style.gridTemplateColumns = "1fr 1fr";
      anotherElement.style.display = "none";
    } else {
      entry.target.style.gridTemplateColumns = "1fr 1fr 1fr";
      anotherElement.style.display = "flex";
    }
  });
}

window.addEventListener("load", function(event) {
  createObserver();
}, false);