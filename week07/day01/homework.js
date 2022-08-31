//Q1.
console.log("Answer 1.")
a1 = [1,2,45,6,4,81,34]
max = 0
for(i=0;i<a1.length;i++){
  if(a1[i]>max){
    max = a1[i]
    ind = i
    }
}
console.log("Maximum no. of array is",max)
console.log("Index of maximum no. of array is",ind)

//Q2.
console.log("Answer 2.")
a2 = [2,4,44,5,6,78,9]
max = 0
for (i of a2){
  if(a2[i]>max){
    max = a2[i]
    ind = i
  }
}
console.log("Maximum no. of array is",max)
console.log("Index of maximum no. of array is",ind)

//Q3.
console.log("Answer 3.")
a3=[]
b3=Number(require("prompt-sync")()("Enter the length of the array"))
for(i=0;i<b3;i++){
  a3[i]=Number(require("prompt-sync")()("Enter the Element of the array"))
}
for (j of a3){
  if(j%2==0){
    console.log(j)
  }
}
