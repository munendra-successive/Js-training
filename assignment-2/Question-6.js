// Write a function expression that takes in a number and returns true if it's even and false if it's odd

const checkEvenOdd = function( number ){
    if(number===undefined)
    {
        return "Please, Provide input";
    }
    return (number&1)==0;
    
};
console.log(checkEvenOdd()); // if no input provided
console.log(checkEvenOdd(6)); // input provided
