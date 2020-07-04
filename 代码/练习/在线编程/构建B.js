function multiply(array)
{
  if(array==null){
    return null
  }
  var B=[];
  for(var i=0;i<array.length;i++){
    var sum=1;
    for(var j=0;j<array.length;j++){
      if(j!=i){
        sum=sum*array[j];
      }
    }
    B[i]=sum;
  }
  return B
}

console.log(multiply([1,2,3,4,5]))

