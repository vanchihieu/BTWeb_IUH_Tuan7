var seconds = 00;
var tens = 00;
var appendTens = document.getElementById('tens');
var appendSeconds = document.getElementById('seconds');
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');
var interval;
var ten1 = document.getElementById('ten1');
var second1 = document.getElementById('second1');
var ten2 = document.getElementById('ten2');
var second2 = document.getElementById('second2');

function startTimer() {
    tens++;
    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = '0' + seconds;
        tens = 0;
        appendTens.innerHTML = '0' + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
}
buttonStart.onclick = function() {
    if (interval) {
        clearInterval(interval)
    }
    interval = setInterval(startTimer)
}

buttonStop.onclick = function() {
    clearInterval(interval)
    second1.innerHTML = appendSeconds.innerHTML
    ten1.innerHTML = appendTens.innerHTML
}
buttonReset.onclick = function() {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
};