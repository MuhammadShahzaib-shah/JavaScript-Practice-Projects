var millisec = 0;
var sec = 0;
var min = 0;
var mint = document.getElementById("min")
var sect = document.getElementById("sec");
var millisect = document.getElementById("millisec");
var interval;
var count = 0;
function time() {
    millisec++;
    millisect.innerHTML = millisec;
    console.log(millisec);
    if (millisec === 100) {
        sec++;  
        sect.innerHTML = sec;
        millisec = 0;
        if (sec === 60) {
            sec = 0;
            min++;
            mint.innerHTML = min;
        }
    }
}

function start() {
    interval = setInterval(time, 10);
}
function stop() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);

    mint.innerHTML = "00";
    sect.innerHTML = "00";
    millisect.innerHTML = "00";
    sec = 0;
    min = 0;
    millisec = 0;
    
}
