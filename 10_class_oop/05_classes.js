class user {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptpassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("ankit","ankit@gmail.com","ank")

console.log(chai.encryptpassword());
console.log(chai.changeUsername());


// // behind the scene

// function userTwo(username,email,password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }


// userTwo.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// userTwo.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const tea = new userTwo("tea","tea@gmail.com",312)

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());
