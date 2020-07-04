function MoreThanHalfNum_Solution(numbers)
{
    // write code here
  var djson={};
  for(var i=0;i<numbers.length;i++){
    if(typeof djson[numbers[i]]!="undefined"){
      djson[numbers[i]]+=1;
    }else{
      djson[numbers[i]]=1;
    }
  }
  console.log(djson)
  var out=0;
  for(ele in djson){
      if(djson[ele]>parseInt(numbers.length/2)){
        out=ele;
        console.log(djson[ele],ele)
      }
  }
  return out;
}
console.log(MoreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2]))