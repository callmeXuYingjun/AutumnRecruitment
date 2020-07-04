 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
var all=[];
function FindPath(root, expectNumber)
{
    if(root==null){
        return 0;
    }
    Tree(root,[],expectNumber);
    for(var i=0;i<all.length-1;i++){
      for(var j=0;j<all.length-i-1;j++){
        if(all[j].length<all[j+1].length){
              var temp=all[j];
              all[j]=all[j+1];
              all[j+1]=temp;
          }
      }
    }
    return all;
}

function Tree(head,out_1,expectNumber){
    var out=[];
    out=out_1.concat(head.val)
    if(head.left!=null){
        Tree(head.left,out,expectNumber);
    }
    if(head.right!=null){
        Tree(head.right,out,expectNumber);
    }
    if(head.right==null&&head.left==null){
      var sum=0;
      out.forEach(function(ele){
        sum+=ele;
      })
      if(sum==expectNumber){
        all.push(out)
      }
    }
}

var a1=new TreeNode(1)
var a2=new TreeNode(2)
var a3=new TreeNode(4)
var a4=new TreeNode(4)
var a5=new TreeNode(8)
var a6=new TreeNode(6)
var a7=new TreeNode(5)
var a8=new TreeNode(1)

a1.left=a2;
a1.right=a3;
a2.left=a4;
a2.right=a5;
a3.left=a6;
a3.right=a7;
a7.left=a8;

console.log(FindPath(a1,11))