import styledLog from "./utils/styledLog";

// **NOTE** 
// VAR MAY BE USED TO MAKE IT EASY TO REASSIGN VARIABLES.
// THIS IS NOT THE RECOMMENDED APPROACH IN MODERN JAVASCRIPT.

/**
 * MUTABLE ARRAY METHODS
 */

styledLog('MUTATING ARRAY METHODS', { heading: true });

styledLog('push(...items):number - adds to end, return new length');
var myArray = ['a', 'b', 'c'];
var add_to_end_return_new_length = myArray.push(1, 2, 3);
console.log('get new length:', add_to_end_return_new_length); // 6
console.log('mutated array:', myArray); // ['a', 'b', 'c', 1, 2, 3]

styledLog('pop():any - removes last item and return it');
var myArray = ['a', 'b', 'c'];
var remove_last_and_return_it = myArray.pop();
console.log('get last item:', remove_last_and_return_it); // c
console.log('mutated array:', myArray); // ['a', 'b']

styledLog('unshift(...items):number - adds items to start, return new length');
var myArray = ['a', 'b', 'c'];
var add_to_start_return_new_length = myArray.unshift(1, 2, 3);
console.log('get new length:', add_to_start_return_new_length); // 6
console.log('mutated array:', myArray); // [1, 2, 3, 'a', 'b', 'c']

styledLog('shift():any - remove first item and return it');
var myArray = ['a', 'b', 'c'];
var remove_first_and_return_it = myArray.shift();
console.log('removed item:', remove_first_and_return_it); // a
console.log('mutated array:', myArray); // ['b', 'c']

styledLog('splice(start, deleteCount?, ...items):any[] - removes and/or adds elements from/at index');
var myArray = ['a', 'b', 'c', 'd', 'e', 'f'];
var from_idx_copy_num_items = myArray.splice(2, 2); // includes start index, excludes end index
console.log('delete items from index:', from_idx_copy_num_items); // ['c', 'd']
console.log('mutated array:', myArray); // ['a', 'b', 'e', 'f']

var myArray = ['a', 'b', 'c', 'd', 'e', 'f'];
var add_items_from_index = myArray.splice(2, 0, 't', 'u');
console.log('mutated array:', myArray); // ['a', 'b', 't', 'u', 'c', 'd', 'e', 'f']

styledLog('reverse():[] - reverse the array in place');
var myArray = ['a', 'b', 'c'];
var reverse_array_in_place = myArray.reverse(); // ['c', 'b', 'a']
console.log('reversed mutated array:', myArray); // ['c', 'b', 'a']

console.clear();
styledLog('sort(compareFn?):[] - sorts in place');
styledLog('note: sorts elements as strings, not numbers.', { color: 'red' });
var valuesArray = [9, 20, 'a', 1, 10, 'A', 2];
valuesArray.sort();
console.log('sort numbers as string:', valuesArray); // [1, 10, 2, 20, 9, 'A', 'a']
var numsArray = [9, 20, 1, 10, 2];
var sort_values_asc = numsArray.sort((a, b) => a - b);
console.log('sort numbers ascending:', numsArray); // [1, 2, 9, 10, 20]
var sort_values_desc = numsArray.sort((a, b) => b - a);
console.log('sort numbers descending:', numsArray); // [20, 10, 9, 2, 1]

/**
 * NON-MUTATING ARRAY METHODS
 */

styledLog('NON-MUTATING ARRAY METHODS', { heading: true });

styledLog('concat(...items):[] - combines arrays or values into a new array');
var numsArray = [10, 20, 30];
var combine_arrays = numsArray.concat(['a', 'b', 'c']);
console.log('combined array:', combine_arrays); // [10, 20, 30, 'a', 'b', 'c']

styledLog('join(separator?):string - joins all elements of an array into a string');
var wordsArray = ['I', 'like', 'apples'];
var join_elements_as_single_string = wordsArray.join(' ');
console.log('joined array:', join_elements_as_single_string); // 'I like apples'

styledLog('filter(predicate):[]: Creates a new array with elements that pass the predicate test');
var numsArray = [10, 15, 20, 25, 30];
var numbers_greater_than_15 = numsArray.filter(num => num > 15);
console.log('filter numbers greater than 15:', numbers_greater_than_15); // [20, 25, 30]

styledLog('map(callback):[] - transforms each element using the callback');
var numsArray = [10, 20, 30];
var double_each_number = numsArray.map(num => num * 2);
console.log('doubled numbers:', double_each_number); // [20, 40, 60]

styledLog('reduce(callback, initialValue?):any - reduces array to a single value using the callback');
styledLog('the callback function takes 4 arguments: acc, value, index, array', { color: 'red' });
var numsArray = [10, 20, 30];
var sum_using_reduce = numsArray.reduce((acc, value) => acc + value, 0);
console.log('sum of values:', sum_using_reduce); // 60

styledLog('every(predicate):boolean - checks if all elements pass the predicate test');
var numsArray = [10, 20, 30];
var is_only_numeric = numsArray.every(val => Number.isInteger(val));
console.log('has only numeric values:', is_only_numeric); // true

styledLog('some(predicate):boolean - checks if any element passes the predicate test');
var numsArray = [10, 20, 30];
var has_any_strings = numsArray.some(val => typeof val === 'string');
console.log('has any strings:', has_any_strings); // false

styledLog('find(predicate):any - finds first element that passes the predicate test');
var numsArray = [10, 20, 30];
var first_value_greater_than_12 = numsArray.find(num => num > 12);
console.log('first number > 12:', first_value_greater_than_12); // 20

styledLog('includes(values):boolean - checks if array includes the value');
var numsArray = [10, 20, 30];
var array_includes_value = numsArray.includes('apple');
console.log('array includes \'apple\':', array_includes_value); // false

styledLog('slice(startIdx?, endIdx?):any[] - return a shallow copy of a portion of an array');
var numsArray = [10, 15, 20, 25, 30];
var items_except_first_and_last = numsArray.slice(1, -1);
console.log('all items except first and last:', items_except_first_and_last); // [15, 20, 25]

styledLog('indexOf(value):number - finds first index of the value, or -1 if not found');
var people = ['John', 'Mike', 'Sue', 'Jimbo'];
var get_index_of_value = people.indexOf('Sue');
console.log('index of \'sue\':', get_index_of_value); // 2

styledLog('forEach(callback):void - executes a provided function once for each array element');
var numsArray = [10, 15, 20, 25, 30];
// foreach does not return anything, it just iterates over the array
numsArray.forEach((val, i) => numsArray[i] = val * 2);
console.log('numsArray:', numsArray);

/**
 * The Array object
 * 
 * The Array object is a global object that is used in the construction of arrays,
 * which are high-level, list-like objects.
 * 
 */

const zero_to_19 = Array(20).fill(0).map((_, i) => i);
console.log('zero_to_19:', zero_to_19); // [0, 1, 2, 3, ... 19]

styledLog('Array object ', { heading: true });
const [, x, y] = Array(20).fill(0)
    .map((_, i) => i + 1) // [, x, y] = [, 2, 3 ... 20]
    .filter((v) => v % 5 === 1) // [, 1, 6, 11, 16]
    .map((v) => v * v); // [, 1, 36, 121, 256]
console.log(', x, y:', x, y);

var initScores = { even: 0, fives: 0 };
var numsArray = Array(100).fill(0).map((_, i) => i + 1);
// the accumulator object is initialized to initScores ({ even: 0, fives: 0 })
var totals = numsArray.reduce((acc, item) => {
    if (item % 2 == 0) acc.even++;
    if (item % 5 == 0) acc.fives++;
    return acc;
}, initScores);
console.log('totals:', totals);



