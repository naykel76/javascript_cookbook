import styledLog from './utils/styledLog';

// **NOTE** 
// VAR HAS BEEN USED TO MAKE IT EASY TO REASSIGN VARIABLES.
// THIS IS NOT THE RECOMMENDED APPROACH IN MODERN JAVASCRIPT.

styledLog('WORKING WITH OBJECTS', { heading: true });


// OBJECTS
// Object.keys(obj): string[]           // returns object's keys
// Object.values(obj): any[]            // returns object's values
// Object.entries(obj): [string, any][] // returns object's key-value pairs

styledLog('Merge objects');

/**
 * Tip: When spreading objects in JavaScript, remember the "Right Wins" rule. If
 * there are properties with the same name, the property on the right will
 * overwrite the one on the left. So, if you're merging objects and there are
 * duplicate keys, the value from the last object spread (the one furthest to
 * the right) will be the one that remains.
 * 
 * THIS IS NOT VALID JAVASCRIPT, BUT IT ILLUSTRATES THE POINT:
 * For example, if you were to take all the values and lay them out in order,
 * the last value const o3 = { b: 1, {a: 2, c: 3}, {a: 1, b: 2}, c: 4 }
 */

const o1 = { a: 1, b: 2 };
const o2 = { a: 2, c: 3 };
const o3 = { b: 1, ...o2, ...o1, c: 4 };
console.log('Merged object:', o3); // {b: 2, a: 1, c: 4}
