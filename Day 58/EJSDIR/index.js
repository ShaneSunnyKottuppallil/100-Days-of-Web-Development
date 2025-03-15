const express = require("express");
const port=8080;
const app=express();

const path =require("path");

app.listen(port,()=>{
    console.log(`Listening on Port ${port}`);
});

app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
app.set("views",path.join(__dirname,"/views"));


app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData = require("./data.json");
    const data=instaData[username];
    if(data){
        res.render("instagram.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }
})
app.get("/",(req,res)=>{
    res.send("Hello!")
});



