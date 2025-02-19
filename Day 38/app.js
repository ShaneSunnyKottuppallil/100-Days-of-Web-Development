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
console.log("\n\n");




console.log("\n\n");