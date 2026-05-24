const score = 400
const balance = new Number(100)

console.log(score);
console.log(balance);

console.log(score.toLocaleString().length);
console.log(balance.toFixed(2));


const otherBalance = 123.257

console.log(otherBalance.toPrecision(4));  // use it appropriately

const otherScore = 10000000
console.log(otherScore.toLocaleString());
console.log(otherScore.toLocaleString('en-IN'));


// +++++++++++++   MATHS   +++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(6.6));
console.log(Math.ceil(5.1));  //6
console.log(Math.floor(5.9));   //5
console.log(Math.min(2, 4, 5, 8));
console.log(Math.max(2, 4, 5, 8));


console.log(Math.random()); 
console.log((Math.random() * 10) + 1); 
console.log(Math.floor((Math.random() * 10)) + 1); 

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1))) + min)
