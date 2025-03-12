const express = require("express");
const app = express();
let port =3000;

// console.dir(app);

app.listen(port,()=>{
    console.log(`App is listening on Port: ${port}`);
})

// app.USE 
// app.use((req,res)=>{
//     console.log("Request Received");
//     res.send({
//         name:"apple",
//         color:"red",
//         quote:"An apple a day, keeps doctor away"
//     });
// });


// res.send("<h1>Shane Sunny Kottuppallil (HTML)</h1>"); For HTML Responce

// GET Request 
app.get("/",(req,res)=>{
    res.send("Hai I am a Root path");
});

app.get("/apple",(req,res)=>{
    res.send("You contacted apple path");
});
app.get("/orange",(req,res)=>{
    res.send("You contacted orange path");
});
// app.get("*",(req,res)=>{
//     res.send("NOTHING HERE :)");
// });

// Path Parameter 
app.get("/:fruit/:id",(req,res)=>{
    console.log(req.params);
    let {fruit,id} =req.params;
    let htmlStr=`Your Fruit is ${fruit.toUpperCase()}`;
    res.send(htmlStr);
})


// Query Strings 
app.get("/search",(req,res)=>{
    let {q}=req.query;
    console.log(q);
    if(!q){
        res.send("NO QUERY STRING!!!")
    }
    res.send(`Search result for query: ${q}`);
})


// POST Request 
app.post("/",(req,res)=>{
    res.send("You send a POST Request");
});

