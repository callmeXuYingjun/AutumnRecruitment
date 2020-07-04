function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function KthNode(pRoot, k)
{
    // write code here
  if(pRoot==null){
    return null
  }
  var out=zhongxu(pRoot);
  console.log(out)
  return out[k-1]
}
function zhongxu(head){
  var out=[];
  if(head.left!=null){
    out=out.concat(zhongxu(head.left))
  }
  out.push(head.val);
  if(head.left!=null){
    out=out.concat(zhongxu(head.right))
  }
  return out
}

var a1=new TreeNode(5)
var a2=new TreeNode(3)
var a3=new TreeNode(7)
var a4=new TreeNode(2)
var a5=new TreeNode(4)
var a6=new TreeNode(6)
var a7=new TreeNode(8)
a1.left=a2;
a1.right=a3;
a2.left=a4;
a2.right=a5;
a3.left=a6;
a3.right=a7;

// a1.left=a2;
// a1.right=a3;

console.log(KthNode(a1, 3))