var a="asd";
var b="asdasdasdasda";
function maxZichuan(a,b){
    var junzhen=[];
    for(var i=0;i<a.length;i++){
        junzhen[i]=[];
        for(var j=0;j<b.length;j++){
            a[i]==b[j]?junzhen[i][j]=1:junzhen[i][j]=0
        }
    }
    for(var i=1;i<a.length;i++){
        for(var j=1;j<b.length;j++){
            if(junzhen[i][j]==1){
                junzhen[i][j]=junzhen[i-1][j-1]+1
            }
        }
    }
    var max=[-1,-1,-1];
    for(var i=0;i<a.length;i++){
        for(var j=0;j<b.length;j++){
            if(junzhen[i][j]>max[2]){
                max=[i,j,junzhen[i][j]]
            }
        }
    }
    console.log(max)
    return a.slice(max[0]+1-max[2],max[0]+1)
}

console.log(maxZichuan(a,b))