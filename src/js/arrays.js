import styledLog from "./utils/styledLog";

// **NOTE** VAR HAS BEEN USED TO MAKE IT EASY TO REASSIGN THE VARIABLE, THIS IS
// NOT THE RECOMMENDED APPROACH IN MODERN JAVASCRIPT. USE CONST AND LET INSTEAD.

/**
 * MUTABLE ARRAY METHODS
 */

// styledLog('MUTATING ARRAY METHODS', { heading: true });

// styledLog('push(...items):number - adds to end, returns new length');
// var letters = ['a', 'b', 'c'];
// var newLength = letters.push(1, 2, 3);
// console.log('new length:', newLength); // 6
// console.log('mutated array:', letters); // ['a', 'b', 'c', 1, 2, 3]

// styledLog('pop():any - removes last item and returns it');
// var letters = ['a', 'b', 'c'];
// const lastItem = letters.pop();
// console.log('last item from array:', lastItem); // c
// console.log('mutated array:', letters); // ['a', 'b']

// styledLog('unshift(...items):number - adds items to start, returns new length');
// var letters = ['a', 'b', 'c'];
// var newLength = letters.unshift(1, 2, 3);
// console.log('new length:', newLength); // 6
// console.log('mutated array:', letters); // [1, 2, 3, 'a', 'b', 'c']

// styledLog('shift():any - removes first item and returns it');
// var letters = ['a', 'b', 'c'];
// const firstItem = letters.shift();
// console.log('new length:', firstItem); // a
// console.log('mutated array:', letters); // ['b', 'c']

// styledLog('splice(start, deleteCount?, ...items):any[] - removes and/or adds elements from/at index');
// var letters = ['a', 'b', 'c', 'd', 'e', 'f'];
// const middleTwo = letters.splice(2, 2);
// console.log('middle two letters:', middleTwo); // ['c', 'd']
// console.log('mutated array:', letters); // ['a', 'b', 'e', 'f']

// styledLog('reverse():[] - reverse the array in place');
// var letters = ['a', 'b', 'c'];
// letters.reverse();
// console.log('reversed mutated array:', letters); // ['c', 'b', 'a']

// styledLog('sort(compareFn?):[] - sorts in place');
// styledLog('note: sorts elements as strings, not numbers.', { color: 'red' });
// var nums = [9, 20, 1, 10, 2];
// var sorted = nums.sort();
// console.log('sort numbers as string:', sorted); // [1, 10, 2, 20, 9]

// var sortAscending = nums.sort((a, b) => a - b);
// console.log('sort numbers ascending:', sortAscending); // [1, 2, 9, 10, 20]

// var sortDescending = nums.sort((a, b) => b - a);
// console.log('sort numbers descending:', sortDescending); // [20, 10, 9, 2, 1]

/**
 * NON-MUTATING ARRAY METHODS
 */

styledLog('NON-MUTATING ARRAY METHODS', { heading: true });

styledLog('concat(...items):[] - combines arrays or values into a new array');
var numbers = [10, 20, 30];
const combinedArray = numbers.concat(['a', 'b', 'c']);
console.log('combined array:', combinedArray); // [10, 20, 30, 'a', 'b', 'c']

styledLog('join(separator?):string - joins all elements of an array into a string');
const wordsArray = ['Ni hao', 'Hallo', 'Bonjour'];
const joinedArray = wordsArray.join(' ');
console.log('joined array:', joinedArray); // 'Ni hao Hallo Bonjour'

styledLog('filter(predicate):[]: Creates a new array with elements that pass the predicate test');
var numbers = [10, 15, 20, 25, 30];
const greaterThan15 = numbers.filter(num => num > 15);
console.log('filter numbers greater than 15:', greaterThan15); // [20, 25, 30]

styledLog('map(callback):[] - transforms each element using the callback');
var numbers = [10, 20, 30];
const doubled = numbers.map(num => num * 2);
console.log('doubled numbers:', doubled); // [20, 40, 60]

styledLog('reduce(callback, initialValue?):any - reduces array to a single value using the callback');
styledLog('the callback function takes 4 arguments: acc, value, index, array', { color: 'red' });
var numbers = [10, 20, 30];
var sum = numbers.reduce((acc, value) => acc + value, 0);
console.log('sum of values:', sum); // 60

styledLog('every(predicate):boolean - checks if all elements pass the predicate test');
var numbers = [10, 20, 30];
const isOnlyNumeric = numbers.every(val => Number.isInteger(val));
console.log('has only numeric values:', isOnlyNumeric); // true

styledLog('some(predicate):boolean - checks if any element passes the predicate test');
var numbers = [10, 20, 30];
const hasAnyStrings = numbers.some(val => typeof val === 'string');
console.log('has any strings:', hasAnyStrings); // false

styledLog('find(predicate):any - finds first element that passes the predicate test');
var numbers = [10, 20, 30];
const firstValue = numbers.find(num => num > 12);
console.log('first number > 12:', firstValue); // 20

styledLog('includes(values):boolean - checks if array includes the value');
var numbers = [10, 20, 30];
const hasValue = numbers.includes('apple');
console.log('array includes \'apple\':', hasValue); // false

styledLog('slice(startIdx?, endIdx?):any[] - returns a shallow copy of a portion of an array');
var numbers = [10, 15, 20, 25, 30];
const excludeEndValues = numbers.slice(1,-1);
console.log('all items except first and last:', excludeEndValues); // [15, 20, 25]

styledLog('indexOf(value):number - finds first index of the value, or -1 if not found');
var people = ['John', 'Mike', 'Sue', 'Jimbo'];
const index = people.indexOf('Sue');
console.log('index of \'sue\':', index); // 2