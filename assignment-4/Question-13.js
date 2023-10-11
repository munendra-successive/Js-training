/* 13. Write a program to return inverse of an array
input: [3,4,1,2,0]
output:[4,2,3,0,1]
*/

let arr = [3, 4, 1, 2, 0];

function inversArray(arr) {
  let ans = [];
  for (let index = 0; index < arr.length; index++) {
    ans[arr[index]] = index;
  }
  return ans;
}
console.log(inversArray(arr));
