import styledLog from "./utils/styledLog";

styledLog('Operators', 'orange');

/**
 * Logical OR (||) operator
 */
styledLog('Logical OR (||) operator');
console.log(false || true);         // Output: true
console.log('' || 'Noodle');        // Output: 'Noodle'
console.log(0 || 1);                // Output: 1

/**
 * Nullish coalescing (??) operator
 */
styledLog('Nullish coalescing (??) operator');
console.log(null ?? 'Hey');         // Output: 'Hey'
console.log(undefined ?? 'Bob');    // Output: 'Bob'
console.log('' ?? 'Noodle');        // Output: ''
console.log(0 ?? 1);                // Output: 0