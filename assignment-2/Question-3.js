// Write a function expression that takes in another functions as an argument

const functionExpression = function ( functionArgument )
{
    return functionArgument();
}
function displayText(){
    console.log( "This is function argument ");
}
functionExpression( displayText );