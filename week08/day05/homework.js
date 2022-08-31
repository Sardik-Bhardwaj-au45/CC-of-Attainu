//Q1.
console.log("Answer 1.")
obj1={
    a:1,
    b:2,
    c:3,
    d:4,
}
obj2={
    ...obj1
}//here the copy of obj1 has been made
console.log(obj2)
obj1.a=12//change in value of a in obj1
console.log(obj1)//change is reflected here
console.log(obj2)//change is not reflected in copy of obj1

//Q2.
console.log("Answer 2.")
function fun(...sardik){
    console.log(sardik)
}
s=[2,3,4,5,"sardik"] 
fun(...s)