
function IsPopOrder(pushV, popV)
{ 
  var sta=[];
  var idx = 0;
  for(var i=0;i<pushV.length;i++){
    sta.push(pushV[i]);
    while (sta.length&&sta[sta.length-1]==popV[idx]){
      sta.pop();
      idx++
    }
  }
  return sta.length == 0;
}


console.log(IsPopOrder([1,2,3,4,5],[4,5,3,2,1]))