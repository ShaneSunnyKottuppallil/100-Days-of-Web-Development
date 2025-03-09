// Async Function in JS 
async function greet(){
    // throw "Some Random Error";
    return "Hello World";
}

console.log(greet());
console.dir(greet());

greet()
.then((result)=>{
    console.log("result :",result);
    return greet();
})
.then((result)=>{
    console.log("result2 :",result);
})
.catch((error)=>{
    console.log("error :",error);
});

console.log("\n\n");

//Async Function on Arrow Functions
let demo= async ()=>{
    // throw "Second Random Error"
    return 5;
}
demo().then((res)=>{
    console.log("result1 : ",res);
    return demo();
})
.then((res)=>{
    console.log("result2 : ",res);
})
.catch((err)=>{
    console.log("error : ",err);
});

console.log("\n\n");