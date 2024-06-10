import styledLog from "./utils/styledLog";

// **NOTE** 
// VAR MAY BE USED TO MAKE IT EASY TO REASSIGN VARIABLES.
// THIS IS NOT THE RECOMMENDED APPROACH IN MODERN JAVASCRIPT.

/**
 * Promises
 */
styledLog('Promise', { heading: true });
styledLog('new Promise(res, rej) => true ? res() : rej()');
var myPromise = new Promise((resolve, reject) => {
    5 > 4 ? resolve('Success') : reject('Failure');
});

myPromise
    .then((result) => { console.log('Success:', result); })
    .catch((error) => { console.log('Error:', error); });

/**
 * Async/Await
 */
styledLog('Async/Await', { heading: true });

styledLog('async function returns a promise');
async function asyncFunc() {
    try {
        return await myPromise;
    } catch (error) {
        return error;
    }
}
asyncFunc();