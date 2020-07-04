function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
var all=[];
function TreeDepth(pRoot)
{
    if(pRoot==null){
        return 0;
    }
    Tree(pRoot,[]);
    var nums=all.map(function(ele){
        return ele.length
    });
    var max1=Math.max.apply(null,nums)
    return max1;
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


console.log(TreeDepth(a1))