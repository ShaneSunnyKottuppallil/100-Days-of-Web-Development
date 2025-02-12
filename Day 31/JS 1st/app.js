// While loop
let i=1;
while(i<=5){
    console.log(i);
    i++;
}
// Break Keyword 
let i1=1;
while(i1<=5){
    if(i1==3){
        break;
    }
    console.log(i1);
    i1++;
}


// Favourite Movie
let favMov="avatar";
let guess=prompt("Guess my Fav Movie");
while((favMov!=guess) && (guess!="quit")){
    guess=prompt("Try again");
}

if(guess==favMov){
    alert("Hurray you got it!!");
}
 

