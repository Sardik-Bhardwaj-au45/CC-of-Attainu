//Q1.)
//Answer 1.)
var reverseString = function(s) {
    l=0;r=s.length-1
    function rev(s,l,r){
        if(l==r){return }
        if(l==r-1){return [s[l],s[r]]=[s[r],s[l]]}
        [s[l],s[r]]=[s[r],s[l]]
        return rev(s,++l,--r)
    }
    rev(s,l,r)
};

//Q2.)
//Answer 2.)
var fib = function(n) {
    function fib(n){
        if(n==0){return 0}
        if(n==2||n==1){return 1}
        return fib(n-1)+fib(n-2)
    }return fib(n)
};