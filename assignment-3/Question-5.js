// Write a program to print all even number first and then all odd numbers using only one iteration

let n = 50;
let evenNumbers = [];
let oddNumbers = [];
for(let number=0;number<=50;number++)
{
  if((number&1)==0)
  {
    evenNumbers.push(number);
  }
  else
  {
    oddNumbers.push(number);
  }
}
console.log(evenNumbers.toString());
console.log(oddNumbers.toString());