const promiseOne = new Promise(function(resolve, reject){
    // Do async task
    // DB calls, network

    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('promise is consumed');
    
})

new Promise(function(resolve, reject){
    // async
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log("task 2 resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 3");
        resolve({username:"ankit", email:"ankit@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"chai", password:"code"})
        }else{
            reject("ERROR: something went wrong")
        }
    },1000)
})

promiseFour
.then(function(user){
    console.log(user);
    // return => it will not return anythng to a variable
    return user.username
    
})
.then(function(username){
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
})
.finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username:"EREN", password:"mikassa"})
        }else{
            reject("ERROR: EREN is a titan")
        }
    }, 1000)
});

async function consumepromiseFive(){
    try { const response = await promiseFive
        console.log(response);
        
        
    } catch (error) {
        console.log(error);
        
        
    }
}
    
consumepromiseFive()

// async function user() {
    
//     try {
//         const response = await fetch("https://api.github.com/users/ankit-codes-ece")
//         // console.log(response);
        

//     const data = await response.json()
//     console.log(data);
        
//     } catch (error) {
//        console.log("E: ERROR found");
               
//     }
    
// }

// user()


fetch("https://api.github.com/users/ankit-codes-ece")
.then((response) => {
    return response.json()  
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log("error");
    
})