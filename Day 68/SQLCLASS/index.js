const express=require("express");
const port=8080;
const app = express();
const path =require("path");
const methodOverride=require("method-override");


app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


const mysql = require('mysql2');
const {faker}=require('@faker-js/faker');

const connection=mysql.createConnection({
    host:"localhost",
    user:`root`,
    database:`shane_app`,
    password:"Sven@2002"
});
//Home Route
app.get("/",(req,res)=>{
    let q="SELECT COUNT(*) FROM user";
    try{
            connection.query(q,(err,results)=>{
                if(err) throw err;
                let count=results[0]["COUNT(*)"];
                res.render("home.ejs",{count});
            });
        }catch(err){
            console.log(err);
            res.send("Some error in DB.");
        }
});

// Show Route
app.get("/user",(req,res)=>{
    let q= "SELECT * FROM user";
    try{
        connection.query(q,(err,users)=>{
            if(err) throw err;
            res.render("showusers.ejs",{users});
        });
    }catch(err){
        console.log(err);
        res.send("Some error in DB.");
    }
});

// Edit Route 
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,results)=>{
            if(err) throw err;
            let user=results[0];
            res.render("editform.ejs",{user});
        });
    }catch(err){
        console.log(err);
        res.send("Some error in DB.");
    }
    
})

//UPDATE (DB) ROUTE
app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    let{password:formPass,username:newUsername} =req.body;
    let q=`SELECT * FROM user WHERE id='${id}'`;

    try{
        connection.query(q,(err,results)=>{
            if(err) throw err;
            let user=results[0];
            if(formPass!=user.password){
                res.send("Invalid Password");
            }
            else{
            let q2=`UPDATE user SET username ='${newUsername}' WHERE id='${id}'`;
                connection.query(q2,(err,result)=>{
                if (err) throw (err);
                res.redirect("/user");
            })
            }
        });
    }catch(err){
        console.log(err);
        res.send("Some error in DB.");
    }
})

app.listen(port,()=>{
    console.log(`Listening to port : ${port}`);
});


let getRandomUser=()=>{
    return [
        faker.string.uuid(),
        faker.internet.username(), // before version 9.1.0, use userName()
        faker.internet.email(),
        faker.internet.password(),
      ];
}



