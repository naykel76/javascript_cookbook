import './src/scss/app.scss';
import logo from '/logo.svg';
// comment and uncomment the following lines to see the examples
// import './src/js/advanced';
// import './src/js/arrays';
// import './src/js/constructor_functions_prototypes';
// import './src/js/control-structures';
// import './src/js/functions';
// import './src/js/objects';
// import './src/js/operators';
// import './src/js/promises';
import './src/js/regex';
// import './src/js/string';

document.querySelector('#app').innerHTML = `
<div class="flex items-center justify-center h-screen">
    <div class="tac">
        <img src="${logo}" class="mx-auto h-8" alt="Naykel logo" />
        <div class="my"><h1 class="my">Javascript Examples and Playground</h1></div>
        <P class="txt-1.5">Open your console to see examples</P>
    </div>
</div>
`;



// from_idx_copy_num_items = numsArray.splice(2, 2); // [3, 4] FROM index, NOT including
// what wizardry is this? Can you just pass in any number of arguments to a
// function and use the arguments object to access them?
// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }
// console.log(sum(1, 2, 3));



// console.log(fil);

// const arx = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// var first_true_or_last_false = false || NaN || undefined; // undefined 
// console.log('first_true_or_last_false:', first_true_or_last_false);

// var first_non_nullish_or_last = null ?? undefined ?? false ?? 'Noodle'; // false
// console.log('first_non_nullish_or_last:', first_non_nullish_or_last);

// var numsArr = [1, 2, 3, 4, 5];
// var from_idx_copy_num_items = numsArr.splice(2, 2); // [3, 4] FROM index, NOT including
// console.log('from_idx_copy_num_items:', from_idx_copy_num_items);
// console.log('Original mutated array', numsArr);

// var numsArr = [1, 2, 3, 4, 5];
// numsArr.splice(2, 0, 'a'); // [1, 2, 'a', 3, 4, 5]
// console.log('Original mutated array', numsArr);






// const sb1 = Symbol("symbol");
// const sb2 = Symbol("symbol");
// const gsb1 = Symbol.for("symbol");
// const gsb2 = Symbol.for("symbol");
// console.log(sb1, sb2, gsb1, gsb2);
// console.log(sb1 === sb2);
// console.log(gsb1 === gsb2);
// console.log(sb1 === gsb1);


// --------------------------------------------------------------------------
// var i = 1;
// console.log(i++); // Outputs 1, then increments i to 2
// console.log(i);   // Outputs 2
// var i = 1; 
// console.log(++i); // Increments i to 2, then outputs 2
// console.log(i);   // Outputs 2
// --------------------------------------------------------------------------
// - The apply method is used to call calTax with a given `this` which in this
//   case is the `sys` object
// - the rate object is applied to the calTax constructor giving access as 'this'
// - `arguments` is a special object that is available inside all functions and
//   contains all the arguments passed to the function
// - `Object.values(arguments)` is used to convert the arguments object into an array
// - `reduce` is used to sum all the values in the array
// function calTax() {
//     const rate = this.rate ?? 0.15;
//     const total = Object.values(arguments).reduce((a, c) => a + c, 0);
//     return total * rate;
// }
// const sys = { rate: 0.1 };
// const tax = calTax.apply(sys, [10, 20, 30]);
// --------------------------------------------------------------------------
// - `/s/w` get any whitespace character, followed by any word character
// const str = "This is a good example.";
// const newStr = str.replace(/\s\w/g, (s) => s[1].toUpperCase());
// console.log(newStr);
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// const isMyLuckyDay = (day) => {
//     return new Promise((response, reject) => (
//         day > 4
//             ? response(true)
//             : reject(false)));
// };
// const today = 5;
// isMyLuckyDay(today)
//     .then((result) => console.log("Today is my lucky day."))
//     .catch((e) => console.log("I am not lucky today."));
// --------------------------------------------------------------------------
// const o = { a: 1, b: 2, c: 3 };
// let resultArr = [];
// for (const x in o) resultArr.push(x);
// console.log(resultArr);
// --------------------------------------------------------------------------
// const taxFactory = (rate = 0.1, offset = 2000) => {
//     console.log(rate, offset);
//     return (amount) => (
//         amount > offset
//             ? (amount - offset) * rate
//             : 0
//     );
// };
// const myTaxCalculator = taxFactory();
// const income = 10000;
// const myTax = myTaxCalculator(income);
// // --------------------------------------------------------------------------

// splice(start, delCount ?, ...items): any[]  // removes and/or adds elements from/at index
// const a1 = arr[1];
// const a2 = arr[3];

// const arr = [1, 2, 3];
// arr.splice(1, 1, 5, 6);
// // 1,5,6,3
// const a1 = arr[1];
// const a2 = arr[3];

// const arr1 = [1, 2, 3, 4, 5, 6];

// // console.log(arr1.slice(1, 1));
// console.log(arr1.slice(3, -1));

// --------------------------------------------------------------------------
// const n = 0; // false
// const s = ""; // false
// const t = "0"; // true

// const v1 = n == s; // true
// const v2 = n == t; // true
// const v4 = n === t; // false
// const v3 = s == t; // false

// console.log(1 + +'3');

// console.log(0 == '0'); //
// console.log(0 === '0'); //

// console.log(true == true);
// console.log(true == false);

// console.log(v1, v2, v3, v4);
// --------------------------------------------------------------------------

// const calDiscount = (prod) => {
//     const defaultDiscount = 0.1;
//     const discountTable = {
//         computer: 0.2,
//         printer: 0.3,
//         paper: 0,
//     };

//     // 0 ?? 0.1 
//     // anyValue or undefined or null
    
//     // 0 or 0.1
//     // false or true
//     return [
//         discountTable['paper'] ?? defaultDiscount,
//         discountTable['paper'] || defaultDiscount,
//     ];
// };

// const [wholeSaleDiscount, retailDiscount] = calDiscount("paper");
// // [0, 0.1]

// const calDiscount = (prod) => {
//     const defaultDiscount = 0.1;
//     const discountTable = {
//         computer: 0.2,
//         printer: 0.3,
//         paper: 0,
//     };

//     return [
//         discountTable[prod] ?? defaultDiscount,
//         discountTable[prod] || defaultDiscount,
//     ];
// };

// const [wholeSaleDiscount, retailDiscount] = calDiscount("paper");


