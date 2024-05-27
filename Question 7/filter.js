/*Explain how the filter() method is used in JavaScript to filter elements of an array. 
Provide an example demonstrating the filtering of elements from the original array 
[1, 2, 3, 4, 5] to create a new array containing only the even numbers.

The filter() method in JavaScript is used to create a new array with all elements 
that pass a test specified by a callback function. It does not mutate the original 
array but returns a new array containing only the elements that satisfy the 
condition.*/

const originalArray = [1, 2, 3, 4, 5];
const evenNumbers = originalArray.filter(function(element) {
 return element % 2 === 0;
});
const evenNumbersArrow = originalArray.filter(element => element % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
console.log(evenNumbersArrow); // Output: [2, 4]