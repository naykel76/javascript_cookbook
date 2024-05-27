import styledLog from "./utils/styledLog";

styledLog('Control Structures', 'orange');


styledLog('of loop');
const lettersArray = ['a', 'b', 'c'];
for (const v of lettersArray) console.log(v); // a, b, c

// const object = { a: 10, b: 20, c: 30 };
// for (let key in object) console.log(key); // Outputs: 'a', 'b', 'c'
// for (let value of Object.values(object)) console.log(value); // Outputs: 10, 20, 30