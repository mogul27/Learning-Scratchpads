// import { apikey, abc } from './utils.js';
// import * as util from "./utils.js";
// import apikey from "./utils.js";
// console.log(apikey);
// console.log(util.apikey)

// Use this to build a dev box lab on a local server

// Variables
// Value can be created where needed or stored in variables

// Variables should be written in camelcase
let userMessage = "Hello, World!"
console.log(userMessage);

// constants are like variables but can not be changed (Use when shouldn't be changed)
const newMessage = "Immutable string"

// Operators are like the arithmetic operators
console.log(10 + 5)
console.log("Hello" + "World")

// === checks for eqaulity
console.log(27 === 3**3)

// functions and parameters
// Can create with both function keyword and => indicator
// function Name(parameter list) {code}
// = gives a defualt value
function createGreeting(userName, message = "Welcome to dev") {
    // console.log(userName);
    // console.log(message);
    return "Hi, I am " + userName + ". " + message;
}
// Call function
const greeting = createGreeting("Mogul");
console.log(greeting);

// Alternatively arrow functions for functions that don't need a name
// If you have only one parameter you can omit the wrapping () brackets
(userName, message) => {
    console.log('Hi');
    return userName + message;
}

// Objects and Classes
// Objects can be used to group values together
const user = {
    name: "Mogul",
    age: "26",
    // Can also have a method
    greet(userName) {
       console.log(userName);
       // Refer to the specific current object being defined
       console.log(this.age);
    }
};

console.log(user.name)
user.greet("Mogul")

// Classes are like a blueprint (Should use captial to start)
class User {
    // Can use constructor function to accept parameters for properties of an instntiated object of this class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('Hi!')
    }
}

const user1 = new User("Mogul", "26")
console.log(user1)

// Arrays (Special type of object)
const hobbies = ["Sports", "Programming", "Reading"]
console.log(hobbies[1]);

// Array utlities
hobbies.push("Running")
console.log(hobbies)
const index = hobbies.findIndex((item) => item === "Sports");
console.log(index)

// Transform every item in an array to another item
console.log(hobbies.map((item) => ({text: item+"2"})));

// Destructuring
const [firstname, lastname] = ["Mogul", "Burton"];
// ===
// const firstName = userNameData[0];
// const lastName  = userLastNamedata[1]

// curly on left for destructuring
const {name: nickName, age} = { 
    name: "Mogul",
    age: "26",
}

console.log(nickName)

// spread operator

const newHobbies = ["Coding"]

/// Pulls out items from earlier list into comma seperated list
const mergedHobbies = [...hobbies, ...newHobbies]

const superUser = {
    isAdmin: true,
    ...user
}

const password = prompt('Your password');

/// Control structures
if (password === "Hello") {    
} else if (password === "hello") {
    console.log("Lower case still works")    
}  else {
    console.log("Access Blocked")
}

const names = ["Chris", "Mogul"]

// Iterate over name making each item iteration a variable called name
for (const name of names) {
    console.log(name)
}


