let number1= prompt(`Enter first number `);
let number2 = prompt(`Enter second number`);

while (number1 != 0 & number2 != 0){
    if(number1 > number2){
        number1 = number1%number2;
    }else{
        number2 = number2%number1;
    }
}