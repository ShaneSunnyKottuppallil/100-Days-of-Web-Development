const express= require("express");
const app=express();
const port =8080;
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    // res.send("Your are on ROOT Path."); 
    res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("Hello!!"); 
});

app.get("/rolldice",(req,res)=>{
    let diceVal =Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal});
    // res.render("rolldice.ejs",{diceVal:diceVal});

    // Both lines are the same 
});


app.listen(port,()=>{
    console.log(`Listening on Port : ${port}`);
});

