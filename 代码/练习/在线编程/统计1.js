function NumberOf1Between1AndN_Solution(n)
{
  var sum=0;
  for(var i=1;i<=n;i++){
    (i).toString().split("").forEach(function(ele){
      if(ele=="1"){
        sum+=1;
      }
    })
  }
  return sum
    // write code here
}
