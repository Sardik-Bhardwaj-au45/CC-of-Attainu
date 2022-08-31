//Q1.
console.log("Answer 1.")
const a = ["Orange","Orange","banana","apple","apple","banana","apple","apple",
    "apple","apple","Orange","Orange","Orange","Orange","banana"]
const b = {}
f = function(){
for (ele of a){
    if (ele in b){
        b[ele] = b[ele]+1
        b[ele]
    }
    else{
        b[ele] = 1
        b[ele]
    }
}  
console.log(b)
}

f()
//Q2.
console.log("Answer 2.")
a2 = ["1","2","3","4","5","6"]
f = function(val){
a3 = a2.join("")
a4 = Number(a3)
return a5 = a4*10}
console.log(f(a2))


//Q3.
console.log("Answer 3.")
c = [8,5,6,3]
function myfunc(a,b){
    return a-b
}
c.sort(myfunc)
console.log(c)