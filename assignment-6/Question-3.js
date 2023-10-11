// 1. Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a
//     string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.

class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    return `Hello everone, My name is ${this.name},I am ${this.age} years old and I love ${this.interests}`;
  }

  farewell() {
    return `Good bye ${this.name}`;
  }
}

const person = new Person("munendra", 23, "male", "reading comic books");
console.log(person.greeting());
console.log(person.farewell());

// 2. Create a class Student that inherits from the Person class and has a property studies.
//    Override the greeting() method to include information about what the student is studying.

class Student extends Person {
  constructor(name, age, gender, interests, studies) {
    super(name, age, gender, interests);
    this.studies = studies;
  }
  greeting() {
    return `Hello everone, My name is ${this.name},I am ${this.age} years old, I studies ${this.studies} and I love ${this.interests}`;
  }
}

const student = new Student(
  "munendra",
  23,
  "male",
  "reading comic books",
  "Computer Sciecne"
);
console.log(student.greeting());

// 3. Create a class Teacher that inherits from the Person class and has a property subjectsTaught.
//    Override the farewell() method to include information about what the teacher teaches.

class Teacher extends Person {
  constructor(name, age, gender, interests, subjectsTaught) {
    super(name, age, gender, interests);
    this.subjectsTaught = subjectsTaught;
  }

  farewell() {
    return `Good bye ${this.name} you taught ${this.subjectsTaught}`;
  }
}

const teacher = new Teacher(
  "munendra",
  23,
  "male",
  "reading comic books",
  "English"
);
console.log(teacher.farewell());
