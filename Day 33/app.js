// Nested Objects (Object of Objects)
const classinfo={
    shane:{
        age:20,
        marks:[99,100,99]
    },
    sven:{
        age:22,
        marks:[100,99,100]
    }
};

console.log(classinfo);
console.log(classinfo.shane);
console.log(classinfo.shane.marks);
console.log(classinfo.shane.marks[2]);
console.log("\n\n");


// Array of Objects 
const studentinfo=[
    {
        name:"Shane",
        age:20,
        marks:[99,100,99]
    },
    {
        name:"Sven",
        age:22,
        marks:[100,99,100]
    }
];

console.log(studentinfo);
console.log(studentinfo[0]);
console.log(studentinfo[0].marks[1]);
console.log("\n\n");

// Math Object 
// MATH PROPERTIES 
console.log(    Math.PI);
console.log(    Math.E);

// MATH METHOD 
console.log(Math.abs(-12.9));
console.log(Math.pow(2,5));
console.log(Math.floor(3.18));
console.log(Math.floor(-3.18));
console.log(Math.ceil(3.18));
console.log(Math.ceil(-3.18));
// Random Numbers between 1 to 100
console.log(Math.floor(Math.random()*100));





