const myObj = {
    JS: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObj) {
//     console.log(key);
//     console.log(myObj[key]);
//     console.log(`${key} :- ${myObj[key]}`);
// }

const arr = ["js", "cpp", "swift"]

for (const key in arr) {
    console.log(key);
    console.log(arr[key]);
}

// const map = new Map()
// map.set("name", "Bruce")
// map.set("age", 30)
// map.set("city", "Gotham")

// for (const key in map) {
//     console.log(key);
//     console.log(map[key]);
// }