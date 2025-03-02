let body=document.querySelector("body");
let inp=document.querySelector("input");
let btn=document.querySelector("button");
let lis=document.querySelectorAll("li");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item =document.createElement("li");
    item.innerHTML=inp.value;

    let dltbtn =document.createElement("button");
    dltbtn.innerHTML="X";
    dltbtn.classList.add("delete");

    item.appendChild(dltbtn);
    
    ul.appendChild(item);
    inp.value="";
})

// let dltbtns=document.querySelectorAll(".delete");
// for(delbtn of dltbtns){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     })
// }

ul.addEventListener("click",function(event){
    // console.dir(event.target);
    // console.dir(event.target.nodeName);
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    }
    //  else{
    //     console.log("Dont delete");
    // }
})