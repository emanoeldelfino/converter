import { valueToBase } from "./baseConverter.js";

const bases = Array.from({ length: 35 }, (v, k) => k + 2);
const temps = ["Celsius", "Fahrenheit", "Kelvin"];
const inputSelect = document.querySelector("#input-unit");
const outputSelect = document.querySelector("#output-unit");
const conversionUnit = document.querySelector("#conversion-unit");

function updateOptions(elems, options) {
  elems.forEach((elem) => {
    elem.innerHTML = "";
    options.forEach((option) => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.innerText = option;
      elem.appendChild(opt);
    });
  });
}

updateOptions([inputSelect, outputSelect], bases);
conversionUnit.addEventListener("change", (elem) => {
  let variableName = elem.target.value + "s";
  let arr = eval(variableName);
  updateOptions([inputSelect, outputSelect], arr);
});
