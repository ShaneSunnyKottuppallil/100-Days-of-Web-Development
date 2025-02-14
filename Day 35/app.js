let sum=25; //Global Scope


function calSum(a,b){
    let sum =a+b;
    return sum
} //Functional Scope
console.log(calSum(2,5));

{
    let a=25; //Block Scope
}
// console.log(a); Wont work


function inner(){
    let x=5;
    let y=6;
    function sum(){
        console.log(x+y);
    }

    sum();
}//Lexical Scope
inner();

