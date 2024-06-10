import styledLog from './utils/styledLog';

// **NOTE** 
// VAR MAY BE USED TO MAKE IT EASY TO REASSIGN VARIABLES.
// THIS IS NOT THE RECOMMENDED APPROACH IN MODERN JAVASCRIPT.

/**
 * - `g` : Searches the entire string. Without `g`, ONLY THE FIRST match is returned.
 * - `i` : Makes the entire regex case-insensitive.
 */

/**
 * CHARACTERS
 * 
 * - `.` Matches any character (except newline) - `abcABC123 .:!?`
 * - `\d` Matches any digit (0-9) - `1234567890`
 * - `\D` Matches any non-digit character - `abcABC_~!@#$%^&*()-+=[]{}|;:',.<>/?`
 * - `\w` Matches any word character (letters, numbers, underscore) - `abcABC_123`
 * - `\W` Matches any non-word character - `~!@_#$%^&*()-+=[]{}|;:',.<>`
 * - `\s` Matches any whitespace character (spaces, tabs, line breaks)
 * - `\S` Matches any non-whitespace character (any visible character)
 * - `\b` Matches a word boundary - `\bcat\b` matches `cat`
 * - `\B` Matches a non-word boundary 
 * - `\\` Escapes special characters
 */

/**
 * QUANTIFIERS
 * 
 * - `*` Zero or more - `\be*\` matches `b` `be` `bee`
 * - `+` One or more - `\be+\` matches `be` `bee`
 * - `?` Zero or one - `\be*\` matches `b` `be`
 * - `{n}` Exactly n times - `\be{2}\` matches `bee`
 * - `{n,}` n or more times - `\be{2,}\` matches `bee` `beee`
 * - `{n,m}` Between n and m times - `\be{1,2}\` matches `be` `bee`
 */

styledLog('Beginning and End', { heading: true });

var starts_with = /abc/.test('abcdef'); // true
var ends_with = /def$/.test('abcdef'); // true
var has_exact_match = /bcd/.test('abcdef'); // true
var has_one_or_more_digits = /\d+/.test('abc123'); // true
var has_zero_or_more_digits = /\d*/.test('abcdef'); // true

console.log('starts_with:', starts_with);
console.log('starts_with:', starts_with);
console.log('ends_with:', ends_with);
console.log('has_exact_match:', has_exact_match);
console.log('has_one_or_more_digits:', has_one_or_more_digits);
console.log('has_zero_or_more_digits:', has_zero_or_more_digits);

var starts_with_group = /^(abc) (def)$/.test('abcdef'); // false (has space)
console.log(starts_with_group);
var starts_with_group = /^(abc) (def)$/.test('abcdef'); // false (has space)
console.log(starts_with_group);

styledLog('REGEX STRING METHODS', { heading: true });

styledLog('str.match(/regex/): [string] - returns an array of matched strings');

var myString = 'do doo don\'t Do oDooo';

var find_all_occurrences_case_sensitive = myString.match(/Do/g); // ['Do', 'Do']
var find_all_occurrences_case_insensitive = myString.match(/Do/gi); // ['do', 'Do', 'do', 'do', 'Do']
console.log('find_all_occurrences_case_sensitive:', find_all_occurrences_case_sensitive);
console.log('find_all_occurrences_case_insensitive:', find_all_occurrences_case_insensitive);

/**
 * Assertions are used to match a string only if it is followed or preceded by
 * another string.
 * 
 * Assertions are zero-width, meaning they do not consume characters in the
 * string. They only check if the pattern is followed or preceded by another
 * pattern then return the matched pattern.
 *
 * - `x(?=y)` : Positive lookahead - Matches `x` only if `x` is followed by `y`.
 * - `x(?!y)` : Negative lookahead - Matches `x` only if `x` is not followed by `y`.
 * - `(?<=y)x` : Positive lookbehind - Matches `x` only if `x` is preceded by `y`.
 * - `(?<!y)x` : Negative lookbehind - Matches `x` only if `x` is not preceded by `y`.
 */
console.clear();

styledLog('REGEX SIMPLE ASSERTIONS', { heading: true });
var positive_lookahead = 'xy'.match(/x(?=y)/g); // ['x']
var negative_lookahead = 'xy'.match(/x(?!y)/g); // null
var positive_lookbehind = 'yx'.match(/(?<=y)x/g); // ['x']
var negative_lookbehind = 'yx'.match(/(?<!y)x/g); // null
console.log('Positive lookahead:', positive_lookahead);
console.log('Negative lookahead:', negative_lookahead);
console.log('Positive lookbehind:', positive_lookbehind);
console.log('Negative lookbehind:', negative_lookbehind);

// var abc_followed_by_digits = 'abc123'.match(/abc(?=\d+)/g); // ['abc']
// var abc_not_followed_by_digits = 'abc123'.match(/abc(?!\d+)/g); // null
// var digits_preceding_abc = 'abc123'.match(/(?<=abc)\d+/g); // ['123']
// // this one is stupid and confusing! javascript does not full support lookbehind
// // assertions for variable-length patterns. 
// var digits_not_preceding_abc = 'abc123'.match(/(?<!abc)\d+/g); // ['23'] why???

// console.log('abc_followed_by_digits:', abc_followed_by_digits);
// console.log('abc_not_followed_by_digits:', abc_not_followed_by_digits);
// console.log('digits_preceding_abc:', digits_preceding_abc);
// console.log('digits_not_preceding_abc:', digits_not_preceding_abc);


// var digits_not_preceding_abc = 'abc123'.match(/(?<!abc)\d+/g);






// styledLog('str.replace(/regex/, newSubstr): string - replaces matched substrings with newSubstr');
// styledLog('The second argument can be a string or a function', { color: 'red' });
// var myString = 'I like shells, shells are nice';
// var find_and_replace = myString.replace(/shells/gi, 'stones');
// console.log('find_and_replace:', find_and_replace);
// var find_and_replace = myString.replace(/shells/gi, (word) => `small ${word}`);
// console.log('find_and_replace:', find_and_replace);

// styledLog('REGEX QUANTIFIERS', { heading: true });

// /**
//  * these return similar results, but the difference lies in the result that is returned
//  *
//  * - {2} returns results with exactly 2 occurrences (doo, Doo)
//  * - {2,} returns results with 2 or more occurrences (doo, Dooo)
//  * - {1,2} returns results with 1 or 2 occurrences (do, doo, do, Do, Doo)
//  */

// var myString = 'do doo don\'t Do oDooo';
// var followed_by_exactly_n_times = myString.match(/do{2}/gi); // doo, Doo
// var followed_by_n_or_more_times = myString.match(/do{2,}/gi); // doo, Dooo
// var has_between_n_and_m_times = myString.match(/do{1,2}/gi); // do, doo, do, Do, Doo
// console.log('followed_by_exactly_n_times:', followed_by_exactly_n_times);
// console.log('followed_by_n_or_more_times:', followed_by_n_or_more_times);
// console.log('has_between_n_and_m_times:', has_between_n_and_m_times);


// var myString = 'do doo don\'t Do oDooo dee';
// var followed_by_zero_or_more = myString.match(/do*/gi); // do, doo, do, Do, Doo, d
// var followed_by_one_or_more = myString.match(/do+/gi); // do, doo, do, Do, Doo
// var followed_by_zero_or_one = myString.match(/do+/gi); // do, Do, Dee
// console.log('followed_by_zero_or_more:', followed_by_zero_or_more);
// console.log('followed_by_one_or_more:', followed_by_one_or_more);
// console.log('followed_by_zero_or_one:', followed_by_zero_or_one);




// // const text = 'A quick fox';

// // const regexpLastWord = /\w+$/;
// // console.log(text.match(regexpLastWord));
// // // Expected output: Array ["fox"]

// // const regexpWords = /\b\w+\b/g;
// // console.log(text.match(regexpWords));
// // // Expected output: Array ["A", "quick", "fox"]

// // const regexpFoxQuality = /\w+(?= fox)/;
// // console.log(text.match(regexpFoxQuality));
// // // Expected output: Array ["quick"]

// // var n = "Tom Sawyer".replace(/(\w+)\s(\w+)/, "$2, $1");
// var n = "Tom Sawyer".replace(/(\w+) (\w+)/, (s, f, l) => l);

// console.log(n);


// // .replace(searchValue: {
// //     [Symbol.replace](string, replacer: (substring: string, ...args: any[]) => string): string;
// // }, re

// // (\w+) (\w+): `\w+` matches one or more word characters (equivalent to
// // [a-zA-Z0-9_]). The parentheses () create capture groups, so this regular
// // expression matches two groups of word characters separated by a space.

// // (s, f, l) => l: This is the replacement function. It takes three arguments: s
// // is the entire match, f is the first capture group, and l is the second
// // capture group. The function returns l, so the entire match is replaced with
// // the second capture group.

// // "Tom Sawyer".replace(/(\w+) (\w+)/, (s, f, l) => l): This replaces the first
// // occurrence of two groups of word characters separated by a space in the
// // string "Tom Sawyer" with the second group of word characters.

// // So, in this case, "Tom Sawyer" is replaced with "Sawyer", and n is assigned
// // the value "Sawyer".

// // yes|no|maybe

// // /[aeiou]/ // matches any vowel
// // /aeiou/ // matches aeiou in that order


/**
 * More examples
 */

var myStr = 'Beware of bugs in the above code';
var match_example = myStr.match(/.[aeiou]./ig); //any char, followed by vowel, then any char
console.log(match_example); // ['Bew', 're ', 'bug', ' in', 'he ', 'bov', 'cod']