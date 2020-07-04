function duplicate(numbers)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
console.log(numbers)
  var json1={};
  var biaozhi=false;
  for(var i=0;i<numbers.length;i++){
    if(typeof json1[numbers[i]]=="undefined"){
      json1[numbers[i]]=1;
    }else{
      json1[i]++;
      biaozhi=true;
    //   break;
    }
  }
  console.log(json1)
  return biaozhi;
  
}

console.log(duplicate([222,444,333,111,444]))