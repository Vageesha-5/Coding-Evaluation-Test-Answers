//1.	Reverse a String: Given a string 'Hello, World!', write JavaScript code to reverse it without using any built-in methods or functions.

const originalString = "Hello, World!";
let reversedStr = "";
for (let i = originalString.length - 1; i >= 0; i--) {
        	reversedStr += originalString[i];
    	}
     console.log(reversedStr);
    // Output: !dlroW ,olleH
