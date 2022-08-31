
//Q1.)
//Answer 1.)
st="1234"
function myAtoiRecursive(st){
    return Number(st)
} 
a=myAtoiRecursive(st)+1
console.log(a)

//Q2.)
//Answer 2.)
a1=1234567
i=a1.toString()
l=i.length-1
function rc(a1,l){
    
    n=Math.floor(a1/10**l)
    console.log(n)
    a1=a1-n*(10**l)
    if(l==0){return}
    rc(a1,--l)
}
rc(a1,l)
//Q3.)
//Answer 3.)
string="ABCD"
l1=string.length-1
function rv(string,l1){
    if(l1<0){return}
    console.log(string[l1])
    rv(string,--l1)

}
rv(string,l1)

