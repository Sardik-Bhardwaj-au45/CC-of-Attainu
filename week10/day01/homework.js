//Q1.
//Answer 1.)
var search = function(nums, target) {
    l=0;r=nums.length-1
    while(l<=r){
        mid=Math.floor((l+r)/2)
        if(nums[mid]>target){
            r=mid-1
        }
        else if(nums[mid]<target){
            l=mid+1
        }
        else{return mid}
    }
    return -1//if while loop over and we did not get target then it returns -1,and if in while loop we get the target it returns the mid and the function got over 
    
    
};
//Q2.
//Answer 2.)
var mySqrt = function(x) {
    l=0;r=2**31 -1//we can also write r=x here,i have write the the last possible value of x which is given in constraints of question
    while(l<=r){
        mid=Math.floor((l+r)/2)
        if(mid*mid<=x&&(mid+1)*(mid+1)>x){return mid}
        if(mid*mid<x){
            l=mid+1
        }
        else if(mid*mid>x){
            r=mid-1
        }
        
    }
};