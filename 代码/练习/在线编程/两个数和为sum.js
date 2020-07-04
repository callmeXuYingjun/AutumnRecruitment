function FindNumbersWithSum(array, sum)
{ 
  if(array==null){
    return []
  }
  if(array.length<2){
    return []
  }
  var out=[];
  for(var i=0;i<array.length;i++){
    if(array[i]>sum){break;}
    for(var j=i+1;j<array.length;j++){
      if(array[j]>sum-array[i]){break;}

      if(array[j]==sum-array[i]){
        out.push([array[i],array[j]]);
      }
      
    }
  }
  if(out.length==0){
      return []
  }
  var out1=out[0];
  out.forEach(function(ele){
    if((ele[0]*ele[1])>(out1[0]*out1[1])){
      out1=ele;
    }
  })
  return out1;
    // write code here
}

console.log(FindNumbersWithSum([-2,-1,0,1,2],-3))