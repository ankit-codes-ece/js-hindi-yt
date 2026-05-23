let name = "Ankit"
let repoCount = 50

console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} & my repocount is ${repoCount}`);

const gameName = new String("battelground")
console.log(gameName);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0, 4) // starting from 0 and take 4 character
console.log(newString);

const anotherString = gameName.slice(-12, 4)// starting from -12 and take 4 character
// in slice we can use -ve value also but not in substrings
console.log(anotherString);


const newString1 = "   Ankit   "
console.log(newString1)
console.log(newString1.trim())

const url = "https://ankit.com/ankit%20Chaurasiya"

console.log(url.replace('%20', '-'));
console.log(url.includes("ankit"));

const name2 = "ank-it-chau-rasiiya"
console.log(name2.split('-'));

///////    READ STRINGS METHOD 