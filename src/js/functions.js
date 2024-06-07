import styledLog from "./utils/styledLog";

// **NOTE** 
// VAR HAS BEEN USED TO MAKE IT EASY TO REASSIGN VARIABLES.
// THIS IS NOT THE RECOMMENDED APPROACH IN MODERN JAVASCRIPT.


function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const functionName = greet.name;        // greet
const numParams = greet.length;         // 2
const functionProto = greet.prototype;  // {}
const isFunction = typeof greet === 'function'; // true

console.log('functionName:', functionName);
console.log('numParams:', numParams);
console.log('functionProto:', functionProto);
console.log('isFunction:', isFunction);

const person = { name: 'John' };    // Create an object

// call: Invokes the function with a given 'this' value and arguments provided individually.
greet.call(person, 'Hello', '!');   // Outputs: "Hello, John!"
// apply: Invokes the function with a given 'this' value and arguments provided as an array.
greet.apply(person, ['Hi', '.']);   // Outputs: "Hi, John."
// bind: Returns a new function, bound to a given 'this' value and partially applied with arguments.
const greetJohn = greet.bind(person, 'Hey', '...');
greetJohn(); // Outputs: "Hey, John..."



