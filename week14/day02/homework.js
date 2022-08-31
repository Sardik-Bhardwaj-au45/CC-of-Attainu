//Q1.)
//Answer 1.)
var deleteNode = function(node) {
    node.val=node.next.val
    node.next=node.next.next
};

//Q2.)
//Answer 2.)
var deleteDuplicates = function(head) {
cur=head
while(cur&&cur.next){
    if(cur.val==cur.next.val){
        cur.next=cur.next.next
    }
    else{
        cur=cur.next
    }
}return head
};