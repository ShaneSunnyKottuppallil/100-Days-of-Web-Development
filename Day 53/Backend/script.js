// let n=5;
// for(let i=0;i<n;i++){
//     console.log("Hello for 5 Times",i);
// }
// console.log("Bye");

let args=process.argv;
for(let i=2;i<args.length;i++){
    console.log("Hello ",args[i]);
}