// Write a program to find the last duplicate index in an array


let arr=[1,2,4,5,6,3,1,5,7,2,1];
let maxIndex=0;
let temp=[];
for(let index in arr)
{
    if(!temp.includes(arr[index]))
    {
        temp.push(arr[index]);
    }
    else
    {
        maxIndex=index;
    }
}
console.log(maxIndex);