let url="https://catfact.ninja/fact";

fetch(url).then((response)=>{
    console.log(response);
    // console.log(response.json());
    return response.json();
})
.then((data)=>{
    console.log(data);
    console.log("Vlue of first fact : ",data.fact);
})
.catch((error)=>{
    console.log("error :",error);
});
console.dir(fetch(url));


// Using fetch with async await 
let url2 ="https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res=await fetch(url2);
        console.log("Second Fetch Promise : ",res);
        let validData=await res.json();
        console.log("Value of Second Fact:",validData.fact);
    }
    catch{
        console.log("Error in fetching url2");
    }
    
}
getFacts();