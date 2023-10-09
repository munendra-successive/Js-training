// Write a program deepClone that takes an object as input and returns a deep copy of that object.
// The function should handle nested objects and arrays.


const book={
    title: "C++",
    genre : "Programming",
    publish:"1985",
    greet:{
        greet:{
            greet:"Good morning",
        }
    },
    arr:[3,4,3,2,1]
 };


 const objcopy = function(input)
 {
    if(typeof input !== "object")
    {
        return input;
    }
    let copy = Array.isArray(input)?[]:{};
    for(key in input)
    {
        const value = input[key];
        copy[key]= objcopy(value);
    }
    return copy;
 }


 

var newobj =objcopy(book);
 book.greet.greet.greet="HEllo How are you";
 console.log(book);
 console.log(newobj);





