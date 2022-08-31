//Q1.
console.log("Answer 1.")
const a = [2,4,"sardik",8,16]
for(i=0;i<=a.length-1;i++){
    console.log(a[i])
}

//Q2.
console.log("Answer 2.")
for (i of a){
    console.log(i)
}

//Q 3.
console.log("Answer 3.")
let b = require("prompt-sync")()("Enter the length of the array")
const c = []
for (g=0;g<=b-1;g++){
    c[g] = require("prompt-sync")()("Enter the element to feed in the array")
}
console.log(c)