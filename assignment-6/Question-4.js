/* Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. 
The class should also have a method called `fullName` that returns the person's full name.
Additionally, the class should have a method called `averageAge` that takes in an array of `Person`
 objects and returns the average age of all the people in the array  */

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }

  averageAge(arrObj) {
    let sum = 0;
    arrObj.forEach(function (item) {
      sum += item.age;
    });
    return sum / arrObj.length;
  }
}

const obj = [
  {
    name: "munendra",
    age: 23,
  },
  {
    name: "monu",
    age: 10,
  },
];
const person = new Person("monu", "kushwaha");
console.log(person.averageAge(obj));
console.log(person.fullName());
