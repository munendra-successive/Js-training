// Write a function expression that takes in a number and returns true if it's even and false if it's odd using arrow function

const checkEvenOdd = number => {
    if(number===undefined)
    {
    return "No input provided";
    }
    return (number&1)==0; 

}
console.log(checkEvenOdd(50)); // input provided
console.log(checkEvenOdd()); // no input provided