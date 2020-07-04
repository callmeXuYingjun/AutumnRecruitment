var str="ascdfasdfggfdsajjkh";
function huiwen(str){
    var out=[];
    var arr="#"+str.split("").join("#")+"#";
    arr=arr.split("")
    for(var j=arr.length;j>=0;j--){
        for(var i=0;i<arr.length;i++){
            if(i-j>=0&&i+j<arr.length){
                if(pan(arr.slice(i-j,i+j+1))){
                    return arr.slice(i-j,i+j+1).join("").split("#").join("")
                }
            }
        }     
    }
    return arr
}
function pan(a){
    return a.toString()==a.reverse().toString()
}



console.log(huiwen(str))