function currentTime() {
    let date = new Date();
    let hour = plusZero(date.getHours());
    let min = plusZero(date.getMinutes());
    let sec = plusZero(date.getSeconds());
    console.log(hour, min, sec);
    document.querySelector('#time').innerText = hour + ':' + min + ':' + sec;
    setTimeout(currentTime, 1000);
}

currentTime();

function plusZero(number) {
    if (number < 10) {
        return '0' + number;
    }

    else {
        return number;
    }
}

