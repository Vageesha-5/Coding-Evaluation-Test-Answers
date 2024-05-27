/*Explain how the map() method is used in JavaScript to transform elements of an 
array. Provide an example demonstrating the transformation of elements from the 
original array[1, 2, 3, 4, 5] into a new array containing the squared values of each 
element.

The map() method in JavaScript is used to create a new array by applying a 
function to each element of an existing array. The function passed to map() is 
called once for each element in the array, and the return value of this function is 
used to build the new array.
Syntax: array.map(callback(element[, index[, array]])[, thisArg])*/

let num = [1,2,3]
let num2 = num.map(n => n*n)
console.log(num2)
//Output: [ 1, 4, 9 ]