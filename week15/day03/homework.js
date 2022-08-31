//Q1.)
//Answer 1.)
var topKFrequent = function(nums, k) {
    output=[]
    let ht={}
    for(num of nums){
        if(!(num in ht)){
            ht[num]=1
        }
        else{ht[num]+=1}
    }
    let inp=Object.entries(ht)
    //console.log(inp)
    inp.sort((a,b)=>b[1]-a[1])
    //console.log(inp)
    for(nos of inp){
        output.push(Number(nos[0]))
    }
    return output.slice(0,k)
};

//Q2.)
//Answer 2.)
var lowestCommonAncestor = function(root, p, q) {
    while(root){
    if(p.val<root.val&&q.val<root.val){
        root=root.left
    }
    else if(p.val>root.val&&q.val>root.val){
        root=root.right
    }
    // else if((p.val<=root.val&&q.val>=root.val)||(p.val>=root.val&&q.val<=root.val)){
    //     return root
    // }
    else{return root}
}
};
