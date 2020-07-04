function Que(){
    var str=[];
    this.push=function(val){
        str.push(val)
    };
    this.pop=function(){
        return str.shift()
    }
    this.get=function(){
        return str;
    }
}
var que1=new Que();
que1.push(1)
que1.push(2)
que1.push(3)
que1.push(4)
que1.pop();
console.log(que1.get())