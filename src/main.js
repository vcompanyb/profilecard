/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getPersonFromFullName(fullName) {
  let fullNameSplitted = fullName.split(" ");
  return {
    name: fullNameSplitted[0],
    surname: fullNameSplitted[1]
  };
}

let fullName = "Alejandro Cabanas";

let person = {
  name: "Víctor",
  surname: "Company"
};

let people = [
  {
    name: "Juan",
    surname: "Sanchez"
  },
  person,
  getPersonFromFullName(fullName)
];

people.push({
  name: "Unai",
  surname: "Garcia"
});
console.log(window);
window.onload = function() {
  console.log("Hello Rigo from the console!");
  let containersFluid = document.getElementsByClassName("container-fluid");
  this.console.log(containersFluid);
  if (containersFluid.length > 0) {
    let containerFluid = containersFluid[0];
    this.console.log(containerFluid);
    people.forEach(person => {
      containerFluid.innerHTML += `<p>${person.name} ${person.surname}</p>`;
    });
  }
};
