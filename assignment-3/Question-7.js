// Write a program to display the twice of a number starting from 2 and end at 4096

let doubleArray = [2];
while(doubleArray[doubleArray.length-1]<4096)
{
    doubleArray.push(doubleArray[doubleArray.length-1]*2);
}

console.log(doubleArray.toString());