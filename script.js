function showTime() {
    setInterval(showTime, 1000);
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let ampm = "AM";

    if (hour > 12) {
        hour -= 12;
        ampm = 'PM';
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    let currentTime = hour + ":" + min + ":" + sec + ampm;

    document.getElementById("clock").innerHTML = currentTime;
}

showTime();