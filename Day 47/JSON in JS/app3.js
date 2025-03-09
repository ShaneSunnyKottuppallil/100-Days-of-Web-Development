// JSON.parse(data) 
let jsonRes = '{"fact":"All cats need taurine in their diet to avoid blindness. Cats must also have fat in their diet as they are unable to produce it on their own.","length":140}';
console.log(jsonRes);
let validRes=JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);

// JSON.stringify(json) 
let student={
    name:"shane",
    age:20,
    location:"India"
};

console.log(JSON.stringify(student));
