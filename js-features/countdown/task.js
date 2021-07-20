const timerIdName = "timer";
const timerLabel = document.getElementById(timerIdName);
let timerCounter = Number(timerLabel.textContent);
let intervalID = "timerContest";
const timerStep = 1000;

const decrementTimer = function() {
  timerCounter--;
  timerLabel.textContent = timerCounter;
  if(timerCounter === 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(intervalID);
  }
}

intervalID = setInterval(decrementTimer, timerStep);