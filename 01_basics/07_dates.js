//   DATES

let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString())
console.log(myDate.toString());

const myCreatedDate = new Date(2026, 0, 5, 5, 8)
let myCreatedDate = new Date("01-14-2026")
let myCreatedDate = new Date("2026-01-14")
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime() );
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
   weekday: "long",
})