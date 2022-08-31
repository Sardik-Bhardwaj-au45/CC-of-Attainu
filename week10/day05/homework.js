//Q1.)
//Answer 1.)
var kWeakestRows = function(mat, k) {
    const soldiers=mat.map(r=>{
        s=0
        r.forEach(j=>{
            if(j===1){
                s++
            }
        })
        ind=mat.indexOf(r)
        return {s,ind}
    })
    soldiers.sort((a,b)=>a.s-b.s)
     output=soldiers.slice(0,k)
     return output.map(a=>a.ind)
     
         
};

//Q2.)
//Answer 2.)
var peakIndexInMountainArray = function(arr) {
    l=0;r=arr.length-1
    while(l<=r){
        mid=Math.floor((l+r)/2)
        if(mid>0&&arr[mid]<arr[mid-1]){
            r=mid-1
        }
        else if(mid<arr.length-1&&arr[mid]<arr[mid+1]){
            l=mid+1
        }else {return mid}
    }
};
