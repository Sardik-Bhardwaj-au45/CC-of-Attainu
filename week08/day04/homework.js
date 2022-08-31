//Q1.
console.log("Answer 1.")
function func(i){
    i1=`Sardik is ${i}`
    return i1
}
a1="Best"
console.log(func(a1))


//Q2.
console.log("Answer 2.")
a="Homework"
b="Attendance"
c="80%"
d="Future"
e="Success"
function fun(str,p1,p2,p3){
    console.log(`${p1} ${str[1]} ${p2} ${str[2]} ${p3} ${str[3]}`)
}
res = fun `${a} must be at least ${c} to ensure my ${d}.`
res2 = fun `${b} must be at least ${c} to ensure my ${e}.`