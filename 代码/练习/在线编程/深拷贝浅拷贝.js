function  DeepClone(obj){
    var objClone=Array.isArray(obj)?[]:{}
    for(key in obj){
        if(obj[key]&&typeof obj[key]=="object"){
            objClone[key]=DeepClone(obj[key])
        }else{
            objClone[key]=obj[key]
        }
    }
    return objClone
}

var  a=[1,2,[1,2,3],4]
var b=DeepClone(a)
a[0]=100
console.log(a,b)


function deepClone1(obj){
    let _obj=JSON.stringify(obj);
    objClone=JSON.parse(_obj)
    return objClone
}
var  a=[1,2,[1,2,3],4]
var b=deepClone1(a)
a[0]=100
console.log(a,b)