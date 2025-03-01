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
