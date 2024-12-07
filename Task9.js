let score = 0;

let answer1 = prompt("Question 1: (answer 1, 2, or 3)");
if (answer1 === "1"){
    score += 2;
} 

let answer2 = prompt("Question 2: (answer 1, 2, or 3)");
if (answer2 === "2") {
    score += 2;
} 

let answer3 = prompt("Question 3: (answer 1, 2, or 3)");
if (answer3 === "3") {
    score += 2;
} 

console.log(`Your total score is: ${score} points.`);
