import styledLog from "./utils/styledLog";

// **NOTE** 
// VAR MAY BE USED TO MAKE IT EASY TO REASSIGN VARIABLES.
// THIS IS NOT THE RECOMMENDED APPROACH IN MODERN JAVASCRIPT.


/**
 * Fetch API
 */
styledLog('Fetch API', { heading: true });

styledLog('fetch(url):Promise - returns a promise that resolves to the Response to that request');
var url = 'https://jsonplaceholder.typicode.com/posts';
fetch(url) .then(response => response.json());