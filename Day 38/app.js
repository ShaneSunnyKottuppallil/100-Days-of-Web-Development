// forEach in JS 
let arr =[18,27,35,45,7];
let print=function(ele){
    console.log(ele);
};
arr.forEach(print);
console.log("\n\n");

// or 
arr.forEach(function(el){
    console.log(el);
})
console.log("\n\n");


//map in JS
let arr2=[13,68,87,25,6];
let doubleFunc=function(el){
    return el*2;
}
let arr3=arr2.map(doubleFunc);
console.log(arr3);
console.log("\n\n");

// Filter in JS 
let arr4=[12,32,43,54,657,67,75,48];
let even=arr4.filter((arr4)=>{
    // if(arr4%2==0)
    //     return arr4;
    //or
    return arr4%2==0;
})
console.log(even);
console.log("\n");


let arr5=[2,4,6,8];

// Every in JS 
let result= arr5.every( (el)=>{
    if(el%2==0){
        return true;
    }
})
console.log(result);
console.log("\n");

// Some in JS 
let result2=arr5.some((el)=>el%2==0);
console.log(result2);
console.log("\n");

// Reduce in JS 
let result3= arr5.reduce((res,el)=>{
    return res*el;
})//2*4*6*8=384
console.log(result3);
console.log("\n");

// Maximum of an Array using Reduce 
let arr6=[-10,2,41,55,2,3,14,5,72,3,33];
let maxofArray= arr6.reduce((acc,el)=>{
    if(acc>el){
        return acc;
    }
    else
    {
        return el;
    }
})
console.log(maxofArray);
console.log("\n");

// Practice Qs 
// To find if all elements of an array are multiples of 10. 
let arr7=[10,20,30];
let result4=arr7.every((el)=>el%10==0);
console.log(result4);
console.log("\n");

// To find min number of an array using reduce 
let minofArray=arr6.reduce((min,el)=>{
    if(min>el){
        return el;
    }
    else{
        return min;
    }
})
console.log(minofArray);
console.log("\n");

// Default Parameters 
function sum(a,b=3){
    return a+b;
}
console.log(sum(2));//5