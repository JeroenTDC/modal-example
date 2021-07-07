"use strict";

const switcher = document.querySelector(".btn");

switcher.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  var className = document.body.className;
  if (className == "light-theme") {
    this.textContent = "Dark";
  } else {
    this.textContent = "Light";
  }
  console.log("current class name: " + className);
});

const listItems = document.querySelectorAll("ul li");
//console.log("listItems: " + listItems[1].innerHTML);

/* listItems.forEach((element) => {
  console.log(element);
  element.classList.add("test");
}); */

const switcherListStyle = document.querySelector(".btnList");

switcherListStyle.addEventListener("click", function () {
  listItems.forEach((element) => {
    element.classList.toggle("test");
    element.innerHTML = "<b>test</b>";
  });
  /* 
  var className = document.body.className;
  if (className == "light-theme") {
    this.textContent = "Dark";
  } else {
    this.textContent = "Light";
  } */
});
