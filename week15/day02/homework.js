//Q1.)
//Answer 1.)
var findKthLargest = function(nums, k) {
    nums.sort((a,b)=>a-b)
    console.log(nums)
    return nums[nums.length-k]
};