const express=require("express");
const port =8080;
const app = express();
const path=require("path");

// GET REQUEST 
app.get("/register",(req,res)=>{
    let {user,pass}=req.query;
    res.send(`Accepted GET. Standard Get response.Hello ${user}!!!`);
});

// TO PARSE POST OR GET RESPONSE (URL ENCODED) 
app.use(express.urlencoded({ extended:true}));

// TO PARSE POST OR GET RESPONSE USING JSON ON REQUEST BODY 
app.use(express.json());

// POST REQUEST 
app.post("/register",(req,res)=>{
    // console.log(req.body);
    let {user,pass} =req.body;
    res.send(`Accepted POST. Standard POST response. Hello ${user}!!!`);
});


app.listen(port,()=>{
    console.log(`Listening on Port ${port}.`);
})
app.set("views",path.join(__dirname,"/views"));
