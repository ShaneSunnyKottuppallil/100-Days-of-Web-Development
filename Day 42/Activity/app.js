let para=document.createElement('p');
let body=document.querySelector('body');
let btn=document.querySelector('.colbtn');
let div=document.querySelector('.div1');
para.innerHTML="Generate Random Color";
body.insertAdjacentElement('afterbegin',para);
para.style.margin="10px 870px";
btn.addEventListener("click",newfunc);
function newfunc(){
    return div.style.backgroundColor=getrancol();   
}
function getrancol(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    para.innerHTML=color;
    para.style.margin="10px 900px"
    body.insertAdjacentElement('afterbegin',para);
    return color;
}