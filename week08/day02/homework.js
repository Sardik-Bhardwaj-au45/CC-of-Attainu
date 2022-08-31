//Q1.
console.log("Answer 1.")
const student1 = {
    fname:"Sardik",
    lname:"Bhardwaj"
}
const student2 = {
    fname:"Narender",
    lname:"Modi"
}
const f = function(){console.log(this.fname,this.lname)}
const f1 = f.bind(student1)
const f2 = f.bind(student2)
f1();f2()