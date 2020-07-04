var str=[1,2,3,4,5,6,7,8,22,12,3,1];



function hebing(left,right){
    var result=[];
    while(left.length!=0&&right.length!=0){
        if(left[0]<right[0]){
            result.push(left[0])
            left.shift();
        }else{
            result.push(right[0])
            right.shift();
        }
    }
    return result.concat(left).concat(right);
}
function guibing(str){
    if(str.length==1){
        return str;
    }
    console.log(str.length)
    var mid=parseInt(str.length/2)
    var left=str.slice(0,mid);
    var right=str.slice(mid);
    return hebing(guibing(left),guibing(right))
}
console.log(guibing(str))


function maopao(str){
    for(var i=0;i<str.length-1;i++){
        for(var j=0;j<str.length-i-1;j++){
            var temp;
            if(str[j+1]<str[j]){
                temp=str[j];
                str[j]=str[j+1];
                str[j+1]=temp;
            }
            }
    }
    return str;
}

function quickSort(str){
    if(str.length<=1){
        return str;
    }
    var biaoji=str[0]
    var left=[]
    var right=[]
    for(var i=1;i<str.length;i++){
        biaoji<str[i]?right.push(str[i]):left.push(str[i])
    }
    return quickSort(left).concat(biaoji,quickSort(right))
}

console.log(maopao(str))
console.log(quickSort(str))