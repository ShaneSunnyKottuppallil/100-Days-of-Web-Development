// function saveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success(data);
//     }
//     else {
//         failure();
//     }

// }

// saveToDb("Shane Sunny", () => {
//     console.log("Success1: Your data was saved");
//     saveToDb("Hello World", () => {
//         console.log("Success2: Your Data 2 was saved");
//         saveToDb("Third Data", () => {
//             console.log("Success3: Your Data 3 was saved");
//         }, () => {
//             console.log("Failure3: Weak Connection. Data 3 not saved.");
//         })
//     }, () => {
//         console.log("Failure2: Weak Connection. Data 2 not saved.");
//     });
// }, () => {
//     console.log("Failure1: Weak Connection. Data not saved.");
// });

function saveToDb(data) {
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed>4){
            resolve("Success : Data was saved");
        } else{
            reject("Failure : Weak Connection");
        }
    });
}

saveToDb("Shane Sunny Kottuppallil").then((result)=>{
    console.log("result: ",result);
    console.log("Promise 1:Sucessfully Completed");
    return(saveToDb("HelloWorld"));
})
.then((result)=>{
    console.log("result: ",result);
    console.log("Promise 2: Successfully Completed");
    return(saveToDb("Third Call"));
})
.then((result)=>{
    console.log("result: ",result);
    console.log("Promise 3: Successfully Completed");
})
.catch((error)=>{
    console.log("error: ",error);
    console.log("Failed to Work!");
});

