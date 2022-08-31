//Q1.
console.log("Answer 1.")
const f = (g,x) => console.log(g,x)
for(i=1;i<=10;i++){
    f(i,"hello world")
}
//Q1.
console.log("Answer 2.")
const a = (p,q) => p-q
let x=150
let y=15
b = a(x,y)
if (b>0){
    console.log(x,"is greater")
}
else if(b<0){
    console.log(y,"is greater")
}
else{
    console.log(x,"and",y,"are equal")
}