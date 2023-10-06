// Write a program to take input(age, name, phone no.) from user and display it

let details={
    name: prompt("Enter your name: "),
    age: prompt("Enter your age: "),
    phone_no: prompt("Enter your phone number: "),
    get_Details: function(){
        let details="Name: "+this.name+" Age: "+this.age+" Phone number: "+this.phone_no;
        return details;
    }
}

console.log(details.get_Details());