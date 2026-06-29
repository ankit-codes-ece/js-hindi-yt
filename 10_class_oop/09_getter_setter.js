class User {
    constructor(password,email){
        this.password = password
        this.email = email
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
}

const chai = new User("chai","ankit.com")
console.log(chai.password);
console.log(chai.email);
