//监听一个对象所有属性

var  obj={};
console.log(obj.name)

Object.defineProperty(obj,"name",{
    set(newval){
        console.log("OK")
        val=newval
    },
    get(){
        return val
    }

})
obj.name="asd"
console.log(obj.name)