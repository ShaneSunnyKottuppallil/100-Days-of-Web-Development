// Await Function
let h1= document.querySelector("h1");
function changeclr(color,delay){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let num=Math.floor(Math.random()*5)+1;
        if(num>4){
            reject("promise rejected");
        }
        h1.style.color=color;
        resolve("Color Printed");
    },delay);  
});
}

let request=changeclr("red",1000);
console.dir(request);

// Handling Rejections with await(try,catch) 
async function demo() {
    try{
        await changeclr("red",1000);
    await changeclr("blue",1000);
    await changeclr("yellow",1000);
    await changeclr("green",1000);
    changeclr("violet",1000);
    }
    catch(err){
        console.log("Error Caught.");
        console.log(err);
    }
    let a=5;
    console.log(a);
    console.log("new number=",a+3);
}
demo();