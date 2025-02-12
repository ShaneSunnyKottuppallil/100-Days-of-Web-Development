// Trim method in String 
msg="   Hello    "
console.log(msg);
console.log(msg.trim());


//Uppercase and Lowercase in JS
let text="Shane Sunny Kottuppallil"
console.log(text.toUpperCase());
console.log(text.toLowerCase());


//indexOf Method
string="MynameisShane";
console.log(string.indexOf("Shane"));
console.log(string.indexOf("n"));
console.log(string.indexOf("z"));


//Method Chaining
console.log(msg);
console.log(msg.toUpperCase().trim());
console.log(msg.toLowerCase().trim());

//Slice Method
console.log(text.slice(6));
console.log(text.slice(0,5));
console.log(text.slice(-5));    //  -5 --> (length-5)

//Replace Method
console.log(text.replace("Shane Sunny","Sunny Thomas"));

//Repeat Method
console.log(msg.trim().repeat(3));



//Practice Questions
//Q1
let newmsg="  help!  ";
console.log(newmsg.trim().toUpperCase());

//Q2
