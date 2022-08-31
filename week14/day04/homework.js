//Q1.)
//Answer 1.)
class Node{
    constructor(val){
        this.val=val
        this.left=null
        this.right=null
    }
}
let node =new Node(3)
root=node
node.left=new Node(4)
node.right=new Node(5)

node.left.left=new Node(5)
node .left.right=new Node(4)

node.right.right=new Node(7)
/* here i have created a tree by using class node firstly i created a root then left
and right side of tree.
 */
//now doing potorder traversal
function postorder(root){
    if(root==null){
        return
    }
    postorder(root.left)
    postorder(root.right)
    console.log(root.val)
}
console.log("this is postorder traversal")
postorder(root)
/*here this is a post order traversal first it will print the left side then right 
side then the root
*/
function preorder(root){
    if(root==null){
        return
    }
    console.log(root.val)
    preorder(root.left)
    preorder(root.right)
}
console.log("this is preorder traversal")
preorder(root)
/*here it is a preorder traversal it will print the root first then left side and
then rigth side.
*/
function inorder(root){
    if(root==null){
        return
    }
    inorder(root.left)
    console.log(root.val)
    inorder(root.right)
}
console.log("this is inorder traversal")
inorder(root)
/*here it is a inorder traversal it will print left side when the left side is null
or it is fully printed then it will print the root then it will print the right side 
of the tree
*/