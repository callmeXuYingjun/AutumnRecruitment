function GetUglyNumber_Solution(index)
{
  var c2=0;
  var c3=0;
  var c5=0;
  var uglyArr=[1];
  for(var i=1;i<index;i++){
    uglyArr[i] = Math.min(uglyArr[c2]*2,uglyArr[c3]*3,uglyArr[c5]*5);
    if(uglyArr[i]==uglyArr[c2]*2){c2++}
    if(uglyArr[i]==uglyArr[c3]*3){c3++}
    if(uglyArr[i]==uglyArr[c5]*5){c5++}
  }
  return uglyArr[index-1]
    // write code here
}

console.log(GetUglyNumber_Solution(4))