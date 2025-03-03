h1=document.querySelector("h1");
function changeclr(color,delay,nextclrchange){
    setTimeout(() => {
        h1.style.color=color;
        if(nextclrchange) nextclrchange();
    }, delay);
}
//callback nesting -> callback hell
changeclr("red",1000,()=>{
    changeclr("orange",1000,()=>{
        changeclr("green",1000);
    });
});




// setTimeout(function(){
//     h1.style.color="red";
// },1000);
// setTimeout(function(){
//     h1.style.color="orange";
// },2000);
// setTimeout(function(){
//     h1.style.color="green";
// },3000);
