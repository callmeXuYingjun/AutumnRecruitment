function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function isSymmetrical(pRoot)
{
    // write code here
  if(pRoot==null){
    return false
  }
  return Jun(pRoot.left,pRoot.right)
}
function Jun(left,right){
  var biaozhi=true;
  if(left==null&&right==null){
    return true
  }else if(left!=null&&right!=null){
    biaozhi=left.val==right.val;
    biaozhi=biaozhi&&Jun(left.left,right.right)&&Jun(left.right,right.left);
    return biaozhi
  }else{
    return false
  }
}

var a1=new TreeNode(1)
var a2=new TreeNode(2)
var a3=new TreeNode(2)

a1.left=a2;
a1.right=a3;

console.log(isSymmetrical(a1))