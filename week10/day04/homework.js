//Q1.)
//Answer1.)
var searchRange = function(nums, target) {
    
    output=[]
    function lb(nums){
    l=0;r=nums.length-1;res=-1;
        while(l<=r){
        mid=Math.floor((l+r)/2)
        if(nums[mid]>target){
            r=mid-1
        }
        else if(nums[mid]<target){
            l=mid+1
        }
        else if(nums[mid]==target){
            res=mid
            r=mid-1
        }
    }return res}
    function ub(nums){
        l=0;r=nums.length-1;res=-1;
        while(l<=r){
        mid=Math.floor((l+r)/2)
        if(nums[mid]>target){
            r=mid-1
        }
        else if(nums[mid]<target){
            l=mid+1
        }
        else if(nums[mid]==target){
            res=mid
            l=mid+1
        }
    }return res
    }
    lobd=lb(nums);
    output.push(lobd);
    upbd=ub(nums);
    output.push(upbd);
    return output
};

//Q2.)
//Answer 2.)
var findPeakElement = function(nums) {
    l=0;r=nums.length-1
    while(l<=r){
        mid=Math.floor((l+r)/2)
        if((mid-1<0||nums[mid]>nums[mid-1])&&(mid+1==nums.length||nums[mid]>nums[mid+1])){
            return mid
        }
        if(mid-1>=0&&nums[mid]<nums[mid-1]){
            r=mid-1
        }
        else if(mid+1<nums.length&&nums[mid]<nums[mid+1]){
            l=mid+1
        }
    }
}