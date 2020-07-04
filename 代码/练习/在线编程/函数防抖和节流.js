var count=0
function add(){
    console.log(count++)
}

function fangdou(fn,wait){   //输入框，触发事件后在n秒内不再触发次函数后执行，如果触发时间重新计算。
    var timer=null;
    return function(){
        if(timer){
            clearTimeout(timer)
            timer=null
        }
        timer=setTimeout(function(){
            fn()
        },wait)
    }

}
function jieliu(fn,wait){  //节流就是稀释执行频率，n秒执行一次，或者触发n次执行一次。  
    var lasttime=null
    return function(){
        let newtime=+new Date()
        if(newtime-lasttime>wait||!lasttime){
            fn();
            lasttime=newtime
        }
    }

}
    // var test=fangdou(add,5000)
    var test=jieliu(add,5000)
    setInterval(() => {
        test()
    },1000);