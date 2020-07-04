// var obj={name:"xushaobin",age:100}
// console.log(obj.name)

function Person(name,age){
    this.name=name;
    this.age=age;
}

function _new(){
    var Obj=[].shift.call(arguments)
    var o={};
    o.__proto__=Obj.prototype;
    Obj.apply(o,arguments)
    return o
}
var xiaoming=_new(Person,"xiaoming",18)
// console.log(xiaoming)