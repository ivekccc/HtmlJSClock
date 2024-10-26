let startButton = document.getElementById("startBtn");
let stopButton = document.getElementById("stopBtn");
let resetButton = document.getElementById("resetBtn");
let interval;
let seconds = 0;
let isRunning = false;

startButton.addEventListener("click", startCount);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

function startCount() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 10);
    }
}

function stop() {
    clearInterval(interval);
    isRunning = false;
}

function reset() {
    clearInterval(interval);
    isRunning = false;
    seconds = 0;
    updateDisplay();
}

function updateDisplay() {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secondsLeft = seconds % 60;
    let time = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
    document.getElementById("time").innerText = time;
}
