// Write a program to sort an array (bubble sort)

let arr = [7, 53, 2, 3, 5, 8, 90, 6, 54, 33, -1];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
