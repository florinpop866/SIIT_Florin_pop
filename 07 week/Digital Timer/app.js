let minutesCount = 0;
let secondsCount = 0;
let hoursCount = 0;

let hourElement = document.getElementById("hour");
let minuteElement = document.getElementById("minutes");
let secondElement = document.getElementById("seconds");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let saveBtn = document.getElementById("save");
let arrayDiv = document.createElement("div");

function DOMUpdate() {
  secondElement.innerText =
    secondsCount < 10 ? "0" + secondsCount : secondsCount;
  minuteElement.innerText =
    minutesCount < 10 ? "0" + minutesCount : minutesCount;
  hourElement.innerText = hoursCount < 10 ? "0" + hoursCount : hoursCount;
}
function updateTime() {
  secondsCount = secondsCount + 1;
  if (secondsCount === 60) {
    secondsCount = 0;
    minutesCount++;
  }
  if (minutesCount === 60) {
    minutesCount = 0;
    hoursCount++;
  }
  DOMUpdate();
}
let count = 0;
let intervalId;

startBtn.addEventListener("click", function () {
  if (count < 1) {
    intervalId = setInterval(updateTime, 1000);
  }
  count++;
});

resetBtn.addEventListener("click", function () {
  secondsCount = -1;
  minutesCount = 0;
  hoursCount = 0;
});

stopBtn.addEventListener("click", function () {
  clearInterval(intervalId);
  count = 0;
});

let array = new Array();

saveBtn.addEventListener("click", function () {
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let savedTime;
  seconds = secondsCount < 10 ? "0" + secondsCount : secondsCount;
  minutes = minutesCount < 10 ? "0" + minutesCount : minutesCount;
  hours = hoursCount < 10 ? "0" + hoursCount : hoursCount;
  savedTime = hours + ":" + minutes + ":" + seconds;
  array.push(savedTime);
  arrayDiv.innerText = array.join("\n");
});

document.body.appendChild(arrayDiv);
