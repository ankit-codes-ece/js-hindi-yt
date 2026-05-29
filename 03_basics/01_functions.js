// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2) {
    result = number1 + number2
    return result
}

// addTwoNumber(3, null)
// addTwoNumber(3, "3")
// const result = addTwoNumber(2,4)
// console.log("Result:", result);

function loginUserMessage(username = "Ankit"){
    if(!username){
        console.log("Pls enter a username");
        return
    }
    return `${username} just loggedIn`
}

// console.log(loginUserMessage("ankit"));
// console.log(loginUserMessage());


function calculateCartPrice(value1, value2, ...num){     /// ... is rest operator
    return num;
}
console.log(calculateCartPrice(100, 200, 300, 400, 500));

const user = {
    name: "Ankit",
    price: 400,
}
function handleuser(anotheruser){
     console.log(anotheruser.name);
     console.log(anotheruser.price);
}

// handleuser(user)
handleuser({
    name: "Ankit",
    price: 400
})