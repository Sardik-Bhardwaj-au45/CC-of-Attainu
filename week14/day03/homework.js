//Q1.)
//Answer 1.)
var mergeInBetween = function(list1, a, b, list2) {
    ctr=0;cur=list1;p1=list1;count=0
    while(p1.next){
        count+=1
        p1=p1.next
        if(count==b){
            p1=p1.next
            break
        }
    }
    while(cur.next){
        ctr+=1
        if(ctr==a){
            cur.next=list2
            while(cur.next){
                cur=cur.next
            }
            cur.next=p1
        }
        else{cur=cur.next}
    }return list1
};
