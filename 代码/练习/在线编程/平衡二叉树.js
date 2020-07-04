function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

var all=[];
function IsBalanced_Solution(pRoot)
{
    var left_max=0;
    var right_max=0;
    if(pRoot.left!=null){
        left_max=Maxpath(pRoot.left)
    }
    if(pRoot.right!=null){
        right_max=Maxpath(pRoot.right)
    }
    console.log(left_max,right_max)
    if(Math.abs(left_max-right_max)>1){
        return false
    }else{
        return true
    }
}

function Maxpath(head){
    all=[];
    Tree(head,[])
    var maxl=all.map(function(ele){
        return ele.length;
    })
    return Math.max.apply(null,maxl)
}


function Tree(head,out_1){
    var out=[];
    out=out_1.concat(head.val)
    if(head.left!=null){
        Tree(head.left,out);
    }
    if(head.right!=null){
        Tree(head.right,out);
    }
    if(head.right==null&&head.left==null){
        all.push(out)
    }
}

var a1=new TreeNode(1)
var a2=new TreeNode(2)
var a3=new TreeNode(4)
var a4=new TreeNode(4)
var a5=new TreeNode(8)
var a6=new TreeNode(6)


a1.left=a2;
a1.right=a3;
a2.left=a4;
a2.right=a5;
a5.left=a6;
// a3.left=a6;
// a3.right=a7;
// a7.left=a8;


console.log(IsBalanced_Solution(a1))