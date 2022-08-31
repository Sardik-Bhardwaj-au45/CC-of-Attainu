//Q1.)
//Answer 1.)
var climbStairs = function(n) {
    let arr=[0,1,2]
    for(let i=3;i<=n;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }
    return arr[n]
};

//Q2.)
//Answer 2.) solving by dp
let dp = new Array(46)
dp.fill(-1)
dp[1]=1
dp[2]=2
var climbStairs = function(n) {
    if(dp[n]!=-1){return dp[n]}
    return dp[n]=climbStairs(n-1)+climbStairs(n-2)
};

//Q3.)
//Answer 3.)
var longestCommonSubsequence = function(text1, text2) {
    let m=text1.length
    let n=text2.length
    let dp=new Array(Math.min(m+1,n+1))
    for(let i=0;i<=Math.max(n,m);i++){
        dp[i]=new Array(Math.max(m+1,n+1)).fill(-1)
        
    }console.log(dp)
        return helper(text1,text2,m,n,dp)
    };
    function helper(text1,text2,m,n,dp){
        if(m==0||n==0){return 0}
        if(dp[m][n]!=-1){return dp[m][n]}
        if(text1[m-1]==text2[n-1])
        { 
            dp[m][n]=1+helper(text1,text2,m-1,n-1,dp)
            return dp[m][n]
        }
        else{return dp[m][n]=Math.max(helper(text1,text2,m-1,n,dp),helper(text1,text2,m,n-1,dp))
    }
}
