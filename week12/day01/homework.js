//Q1.)
//Answer 1.)
var sortedSquares = function(nums) {
    l=0;r=nums.length-1;i=0
    arr=[]
    while(i<nums.length){
        i++
        if(Math.abs(nums[l])>Math.abs(nums[r])){
            arr.unshift(nums[l]**2)
            l++
        }
        else{
            arr.unshift(nums[r]**2)
            r--
        }
        
    }
    return arr
    
};

//Q2.)
//Answer 2.)
var reverseString = function(s) {
l=0;r=s.length-1
while(l<r||l==r-1){
    [s[l],s[r]]=[s[r],s[l]]
    l++;r--
}

};

//Q3.)
//Answer 3.)
var maxAscendingSum = function(nums) {
r=0;s=0;arr=[]
while(r<nums.length){
    if(nums[r]>=nums[r+1]||nums[r+1]==undefined){
        s+=nums[r]
        arr.push(s)
        r++
        s=0
        
    }
    else{
        s+=nums[r]
        r++
    }
}console.log(arr)
return Math.max(...arr)
};

//Q4.)
//Answer 4.)
var moveZeroes = function(nums) {
l=0;r=l+1
while(r<nums.length){
    if(nums[l]==0&&nums[r]!=0){
        [nums[l],nums[r]]=[nums[r],nums[l]]
        l++;r++
    }
    else if(nums[l]==0&&nums[r]==0){
        r++
    }
    else if(nums[l]!=0&&nums[r]==0){
        l++;r++
    }
    else if(nums[l]!=0&&nums[r]!=0){
        l++;r++
    }
}console.log(nums)

};