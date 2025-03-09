let url="http://universities.hipolabs.com/search?country=";
let ul=document.querySelector("#list");
let list=document.createElement("li");
let country="India";
async function getuni(){
    try{
        let res=await axios.get(url+country);
        // console.log(res);
        return showclg(res.data);
    }
    catch(e){
        console.log("error:",e);
    }
}
function showclg(a){
    let clgs=a;
    for(clg of clgs){
        let li=document.createElement("li");
        li.innerHTML=clg.name;
        ul.appendChild(li);
    }
    
}
getuni();