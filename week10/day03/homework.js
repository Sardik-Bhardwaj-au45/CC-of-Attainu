//Q1.)
//Answer 1.)
var targetIndices = function(nums, target) {
    function func(a,b){
        return a-b
    }
    output=[]
    nums.sort(func)
    for(i=0;i<nums.length;i++){
         if(nums[i]==target){
           output.push(i)}
    }return output
};
//Q2.)
//Answer 2.)
var countNegatives = function(grid) {
    n=grid.length;m=grid[0].length;p=0
    for(i=0;i<n;i++){
        if(grid[i][m/2]>0){j=m/2+1}
        else{j=0}
        while(j<m){
            if(grid[i][j]<0){p++}
            j++
        }
    }
    return p
};