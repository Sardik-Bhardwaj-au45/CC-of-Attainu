//Q1.)
//Answer 1.)
class linkedlist{           //this program make a linked list
    constructor(data,next){
        this.data = data
        this.next = next
    }
}
function addnodeatend(head,val){    //this function add a node at end of linked list
    cur=head
    while(cur.next){
        cur=cur.next
    }
    cur.next=new linkedlist(val,null)
}
function printll(head){                 //this function is printing data of linked list
    cur=head
    while(cur){
        console.log(cur.data)
        cur=cur.next
    }
}
function removefirstnode(head){       //this function remove first node of linked list
    head=head.next
    return head
}
head=new linkedlist(2,null)
addnodeatend(head,5)
addnodeatend(head,6)
addnodeatend(head,8)
addnodeatend(head,3)
removed = removefirstnode(head)
printll(removed)


//Q2.)
//Answer 2.)
var getDecimalValue = function(head) {
    ctr=0;sum=0    
    cur=head
    while(cur){
            ctr+=1
            cur=cur.next
        }
    cur2=head
    while(cur2){
        console.log(ctr)
        sum+=cur2.val*2**--ctr
        cur2=cur2.next
    }
    return sum
};