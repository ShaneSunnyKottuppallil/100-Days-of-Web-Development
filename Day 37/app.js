// setTimeout 
console.log("Hello!");
const nameof=()=>{
    console.log("Shane Sunny Kottuppallil");
}
setTimeout(nameof,1750);

const msg=()=>{
    console.log("I will come ,wait for 2s and I will come  again. and I will stop after 10s");
}
let id=setInterval(msg,2000);
console.log("Welcome to");

// To stop printing msg (To stop setInterval)
setTimeout(()=>{
    clearInterval(id);
    console.log("Interval Cleared after 10s");
},10000);



// "this" keyword in Normal Funtion and Arrow function 
//Normal Function
const student={
    name:"shane",
    marks:90,
    printline:function(){
        console.log(this.marks);
        console.log("this=",this);
    }
};
student.printline();

//Arrow Funtion
const student2={
    name2:"Sven",
    marks2:"100",
    printline2:()=>{
        console.log(this.marks2,"for 2nd fucntion");
        console.log("for 2nd fucntion this=",this);
    }
};
student2.printline2();



// A better Example 
const student3={
    name:"Shane Sunny",
    marks:99,
    //First- arrow function inside a normal function
    getinfo1:function(){
        setTimeout(()=>{
            console.log("This of getinfo1 (Arrow Function)",this);//Student  ( Parent is function() whose scope is object (student3))
        })
    },
    //Second- normal function inside a normal function
    getinfo2:function(){
        setTimeout(function (){
            console.log("This of getinfo2 (Normal Function)",this);//Window (Scope is same as Parents scope (here parent is setTimeout ))
        })
    }
}

student3.getinfo1();
student3.getinfo2();


