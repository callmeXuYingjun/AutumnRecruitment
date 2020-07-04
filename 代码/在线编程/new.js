var Person = function (name) {
    this.name = name;
}
Person.prototype.sayHello = function() {
    console.log('hello '+this.name);
}
var p1 = new Person('HANMEI');
p1.sayHello();

function New(F){
    var obj = {'__proto__': F.prototype};  /*第一步*/
    return function() {
        F.apply(obj, arguments);           /*第二步*/
        return obj;                        /*第三步*/
    }
}


var p2 = New(Person)("asdasd");
p2.sayHello();