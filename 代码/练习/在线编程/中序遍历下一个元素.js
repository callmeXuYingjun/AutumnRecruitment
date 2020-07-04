function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function GetNext(pNode)
{
    if(pNode==null){
        return null
    }
    var nextnode=pNode;
    if(pNode.right!=null){    //有右子树
        nextnode=pNode.right;
        while(nextnode.left!=null){
            nextnode=nextnode.left;
        }
    }else{
        console.log(pNode.next,pNode.next.next)
        if(pNode.next!=null&&pNode.next.next!=null){
            nextnode=nextnode.next.next;
        }
    }
    return nextnode;
    // write code here
}
var a1=new TreeNode(8)
var a2=new TreeNode(6)
var a3=new TreeNode(10)
var a4=new TreeNode(5)
var a5=new TreeNode(7)
var a6=new TreeNode(9)
var a7=new TreeNode(11)


a1.left=a2;
a1.right=a3;
a2.left=a4;
a2.right=a5;
a4.left=a6;
a4.right=a7;


console.log(GetNext(a5))