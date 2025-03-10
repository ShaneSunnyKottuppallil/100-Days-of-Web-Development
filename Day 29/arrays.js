// Arrays in JS.
let students=["shane","sven","shalets","sunny"];
console.log(students);
console.log(students[1].toUpperCase());
console.log(students.length);
console.log(typeof(students));

// Mixed Array 
let mixedArray=["Shane",9,'a'];
console.log(mixedArray)


// Array Methods
// 1) Push Method 
students.push("thomas");
console.log(students);
// 2)Unshift Method 
students.unshift("nithin");
console.log(students);
// 3) Pop Method 
students.pop();
console.log(students);
// 4) Shift Method 
students.shift();
console.log(students);

// 5) indexof Method 
console.log(students.indexOf("sven"));
// 6) Includes Method
console.log(students.includes("sunny"));
console.log(students.includes("aaron"));

// 7) Concatenation Method 
let marks=[91,29,32,43,56,90];
console.log(students.concat(marks));
console.log(students);
// 8) Reverse Method 
console.log(students.reverse());
console.log(students);
console.log(students.reverse());

// 9) Slice Methoda in Arrays 
let colors=["red","yellow","green","blue","violet","orange","pink"];
console.log(colors);
console.log(colors.slice());
console.log(colors.slice(2)," Sliced two from start");
console.log(colors," normal array");
console.log(colors.slice(-3)," Sliced 3 from end.");
console.log(colors,"normal array");
console.log(colors.slice(1,5)," Sliced from 1 to 5 (5 not included)");
console.log(colors,"normal array");

// 10) Splice Method in Arrays 
console.log(colors ,"again a normal array");
console.log(colors.splice(4) , " are elements which will be deleted");
console.log(colors);
console.log(colors.splice(0,1),"is the selected element which will be deleted next");
console.log(colors);
console.log(colors.splice(0,0,"indigo","black","grey","maroon") ,"since no element is spliced ....becoz its given splice(0,0)");
console.log(colors);

//11) Sort Method in Arrays
console.log(colors.sort());
console.log(colors);
let sqaures=[25,36,4,9,64,16];
console.log(sqaures);
console.log(sqaures.sort());


// Practice Qs 
// Q1 
let arr=['january','july','march','august'];
console.log(arr);
console.log(arr.splice(0,2,"july","june"));
console.log(arr);

// Q2
let newarr=['c','c++','html','javascript','python','java','c#','sql'];
console.log(newarr);
console.log(newarr.reverse().indexOf("javascript")); 
console.log(newarr);

// Array References .
console.log([1]==[1]);
console.log([1]==[1]);

let arr1=['a','b'];
let arrcopy=arr1;
console.log(arr1,arrcopy);
arrcopy.push('c');
console.log(arr1,arrcopy);
console.log(arrcopy==arr1);
console.log(arrcopy===arr1);


// Constant Array 
const array1= [1,2,3,4,5];
array1.push(18);
console.log(array1);
let newarray1=array1; //this wont throw error but
let newarray2;
// array1=newarray2;//this will throw error

// Nested Array 
let newnum=[[1,2],[3,4],[5,6,7],[7,8]];
console.log(newnum);
console.log(newnum.length);
console.log(newnum[2].length);
console.log(newnum[2][1]);



