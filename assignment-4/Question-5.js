// Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

/*
this code will take a string as argument and return it after converting it into camelcase
it will use equivalent ASCII codes of a character
*/

let str = "  hello    john   doe  ".trim().toLowerCase();
let ans="";
for(let index=0;index<str.length;index++)
{
   
    if(str[index]===" " && str[index+1].charCodeAt()>=97 && str[index+1].charCodeAt()<=122)
    {
        ans+=String.fromCharCode(str[index+1].charCodeAt()-32);
        index=index+1;
    }
    else if(str[index]===" ")
    {
        continue;
    }
    else
    {
        ans+=str[index];
    }
}
console.log(ans);