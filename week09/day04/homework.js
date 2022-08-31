//Q1.
//Answer 1.
var defangIPaddr = function(address) {
    return address.split(".").join("[.]")
    
};

//Q2.
//Answer 2.
var twoSum = function(nums, target) {
    ht={}
    for (i=0;i<nums.length;i++){
        missing=target-nums[i]
        if (missing in ht){
            return [i,ht[missing]]
        }
        else{ht[nums[i]]=i}
    }
}

//Q3.
//Answer 3.
var mostWordsFound = function(sentences) {
    max=0
    for (ele of sentences){
        let a=ele.split(" ")
        if (a.length>=max){
            max =a.length
            
        }
    }return max
        
        
    
};