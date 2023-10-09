// Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")


let str = "abcabcdabbcc";
let ans="";
for(let index in str)
{
    if(!ans.includes(str[index]))
    {
        let count=0;
        for(let index2 in str)
        {
            if(str[index]==str[index2])
            {
                count++;
            }
        }
        ans+=str[index]+count;
    }
}
console.log(ans);