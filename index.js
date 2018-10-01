'use strict';

const steps = document.querySelectorAll(".experience");
const brownline = document.querySelectorAll(".cv-line-brown");
const greenline = document.querySelectorAll(".cv-line-green");
const redline = document.querySelectorAll(".cv-line-red");


const createObserver = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: .5
  };

  const observer = new IntersectionObserver(handleIntersect, options);
  steps.forEach(step => observer.observe(step));
}

const handleIntersect = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0) {
      entry.target.children[2].style.animation = "brownline 2s forwards";
      entry.target.children[3].style.animation = "greenline 2s forwards";
      entry.target.children[4].style.animation = "redline 2s forwards";
      observer.unobserve(entry.target);
    }
  });
}

window.addEventListener("load", (event) => {
  createObserver();
}, false);


// const passingElement = document.querySelector("#contact");
// const anotherElement = document.querySelector("#contactimage");

// const createObserver = () => {
//   const options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 1.0
//   };

//   const observer = new IntersectionObserver(handleIntersect, options);
//   observer.observe(passingElement);
// }

// const handleIntersect = (entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.intersectionRatio < 1.0) {
//       entry.target.style.gridTemplateColumns = "1fr 1fr";
//       anotherElement.style.display = "none";
//     } else {
//       entry.target.style.gridTemplateColumns = "1fr 1fr 1fr";
//       anotherElement.style.display = "flex";
//     }
//   });
// }

// window.addEventListener("load", (event) => {
//   createObserver();
// }, false);