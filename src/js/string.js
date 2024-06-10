import styledLog from './utils/styledLog';

// **NOTE** 
// VAR MAY BE USED TO MAKE IT EASY TO REASSIGN VARIABLES.
// THIS IS NOT THE RECOMMENDED APPROACH IN MODERN JAVASCRIPT.

styledLog('STRING METHODS', { heading: true });

styledLog('charAt(index): string - returns the character at the specified index');
var myString = 'Noodle';
var get_char_at_index = myString.charAt(3);
console.log('get_char_at_index:', get_char_at_index); // d

styledLog('toLowerCase(): string - convert string to lower case');
var myString = 'NOODLE';
var to_lower_case = myString.toLowerCase();
console.log('to_lower_case:', to_lower_case); // noodle

styledLog('toUpperCase(): string - convert string to upper case');
var myString = 'NOODLE';
var to_upper_case = myString.toUpperCase();
console.log('to_upper_case:', to_upper_case); // NOODLE

styledLog('trim(): string - removes whitespace from both ends of a string');
var myString = '  noodle  ';
var trimmed_string = myString.trim();
console.log('trimmed_string:', trimmed_string); // noodle

styledLog('substring(start, end): string - extracts the characters from a string, between two specified indices');
var myString = 'Noodle';
var get_substring = myString.substring(1, 4);
console.log('get_substring:', get_substring); // ood

styledLog('This method is similar to slice(), but it does not accept negative indices.', { color: 'red' });
var myString = 'Noodle';
var slice = myString.slice(1,4);
console.log('slice:', slice); // ood



// styledLog('substring(start, end): string - extracts the characters from a string, between two specified indices');
