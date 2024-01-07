let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

function startStop() {
  let startStopBtn = document.getElementById("startStop");
  if (!running) {
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    running = true;
    startStopBtn.innerText = 'Stop';
    startStopBtn.classList.add("running"); // Add the running class to start the animation
  } else {
    clearInterval(tInterval);
    running = false;
    startStopBtn.innerText = 'Start';
    startStopBtn.classList.remove("running"); // Remove the running class to stop the animation
  }
}

function reset() {
  clearInterval(tInterval);
  running = false;
  document.getElementById("display").innerText = '00:00:00';
  document.getElementById("startStop").innerText = 'Start';
  document.getElementById("startStop").classList.remove("running"); // Ensure the running class is removed on reset
}

function getShowTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  document.getElementById("display").innerText = hours + ':' + minutes + ':' + seconds;
}

document.getElementById("startStop").addEventListener("click", startStop);
document.getElementById("reset").addEventListener("click", reset);
