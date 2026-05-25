//  ARRAY

const myarr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Ironman", "spiderman", "Thor"]

const myarr2 = new Array(1,2,3,4,8,5)

//console.log(myarr[2]);

// Array Methods
myarr.push(6)
myarr.pop()
//console.log(myarr);

myarr.unshift(9) // add 9 in starting
myarr.shift() // remove the first element

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3));

const newarr = myarr.join() // convert array into string
// console.log(myarr);
// console.log(newarr);

// Slice, splice (be careful)

console.log("A", myarr);

const myn1 = myarr.slice(1, 3)
 
console.log(myn1);
console.log("B", myarr);
const myn2 = myarr.splice(1, 3)
 console.log("c", myarr);
 console.log(myn2);
 
 

