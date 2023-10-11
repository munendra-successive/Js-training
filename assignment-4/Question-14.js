// Write a program to reverse an array

let arr = [5, 4, 3, 6, 88, 9, 0, 2, 1, 4, 6, 8];
let left = 0;
let right = arr.length - 1;
while (left < right) {
  let temp = arr[left];
  arr[left++] = arr[right];
  arr[right--] = temp;
}
console.log(arr);
