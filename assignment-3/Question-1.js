// Write a program to perform functionality of calculator(add, sub, multiply, divide)

let number1 = Number(prompt("Enter first number "));
let number2 = Number(prompt("Enter second number "));
let key = Number(prompt(`Press 1 for Addition
Press 2 for Subtraction
Press 3 for Multiply
Press 4 for Division`));


function addition(number1, number2) {
  return number1 + number2;
}

function subtraction(number1, number2) {
  return number1 - number2;
}

function multiplication(number1, number2) {
  return number1 * number2;
}

function division(number1, number2) {
    if(number2==0)
    {
        return "can not divide by zero";
    }
  return number1 / number2;
}

switch (key) {
  case 1: {
    console.log(addition(number1, number2));
    break;
  }
  case 2: {
    console.log(subtraction(number1, number2));
    break;
  }
  case 3: {
    console.log(multiplication(number1, number2));
    break;
  }
  case 4: {
    console.log(division(number1, number2));
    break;
  }
  default:{
    console.log("Invalid input");
    
  }
}
