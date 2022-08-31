//Q1.)
//Answer 1.)
var findDuplicate = function(nums) {
    ht={}
    for(i=0;i<nums.length;i++){
        if(!(nums[i] in ht)){
            ht[nums[i]]=1
        }
        else{return nums[i]}
    }
};

//Q2.)
//Answer 2.)
var sumOfUnique = function(nums) {
    ht={};s=0
    for(i=0;i<nums.length;i++){
        if(!(nums[i] in ht)){
            ht[nums[i]]=1
            s+=nums[i]
        }
        else{
            ht[nums[i]]+=1
            s+=nums[i]
        }
    }
    for(p in ht){
        if(ht[p]>1){s-=p*ht[p]}
    }return s
    
};

//Q3.)
//Answer 3.)
var longestCommonPrefix = function(strs) {
    c=0;d=1
    for(i=0;i<strs[0].length;i++){
        for(j=0;j<strs.length-1;j++){
            if(strs[j][i]==strs[j+1][i]){continue}
            else{d=0}
        }if(d==0){continue}
        else{c++}
            
    }return strs[0].slice(0,c)
};