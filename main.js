let Task1 = function (a, b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    else {
        return 0;
    }
}
let factorial = function(a)
{
    if (a === 0 || a === 1) 
    {
        return 1;
    }
    return a * factorial(a - 1);
}

document.write(`Factorial of 5 = ${factorial(5)} <br/>`);

let Task3 = function (number1, number2, number3) {
    resultNumber = (`${digit1}${digit2}${digit3}`);
    return resultNumber;
}

let calculateArea = function (length, width = length)
 {
    return length * width;
}

document.write(`Area: ${calculateArea(5, 10)} <br/>`);
document.write(`Area: ${calculateArea(7)} <br/>`);

let Task5 = function (number) {
    let isPerfect = false;
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    if (sum === num) {
        isPerfect = true;
        return isPerfect;
    }
    else {
        return isPerfect;
    }
}
function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

function findPerfectNumbersInRange(min, max) {
    let result = '';
    for (let i = min; i <= max; i++) {
        if (isPerfect(i)) {
            result += i + ' ';
        }
    }
    return result;
}

document.write(`Perfect numbers in range: ${findPerfectNumbersInRange(1, 10000)} <br/>`);
let Task7 = function (sec, min, hour) {
    if (sec = null) {
        sec = 0;
    }
    else if (min = null) {
        min = 0;
    }
    else if (hour = null) {
        hour = 0;
    }

    document.write(`${hour}:${min}:${sec}`);

}
function timeToSeconds(hours, minutes, seconds)
 {
    return hours * 3600 + minutes * 60 + seconds;
}

document.write(`Seconds: ${timeToSeconds(1, 30, 15)} <br/>`);

let Task9 = function (seconds) 
{
    hours = (seconds - (seconds % 3600)) / 3600;
    seconds = seconds % 3600;
    minutes = (seconds - (seconds % 60)) / 60;
    secs = seconds % 60;
}
function timeToSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}

function timeDifference(h1, m1, s1, h2, m2, s2) {
    let time1InSeconds = timeToSeconds(h1, m1, s1);
    let time2InSeconds = timeToSeconds(h2, m2, s2);

    let diffInSeconds;
    if (time1InSeconds > time2InSeconds) {
        diffInSeconds = time1InSeconds - time2InSeconds;
    } else {
        diffInSeconds = time2InSeconds - time1InSeconds;
    }

    let hours = Math.floor(diffInSeconds / 3600);
    let minutes = Math.floor((diffInSeconds % 3600) / 60);
    let seconds = diffInSeconds % 60;

    let timeString = '';
    
    if (hours < 10) {
        timeString += '0';
    }
    timeString += hours + ':';

    if (minutes < 10) {
        timeString += '0';
    }
    timeString += minutes + ':';

    if (seconds < 10) {
        timeString += '0';
    }
    timeString += seconds;

    return timeString;
}

document.write(`Time difference: ${timeDifference(12, 30, 45, 14, 15, 30)} <br/>`);
document.write(`Time difference: ${timeDifference(23, 59, 59, 0, 0, 0)} <br/>`);