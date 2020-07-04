function Queue(){
    this.dataStore = [];//存放队列的数组，初始化为空
    this.push=function(ele){
        this.dataStore.push(ele);
    }
    this.pop=function(ele){
        return this.dataStore.shift()
    }
    this.clear = function(){
       this.dataStore=[]
    };//判断队列是否为空
}

var q1=new Queue()
q1.push(1)
q1.push(2)
q1.push(3)
q1.push(4)
q1.push(5)
console.log(q1.pop())
console.log(q1.pop())
console.log(q1.pop())
console.log(q1.pop())
console.log(q1.dataStore)