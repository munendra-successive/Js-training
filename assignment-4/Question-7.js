// 7. Write a program to find index of duplicate elements in an array

const arr = [1, 2, 4, 5, 6, 3, 1, 5, 7, 2];
const dupIndex = [];
const temp = [];
for (let index = 0; index < arr.length; index++) {
  if (!temp.includes(arr[index])) {
    temp.push(arr[index]);
  } else {
    dupIndex.push(index);
  }
}
console.log(dupIndex);
