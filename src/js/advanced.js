import styledLog from "./utils/styledLog";

// **NOTE** 
// VAR MAY BE USED TO MAKE IT EASY TO REASSIGN VARIABLES.
// THIS IS NOT THE RECOMMENDED APPROACH IN MODERN JAVASCRIPT.

/**
 * Set - collection of unique values
 */
styledLog('Set - collection of unique values', { heading: true });

var new_set = new Set([1, 2, 2, 3]); // {1, 2, 3}

var set_add = new_set.add(4); // {1, 2, 3, 4}
console.log('set_add:', set_add);
var set_delete = new_set.delete(2); // true
console.log('set_delete:', set_delete);
var set_clear = new_set.clear(); // undefined
console.log('set_clear:', set_clear);
var set_add = new_set.add(1).add(2).add(3); // {1, 2, 3}
console.log('set_add:', set_add);
var set_has = new_set.has(2); // true
console.log('set_has:', set_has);
var set_size = new_set.size; // 3
console.log('set_size:', set_size);
var array_from_set = Array.from(new_set); // [1, 2, 3]
console.log('array_from_set:', array_from_set);


/**
 * A Map is a collection of key-value pairs.
 */
styledLog('Map - collection of key-value pairs', { heading: true });
var example_map = new Map([
    [1, 'one'],
    [{}, 'empty object'],
    [true, 'yes'],
]);

var new_map = new Map([]);
var add_key_value = new_map.set('key1', 'value1'); // {key1 => value1}
var add_key_value = new_map.set('key2', 'value2'); // {key1 => value1, key2 => value2}
console.log('add_key_value:', new_map);
var get_value = new_map.get('key1'); // value1
console.log('get_value:', get_value);

styledLog('Map Properties');
var has_key = new_map.has('key1'); // true
var map_size = new_map.size; // 2
var get_keys = new_map.keys(); // {key1, key2}
var get_values = new_map.values(); // {value1, value2}
var get_entries = new_map.entries(); // {key1 => value1, key2 => value2}
console.log('has_key:', has_key);
console.log('map_size:', map_size);
console.log('get_keys:', get_keys);
console.log('get_values:', get_values);
console.log('get_entries:', get_entries);

styledLog('Map Methods');
var delete_key = new_map.delete('key1'); // true
console.log('delete_key:', new_map);
var clear_map = new_map.clear(); // undefined
console.log('clear_map:', new_map);

/**
 * Symbols are unique and immutable data types.
 */
styledLog('Symbols - unique and immutable data types', { heading: true });
var is_not_same = Symbol('noodle') === Symbol('noodle'); // false
var global_symbol = Symbol.for('apple') === Symbol.for('apple'); // true
console.log('is_not_same:', is_not_same);
console.log('global_symbol:', global_symbol);

/**
 * The comma operator allows you to evaluate multiple expressions in a single
 * statement, returning the value of the last expression.
 * 
 * expression1, expression2, expression3, ..., expressionN
 */
styledLog('Comma Operator - evaluate multiple expressions in a single statement', { heading: true });
var [x, y] = [1 + 1, 2 + 2]; // 2, 4
var z = (x, y, x + y); // 6
console.log('z:', z);

styledLog('Comma Operator - for loop');
for (let i = 0, j = 10; i <= 10; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
}
