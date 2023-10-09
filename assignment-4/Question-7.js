// Write a program to find index of duplicate elements in an array

let arr=[1,2,4,5,6,3,1,5,7,2];
let dupIndex=[];
let temp=[];
for(let index in arr)
{
    if(!temp.includes(arr[index]))
    {
        temp.push(arr[index]);
    }
    else
    {
        dupIndex.push(index);
    }
}
console.log(dupIndex);