//Q1.)
//Answer 1.)
var trap = function(height) {
res=0
lmax=0
rmax=0
L=[]
R=[]
    for(i=0;i<height.length;i++){
        if(height[i]>=lmax){
            lmax=height[i]
        }
            L.push(lmax)
        
    }
    for(j=height.length-1;j>=0;j--){
        if(height[j]>=rmax){
            rmax=height[j]
        }
            R.unshift(rmax)
        }
    for(k=0;k<height.length;k++){
        res+=Math.min(L[k],R[k])-height[k]
    }return res
};
