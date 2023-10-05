// Write a program to give a random output between 1 to 10 (AC: 2 simultaneous answers could not be same) 


function getRandom()
{
    let randomNumber = Math.random()*10+1;
    randomNumber = Math.round(randomNumber,2);
    return randomNumber;
}
let firstNumber = getRandom();
let secondNumber;
do{
    secondNumber=getRandom();
}while(firstNumber==secondNumber);
console.log("First Number: ",firstNumber);
console.log("Second Number: ",secondNumber);