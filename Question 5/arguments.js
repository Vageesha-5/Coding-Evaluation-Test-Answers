/*How can we achieve positional and keyword arguments in javascript?

Positional arguments: They are the traditional way of passing arguments to a 
function, where the order of arguments matters.
Example:*/

function greet(name, greeting) {
 console.log(`${greeting}, ${name}!`);
}
greet("Alice", "Hello"); // Output: Hello, Alice!
greet("Bob", "Hi"); // Output: Hi, Bob!

/*Keyword arguments: They can be simulated in JavaScript by passing an 
object to the function and using object de-structuring within the function to 
extract the required parameters. This allows you to specify arguments by 
name, making the order irrelevant.
Example:*/

 function greet(name1, greeting1) {
 console.log(`${greeting1}, ${name1}!`);
 }
 greet(name1 = "Alice", greeting1 = "Hello"); // Output: Hello, Alice!
 greet(name1 = "Bob", greeting1 = "Hi"); // Output: Hi, Bob!
