//Q1.)
//Answer 1.)
var intersection = function(nums1, nums2) {
    obj1={};obj2={};output=[]
    for(ele of nums1){
        obj1[ele]=(obj1[ele]==undefined)?1:obj1[ele]+1
        }
    //console.log(obj1)
    for(i=0;i<nums2.length;i++){
        if((nums2[i] in obj1)&&!(nums2[i] in obj2)){
           output.push(nums2[i]);obj2[nums2[i]]=i
           }
    }
return output
};

//Q2.)
//ANswer 2.)
var merge = function(nums1, m, nums2, n) {
    i=0;j=0;k=0;c=[]
    while(i<m&&j<n){
        if(nums1[i]<nums2[j]){
            c[k]=nums1[i]
            i++;
        }
        else{
            c[k]=nums2[j]
            j++;    
        }k++
    }
    while(i<m){
        c[k]=nums1[i]
        i++;k++
    }
    while(j<n){
        c[k]=nums2[j]
        j++;k++
    }
    for(i=0;i<c.length;i++){
        nums1[i]=c[i]
    }
    
};

//Q3.)
//Answer 3.)
var sortColors = function(nums) {
    for(i=0;i<nums.length;i++){
        min_idx=i
        for(j=i+1;j<nums.length;j++){
            if(nums[min_idx]>nums[j]){
                min_idx=j
            }
        }[nums[min_idx],nums[i]]=[nums[i],nums[min_idx]]
    }return nums
    
};


