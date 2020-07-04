//原型继承
// function Parent1() {
//     this.name = ['super1']
//     this.reName = function () {
//       this.name.push('super111')
//     }
//   }
//   function Child1() {
  
//   }
//   Child1.prototype = new Parent1()
//   var child11 = new Child1()
//   var child12 = new Child1()
//   var parent1 = new Parent1()
//   child11.reName()
//   console.log(child11.name, child12.name) // [ 'super1', 'super111' ] [ 'super1', 'super111' ], 可以看到子类的实例属性皆来自于父类的一个实例，即子类共享了同一个实例
//   console.log(child11.reName === child12.reName) // true, 共享了父类的方法




//class
class Parent5 {
    constructor() {
      this.name = ['super5']
    }
    reName() {
      this.name.push('new 5')
    }
  }
  
  class Child5 extends Parent5 {
    constructor() { 
      super()
    }
  }
  
  var child51 = new Child5()
  var child52 = new Child5()
  child51.reName()
  console.log(child51.name, child52.name) // [ 'super5', 'new 5' ], 子类实例不会相互影响
  console.log(child51.reName === child52.reName) //true, 共享了父类的方法