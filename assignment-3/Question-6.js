// Write a program to display prime numbers from 1 to 50


/* isPrime() function will take a number as input and return true if it is prime number else false */
function isPrime(number) {
  if (number == 0 || number == 1) {
    return false;
  }

  let i = 2;
  while (i * i <= number) {
    if (number % i == 0) {
      return false;
    }
    i++;
  }
  return true;
}

let primeArray = [];
let range = 50;
while(range>0)
{
    if(isPrime(range))
    {
        primeArray.unshift(range);
    }
    range--;
}
console.log(primeArray.toString());


