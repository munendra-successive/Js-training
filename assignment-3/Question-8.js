// Write a program to display numbers from 1-20 using all types of loop

// Using for loop

var numbers = "";
for (let i = 1; i <= 20; i++) {
  numbers += i + " ";
}
console.log(numbers);

// Using while loop

var numbers = "";
var start = 1;
while (start <= 20) {
  numbers += start + " ";
  start++;
}
console.log(numbers);

// Using do-while loop

var numbers = "";
var start = 1;
do {
  numbers += start + " ";
  start++;
} while (start <= 20);
console.log(numbers);
