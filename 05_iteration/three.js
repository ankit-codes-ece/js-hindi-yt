// for of

// ["", "", "", ""]
// [{}, {}, {}, {}]

let arr = ["a", "b", "c", "d"];

for (let element of arr) {
   // console.log(`Value is ${element}`);
}

const greeting = "Hello World"
for(const char of greeting) {
    //console.log(`Value is ${char}`);
}

const map = new Map()
map.set("name", "Bruce")
map.set("age", 30)
map.set("city", "Gotham")
//console.log(map);


for(const [key, value] of map){
    //console.log(`${key} :- ${value}`);
    
}

// const myObj = {
//     name: "ankit",
//     age: 20
// }
// for(const [key, value] of  myObj){
//     console.log(`${key} :- ${value}`);
// }
