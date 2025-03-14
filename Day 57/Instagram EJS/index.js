const express = require("express");
const app =express();
const path = require("path");
const port =8080;

app.listen(port,()=>{
    console.log(`Listening on Port ${port}`);
});
app.set("views",path.join(__dirname,"/views"));


app.get("/ig/:username",(req,res)=>{
    const followers =["shane","sven","shalets","sunny"]
    let {username}=req.params;
    res.render("instagram.ejs",{username,followers});
})
app.get("/",(req,res)=>{
    res.send("Hello!")
});



