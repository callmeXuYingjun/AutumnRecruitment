function Node(element,left,right){
    this.element=element;
    this.left=left;
    this.right=right;
}

var root=new Node(1);
var r1=new Node(2);
var r2=new Node(3);
var r3=new Node(4);
var r4=new Node(5);
var r5=new Node(6);
root.left=r1;
root.right=r2;
r1.right=r3;
r2.left=r4;
r2.right=r5;


function xian(root){
    var out=[]
    out.push(root.element);
    if(root.left){
        out=out.concat(xian(root.left))
    }
    if(root.right){
        out=out.concat(xian(root.right))
    }
    return out
}


function ceng(root){
    var queue=[root];
    var out=[]
    while(queue.length){
        var head=queue.shift()
        out.push(head.element)
        if(head.left!=null){
            queue.push(head.left)
        }
        if(head.right!=null){
            queue.push(head.right)
        }
    }
    return out

}
//深度优先遍历的非递归写法

function shen(root){
    var nodes=[]
    var stack=[]
    stack.push(root)
    while(stack.length!=0){
        var item=stack.pop();
        nodes.push(item.element);
        if(item.left!=null){
            stack.push(item.left)
        }
        if(item.right!=null){
            stack.push(item.right)
        }
    }
    return nodes
}



console.log(ceng(root))
console.log(shen(root))
console.log(xian(root))