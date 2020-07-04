function FindContinuousSequence(sum)
{
  var out=[];
  for(var i=2;i<sum;i++){   //个数
    for(var j=1;j<sum-i+1;j++){   //起始位置
      var sumo=he(j,j+i-1);
      if(sumo==sum){
        var temp=[]
        for(var k=j;k<=j+i-1;k++){
          temp.push(k)
        }
        out.push(temp);
      }
    }
  }
  return out.reverse()
}
function he(start,end){
  var temp=0
  for(var i=start;i<=end;i++){
    temp+=i;
  }
  return temp;
}


console.log(FindContinuousSequence(100))