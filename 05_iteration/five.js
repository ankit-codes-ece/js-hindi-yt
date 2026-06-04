const coding = ["js", "cpp", "swift"];

// coding.forEach( function (item) {
//     console.log(item);
// }  )

// coding.forEach(  (item) => {
//     console.log(item);
// } )

function printItem(item){
    console.log(item);
}
//coding.forEach(printItem)  ///only pass the reference of the function, do not call it by adding () at the end of the function name.


// coding.forEach(  (item, index, coding) => {
//     console.log(item, index, coding);
    
// })


const mycoding = [
    {
        language: "java script",
        filename: "js"
    },
    {
        language: "c++",
        filename: "cpp"
    },
    {
        language: "swift",
        filename: "swift"
    }
]

mycoding.forEach( (item) => {
    console.log(item.language);
})