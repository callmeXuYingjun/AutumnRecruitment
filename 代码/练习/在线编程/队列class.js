class Queue{
    constructor(){
        this.arr=[];
    }
    push(ele){
        this.arr.push(ele)
    }
    pop(){
        return this.arr.shift()
    }
    get(){
        return this.arr
    }
}
var q1=new Queue()
q1.push(1)
q1.push(2)
q1.push(3)
q1.push(4)
console.log(q1.pop())
console.log(q1.get())

