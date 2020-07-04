function FirstNotRepeatingChar(str)
{
  str=str.split("");
  var data=[];
  var num=[];
  for(var i=0;i<str.length;i++){
    if(data.indexOf(str[i])==-1){
      data.push(str[i]);
      num.push(1)
    }else{
      num[data.indexOf(str[i])]++;
    }
  }
  var index=num.indexOf(1);
  var ele=data[index];
  return str.indexOf(ele)
  
}

console.log(FirstNotRepeatingChar("asdasdasp"))