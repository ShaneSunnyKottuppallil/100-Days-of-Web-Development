//Object Literals
const student={
    studentName:"shane",
    age:20,
    marks:99.9,
    city:"Chennai"
};
console.log(student);

const item={
    price:100.99,
    discount:10,
    color:["yellow","red"]
};
console.log(item);

//Create a Post
const post={
    username:"Shane",
    content:"Shane Sunny Kottuppallil",
    likes:100,
    reposts:5,
    tags:["sven","shalets","sunny"]
};
console.log("Post\n",post);
console.log("\n\n");

//Get Values
console.log(item);
console.log(item.price);
console.log(item["color"]);
console.log(item.color[1]);
console.log("\n\n");


//Conersion in Get Values
const obj={
    1:"hello",
    a:"hai",
    null:'empty' ,
    true:"correct"   
};
console.log(obj);
console.log(obj["1"]);
console.log(obj["a"]);
console.log(obj["true"]);
console.log(obj["null"]);


//Add or Change Values from Object Literals
student.city="Kochi";
student.gender="Male";
student.marks='A';
console.log(student);

delete student.age;
console.log(student);

