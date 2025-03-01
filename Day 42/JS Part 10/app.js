let btn=document.querySelector('.button1');
console.dir(btn);
btn.onclick =function(){
    console.log("Button Was Clicked!");
}
btn.onmouseenter =function(){
    // console.log("You entered a button scope.")
    let descri=document.createElement('p');
    descri.innerHTML="You Entered button scope for second button";
    let body=document.querySelector('body');
    body.appendChild(descri);
}


let helloalert=()=>{
    alert("Hello");
}
let namealert=()=>{
    alert("Shane Sunny Kottuppallil Here");
}
let btn3=document.querySelector('.button3');
console.dir(btn3);
btn3.addEventListener("click",helloalert);
btn3.addEventListener("click",namealert);

// Event Listeners for elements 
let p=document.querySelector("p");
p.addEventListener("click",()=>{
    p.innerHTML="Hai I am Shane Sunny";
})

let div=document.querySelector("div");
div.addEventListener("mouseenter",()=>{
    div.style.borderRadius="50%";
})

let newbtn=document.querySelector(".button4");
newbtn.addEventListener("click",function(){
    console.log(this);
    console.dir(this);
})

// Keyboard Events 
let inp=document.querySelector("input");
inp.addEventListener("keydown",function(){
    console.log("Key was pressed");
    console.log("Key= ",event.key);
    console.log("Code= ",event.code);
})

//Form Events
