const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// Code to Connect node to mysql database 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'shane_app',
    password: 'Sven@2002'
  });

//   FAKER to generate random values. 
  let getRandomUser =()=>{
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
    ];
  }

//   let q="SHOW TABLES";


let q="INSERT INTO user VALUES ?";
let data =[];

// To generate 100 randomw fake users 
for(let i=0;i<100;i++){
    data.push(getRandomUser());
}

// Code for querying 
try{
    connection.query(q,[data],(err,results)=>{
        if(err) throw err;
        console.log(results);
    });
}catch(err){
    console.log(err);
}

connnection.end();


// //To Insert Data one by one to table.
// let user =["123@abc","random_user","randomuser@gmail.com3","adegada"];
// try{
//     connnection.query(q,user,(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     });
// } catch(err){
//     console.log(err);
// }





















const express=require("express");
const port=8080;
const app = express();
const path =require("path");

app.set("views",path.join(__dirname,"/views"));


const mysql = require('mysql2');
const {faker}=require('@faker-js/faker');

const connection=mysql.createConnection({
    host:"localhost",
    user:`root`,
    database:`day_68`,
    password:"Sven@2002"
});



// app.get("/",(req,res)=>{
//     let q="SELECT COUNT(*) FROM user";
//     try{
//             connection.query(q,[data],(err,results)=>{
//                 if(err) throw err;
//                 console.log(results);
//                 res.send(results);
//             });
//         }catch(err){
//             console.log(err);
//             res.send("Some error in DB.");
//         }
// });

// app.listen(port,()=>{
//     console.log(`Listening to port : ${port}`);
// });


let getRandomUser=()=>{
    return [
        faker.string.uuid(),
        faker.internet.username(), // before version 9.1.0, use userName()
        faker.internet.email(),
        faker.internet.password(),
      ];
}

let q="INSERT INTO user VALUES ?";
let data =[];

// To generate 100 randomw fake users 
for(let i=0;i<100;i++){
    data.push(getRandomUser());
}



try{
    connection.query(q,[data],(err,results)=>{
        if(err) throw err;
        console.log(results);
    });
}catch(err){
    console.log(err);
}

// connnection.end();


  