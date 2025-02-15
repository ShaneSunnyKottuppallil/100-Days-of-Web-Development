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


// Function Expressions 
const sumis=function(a,b){
    return (a+b);
}
console.log(sumis(9,1));


// High Order Function (Function as an Argument)
function multiGreet(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}
let greet = function(){
    console.log("Hello");
}
multiGreet(greet,3);

//High Order Function (Returns a Function)
function oddeven(req){
    if(req=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else if(req=="even"){
        return function(n){
            console.log(n%2==0)
        }
    }
    else{
        console.log("Wrong Request");
    }
}

let req="even";//odd
console.log(oddeven(req));
let func=oddeven(req);
console.log(func(20));

const calcultor={
    num:55,
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
};
console.log(calcultor);
console.log(calcultor.add(3,8));
console.log(calcultor.sub(3,8));
console.log(calcultor.mul(3,8));
