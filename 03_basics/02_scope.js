let c = 300


/// we dont use var because it's globally scoped 


if(true){
    let a = 200
    let c = 10
    console.log("Inner:", c);
}
console.log("Outer:", c);


function one() {
    const username = "ankit"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
   // console.log(website);
    two()
}

one()

/////  ++++++ interesting


console.log(addone(5))

function addone(num){
    return num + 1
}

// addtwo(5)      //it will give error

const addtwo = function(num){
    return num + 2
}