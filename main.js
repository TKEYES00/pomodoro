const count = document.getElementById("count");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset")

let interval;
let timeLeft = 60*25;

function updateTimer(){
let minutes = Math.floor(timeLeft/60);
let seconds = timeLeft % 60;
let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
count.innerHTML = formattedTime;
}

function startTimer(){
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500;
            updateTimer();
          }
        }, 1000);
}
function stopTimer() {
    clearInterval(interval);
}
function resetTimer() {
   
    timeLeft = 1500;
    updateTimer()
}
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);