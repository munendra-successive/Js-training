// Write a program to reverse a string ("Hello John" => "olleH nhoJ")


let str="Hello John".split(" ");

/*
   This function takes a string as argument 
   and return it's reverse
*/
function reverseString(str)
{
    let ans="";
for(let i=str.length-1;i>=0;i--)
{
    ans+=str[i];
}
 return str;
}

let ans="";
for(let index in str)
{
    ans+=reverseString(str[index]);
}
console.log(ans);