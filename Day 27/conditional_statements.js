console.log("");
console.log("Conditional Statement in JavaScript");
console.log("If Statement.");

let your_age=20;
if(your_age>=18){
    console.log("You are Eligible to vote.");
}

console.log("");

your_age=14
console.log("Else-If Statement.");
if(your_age>=18){
    console.log("You are Eligible to vote.");
}
else if(your_age<18){
    console.log("You are not Eligible to vote");
}

console.log("");
console.log("Practice Question.");
let size="L";
if(size==="XL"){
    console.log("Rs 250");
}
else if(size==="L"){
    console.log("Rs 200");
}
else if(size==="M"){
    console.log("Rs 100");
}
else if(size==="S"){
    console.log("Rs 50");
}
else {
    console.log("Invalid Option!");
}


console.log("");
console.log("Nested If Statement.");
let marks=83;
if(marks>=33)
{
    if(marks>=90)
    {
        console.log("O grade");
    }
    else if(marks>=80 && marks<90){
        console.log("A+");
    }
    else{
        console.log("Passed!");
    }
}
else{
    console.log("Better Luck next time.");
}


console.log("");
console.log("Switch Statement.");
let color="yellow";
switch(color){
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("Slow Down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Broken traffic light.");
}

console.log("");
console.log("Practice Question.");

let day=5;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Option");    
}