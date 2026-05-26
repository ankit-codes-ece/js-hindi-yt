// singleton
// object.creates

// object literals

const mysym = Symbol("key1")

const Jsuser = {
    Name: "Ankit",  // behind the scene keys are taken as a string
    "full name": "Ankit Chaurasiya",
    [mysym]: "mykey1", //symbol as a key
    age: 18,
    Email: "ankit.google.com",
    location: "siddharth nagar",
    isLoggedIn: false,
}

console.log(Jsuser.Email);
console.log(Jsuser["Email"]); 
console.log(Jsuser["full name"]); // it is the only way to access  the full name 
console.log(Jsuser[mysym])

Jsuser.Email = "ankitdakshana.org"
console.log(Jsuser);

Object.freeze(Jsuser)
Jsuser.Email = "ankitmicrosoft.com"
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.Name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
