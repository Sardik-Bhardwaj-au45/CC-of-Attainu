//Q1.)
//Answer 1.)
var nextGreaterElement = function(nums1, nums2) {
    b=[];stack=[]
    output=[]
    for(i=0;i<nums2.length;i++){
        b[i]=-1
    }
    for(i=0;i<nums2.length;i++){
        while(stack.length!=0&&nums2[i]>nums2[stack[stack.length-1]]){
            top=stack.pop()
            b[top]=nums2[i]
        }
        stack.push(i)
    }
    for(i=0;i<nums1.length;i++){
        ind=nums2.indexOf(nums1[i])
        output.push(b[ind])
    }
    return output
        
};