let url="https://catfact.ninja/fact"
let p=document.querySelector("#fact");
let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    getFact();
})
async function getFact() {
    try{
        let res= await axios.get(url);
        p.innerHTML=res.data.fact;
    }    
    catch(e){
        console.log("error: ",e);
    }
}