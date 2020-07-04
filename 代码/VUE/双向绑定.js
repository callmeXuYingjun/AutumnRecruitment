var obj = new Object;  //obj = {}
obj.name = "张三";  //添加描述
obj.say = function(){};  //添加行为


// function defineReactive(obj,key,val){
//     Object.defineProperty(obj,key, {
//         get: function() {
//                console.log("获取属性")
//                return val
//         },
//         set: function (newVal) {
//              console.log("修改属性")
//              val = newVal;
//         }
//     })
// }



// Object.keys(obj).forEach(function(key) {
//     defineReactive(obj,key,obj[key]);
// })




Object.keys(obj).forEach(function(key){
    defineP(obj,key,obj[key])
})
function defineP(obj,key,val){
    Object.defineProperty(obj,key,{
        get:function(){
            console.log("获取");
            return val
        },
        set:function(newVal){
            console.log("update")
            val=newVal;

        }

    })

}

obj.name="xushaobin"
console.log(obj.name)