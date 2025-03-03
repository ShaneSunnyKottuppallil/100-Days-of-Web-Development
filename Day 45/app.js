// Call Stack 
function hello(){
    console.log("Hello");
}
function demo(){
    hello();
}
demo();


//Callback
setTimeout(function(){
    console.log("Shane Sunny");
},2000);
console.log("Helloooooo")