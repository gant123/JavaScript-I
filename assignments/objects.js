// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:
const interObj = {
  mitzi: {id:1, email:'mmelloy0@psu.edu', firstName: 'mitzi', gender:'F'},
  kennan: {id:2, email:'kdiben1@tinypic.com', firstName: 'Kennan', gender:'M', speak(){console.log(`Hello, my name is ${interObj.kennan.firstName}`);}},
  keven:{id:3, email:'kmummery2@wikimedia.org', firstName: 'Keven', gender:'M'},
  gannie: {id:4, email:'gmartinson3@illinois.edu', firstName: 'Gannie', gender:'M'},
  antonietta: {id:5, email:'adaine5@samsung.com', firstName: 'Antonietta', gender:'F', multiplyNums(num1,num2){return num1*num2}}
};

console.log(interObj);


// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
let mName = interObj.mitzi.firstName;
console.log(mName); 

// Kennan's ID
let kID = interObj.kennan.id;
console.log(kID);

// Keven's email
let kEmail = interObj.keven.email;
console.log(kEmail);

// Gannie's name
let gName = interObj.gannie.firstName;
console.log(gName);

// Antonietta's Gender
let aGender = interObj.antonietta.gender;
console.log(aGender);

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
console.log(interObj.kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
console.log(interObj.antonietta.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  name: 'Susan',
  age: 70,
  callName(){
    console.log(this.name);
  },
  speakParent(){
    console.log(`My name is ${this.name}. I am ${this.age}yrs old.`);
  }, 
  child: {
    name: "George",
    age: 50,
    getAge(){
      console.log(this.age);
    },
    speakChild(){
      console.log(`My name is ${this.name}. I am ${this.age}yrs old.`);
    },
    grandchild: {
      name: 'Sam',
      age: 30,
      getAgeName(){
       console.log(`Age:${this.age} Name:${this.name}`);
      },
      getInfo(){
        console.log(`My name is ${this.name}. I am ${this.age}yrs old.`);
      }
    }
  }
}

// Log the parent object's name
 parent.callName();

// Log the child's age
 parent.child.getAge();
// Log the name and age of the grandchild
 parent.child.grandchild.getAgeName();
// Have the parent speak
 parent.speakParent();

// Have the child speak
parent.child.speakChild();
// Have the grandchild speak
parent.child.grandchild.getInfo();
