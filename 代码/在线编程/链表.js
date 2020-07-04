function ListNode(x){
    this.val = x;
    this.next = null;
}

// function FindKthToTail(head, k)
// {
//   var index=0;
//   var now=head;
//   while(now=={}){
//     index++;
//     now=now.next;
//   }
//   var biaozhi=index-k;
//   if(biaozhi<0){
//       return {}
//   }
//   var out;
//   now=head;
//   for(var i=0;i<biaozhi;i++){
//     now=now.next
//   }
//   return now;
//     // write code here
// }


/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
  var str=[];
  while(pHead!=null){
    str.push(pHead.val);
    pHead=pHead.next;
  }
  str.reverse();
  var now=pHead;
  for(var i=1;i<str.length;i++){
    var temp=new ListNode(str[i]);
    now.next=temp;
    now=temp
  }
  return pHead;
}

var a1=new ListNode(1);
var a2=new ListNode(2);
var a3=new ListNode(3);
var a4=new ListNode(4);
a1.next=a2;
a2.next=a3;
a3.next=a4;

// console.log(FindKthToTail(a1, 4))
console.log(ReverseList(a1))