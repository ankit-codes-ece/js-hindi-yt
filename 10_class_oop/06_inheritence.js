class User {
    constructor(username){
        this.username = username;
    }


    logMe(){
        console.log(`USER IS: ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`a new course was added`);
        
    }
}

const chai = new Teacher("chai","chai.com",234)
const tea = new User("ankit")
tea.logMe()
chai.addCourse()
chai.logMe()
console.log(chai instanceof Teacher);
console.log(chai instanceof User);



