var cont=0;
function baoshu(){
    console.log(cont)
    cont++;
}
function fangdou(fn,wait){
    var timer=null;
    return function(){
        if(timer){
            clearTimeout(timer);
            timer=null;
        }
        // console.log(timer)
        timer=setTimeout(function(){
            fn()
        },wait)
    }
}
function  jieliu(fn,wait){
    let lastTime=null;
    return function(){
        let newTime=+new Date();
        if(newTime-lastTime>wait||!lastTime){
            fn();
            lastTime=newTime;
        }
    }
}



setInterval(jieliu(baoshu,1000),10);

// setInterval(fangdou(baoshu,1000),100);
