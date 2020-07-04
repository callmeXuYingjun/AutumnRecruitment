function jumpFloor(number)
{
var ci_2=parseInt(number/2);
function jiecheng(n){
  var sum=1;
  for(let i=1;i<=n;i++){
    sum=sum*i;
  }
  return sum;
}
   var sum=0;
   for(var i=0;i<=ci_2;i++){
     var ci_1=number-i*2;
     var zong=ci_1+i;
      sum+=jiecheng(zong)/(jiecheng(ci_1)*jiecheng(i))
      console.log(zong,ci_1,i,jiecheng(zong),jiecheng(ci_1),jiecheng(i))
    }
   return sum
    // write code here
}

console.log(jumpFloor(4))