'use strict';


// CV INTERSECTION OBSERVER
const steps = document.querySelectorAll(".cv__entry");

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
    if (entry.intersectionRatio > 0) {
      entry.target.children[2].style.animation = "brownline 2s forwards";
      entry.target.children[3].style.animation = "greenline 2s forwards";
      entry.target.children[4].style.animation = "redline 2s forwards";
      observer.unobserve(entry.target);
    } 
  });
}


// CONTACT INTERSECTION OBSERVER
const contact = document.querySelector("#contact");

const createAnotherObserver = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1
  };

  const observer = new IntersectionObserver(handleAnotherIntersect, options);
  observer.observe(contact);
}

const handleAnotherIntersect = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.children[0].children[0].style.animation = "loadline 1s forwards .1s"
      entry.target.children[0].children[1].style.animation = "loadline 1s forwards .2s"
      entry.target.children[0].children[2].style.animation = "loadline 1s forwards .3s"
      entry.target.children[0].children[3].style.animation = "loadline 1s forwards .4s"
      entry.target.children[0].children[4].style.animation = "loadline 1s forwards .5s"
      entry.target.children[0].children[5].style.animation = "loadline 1s forwards .6s"
      entry.target.children[0].children[6].style.animation = "loadline 1s forwards .7s"
      entry.target.children[0].children[7].style.animation = "loadline 1s forwards .8s"
      entry.target.children[0].children[8].style.animation = "loadline 1s forwards .9s"
      entry.target.children[0].children[9].style.animation = "loadline 1s forwards 1s"
      entry.target.children[0].children[10].style.animation = "loadline 1s forwards 1.1s"
      entry.target.children[0].children[11].style.animation = "loadline 1s forwards 1.2s"
      entry.target.children[0].children[12].style.animation = "loadline 1s forwards 1.3s"
      entry.target.children[0].children[13].style.animation = "loadline 1s forwards 1.4s"
      entry.target.children[0].children[14].style.animation = "loadline 1s forwards 1.5s"
      entry.target.children[0].children[15].style.animation = "loadline 1s forwards 1.6s"
      entry.target.children[0].children[16].style.animation = "loadline 1s forwards 1.7s"
    } 
  });
}


// PROJECT INTERSECTION OBSERVER
const projectline = document.querySelector("#project__lines");

const createYetAnotherObserver = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: .5
  };

  const observer = new IntersectionObserver(handleYetAnotherIntersect, options);
  observer.observe(projectline);
}

const handleYetAnotherIntersect = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.children[1].style.animation = "projectline 1s forwards .2s"
    } 
  });
}

window.addEventListener("load", (event) => {
  createObserver();
  createAnotherObserver();
  createYetAnotherObserver();
}, false);


// BURGER MENU
const open = document.querySelector(".burger__open");
const menu = document.querySelector(".burger__content");
const menuList = document.getElementById("burger__list");
const close = document.getElementById("burger__close");

const addMenu = () => {
  menu.classList.add('is-display');
}

const removeMenu = () => {
  document.body.style.overflow = "inherit";
  menu.classList.remove('is-display');
}

open.addEventListener("click", addMenu);
close.addEventListener("click", removeMenu);
