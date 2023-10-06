// Write a function expression that takes in another functions as an argument using arrow function

const functionExpression = functionArgument => { functionArgument(); }
function displayText()
{
    console.log("Passing a function as Argument using arrow function");
}
functionExpression( displayText );