// Export in Files
const someValue = require("./math");
console.log(someValue.pi);
console.log(someValue.sum(3,6));
console.log(someValue.mul(3,6));
console.log(someValue.g);

// Export in Directories 
const allfruit =require("./Fruits");
console.log(allfruit.fruits);
console.log(allfruit.fruits[0]);