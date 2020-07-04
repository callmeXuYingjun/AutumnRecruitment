function PrintMinNumber(numbers)
{
    // write code here
  var nums=numbers.map(function(ele){
    return (ele+"").length;
  })
  var maxlength=Math.max.apply(null,nums);
  var numbers_new=numbers.map(function(ele){
      var number=(ele+"").length;
      var out=[];
      for(var i=0;i<maxlength;i++){
          out[i]=(ele+"")[i%number];
      }
      return out.join("")
  })
  var numbers_new1=Object.assign([],numbers_new)
  numbers_new.sort()
  var out=[];
  for(var i=0;i<numbers_new.length;i++){
    out.push(numbers[numbers_new1.indexOf(numbers_new[i])])
  }
  return parseInt(out.join(""))
  
}

var a=[3,32,321];
console.log(PrintMinNumber(a))