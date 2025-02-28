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
// Parent 
let ul=document.querySelector("ul");
console.log(ul.parentElement);
console.log(ul.nextElementSibling);
console.log(ul.previousElementSibling);
console.log(ul.children);
console.log(ul.children[1]);
console.log(ul.children[1].nextElementSibling);
console.log(ul.childElementCount);
console.log("\n");
