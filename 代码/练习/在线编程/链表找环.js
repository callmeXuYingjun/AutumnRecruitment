function ListNode(x){
    this.val = x;
    this.next = null;
}

var a1=new ListNode(1);
// var a2=new ListNode(2);
// var a3=new ListNode(3);
// var a4=new ListNode(4);
// a1.next=a2
// a2.next=a3
// a3.next=a4
// a4.next=a3

function EntryNodeOfLoop(pHead)
{
    // write code here
    while(typeof pHead.biaozhi=="undefined"){
        console.log(pHead.val)
        pHead.biaozhi=1;
        pHead=pHead.next;
        if(pHead==null){
            return false;
        }
    }
    return pHead
}

console.log(EntryNodeOfLoop(a1))