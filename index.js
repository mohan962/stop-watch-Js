"use strict";
let min = 0;
let sec = 0;
let tens = 0;
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
let getMinutes = document.getElementById("min");
let getSeconds = document.getElementById("sec");
let getTens = document.getElementById("tens");

let interval;

startBtn.addEventListener("click", () => {
  interval = setInterval(stopWatch, 10);
});
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});
resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  tens = 0;
  sec = 0;
  min = 0;
  getMinutes.innerHTML = min;
  getSeconds.innerHTML = sec;
  getTens.innerHTML = tens;
});

function stopWatch() {
  tens++;
  if (tens <= 9) {
    getTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    getTens.innerHTML = tens;
  }
  if (tens > 99) {
    sec++;
    getSeconds.innerHTML = sec;
    tens = 0;
    getTens.innerHTML = "0" + 0;
  }
  if (sec > 59) {
    min++;
    getMinutes.innerHTML = min;
    sec = 0;
    getSeconds.innerHTML = "0" + 0;
    tens = 0;
    getTens.innerHTML = "0" + 0;
  }
}
