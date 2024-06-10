import styledLog from './utils/styledLog';

// **NOTE** 
// VAR MAY BE USED TO MAKE IT EASY TO REASSIGN VARIABLES.
// THIS IS NOT THE RECOMMENDED APPROACH IN MODERN JAVASCRIPT.

const person = { name: 'Mike', age: 23 };

styledLog('Object functions: keys, values, entries, in, hasOwnProperty, toString', {heading: true});

styledLog('Object.keys(obj):string[] - returns an array of object names (keys)');  
var keys = Object.keys(person); // [ 'name', 'age']
console.log('Keys:', keys);

styledLog('Object.values(obj):any[] - returns an array of a given object values');
var values = Object.values(person); // [ 'Mike', 23 ]
console.log('Values:', values);

styledLog('Object.entries(obj):[string, any][] - returns an array of a given object\'s own enumerable string-keyed property [key, value] pairs');
var entries = Object.entries(person); // [ [ 'name', 'Mike' ], [ 'age', 23 ] ]
console.log('Entries:', entries);

styledLog('Check property existence - (hasOwnProperty(), in, !== undefined))');
const has_own_property = person.hasOwnProperty('age');
const key_in_object = 'age' in person;
const key_not_undefined = person.age !== undefined;
console.log('Property Exists?', has_own_property, key_in_object, key_not_undefined);


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
