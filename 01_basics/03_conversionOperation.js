let score = "33abc"

console.log(typeof score)
console.log(typeof (score))

let IsNumber = Number(score)
console.log(typeof IsNumber)

console.log(IsNumber)

// 33 -> 33
// "33abc" -> NaN
//true -> 1 ,, false -> 0

let IsLoggedIn = "ankit"

let boolIsLoggedIn = Boolean(IsLoggedIn)
console.log(boolIsLoggedIn)

// empty string -> false
