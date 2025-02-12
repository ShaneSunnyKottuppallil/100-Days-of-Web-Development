// Loops with Arrays
let fruits=["apple","mango","banana","pineapple","grape"];
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}
console.log("\n\n");
// Nested Loops with Nested Arrays 
let marks=[[1,5,7,2],[12,15,19,20],[100,124,353,644]];
for(let i=0;i<marks.length;i++){
    for(let j=0;j<marks[i].length;j++){
        console.log(marks[i][j]);
    }
    console.log("\n");
}

//For - Of loops
for(fruit of fruits){
    console.log(fruit);
}
console.log("\n");
// eg 2
for(char of "shanesunny"){
    console.log(char);
}
console.log("\n");


// Nested For-Of Loop
for(i of marks){
    for(j of i){
        console.log(j);
    }
    console.log("\n");
}