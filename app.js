import { valueToBase } from "./baseConverter.js";
import { convertTemp } from "./tempConverter.js";

const bases = Array.from({ length: 35 }, (v, k) => k + 2);
bases[0] = "2 (Binary)";
bases[6] = "8 (Octal)";
bases[8] = "10 (Decimal)";
bases[14] = "16 (Hexadecimal)";

const temps = ["Celsius", "Fahrenheit", "Kelvin"];
const inputSelect = document.querySelector("#input-unit");
const outputSelect = document.querySelector("#output-unit");
const conversionUnit = document.querySelector("#conversion-unit");
const inputNum = document.querySelector("#input-num");
const submitBtn = document.querySelector("input#submit");

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

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let input = inputNum.value;
  let inputUnit = parseInt(inputSelect.value.split(" ")[0]);
  let outputUnit = parseInt(outputSelect.value.split(" ")[0]);

  let output = "";

  if (conversionUnit.value === "base") {
    output = valueToBase(input, inputUnit, outputUnit);
    try {
      output = valueToBase(input, inputUnit, outputUnit);
    } catch (err) {
      alert(err);
    }
  } else if (conversionUnit.value === "temp") {
    output = convertTemp(input, inputUnit, outputUnit);
  }
  document.querySelector("#output-num").innerText = output;
});
