// Write a program to concatenate an input of array of arrays

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [0, 9, 8, 7],
];
let ans = [];
for (let index in arr) {
  ans = ans.concat(arr[index]);
}
console.log(ans);
