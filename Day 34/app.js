// Functions in JS 
function hello(){
    console.log("Hello!");
}

hello();
hello();
console.log("\n");

// Print Name 
let Name="Shane";
function printName(){
    console.log(Name);
}
printName();
console.log("\n");

// Function to check if age is equal to or greater than 18 
let age=48;
function adult(){
    if(age>=18){
        console.log("Age is greater than or equal to 18.\nAdult");
    }
    else{
        console.log("Age is less than 18.\nNot an Adult");
    }
}
adult();
console.log("\n");


//Function for dice.
function throwDice(){   
    console.log((Math.floor((Math.random()*10)%6)+1));
}

throwDice();
console.log("\n");

// Functions with Arguments 
let studentName="Sven";
function namePrint(sN){
    console.log(sN);
}
namePrint(studentName);
console.log("\n");


// Function to Find Average of three numbers . 
let num1=20,num2=39,num3=19;
function avg(a,b,c){
    console.log((a+b+c)/3);
}
avg(num1,num2,num3);
console.log("\n");

// Return Statement
num1=45,num2=59,num3=88;
function avg2(a,b,c){
    return ((a+b+c)/3);
}
console.log(avg2(num1,num2,num3));
console.log("\n");

// Function which returns sum of first n numbers 
let sum=0;
function sumN(n){
    for(let i=1;i<=n;i++)
    {
        sum=sum+i;
    }
    return sum;
}
console.log("Sum of first 10 numbers is :",sumN(10));
console.log("\n");

// Function which returns the concatenation of all string in an array 
let arr=["shane ","sunny ","kottuppallil"];
let newString="";
function concati(arr){
    for(let i=0;i<arr.length;i++){
        newString=newString.concat(arr[i]);
    }
    console.log(newString);
}
concati(arr);
console.log("\n");


