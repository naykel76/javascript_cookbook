- [Data Types](#data-types)
- [Operators](#operators)
- [String Operators](#string-operators)
- [Arrays](#arrays)
- [Conditionals](#conditionals)
- [Regex](#regex)


```bash
||  # return first truthy or last if all are falsy
??  # return first non-nullish or last if all are nullish
```

## Data Types

```bash
Number      # numeric values (1, 3.14, NaN)
String      # textual data ('hello', "world", "51")
Boolean     # true and false or 0 and 1
undefined   # a variable that has been declared but not assigned a value
null        # an intentional absence of any object value
falsy       # false, 0, '', NaN, null, undefined
nullish     # null or undefined
typeof      # return the type of a variable
instanceof  # return true if an object is an instance of a class
```

## Operators

```js
// Logical OR (||) operator (false, 0, '', NaN, null, undefined)
var first_truthy = false || 'Noodle' || true; // 'Noodle'
var true_or_last_falsy = false || 0 || NaN || undefined; // undefined 
var non_empty_string = '' || 'Noodle'; // 'Noodle'
var bool_true = 0 || 1;   
// Nullish coalescing (??) operator (null or undefined)
var first_non_nullish_or_last = null ?? undefined; // undefined
var first_non_nullish1 = null ?? '' ?? 'Noodle'; // ''
var first_non_nullish2 = null ?? false ?? 'Noodle'; // false
var non_empty_string = '' ?? 'Noodle'; // ''
var non_zero_number = 0 ?? 1; // 0
```
## String Operators

```js
charAt(index): string // returns the character at the specified index
substring(start, end): string // extracts the characters from a string, between two specified indices
toLowerCase(): string // converts a string to lowercase letters
toUpperCase(): string // converts a string to uppercase letters
trim(): string // removes whitespace from both ends of a string
```

## Arrays 

```js
// NON-MUTATING
concat(...items):[] // combines arrays or values into a new array
join(separator?):string // joins all elements of an array into a string
filter(predicate):[] // Creates a new array with elements that pass the predicate test
map(callback):[] // transforms each element using the callback
reduce(callback, initialValue?):any // reduces array to a single value using the callback
every(predicate):boolean // checks if all elements pass the predicate test
some(predicate):boolean // checks if any element passes the predicate test
find(predicate):any // finds first element that passes the predicate test
includes(values):boolean // checks if array includes the value
slice(startIdx?, endIdx?):any[] // return shallow copy of a portion of an array
indexOf(value):number // finds first index of the value, or -1 if not found

/*concat*/   combine_arrays = numsArray.concat(['a', 'b', 'c']);
/*join*/     join_elements_as_single_string = wordsArray.join(' ');
/*filter*/   numbers_greater_than_15 = numsArray.filter(num => num > 15);
/*map*/      double_each_number = numsArray.map(num => num * 2);
/*reduce*/   sum_using_reduce = numsArray.reduce((acc, value) => acc + value, 0);
/*every*/    is_only_numeric = numsArray.every(val => Number.isInteger(val));
/*some*/     has_any_strings = numsArray.some(val => typeof val === 'string');
/*find*/     first_value_greater_than_12 = numsArray.find(num => num > 12);
/*includes*/ array_includes_value = numsArray.includes('apple');
/*slice*/    items_except_first_and_last = numsArray.slice(1, -1);
/*indexOf*/  get_index_of_value = people.indexOf('Sue');
```

```js
// MUTATING
push(...items): number    // adds to end, return new length
pop(): any                // removes last item and return it
unshift(...items): number // adds items to start, return new length
shift(): any              // removes first item and return it
reverse(): []             // reverse the array in place
sort(compareFn ?)         // sorts in place
splice(start, delCount ?, ...items): any[]  // removes and/or adds elements from/at index

/*push*/    add_to_end_return_new_length = myArray.push(1, 2, 3);
/*pop*/     remove_last_and_return_it = myArray.pop();
/*unshift*/ add_to_start_return_new_length = myArray.unshift(1, 2, 3); 
/*shift*/   remove_first_and_return_it = myArray.shift();
/*reverse*/ reverse_array_in_place = myArray.reverse();
/*sort*/    sort_as_strings = numsArray.sort();
/*sort*/    sort_my_value_asc = numsArray.sort((a, b) => a - b);
/*sort*/    sort_my_value_desc = numsArray.sort((a, b) => b - a);
/*splice*/  delete_items_from_index = myArray.splice(2, 2);
/*splice*/  add_items_from_index = myArray.splice(2, 0, 't', 'u');
```

## Conditionals

```bash
for...in  # Iterates over the keys (property names) of an object
for...of  # Iterates over the values of an iterable object
break     # Exits the loop immediately
continue  # Skip the current iteration, and continue to the next
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




---



```js
// DESTRUCTURING
const { key1, key2 } = obj;                 // extracts key1 and key2 from obj
const [first, second] = ['fish',  'cake'];  // extracts first and second from array
```

```js
// FUNCTIONS
function name(param1, param2) { ... }       // function declaration
const name = (param1, param2) => { ... }    // arrow function
```

```js
const myStr = 'Noodle';

// ARRAY METHODS
const stringLength = myStr.length;           // Outputs: 6
const charAtIndex3 = myStr[3];               // Outputs: 'd'
const getFirstChar = myStr[0];               // Outputs: 'N'
const getLastChar = myStr[myStr.length - 1]; // Outputs: 'e'
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