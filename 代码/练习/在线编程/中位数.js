var str=[];
function Insert(num)
{
  str.push(num)
    // write code here
}
function GetMedian(){
  var yu=str.length%2;
  str.sort(function(a,b){return a-b})
  if(yu==1){   //奇数
    var mid=(str.length+1)/2;
    return str[mid-1]
  }else{
    var mid=str.length/2;
    return (str[mid-1]+str[mid])/2
  }
	// write code here
}
Insert(5.00)
console.log(GetMedian())
Insert(3.50)
console.log(GetMedian())
Insert(3.00)
console.log(GetMedian())
Insert(3.50)
console.log(GetMedian())
Insert(3.50)
console.log(GetMedian())
Insert(4.00)
console.log(GetMedian())