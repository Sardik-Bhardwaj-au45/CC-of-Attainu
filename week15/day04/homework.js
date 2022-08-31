//Q1.)
//Answer 1.)
var fib = function(n) {
    function fib(n){
        if(n==0){return 0}
        if(n==2||n==1){return 1}
        return fib(n-1)+fib(n-2)
    }return fib(n)
};

//Q2.)
//Answer 2.)
let dp = new Array(101)
dp.fill(-1)
dp[0]=0
dp[1]=1
dp[2]=1
var fib = function(n) {
    if(dp[n]!=-1)return dp[n]
    dp[n]=fib(n-1)+fib(n-2)
    return dp[n]
};

//Q3.)
//Answer 3.)
//solving by dp now
function helper(x,n,dp){
    if(n==0){return 1}
    if(dp[n]!=undefined){return dp[n]}
    if(n%2==0){
        dp[n]=helper(x,n/2,dp)*helper(x,n/2,dp)
    }
    else{
        dp[n]=helper(x,Math.floor(n/2),dp)*helper(x,Math.floor(n/2),dp)*x
    }
    return dp[n]
}
var myPow = function(x, n) {
    let dp={}
    if(n<0)return 1/helper(x,-n,dp)
    return helper(x,n,dp)
};