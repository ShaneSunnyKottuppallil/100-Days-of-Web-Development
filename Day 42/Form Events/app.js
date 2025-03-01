let body=document.querySelector("body");
let form=document.querySelector("form");

form.addEventListener("submit",function(event){

    event.preventDefault();
    console.log("Form Submitted");

    let inp=document.querySelector("input");
    let p=document.createElement("p");

    p.innerHTML=`Your Name is ${inp.value}`;
    body.appendChild(p);

    console.log(form.elements[0].value);//Give same value as inp.value
    console.log(this.elements[0].value);//This also gives same value as inp.value and form.elements[0].value

})

let username=document.querySelector("input");
username.addEventListener("change",function(){
    console.log(`Input Changed: ${username.value}`);
})