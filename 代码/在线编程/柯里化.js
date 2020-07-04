<<<<<<< HEAD
function curry (fn) {
    // 缓存除第一个参数的所有参数
    let args = [].slice.call(arguments, 1);  
    console.log("asdas",args)
    let _fn = function () {
      if (arguments.length === 0) {
        return fn.apply(this, args)
      } else {
        args.push(...arguments);
        return _fn
      }
    }
    return _fn
  }
  function add () {
    return [].reduce.call(arguments, (a, b) => a + b)
  }
  console.log(curry(add, 2)(1, 3, 4)(2, 3)(3)(4, 6)()) // 133


  function jieliu(fn,wait){
    let oldtime=null
    return function(){
        var newtime=+new Date()
        if(newtime-oldtime>await||!oldtime){
            fn();
            oldtime=newtime
        }
    } 
  }

  function fangdou(fn,wait){
    var timer=null;
    return function(){
        if(timer){
            clearTimeout(timer);
            timer=null
        }//删除旧的
        timer=setTimeout(function(){
            fn()
        },wait)  //创建新的
    }
  }
=======
function curry(fn){
    let args=[].slice.call(arguments,1)
    let _fn=function(){
        if(arguments.length===0){
            return fn(args)
        }else{
            args=args.concat(...arguments)
            return _fn
        }
    }
    return _fn
}
function add(arr){
    var sum=0;
    arr.forEach(element => {
        sum+=element
    });
    return sum
}
console.log(curry(add,4,5)(1,2,3)())
>>>>>>> 841173d87442cdad10dc5fbb419f83aec6455d2a
