function Ken(){

    this.eat=function(){
        console.log("吃吃吃")
    }
}    
Ken.say=function(){
    console.log("我是静态方法");
}

Ken.say();
var a=new Ken();
a.eat();
// a.say();