function ListNode(x){
    this.val = x;
    this.next = null;
}
function FindKthToTail(head, k)
{
    // write code here
    //两个指针
    var p1=head;
    var p2=head;
    for(var i=1;i<=k-1;i++){
        p2=p2.next
    }
    while(p2.next){
        p2=p2.next
        p1=p1.next
    }
    return p1
}
var a1=new ListNode(1)
var a2=new ListNode(2)
var a3=new ListNode(3)
var a4=new ListNode(4)
var a5=new ListNode(5)
a1.next=a2
a2.next=a3
a3.next=a4
a4.next=a5

console.log(FindKthToTail(a1,5))