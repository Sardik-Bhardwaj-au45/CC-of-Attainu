//Q1.
console.log("Answer 1.")
a = []
b = Number(require("prompt-sync")()("Enter the length of array"))
for(i=0;i<b;i++){
    a.push(Number(require("prompt-sync")()("Enter the Element of array")))
}
j = a.slice(2,9)
console.log(j)
console.log(a)

//Q2.
console.log("Answer 2.")
a2 = []
b2 = Number(require("prompt-sync")()("Enter the length of array"))
for(i=0;i<b2;i++){
    a2.push(Number(require("prompt-sync")()("Enter the Element of array")))
}
j2 = a2.splice(2,6)
console.log(j2)
console.log(a2)

//Q3.
console.log("Amswer 3.")
a3 = []
b3 = Number(require("prompt-sync")()("Enter the length of array"))
for(i=0;i<b3;i++){
a3.push(Number(require("prompt-sync")()("Enter the Element of array")))
}
function myfunc(p1,p2){
    return sum = (p1+p2)
}
avg = a3.reduce(myfunc,0)/a3.length
console.log(avg)