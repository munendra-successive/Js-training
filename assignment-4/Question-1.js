// Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")


let str= "Successive digital";
let ans = "";
for(let i=0;i<str.length;i++)
{
    if(!ans.includes(str[i]))
    {
        ans+=str[i];
    }
}
console.log(ans);