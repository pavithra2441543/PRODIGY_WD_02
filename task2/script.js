let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;
let isRunning = false;

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.innerText = `${h}:${m}:${s}`;
}

function startStop() {
  if (!isRunning) {
    timer = setInterval(stopwatch, 1000);
    isRunning = true;
  } else {
    clearInterval(timer);
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  display.innerText = "00:00:00";
  isRunning = false;
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (isRunning) {
    const lapTime = display.innerText;
    const lapItem = document.createElement("li");
    lapItem.innerText = `Lap: ${lapTime}`;
    document.getElementById("laps").appendChild(lapItem);

    // Play sound
    const sound = document.getElementById("lapSound");
    sound.currentTime = 0;
    sound.play();
  }
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark");
  body.classList.toggle("light");
}
