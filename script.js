"use strict";

const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const main = document.querySelector("main");
const header = document.querySelector("header");
const colorValue = document.querySelector(".color-value");

function displayColor(currentRed, currentGreen, currentBlue) {
  main.style.background =
    "rgb(" + currentRed + ", " + currentGreen + ", " + currentBlue + ")";
  header.style.background =
    "rgb(" + currentRed + ", " + currentGreen + ", " + currentBlue + ", 0.3)";
  header.style.color =
    "rgb(" + currentRed + ", " + currentGreen + ", " + currentBlue + ")";
  colorValue.innerText = main.style.background;
}

red.addEventListener("change", (event) => {
  const currentRed = red.value;
  const currentGreen = green.value;
  const currentBlue = blue.value;
  displayColor(currentRed, currentGreen, currentBlue);
});
green.addEventListener("change", (event) => {
  const currentRed = red.value;
  const currentGreen = green.value;
  const currentBlue = blue.value;
  displayColor(currentRed, currentGreen, currentBlue);
});
blue.addEventListener("change", (event) => {
  const currentRed = red.value;
  const currentGreen = green.value;
  const currentBlue = blue.value;
  displayColor(currentRed, currentGreen, currentBlue);
});
