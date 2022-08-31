//Q1.)
//Answer 1.)
var maxDepth = function(root) {
    if(root==null){
        return 0
    }
    if(root.left==null&&root.right==null){
        return 1
    }
    let lst=maxDepth(root.left)
    let rst=maxDepth(root.right)
    return Math.max(lst,rst)+1
};

//Q2.)
//Answer 2.)
var invertTree = function(root) {
    if(root==null){
        return root
    }
    invertTree(root.left)
    invertTree(root.right)
    let temp=root.left
    root.left=root.right
    root.right=temp
    return root
};

//Q3.)
//Answer 3.)
var countNodes = function(root) {
    if(root==null){
        return 0
    }
    if(root.left==null&&root.right==null){
        return 1
    }
    let lst=countNodes(root.left)
    let rst=countNodes(root.right)
    return lst+rst+1
};