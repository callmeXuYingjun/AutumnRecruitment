function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    var json={};
  array.forEach(function(ele){
    if(typeof json[ele]=="undefined"){
      json[ele]=1;
    }else{
      json[ele]++;
    }
  })
  var out=[];
  for(var ele in json){
    if(json[ele]==1){
      out.push(parseInt(ele))
    }
  }
  return out
}
