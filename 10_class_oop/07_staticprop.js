class User {
    constructor(username){
        this.username = username
    }

    static createId(){
        return 123;
    }
}

const chai = new User("ankit")

console.log(chai.createId());

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const tea = Teacher("tea","tea.com")
console.log(tea.createId());
