// Practice Q1 
let arr=[24,57,24,1,2,56,30,27,10];
let num1=20;
let i=0;
while(i<=arr.length){
    if(arr[i]>num1){
        console.log(arr[i]);
    }
    i++;
}

//Practice Q2
let str= "fwfsdydaveqwedaf";
console.log(str);
let ans="";
for(let i=0;i<str.length;i++){
    if(ans.indexOf(str[i])==-1){
        ans=ans+str[i];
    }
}
console.log(ans);

// Practice Q3
let country=["Australia","Germany","United States of America"];
let a;
for(let i=0;i<country.length-1;i++){
    if(country[i].length>country[i+1].length){
        a=i;
    }
    else{
        a=i+1;
    }
}
console.log(country[a]);