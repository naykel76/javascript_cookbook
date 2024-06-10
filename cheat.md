```bash
for...in    # Iterates over the properties (keys) of an object
for...of    # Iterates over the values of an iterable object
break       # Exits the loop immediately
continue    # Skip the current iteration, and continue to the next
modulo %    # Returns the remainder of integer division (10 % 3 = 1)
Number      # numeric values (1, 3.14, NaN)
falsy       # false, 0, '', NaN, null, undefined
nullish     # null or undefined
deconstructing  extracts values or properties from arrays or objects
spread operator creates a shallow copy of an array or object
```

```js
console.log(10 % 3); // Outputs 1, because 10 divided by 3 leaves a remainder of 1
console.log(6 % 2);  // Outputs 0, because 6 divided by 2 leaves no remainder
```

```js
var first_true_or_last_false = false || NaN || undefined; // undefined 
var first_non_nullish_or_last = null ?? undefined ?? false ?? 0; // false
```

```js
// NON-MUTATING
/*concat*/   combine_arrays = numsArray.concat(['a', 'b']); // [1, 2, 'a', 'b']
/*join*/     join_elements_as_single_string = lettersArray.join('-'); // a-b-c
/*filter*/   numbers_greater_than_15 = numsArray.filter(num => num > 15);
/*map*/      double_each_number = numsArray.map(num => num * 2);
/*reduce*/   sum_using_reduce = numsArray.reduce((total, value) => total + value, 0);
/*every*/    is_only_numeric = numsArray.every(val => Number.isInteger(val));
/*some*/     has_any_strings = numsArray.some(val => typeof val === 'string');
/*find*/     first_value_greater_than_12 = numsArray.find(num => num > 12);
/*includes*/ array_includes_value = numsArray.includes('apple');
/*slice*/    all_items_except_first_and_last = numsArray.slice(1, -1); // includes startIdx
/*indexOf*/  get_index_of_value = people.indexOf('Sue');
/*foreach*/  numsArray.forEach((val, i) => numsArray[i] = val * 2); // no return, just iterates and updates the array
```

```js
// MUTATING
/*push*/    add_to_end_return_new_length = myArray.push(1, 2, 3);
/*pop*/     remove_last_and_return_it = myArray.pop();
/*unshift*/ add_to_start_return_new_length = myArray.unshift(1, 2, 3); 
/*shift*/   remove_first_and_return_it = myArray.shift();
/*reverse*/ reverse_array_in_place = myArray.reverse();
/*sort*/    sort_values = numsArray.sort((a, b) => a - b); // [1, 10, 'A', 'a']
/*sort*/    sort_values_asc = numsArray.sort((a, b) => a - b);
/*sort*/    sort_values_desc = numsArray.sort((a, b) => b - a); 
/*splice*/  from_idx_copy_num_items = numsArray.splice(2, 2); // [3, 4] includes startIdx
/*splice*/  numsArr.splice(2, 1, 'a'); // [1, 2, 'a', 4, 5]
/*splice*/  numsArr.splice(2, 0, 'a'); // [1, 2, 'a', 3, 4, 5]
```

```js
const [, x, y] = Array(20).fill(0)
    .map((_, i) => i + 1) // [, x, y] = [, 2, 3 ... 20]
    .filter((v) => v % 5 === 1) // [, 1, 6, 11, 16]
    .map((v) => v * v); // [, 1, 36, 121, 256]
```

```js
var initScores = { even: 0, fives: 0 };
var numsArray = Array(100).fill(0).map((_, i) => i + 1);
// the accumulator object is initialized to initScores ({ even: 0, fives: 0 })
var totals = numsArray.reduce((acc, item) => {
    if (item % 2 == 0) acc.even++;
    if (item % 5 == 0) acc.fives++;
    return acc; // remember to return the accumulator (total)
}, initScores);
```

```js
var myPromise = new Promise((resolve, reject) => {
    2 > 4 ? resolve('Success') : reject('Failure');
});

myPromise
    .then((result) => { console.log('Success:', result); })
    .catch((error) => { console.log('Error:', error); });
```

```js
async function asyncFunc() {
    try {
        return await myPromise;
    } catch (error) {
        return error;
    }
}
```

- `functions` and `var` can be hoisted except for arrow functions and `let` and `const`
- a closure is a function that has access to the outer function's variables
- 'constructor functions' without the `new` keyword, behaves like a normal function
- each object has a prototype, and all objects inherit methods and properties from `Object.prototype`

```js
function sum(a, b, c = 0.5) {
    return (a + b) * c;
}
const calc = new sum(4, 6);
const is_same_proto = Object.getPrototypeOf(calc) === sum.prototype; // true

.name // returns the name of the function
.length // returns the number of arguments (except with default values)
.prototype // allows you to add properties and methods to an object's prototype

.target // returns a reference to the function that was called with the 'new' operator
.constructor // returns a reference to the Object constructor function that created the instance
.hasOwnProperty() // returns a boolean indicating whether the object has the specified property as its own property
.toString() // returns a string representing the object


Person.prototype.greet = function () { } // add 'greet' to the `Person` prototype
Object.getPrototypeOf() // returns the prototype of the specified object (each object has a prototype)

is_constructor_func = jim.constructor === Person; // true
is_instance_of_person = jim instanceof Person; // true
is_instance_of_object = jim instanceof Object; // true
```

```js
// Object functions: keys, values, entries, in, hasOwnProperty, toString
Object.keys(obj): string[] // array of object keys
Object.values(obj): any[] // array of object values
Object.entries(obj): [string, any][] // array object key-value pairs

has_own_property = person.hasOwnProperty('age');
key_in_object = 'age' in person;
key_not_undefined = person.age !== undefined;

// OBJECTS
obj = { key1: 'val1', key2: 'val2' }; // object literal
obj = new Object(); // object constructor

obj = Object.create(null); // object with no prototype
```

## Regex

```js
/regex/.test(string): boolean   // return true if the pattern is found in the string
/regex/.exec(string): [string]  // return an array of matched strings

str.match(/regex/): [string]    // return an array of matched strings
str.search(/regex/): number     // return the index of the first match, or -1 if not found
str.replace(/regex/, newSubstr): string  // replaces matched substrings with newSubstr

// QUANTIFIERS
myString = 'do doo don\'t Do oDooo';
followed_by_exactly_n_times = myString.match(/do{2}/gi); // doo, Doo
followed_by_n_or_more_times = myString.match(/do{2,}/gi); // doo, Dooo
has_between_n_and_m_times = myString.match(/do{1,2}/gi); // do, doo, do, Do, Doo
followed_by_zero_or_more = myString.match(/do*/gi); // do, doo, do, Do, Doo, d
followed_by_one_or_more = myString.match(/do+/gi); // do, doo, do, Do, Doo
followed_by_zero_or_one = myString.match(/do+/gi); // do, Do, Dee
```

```js
// DESTRUCTURING
const { key1, key2 } = obj;                 // extracts key1 and key2 from obj
const [first, second] = ['fish',  'cake'];  // extracts first and second from array
```
```js
// CONVERSIONS
let capitalizeFirst = myStr.slice(0, 1).toUpperCase() + (myStr.slice(1));
let lowerFirst = myStr.charAt(0).toLowerCase() + (myStr.slice(1));
let capitalize = myStr[0].toUpperCase() + myStr.slice(1);
```

```js
\/. matches any character (except newline) - abcABC123 .:!?
\d : Any digit (0-9) - 1234567890
\D : Any non-digit character - abcABC_~!@#$%^&*()-+=[]{}|;:',.<>/?
\w : Any word character - abcABC_123
\W : Any non-word character ~!@_#$%^&*()-+=[]{}|;:',.<>
\s : Any whitespace character (spaces, tabs, line breaks) - Hey there you!
\S : Any non-whitespace character - Hey  there  you!
\b : Word boundary
\B : Non-word boundary
\\ : Escape special characters
```

```js
new Set([]); // add, delete, has, clear, size, keys, values, entries
new Map([]); // set, get, has, delete, clear, size, keys, values, entries

Symbol('noodle') === Symbol('noodle'); // false
Symbol.for('apple') === Symbol.for('apple'); // true

/*comma*/ [x, y] = [1 + 1, 2 + 2]; // 2, 4
z = (x, y, x + y); // 6

for (let i = 0, j = 10; i <= 10; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
}
```