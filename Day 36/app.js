const student={
    name:"shane",
    age:20,
    math:100,
    eng:98,
    sci:91,
    getAvg(){
        console.log(this);
        let avg=(this.eng+this.sci+this.math)/3;
        console.log(avg);
    }
};

console.log(student.getAvg());