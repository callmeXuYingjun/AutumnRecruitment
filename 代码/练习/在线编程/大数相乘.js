var a="123434324322222222222222222222222222222222222222222222222999";
var b="11999991113213123213123121"
var ji_length=length=a.length+b.length;
var ji=new Array(ji_length);
ji.fill(0);
a=a.split("").reverse();
b=b.split("").reverse();

for(var i=0;i<a.length;i++){
    for(var j=0;j<b.length;j++){
        ji[i+j]+=a[i]*b[j];
    }
}

for(var i=0;i<ji_length-1;i++){
    var temp=parseInt(ji[i]/10);
    ji[i]=ji[i]%10;
    ji[i+1]=temp+ji[i+1];
}
ji.reverse();
while(ji[0]==0){
    ji.shift()
}
console.log(ji.join(""))
