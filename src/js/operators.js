import styled_log from "./utils/styled_log";

// **NOTE** 
// VAR MAY BE USED TO MAKE IT EASY TO REASSIGN VARIABLES.
// THIS IS NOT THE RECOMMENDED APPROACH IN MODERN JAVASCRIPT.

styled_log('Operators', { heading: true });

/**
 * Logical OR (||) operator
 * 
 * The logical OR (||) operator returns the first truthy value or the last value
 * if no truthy value is found.
*/
styled_log('Logical OR (||) operator');
var first_truthy = false || 'Noodle' || true; // 'Noodle'
var true_or_last_falsy = false || 0 || NaN || undefined; // undefined 
var non_empty_string = '' || 'Noodle'; // 'Noodle'
var bool_true = 0 || 1;     

console.log('first_truthy:', first_truthy); 
console.log('true_or_last_falsy:', true_or_last_falsy); 
console.log('non_empty_string:', non_empty_string); 
console.log('bool_true:', bool_true); 

/**
 * Nullish coalescing (??) operator (null or undefined)
 * 
 * The nullish coalescing (??) operator returns the first defined value or the
 * last value if no defined value is found.
 */
styled_log('Nullish coalescing (??) operator');
var first_non_nullish_or_last = null ?? undefined; // undefined
var first_non_nullish1 = null ?? '' ?? 'Noodle'; // ''
var first_non_nullish2 = null ?? false ?? 'Noodle'; // false
var non_empty_string = '' ?? 'Noodle'; // ''
var non_zero_number = 0 ?? 1; // 0

console.log('first_non_nullish_or_last:', first_non_nullish_or_last);
console.log('first_non_nullish1:', first_non_nullish1);
console.log('first_non_nullish2:', first_non_nullish2);
console.log('non_empty_string:', non_empty_string);
console.log('non_zero_number:', non_zero_number);