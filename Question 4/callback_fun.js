/*Can you provide an example of a callback function?

A callback function is a function that is passed as an argument to another function 
and is executed after some operation has been completed. Callbacks are 
commonly used in asynchronous operations, such as reading a file, making 
network requests, or handling events.*/


function fetchData(callback) {
 console.log('Fetching data...');
 setTimeout(() => {
 const data = {
 userId: 1,
 id: 1,
 title: 'Example',
 body: 'This is an example of a callback function.'
 };
 callback(data);
 }, 2000); 
}
function handleData(data) {
 console.log('Data received:', data);
}
fetchData(handleData);

/* Output: Fetching data...
Data received: {
 userId: 1,
 id: 1,
 title: 'Example',
 body: 'This is an example of a callback function.'
}*/