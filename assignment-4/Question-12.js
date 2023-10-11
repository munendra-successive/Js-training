// Write a program to display intersection of two array

const arr1 = [1, 2, 4, 0, 97, 65, 43, 32, 43, 21];
const arr2 = [1, 2, 3, 4, 5, 6, 78, 9, 0];
let arrInter = [];
for (let index in arr1) {
  if (arr2.includes(arr1[index])) {
    arrInter.push(arr1[index]);
  }
}
console.log(arrInter);
