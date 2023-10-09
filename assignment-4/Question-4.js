// Write a program to convert given string to upperCase OR lowerCase
 


// into lowercase
/*
below code will convert a given string into lowercase by using ASCII codes of a character
*/

var str = "I am in Successive Digital";
var ans="";
for(let index in str)
{
    if(str[index].charCodeAt()>=65 && str[index].charCodeAt()<=90)
    {
       ans+=String.fromCharCode(str[index].charCodeAt()+32);
    }
    
    else
    {
        ans+=str[index];
    }


}

console.log(ans);

// into uppercase
/*
below code will convert a given string into uppercase by using ASCII codes of a character
*/

var str = "I am in Successive Digital";
var ans="";
for(let index in str)
{
    if(str[index].charCodeAt()>=97 && str[index].charCodeAt()<=122)
    {
       ans+=String.fromCharCode(str[index].charCodeAt()-32);
    }
    
    else
    {
        ans+=str[index];
    }


}

console.log(ans);