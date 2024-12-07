let usdAmount = parseFloat(prompt("Enter the amount in USD:"));
let currency = prompt("Select the currency to convert to: EUR, UAN, or AZN:");
let rate;

if (currency === "EUR") {
    rate = 0.9; 
} else if (currency === "UAN") {
    rate = 40; 
} else if (currency === "AZN") {
    rate = 2; 
} else {
    console.log("Invalid currency selection.");
}

if (rate) {
    console.log(`Converted amount: ${usdAmount * rate}`);
}
