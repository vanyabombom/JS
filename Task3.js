let number = prompt("Enter a three-digit number:");
if (number.length === 3) {
    if (number[0] === number[1] || number[0] === number[2] || number[1] === number[2]) {
        console.log("The number has identical digits.");
    } else {
        console.log("The number does not have identical digits.");
    }
} else {
    console.log("Please enter a valid three-digit number.");
}
