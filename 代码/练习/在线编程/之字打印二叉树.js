function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function Print(pRoot)
{
    if(pRoot==null){
        return [];
    }
    var queue=[[pRoot,0]];
    var result=[];
    while(queue.length){
        var temp=queue.shift();
        result.push([temp[0].val,temp[1]])
        if(temp[0].left!=null){
            queue.push([temp[0].left,temp[1]+1]);
        }
        if(temp[0].right!=null){
            queue.push([temp[0].right,temp[1]+1]);
        }
    }
    var out=[[result[0][0]]];
    for(var i=1;i<result.length;i++){
        if(result[i][1]!=result[i-1][1]){
            out.push([])
            out[out.length-1].push(result[i][0]);
        }else{
            out[out.length-1].push(result[i][0]);
        }
    }
    out.map((element,index) => {
        if(index%2==1){
            return element.reverse();
        }else{
            return element
        }
    });
    return out
}

var a1=new TreeNode(1)
var a2=new TreeNode(2)
var a3=new TreeNode(3)
var a4=new TreeNode(4)
var a5=new TreeNode(4)
var a6=new TreeNode(5)


a1.left=a2;
a1.right=a3;
a2.left=a4;
a2.right=a5;
a5.left=a6;

console.log(Print(a1))