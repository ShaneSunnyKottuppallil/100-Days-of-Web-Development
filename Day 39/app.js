//Spread
let arr = [2, 5, 4, 6, 7, 8];
console.log(Math.min(...arr));
console.log(arr);
console.log(typeof (arr));
console.log(...arr);
console.log("Shane Sunny");
console.log(..."Shane Sunny");
console.log("\n");

// Spread Array Literals 
let string = "Shane";
console.log(string);
console.log(typeof (string));//string
let chars = [...string];
console.log(typeof (chars));//object
console.log(chars);
console.log("\n");

//joining arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = [...arr1, ...arr2];
console.log(arr3);
console.log("\n");

// Spread Object Literals 
let data = {
    name: "shane",
    email: "shanesunnyssk@gmail.com"
};
console.log(data);
let newdata = {
    age: 20,
    ...data
};
console.log(newdata);
console.log("\n");


// Array to Object 
let newarr = [2, 6, 2, 77, 11, 32];
let newObj = { ...newarr };
console.log(newarr);
console.log(newObj);
console.log("\n");

//Rest in JS
args = [2, 4, 6];
let sum = (...args) => {
    return args.reduce((add, el) => add + el);
}
console.log(sum(args));
console.log(sum(...args));
console.log("\n");

// Destructing for Arrays in JS 
let names = ["shane", "sven", "shalets", "sunny"];
let [winner, runnerup, ...others] = names;
console.log("Winner is :", winner, "\nRunnerup is:", runnerup, "\nParticipants are :", others);
console.log("\n");

//Destructing for Object in JS
const studentData = {
    name: "Shane",
    age: 20,
    class: 12,
    subjects: ["english", "maths", "chemistry", "computer science", "physics"],
    username: "shanesunnyssk",
    password: "password123",
    city: "Kerala"
};
const { username: newUsername, password: newPassword, city = "TamilNadu" } = studentData;//Tamil Nadu wont come,TamilNadu acts as a default value here... if city value is present in student then it will be considered
console.log(newUsername, newPassword, city);
console.log("\n\n");
// Practice Qs
// Q2 
let randarr=[1,2,3,4,5];
let addfive = randarr.map((el)=>el+5);
console.log(addfive);
console.log("\n");

// Q3
let words=["shane","sven","shalets","sunny"];
let newword=words.map((el)=>
    el.toUpperCase()
);
console.log(newword);
console.log("\n");
//Q4
randarr=[1,2,3,4,5];
let finarr;
let newrandarr=[6,7,8,9,10];
let finalArray=function(a,b){
    let newb=b.map((el)=>el*2);
    finarr=[...a,...newb];
    return finarr;
};
console.log(finalArray(randarr,newrandarr));
console.log("\n");



