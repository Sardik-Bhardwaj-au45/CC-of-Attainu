//Q1.)
//Answer 1.)
//a)

//Q2.)
//Answer 2.)
//d)O(n**2)is the worst case time complexity of selection sort.

//Q3.)
//Answer 3.)
A=[2,1,7,8,0,11]
function selectionsort(A){
for(i=0;i<A.length;i++){
    min_idx=i
    for(j=i+1;j<A.length;j++){
        if(A[min_idx]>A[j]){
            min_idx=j
        }
        
    }[A[min_idx],A[i]]=[A[i],A[min_idx]]
}
return A
}
res=selectionsort(A)
console.log(res)
//Here the time complexity is T(n)=O(n**2)
//Here the space complexity is S(n)=O(1)

//Q4.)
//Answer 4.)
A=[2,1,7,8,0,11]
function whilesort(A){
    x=0
    while(x<A.length){
        mini_idx=x
        y=x+1
        while(y<A.length){
            if(A[mini_idx]>A[y]){
                mini_idx=y
            }y++
        }
        [A[mini_idx],A[x]]=[A[x],A[mini_idx]]
        x++
    }
    return A
}
res1=whilesort(A)
console.log(res1)