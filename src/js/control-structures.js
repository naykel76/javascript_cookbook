import styledLog from "./utils/styledLog";

styledLog('Control Structures', { heading: true });

// Variables used in the examples below
const lettersArray = ['a', 'b', 'c'];
const object = { a: 10, b: 20, c: 30 };

/**
 * FOR OF Examples
 */
styledLog('for of (Array): returns values');
for (const l of lettersArray) console.log(l); // a, b, c

styledLog('for of (Object): returns values');
for (const value of Object.values(object)) console.log(value); // Outputs: 10, 20, 30

/**
 * FOR IN Examples
 */
styledLog('for in (Array): returns indexes');
for (let index in lettersArray) console.log(index); // Outputs: 0, 1, 2

styledLog('for in {Object}: returns keys');
for (let key in object) console.log(key); // Outputs: 'a', 'b', 'c'