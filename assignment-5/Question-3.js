// Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})


const person = [
   
    {name: "john", age:23, id:1},
    {name:"Munendra",age:21, id:2},
    {name:"Mohit", age:24, id:2},
    {name:"Monu",age:21, id:3},
    {name:"Rohit",age:34, id:4}
  ];






  person.forEach(function(person)
  {
    console.log(`Name: ${person.name} Age: ${person.age} Id: ${person.id}`);
  });


  person.map( item => delete item.id );

console.log("=================");

  person.forEach(function(person)
  {
    console.log(`Name: ${person.name} Age: ${person.age}`);
  });


