const mongoose=require("mongoose");
const Chat= require("./models/chat.js");

main().then((res)=>console.log("Connection Successful!"))
.catch(err=>console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

let allChats=[
    {
    from:"Neha",
    to: "Preeti",
    msg:"Send me your exam sheets",
    created_at: new Date()
    },
    {
    from:"Rohit",
    to: "Mohit",
    msg:"Teach me JS Callbacks",
    created_at: new Date()
    },
    {
    from:"Amit",
    to: "Sumit",
    msg:"all the best!",
    created_at: new Date()
    },
    {
    from:"Anita",
    to: "Ramesh",
    msg:"Bring me some fruits",
    created_at: new Date()
    },
    {
    from:"Tony",
    to: "Peter",
    msg:"Love you 3000",
    created_at: new Date()
    }
];


Chat.insertMany(allChats);


