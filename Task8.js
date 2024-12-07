let circumference = parseFloat(prompt("Enter the circumference of the circle:"));
let squarePerimeter = parseFloat(prompt("Enter the perimeter of the square:"));

let circleDiameter = circumference / Math.PI;
let squareSide = squarePerimeter / 4;

if (circleDiameter <= squareSide) {
    console.log("The circle can fit inside the square.");
} else {
    console.log("The circle cannot fit inside the square.");
}
