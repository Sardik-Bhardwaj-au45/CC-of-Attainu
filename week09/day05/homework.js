//Q1.
//Answer 1.)
function min(x,y){
    if(x<y){return x}
    else{return y}
}
Matrix=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]
n=Matrix.length;m=Matrix[0].length
sum=0
for(i=0;i<min(m,n);i++){
    j=m-1-i
    sum+=Matrix[i][j]
}
console.log(sum)

//Q2.
//Answer2.)
M2=[
    [1,2,3,4,10],
    [4,5,6,5,12],
    [7,8,9,6,8],
    [4,9,8,7,10],
]
n1=M2.length;m1=M2[0].length
sum1=0
first=0
for(i1=0;i1<m1;i1++){
    sum1+=M2[first][i]
}
c=m1-1;d=n1-1
for(j1=1;j1<n1-1;j1++){
    sum1+=M2[j1][c]
    sum1+=M2[j1][first]
}
for(k=0;k<m1;k++){
    sum1+=M2[d][k]
}
console.log(sum1)

//Q3.)
//Answer3.)
M3=[[1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
n2=M3.length;m2=M3[0].length
arr=[]
for(i2=0;i2<n2;i2++){
    sum2=0
    for(j2=0;j2<m2;j2++){
        sum2+=M3[i2][j2]
    }arr.push(sum2)
}
console.log(arr)