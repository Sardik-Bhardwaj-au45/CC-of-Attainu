//Q 1.
console.log("Answer 1.")
arr =[9,9,9,9]
i = arr.join("")
j = Number(i)
k = j+1
l = k.toString()
a =[]
for (x=0;x<l.length;x++){
a.push(l[x])
}
console.log(a.map(Number))