//Q1.)
//Answer 1.)
var isBalanced = function(root) {
    flag=true
    function balance(root){
    if(root==null){
        return 0
    }
    if(root.left==null&&root.right==null){
        return 1
    }
    let lst=balance(root.left)
    let rst=balance(root.right)
    if(Math.abs(lst-rst)>1){flag=false}
    return Math.max(lst,rst)+1
}
    balance(root)
    return flag
};


//Q2.)
//Answer 2.)
arr=[9,33,57,2,7,1,10]
let n=arr.length
let i=0
function heapify(arr,n,i){
    let largest = i
    let l=2*i+1
    let r=2*i+2
    if(l<n&&arr[l]>arr[largest]){
        largest=l
    }
    if(r<n&&arr[r]>arr[largest]){
        largest = r
    } 
    if(largest!=i){
        temp=arr[i]
        arr[i]=arr[largest]
        arr[largest]=temp
        heapify(arr,n,largest)
    }

}
heapify(arr,n,i)
console.log(arr)
//T(n)=O(logn)
//S(n)=O(1)
