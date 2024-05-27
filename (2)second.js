//2.	Add a method called introduce to the person object. The introduce method should take one parameter, age, and log the message "Hello, my name is [name] and I am [age] years old" to the console.

const person = {
    name: "Raj",
    introduce: function(age) {
        console.log(`Hello, my name is ${this.name} and I am ${age} years old`);
    }
};
person.introduce(25); // Output: Hello, my name is Raj and I am 25 years old
