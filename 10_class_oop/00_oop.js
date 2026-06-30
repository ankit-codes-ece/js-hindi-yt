const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this  // here we dont need to use return it is implicitly defined
    // if we dont use new then it will return the global object
    
}

 // 1. when we create new keyword, firstly it create an empty object(a new instance)
//  2. constructor function called due to new keyword, and it takes the arguments
// 3. argument injected in this keywod
// 4. everything available in function

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false) //here we have to write new keyword
// otherwise it will just overwrite in userOne, new keyword create a new instance   
console.log(userOne.constructor);
//console.log(userTwo);
