// Write a program to sort an array of object on the basis of age ({name:"John", age:26})


const person = [
   
    {name: "john", age:23},
    {name:"Munendra",age:21},
    {name:"Mohit", age:24},
    {name:"Monu",age:21},
    {name:"Rohit",age:34}
  ];
  person.sort(
    function(person1,person2)
    {
        if(person1.age-person2.age>1)
        {
            return 1;
        }
        else
        {
            return -1;
        }
    });


 


  person.forEach(function(person)
  {
    console.log(`Name: ${person.name} Age: ${person.age}`);
  });

