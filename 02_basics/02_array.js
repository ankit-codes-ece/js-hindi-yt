// const marvel_heroes = ["Ironman", "Spiderman", "Thor"]
// const dc_heroes = ["superman", "Batman", "flash"]

// //marvel_heroes.push(dc_heroes)   // it take array as a element
// //console.log(marvel_heroes[3][2]);  // flash

// console.log(marvel_heroes);

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

// const all_newheroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_newheroes)


const another_array = [1, 2, 3, 4, [3, 4, 2, [2, 3]]]
console.log(another_array)
const my_another_array = another_array.flat(3)  // here 3 represent the depth 
console.log(my_another_array);

console.log(Array.isArray("Ankit"));
console.log(Array.from("ankit"));
console.log(Array.from({Name: "ankit"}));  // Interesting

const score1 = 300
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3));

