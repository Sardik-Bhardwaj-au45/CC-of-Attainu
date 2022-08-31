//Q1.)
//Answer 1.)
var numIdenticalPairs = function(nums) {
    ht={};c=0
    for (num of nums){
        if(!(num in ht)){
            ht[num]=1
        }
        else {
            c+=ht[num]
            ht[num]+=1 
             }
    }return c
}

//Q2.)
//Answer 2.)
var lengthOfLongestSubstring = function(s) {
    start=0;end=0;ht={};maxlen=0
    for(end=0;end<s.length;end++){
        if(s[end] in ht&&start<=ht[s[end]]){
            start=ht[s[end]]+1
        }
        else{maxlen=Math.max(maxlen,end-start+1)}
        ht[s[end]]=end
}return maxlen
}

//Q3.)
//Answer 3.)
var twoSum = function(nums, target) {
    ht={}
    for (i=0;i<nums.length;i++){
        missing=target-nums[i]
        if(missing in ht){
            return [i,ht[missing]]
        }
        else{
            ht[nums[i]]=i
        }
    }
}