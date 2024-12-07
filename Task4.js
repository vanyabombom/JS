let year = prompt("Enter a year:");
if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
    console.log("The year is a leap year.");
} else {
    console.log("The year is not a leap year.");
}
