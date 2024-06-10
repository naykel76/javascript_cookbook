import styledLog from "./utils/styledLog";

// **NOTE** 
// VAR MAY BE USED TO MAKE IT EASY TO REASSIGN VARIABLES.
// THIS IS NOT THE RECOMMENDED APPROACH IN MODERN JAVASCRIPT.

function sum(a, b, c = 0.5) {
    return (a + b) * c;
}
styledLog('Function Properties (name, length, prototype)', { heading: true });
const get_func_name = sum.name; // sum
const num_params = sum.length; // 2 (excludes arguments with default values)
const get_func_proto = sum.prototype;  // {}
const isFunction = typeof sum === 'function'; // true
console.log('get_func_name:', get_func_name);
console.log('num_params:', num_params);
console.log('get_func_proto:', get_func_proto);
console.log('isFunction:', isFunction);


const calc = new sum(4, 6);
const is_same_proto = Object.getPrototypeOf(calc) === sum.prototype; // true
console.log('is_same_proto:', is_same_proto);

function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}


styledLog('????', { heading: true });
const person = { name: 'John' };    // Create an object
// call: Invokes the function with a given 'this' value and arguments provided individually.
greet.call(person, 'Hello', '!');   // Outputs: "Hello, John!"
// apply: Invokes the function with a given 'this' value and arguments provided as an array.
greet.apply(person, ['Hi', '.']);   // Outputs: "Hi, John."
// bind: Returns a new function, bound to a given 'this' value and partially applied with arguments.
const greetJohn = greet.bind(person, 'Hey', '...');
greetJohn(); // Outputs: "Hey, John..."



/**
 * A closure is a function that has access to the outer function's (the parents)
 * variables—scope chain even after the outer function has returned.
 */
styledLog('Closure - has access to the outer function variables');
function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        console.log('outer variable:', outerVar);
        console.log('inner variable:', innerVar);
    };
}

// Here, the outer function is assigned to the variable `newFunction` which is
// then called with the argument 'inside' which is passed to the innerFunction
// as innerVar 

// Here, the outer function is assigned to the variable `newFunction` passing
// the argument 'outside value' which is the outerVar of the outerFunction.
// The innerFunction is then called with the argument 'inside value' which is
// passed to the innerFunction as innerVar.


// new function is assigned to the variable newFunction which is then called
// with the argument 'inside' which is passed to the innerFunction as innerVar
const newFunction = outerFunction('outside value');
newFunction('inside value');

/**
 * Spread operator
 * 
 * The spread operator is used to expand an iterable object into a list of
 * arguments. It's commonly used to make shallow copies of arrays and objects.
 * 
 */
styledLog('Spread operator');
const numsArr = [1, 2, 3];
console.log(...numsArr);
console.log([...numsArr]);
const newArr = [...numsArr, 4, 5, 6];
console.log('newArr:', newArr); // [1, 2, 3, 4, 5, 6]