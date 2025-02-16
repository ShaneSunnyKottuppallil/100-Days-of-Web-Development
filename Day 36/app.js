const student={
    name:"shane",
    age:20,
    math:100,
    eng:98,
    sci:91,
    getAvg(){
        console.log(this);
        let avg=(this.eng+this.sci+this.math)/3;
        console.log(avg);
    }
};

console.log(student.getAvg());
console.log(this);

// TRY AND CATCH 
try{
    console.log(a);
}catch(e){
    console.log("Error! a is not defined by shane");
    console.log("Printing Error\n",e);
}

// Arrow Functions 
const sum =(a,b)=>{
    console.log("Sum using Arrow Funtion is :",a+b);
}
sum(2,9);

const squarearea= (a)=>{
    console.log("Area of square with Side",a,"is :",a*a);
}
squarearea(15);

const wish= () =>{
    console.log("\nHello")
}
wish()

const mult=(a,b)=>(
    a*b
);
console.log(mult(4,9));