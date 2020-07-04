var str_in="a"
function Permutation(str)
{   
    if(str==null){return;}
    var out1=Permutation1(str,0);
    var out=[];
  for(var i=0;i<out1.length;i++){
    if(out.indexOf(out1[i])==-1){
      out.push(out1[i])
    }
  }
  return out.sort()
}

function Permutation1(str,num)
{   
    var out=[];
    for(var i=num;i<str.length;i++){
        var str_temp=str.split("")
        var temp=str_temp[i];
        str_temp[i]=str_temp[num];
        str_temp[num]=temp;
        out.push(str_temp.join(""))
        if(num<str.length-1){
            out=out.concat(Permutation1(str_temp.join(""),(num+1)))
        }
    }
    if(num!=0){
        out.shift();
    }
    return out; 
}


console.log(Permutation(str_in))