let positives = 0; 
let negatives = 0; 
let zeros = 0;     
let evens = 0;     
let odds = 0;      

for (let i = 0; i < 10; i++) {
    let number = +prompt(`Enter number `);
    
    if (number > 0) {
        positives++;
    } else if (number < 0) {
        negatives++;
    } else {
        zeros++;
    }
    
    if (number % 2 === 0) {
        evens++;
    } else {
        odds++;
    }
}