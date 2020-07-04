function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
var arr=[]
function Serialize(pRoot)
{
  if(pRoot==null){
    return -1
  }
  arr=qianxu(pRoot);
}
function Deserialize(s)
{
  if(s.length<1){
    return null
  }
  var a1=null;
    // write code here
  var tou=s.shift();
  if(tou!="#"){
  a1=new TreeNode(tou);
  a1.left=Deserialize(s);
  a1.right=Deserialize(s);
  }
  return a1
}
function Deserialize(s)
{
    // write code here
    var node = null;
    if(arr.length<1){
        return null;
    }
    var number = arr.shift();
    if(typeof number == 'number'){
        node = new TreeNode(number);
        node.left = Deserialize(arr);
        node.right = Deserialize(arr);
    }
    return node;
}



function qianxu(head){
  var out=[];
  out.push(head.val)
  if(head.left!=null){
    out=out.concat(qianxu(head.left))
  }else{
    out=out.concat("#")
  }
  if(head.right!=null){
    out=out.concat(qianxu(head.right))
  }else{
    out=out.concat("#")
  }
  return out
}



var a1=new TreeNode(1)
var a2=new TreeNode(2)
var a3=new TreeNode(4)
var a4=new TreeNode(4)
var a5=new TreeNode(8)
var a6=new TreeNode(6)


a1.left=a2;
a1.right=a3;
// a2.left=a4;
// a2.right=a5;
// a5.left=a6;

Serialize(a1);
console.log(arr)
console.log(Deserialize(arr))