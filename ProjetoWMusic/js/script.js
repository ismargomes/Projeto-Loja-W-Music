let count = 1;
let timerId;
document.getElementById('radio1').checked = true;

function stopTimer() {
    clearInterval(timerId);
}

function startTimer() {
    debugger;
    timerId = setInterval(function () {
        nextImage();

    }, 4000)
}

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;

    }
    document.getElementById('radio' + count).checked = true;
}

startTimer();