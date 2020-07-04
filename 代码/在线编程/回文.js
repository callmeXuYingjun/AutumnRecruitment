//回文

var str="11111asavadasdabcddcbaasdasda";
function  hui(str){
    var arr=str.split("")
    for(var i=3;i<=arr.length;i++){
        for(var j=0;j<arr.length-1;j++){
                if(j+i<=arr.length-1){
                    var arr_zi=arr.slice(j,j+i+1)
                    if(pan(arr_zi)){
                        console.log(arr_zi.join(""))
                    }
                }
        }
    }
}

function pan(arr_zi){
    return arr_zi.toString()==arr_zi.reverse().toString()
}

hui(str)