"use strict"
const user = {
    username: "ankit",
    price: 999,
    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMsg()
// user.username = "aman"
// user.welcomeMsg()

// console.log(this);  // {}

// function chai() {
//     username: "ankit",
//     console.log(this);  // global
// }
// chai()

// const chai = function(){
//     username: "ankit",
//     console.log(this.username);
// }
// chai()


// const chai = ()  => {
//     username: "ankit",
//     console.log(this);  //{}
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(1,3))


// const addTwo = (num1, num2) =>  num1 + num2 // here we don't need to write return
// console.log(addTwo(1,3))


// const addTwo = (num1, num2) =>  (num1 + num2)    //here we don't need to write return
// console.log(addTwo(1,3))

// const addTwo = (num1, num2) =>  ({username: "ankit"})  // for returning object we need to use paranthesis
// console.log(addTwo(1, 3));


