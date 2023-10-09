// Write a program to return inverse of an array


// [4,2,3,0,1]


let arr = [3,4,1,2,0];
let ans = [];
for(let index in arr)
{
    ans[arr[index]]=index;
}
console.log(ans);
