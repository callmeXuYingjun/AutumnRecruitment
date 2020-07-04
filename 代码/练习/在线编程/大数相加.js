var a="189111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111";
var b="2123123213123213213123213213";
var str_a=a.split("").reverse().map(item => {  
    return +item;  
});
var str_b=b.split("").reverse().map(item => {  
    return +item;  
});
var leng_all=a.length>b.length?a.length+1:b.length+1;
var str_out=new Array(leng_all);
str_out.fill(0)
for(var i=0;i<leng_all-1;i++){
    if(i>str_a.length-1&&i<=str_b.length-1){
        str_out[i]=str_b[i];
    }if(i<=str_a.length-1&&i>str_b.length-1){
        str_out[i]=str_a[i];
    }else{
        str_out[i]=str_a[i]+str_b[i];
    }
}

for(var i=0;i<leng_all-1;i++){
    var yu=str_out[i]%10;
    var chu=parseInt(str_out[i]/10);
    str_out[i]=yu;
    str_out[i+1]=chu+str_out[i+1];
}

str_out.reverse();
for(var i=0;i<leng_all;i++){
    if(str_out[i]!=0){
        break;
    }else{
        str_out.shift();
    }
}

out=str_out.join("")

console.log(out)