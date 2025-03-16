// Factory Functions 
function personMaker(name,age){
    const person = {
        name:name,
        age:age,
        talk(){
            console.log(`Hello ${this.name}`);
        }
    }
    return person;
}
let p1=personMaker("Shane",20);
console.log(p1);
console.log(p1.talk());

// New Operator (Using Constructor) 
function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.talk= function(){
    console.log(`Hi, my name is ${this.name}`);
}

let p2= new Person("Sven",22);
console.log(p2);
console.log(p2.talk);


// Classes in JS 
class PersonClass{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hello ${this.name}!!!!`);
    }
}
let p3=new PersonClass("Sunny",30);
console.log(p3);
console.log(p3.talk());


// Inheritance in JS Classes 
class Student extends PersonClass{
    constructor(name,age,marks){
        super(name,age);
        this.marks=marks;
    }
    greet(){
        console.log(`Name : ${this.name}`);
        return "Hello!";
    }
}

let p4=new Student("Shalets",29,100);
console.log(p4);
console.log(p4.greet());