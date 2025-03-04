// Refactoring Old Code (Day 45 Color Changing Function) 
h1=document.querySelector("h1");

// function changeclr(color,delay,nextclrchange){
//     setTimeout(() => {
//         h1.style.color=color;
//         if(nextclrchange) nextclrchange();
//     }, delay);
// }
// //callback nesting -> callback hell
// changeclr("red",1000,()=>{
//     changeclr("orange",1000,()=>{
//         changeclr("green",1000);
//     });
// });


// setTimeout(function(){
//     h1.style.color="red";
// },1000);
// setTimeout(function(){
//     h1.style.color="orange";
// },2000);
// setTimeout(function(){
//     h1.style.color="green";
// },3000);

function changeclr(color,delay){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        h1.style.color=color;
        resolve("Color Printed");
    },delay);  
});
}

let request=changeclr("red",1000);
console.dir(request);

changeclr("red",1000)
.then((result)=>{
    console.log("result:",result);
    console.log("First Color Changes");
    return changeclr("orange",1000);
})
.then((result)=>{
    console.log("result:",result);
    console.log("Second Color Changes");
    return changeclr("green",1000);
})
.then((result)=>{
    console.log("result:",result);
    console.log("Third Color Changes");
})
.catch((error)=>{
    console.log("error:",error);
    console.log("An error occured");
})

