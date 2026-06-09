const myNums = [1, 2, 3, 4, 5, 6];

// const total = myNums.reduce(function (accumulator, currentValue)  {
//     console.log(`acc:${accumulator} & currVal: ${currentValue}`);
    
//     return accumulator + currentValue;
// }, 5);



const total = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(total); 

const shoopingCart = [
    {
        item: "mobile",
        price: 9999
    },
    {
        item: "tshirt",
        price: 799
    },
    {
        item: "jeans",
        price: 899
    },
    {
        item: "shirt",
        price: 699
    },
]

const myTotal = shoopingCart.reduce((acc, item) => acc + item.price, 0 )
console.log(myTotal);
