//  const tinderuser = new Object()   // singleton object
const tinderuser = {}  // non singleton object

tinderuser.id = "ankit123"
tinderuser.name = "Aditya"
tinderuser.loggedIn = false

//console.log(tinderuser);

const regularUser = {
    email: "ank@gmail.com",
    fullname: {
        userfullname: {
        firstName: "Ankit",
        lastName: "Chaurasiya"
    }
  }
}

console.log(regularUser.fullname?.userfullname.firstName)

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}
const obj3 = {5: 'a', 6: 'b'}

//const obj = Object.assign(obj1, obj2, obj3)  // obj1: targated, others: source
//const obj = Object.assign({}, obj1, obj2, obj3) // {} is the targated, others source obj
const obj = {...obj1, ...obj2, ...obj3}

//console.log(obj);

// const arrOFobj = [
//   {

//   },

//   {

//   },

//   {

//   },
// ]



console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty('isloggedIN'));
