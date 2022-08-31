//Q1.)
//Answer 1.)
n=12321
st=String(n)
function palindrome(st,i){
    if(i==st.length-1-i){return "it is palindrome number"}
    else if(st[i]==st[st.length-1-i]){return palindrome(st,i+1)}
    else{return "it is not palindrome number"}
}
console.log(palindrome(st,0))

//Q2.)
//Answer2.)
n1=1234567
st1=String(n1)
function sum_of_digits(st1,i1){
    if(i1==st1.length-1){return Number(st1[i1])}
    return Number(st1[i1])+sum_of_digits(st1,i1+1)
}
console.log(sum_of_digits(st1,0))

//Q3.)
//Answer 3.)
n2=7//sum of 7 natural numbers
function sum(n){
    if(n==1){return 1}
    return n+sum(n-1)
}
console.log(sum(n2))

//Q4.)
//Answer 4.)
x = 2; y = 5
function product(x,y){
    if(y==0){return 0}
    return x+product(x,--y)
}
console.log(product(x,y))