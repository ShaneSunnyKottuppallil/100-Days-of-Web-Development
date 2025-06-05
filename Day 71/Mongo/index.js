const mongoose= require("mongoose");

main()
.then(()=>{
    console.log("Connection Successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema=new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User= mongoose.model("User",userSchema);

// const Employee= mongoose.model("Employee",userSchema);
// const user1= new User({
//     name:"Adam",
//     email:"adam@yahoo.in",
//     age:48
// });


// Insert one 
// const user2= new User({
//     name:"Eve",
//     email:"eve@yahoo.in",
//     age:48
// });
// user2.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


// Insert Many 
// User.insertMany([
//     {name:"Shane",email:"shanesunnyssk@gmail.com",age:20},
//     {name:"Sven",email:"svensunny@gmail.com",age:22},
//     {name:"Shalets",email:"shalets@gmail.com",age:49},
//     {name:"Sunny",email:"sunny@gmail.com",age:51}
// ]).then((data)=>{
//     console.log(data);
// });

// Find all
// User.find({}).then((res)=>{
//     console.log(res);
// });

// Find with name Shane 
// User.find({name:"Shane"}).then((res)=>{
//     console.log(res);
// });


User.updateOne({name:"Sunny"},{age:54},).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

// UpdateMany 
// User.updateMany({age:{$gt:45}},{age:55})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


// FindOneAndUpdate
//FindOneAndUpdate returns the returns updated value
// { new= true } is an option which is used to return modified data. By default it is flase which returns data which is getting modified.
// User.findByIdAndUpdate({name:"Bruce"},{age:35},{new=true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// DeleteOne 
// User.deleteOne({name:"Eve"}).then((res)=>{
//     console.log(res);
// })

// DeleteMany
// User.deleteMany({age:{$gt:45}}).then((res)=>{
//     console.log(res);
// });
