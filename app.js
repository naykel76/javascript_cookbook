import './src/scss/app.scss';
import logo from '/logo.svg';
// comment and uncomment the following lines to see the examples
// import './src/js/control-structures';
// import './src/js/operators';
import './src/js/arrays';

document.querySelector('#app').innerHTML = `
<div class="flex items-center justify-center h-screen">
    <div class="tac">
        <img src="${logo}" class="mx-auto h-8" alt="Naykel logo" />
        <div class="my"><h1 class="my">Javascript Examples and Playground</h1></div>
        <P class="txt-1.5">Open your console to see examples</P>
    </div>
</div>
`;



// // ----------------------------------------------------------------------------
// // OPERATORS
// // ----------------------------------------------------------------------------

// // Logical OR (||) operator
// console.log(false || true);        // Output: true
// console.log('' || 'Apples');       // Output: 'Apples'
// console.log(0 || 1);               // Output: 1

// // Nullish coalescing (??) operator
// console.log(null ?? 'Hey');        // Output: 'Hey'
// console.log(undefined ?? 'Bob');   // Output: 'Bob'
// console.log('' ?? 'Hello');        // Output: ''
// console.log(0 ?? 1);


// // Output: 0

// // let numPending = action.payload.filter(item => !item.is_paid).length;
// // let numByReducer = action.payload.reduce((total, item) => !item.is_paid ? total + 1 : 0, 0);

// // const people = [
// //     { id: 1, name: 'John', age: 30, hobbies: ['reading', 'gaming', 'coding'] },
// //     { id: 2, name: 'Jane', age: 25, hobbies: ['painting', 'running', 'cooking'] },
// //     { id: 3, name: 'Bob', age: 35, hobbies: ['swimming', 'coding', 'hiking'] }
// // ];

// // // ----------------------------------------------------------------------------
// // // CONTROL STRUCTURES
// // // ----------------------------------------------------------------------------
// // const lettersArray = ['a', 'b', 'c', 'd', 'e'];
// // for (const v of lettersArray) console.log(v); // a, b, c, d, e

// // const object = { a: 10, b: 20, c: 30 };
// // for (let key in object) console.log(key); // Outputs: 'a', 'b', 'c'
// // for (let value of Object.values(object)) console.log(value); // Outputs: 10, 20, 30

// // // ----------------------------------------------------------------------------
// // // REGULAR EXPRESSIONS
// // // ----------------------------------------------------------------------------
// // const removeNonWordChars = 'Hi, do you know your abc\'s?'.replace(/\W/g, '');

// // // ----------------------------------------------------------------------------
// // // FUNCTIONS
// // // ----------------------------------------------------------------------------
// // function greet(greeting, punctuation) {
// //     console.log(`${greeting}, ${this.name}${punctuation}`);
// // }

// // const functionName = greet.name;        // Returns: greet
// // const numParams = greet.length;         // Returns: 2
// // const functionProto = greet.prototype;  // Returns: greet {}
// // const isFunction = typeof greet === 'function'; // Returns: true

// // const person = { name: 'John' };    // Create an object
// // greet.call(person, 'Hello', '!');   // Outputs: "Hello, John!"
// // greet.apply(person, ['Hi', '.']);   // Outputs: "Hi, John."

// // const greetJohn = greet.bind(person, 'Hey', '...');
// // greetJohn(); // Outputs: "Hey, John..."


// // // ----------------------------------------------------------------------------
// // // SORTING ITEMS (MUTATING) ** Assume reset before each example **
// // // ----------------------------------------------------------------------------
// // // if a-b is negative, a is sorted before b = ascending
// // let sortAscending = nums2.sort((a, b) => a - b);
// // console.log(sortAscending); // Outputs: [1, 2, 9, 10, 20]
// // // if b-a is negative, a is sorted before b = descending
// // let sortDescending = nums2.sort((a, b) => b - a);
// // console.log(sortDescending); // Outputs: [20, 10, 9, 2, 1]


// // // ----------------------------------------------------------------------------
// // // CONVERSIONS
// // // ----------------------------------------------------------------------------
// // let capitalizeFirst = word.slice(0, 1).toUpperCase() + (word.slice(1));
// // let lowerFirst = word.charAt(0).toLowerCase() + (word.slice(1));
// // let toDouble = number.toFixed(2); // must be a number
// // let capitalize = word[0].toUpperCase() + word.slice(1);

// // // ----------------------------------------------------------------------------
// // // OTHER
// // // ----------------------------------------------------------------------------

// // // get a range of items
// // console.log(nums.slice(1, 3)); // Outputs: from index 1 up to but not including index 3
// // console.log(nums.slice(-2));   // Outputs: last two items
// // console.log(nums.slice(2));    // Outputs: items from index 2 to the end

// // // get the last item in an array
// // console.log(fruits.slice(-1).toString());
// // console.log(fruits[fruits.length - 1]);

// // // add items to the end of an array
// // console.log([...nums, 6, 7]);      // Outputs: [1, 2, 3, 4, 5, 6, 7]
// // console.log([...nums, ...nums1]);  // Outputs: [1, 2, 3, 4, 5, 6, 7]

// // nums.push(6, 7);   // add multiple items to the end
// // console.log(nums); // Outputs: [1, 2, 3, 4, 5, 6, 7]

// // nums.unshift(0);   // add item to the start
// // console.log(nums); // Outputs: [0, 1, 2, 3, 4, 5]

// // nums.pop();        // remove last
// // console.log(nums); // Outputs: [1, 2, 3, 4]

// // nums.shift();      // remove first
// // console.log(nums); // Outputs: [2, 3, 4, 5]

// // nums.splice(1, 2); // remove range
// // console.log(nums); // Outputs: [1, 4, 5]

// // let reversedNums = nums.reverse(); // mutate and return reversed array
// // console.log(nums); // Outputs: [5, 4, 3, 2, 1]
// // console.log(reversedNums); // Outputs: [5, 4, 3, 2, 1]