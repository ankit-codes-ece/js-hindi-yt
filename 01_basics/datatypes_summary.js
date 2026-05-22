// # primitive

// 7 types: string, Number, Boolean, null, undefined, symbol, object

const id = Symbol('1234')
const anotherId = 1234

console.log(id === anotherId);

const bigNumber = 1761267n // n represent bigint


// Reference (Non primitive)
// array, object, function

const heros = ["Ironman", "spiderman", "Thor"]
let myObj = {
name: "Ankit",
age: 20,
}

const myFunction = function() {
    console.log("Hello World");
    
}
console.log(typeof myFunction);

// typeof null = object

