import styledLog from './utils/styledLog';

// **NOTE** 
// VAR HAS BEEN USED TO MAKE IT EASY TO REASSIGN VARIABLES.
// THIS IS NOT THE RECOMMENDED APPROACH IN MODERN JAVASCRIPT.

/**
 * - `g` : Searches the entire string. Without `g`, ONLY THE FIRST match is returned.
 * - `i` : Makes the entire regex case-insensitive.
 */

styledLog('REGEX METHODS', { heading: true });

styledLog('/regex/.test(string): boolean - returns true if the pattern is found');

var starts_with_pattern = /^abc/.test('abcdef'); // true
var ends_with_pattern = /xyz$/.test('abcdefxyz'); // true
var contains_pattern = /123/.test('abc123def'); // true
var has_one_or_more_digits = /\d+/.test('abc123'); // true
var has_zero_or_more_digits = /\d*/.test('abcdef'); // true

console.log('starts_with_pattern:', starts_with_pattern);
console.log('ends_with_pattern:', ends_with_pattern);
console.log('contains_pattern:', contains_pattern);
console.log('has_one_or_more_digits:', has_one_or_more_digits);
console.log('has_zero_or_more_digits:', has_zero_or_more_digits);

// styledLog('/regex/.exec(string): [string] - returns an array of matched strings');

styledLog('REGEX STRING METHODS', { heading: true });

styledLog('str.match(/regex/): [string] - returns an array of matched strings');

var myString = 'do doo don\'t Do oDooo';

var find_all_occurrences_case_sensitive = myString.match(/Do/g); // ['Do', 'Do']
var find_all_occurrences_case_insensitive = myString.match(/Do/gi); // ['do', 'Do', 'do', 'do', 'Do']
console.log('find_all_occurrences_case_sensitive:', find_all_occurrences_case_sensitive);
console.log('find_all_occurrences_case_insensitive:', find_all_occurrences_case_insensitive);

styledLog('str.replace(/regex/, newSubstr): string - replaces matched substrings with newSubstr');
styledLog('The second argument can be a string or a function', { color: 'red' });
var myString = 'I like shells, shells are nice';
var find_and_replace = myString.replace(/shells/gi, 'stones');
console.log('find_and_replace:', find_and_replace);
var find_and_replace = myString.replace(/shells/gi, (word) => `small ${word}`);
console.log('find_and_replace:', find_and_replace);



styledLog('REGEX QUANTIFIERS', { heading: true });

/**
 * these return similar results, but the difference lies in the result that is returned
 * 
 * - {2} returns results with exactly 2 occurrences (doo, Doo)
 * - {2,} returns results with 2 or more occurrences (doo, Dooo)
 * - {1,2} returns results with 1 or 2 occurrences (do, doo, do, Do, Doo)
 */

var myString = 'do doo don\'t Do oDooo';
var followed_by_exactly_n_times = myString.match(/do{2}/gi); // doo, Doo
var followed_by_n_or_more_times = myString.match(/do{2,}/gi); // doo, Dooo
var has_between_n_and_m_times = myString.match(/do{1,2}/gi); // do, doo, do, Do, Doo
console.log('followed_by_exactly_n_times:', followed_by_exactly_n_times);
console.log('followed_by_n_or_more_times:', followed_by_n_or_more_times);
console.log('has_between_n_and_m_times:', has_between_n_and_m_times);


var myString = 'do doo don\'t Do oDooo dee';
var followed_by_zero_or_more = myString.match(/do*/gi); // do, doo, do, Do, Doo, d
var followed_by_one_or_more = myString.match(/do+/gi); // do, doo, do, Do, Doo
var followed_by_zero_or_one = myString.match(/do+/gi); // do, Do, Dee
console.log('followed_by_zero_or_more:', followed_by_zero_or_more);
console.log('followed_by_one_or_more:', followed_by_one_or_more);
console.log('followed_by_zero_or_one:', followed_by_zero_or_one);
