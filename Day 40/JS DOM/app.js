// Get Element by ID 
let imgObj=document.getElementById("mainImg");
console.dir(imgObj);
console.log("\n");
// Get Element by Class 
let oldimgClass = document.getElementsByClassName("oldImg");
console.dir(oldimgClass);
console.log("\n");

// For loop to print all elemwnts with same class 
for(let i=0;i<oldimgClass.length;i++){
    console.dir(oldimgClass[i]);
}
console.log("\n");

// Get Element by Tag Name 
ptag=document.getElementsByTagName("p");
console.dir(ptag);
