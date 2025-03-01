let para=document.querySelector('p');
console.dir(para.innerText);
console.dir(para.textContent);
console.dir(para.innerHTML);
console.log("\n");
para.innerHTML="Hi, I am <b>Peter Parker</b>"
console.dir(para.innerText);
console.log("\n");

// Manipulating Attributes  
let img=document.querySelector('img');
console.dir(img.getAttribute('id'));
console.log("\n");

// Manipulating Style 
console.dir(img);
console.dir(img.style);
console.log("\n");

let heading=document.querySelector('h1');
console.dir(heading);
console.dir(heading.style);
heading.style.color="Red";
heading.style.backgroundColor="yellow";
console.log("\n");

let links=document.querySelectorAll(".box a");
// for(let i=0;i<links.length;i++){
//     links[i].style.color="purple";
// }
for(link of links){
    link.style.color="purple";
}
console.log("\n");

// cLassList Property 
console.dir(img.classList);
console.log(img.classList.contains("xyz"));
img.classList.add("newimgclass");
console.dir(img.classList);
img.classList.remove("xyz");
console.dir(img.classList);
console.log(img.classList.contains("xyz"));
console.log("\n");

// Navigation 
// Parent , Sibling (Next, Previous) , Children
let ul=document.querySelector("ul");
console.log(ul.parentElement);
console.log(ul.nextElementSibling);
console.log(ul.previousElementSibling);
console.log(ul.children);
console.log(ul.children[1]);
console.log(ul.children[1].nextElementSibling);
console.log(ul.childElementCount);
console.log("\n");

// Adding elements 
let newp=document.createElement('p');
console.dir(newp);
newp.innerText="Hai I am a new Paragraph.";
console.log(newp.innerText);
let body=document.querySelector('body');
body.appendChild(newp);
newp.append("New paragraph content");
console.log(newp.innerText);
console.log("\n");

// Practice Qs 
// Q1) 
let q1p=document.createElement('p');
console.dir(q1p);
q1p.innerHTML="Hey I'm red!";
body.append(q1p);
q1p.style.color="red";

// Q2 
let h3=document.createElement("h3");
h3.innerHTML="I am blue H3!";
body.append(h3);
h3.style.color="blue";

//Q3
let div1=document.createElement('div');
div1.style.border="solid black"
div1.style.backgroundColor="pink";
body.appendChild(div1);

let h1new=document.createElement('h1');
h1new.innerHTML="I am in a div";
div1.appendChild(h1new);
q1p.innerHTML="Me too!"
div1.append(q1p);




