/* Async and Await: Explain what async and await are in JavaScript and provide 
examples demonstrating their usage.

Async and Await are the keywords in javascript which are used in a convenient
way to work with asynchronous operations and making them easy to understand.

The ‘async’ keyword is used to define an asynchronous function. The ‘await’
keyword can only be used inside async functions. It makes JavaScript wait until 
the promise settles and returns its result.

Essentially, ‘await’ pauses the execution of the async function until the promise 
is settled, and then it resumes the function's execution.

Example:
*/ 

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
   }
   async function asyncFunction() {
    console.log('Start');
    await delay(2000); 
    console.log('After 2 seconds delay');
    await delay(1000); 
    console.log('After 1 more second delay');
    return 'Completed';
   }
   asyncFunction().then(result => console.log(result)); // Output: Done