var t1=[];
var t2=[];
var result=[];
function push(node)
{
  t1.push(node);
    // write code here
}
function pop()
{
  for(var i=0;i<t1.length;i++){
    t2[i]=t1[t1.length-i-1];
  }
  t1=[];
  var out=t2.splice(t1.length-1,1); 
  for(var i=0;i<t2.length;i++){
    t1[i]=t2[t2.length-i-1];
  }
  t2=[];
  console.log(out)
  return out;
    // write code here
}

result.push(1)
result.push(2)
result.push(3)
result.pop()
result.pop()
result.push(4)
result.pop()
result.push(5)
result.pop()
result.pop()