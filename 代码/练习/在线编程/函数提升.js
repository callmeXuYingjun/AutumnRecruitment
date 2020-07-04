// console.log(a);    // f a() {console.log(10)}
// a();    //  undefined
// var a = 3;

// function a() {
//         console.log(10) //10
// }
// console.log(a)   //3
// a = 6;
// console.log(a());  //a is not a function;



// function a() {
//     console.log(10) //10
// }
// var a;
// console.log(a);    // f a() {console.log(10)}
// console.log(a());    //  undefined
// a = 3;
// console.log(a)   //3
// a = 6;
// console.log(a());  //a is not a function;

// var temp=12;
// console.log(temp);
// function aa(){
//     temp=10;
//     console.log(temp)
// }
// aa();
// console.log(temp);


// console.log(a);
// // var  a="xushaobin"

// function a(){
//     console.log("asd")
// }

// for(let i=0;i<10;i++){
//     setTimeout(function(){
//         console.log(i)
//     },500)
// }


function A(){
    this.pu="asdas";
    this.mu=function(){
        console.log(1111)
    }
}
A.prototype.nu=function(){
    console.log(2222)
}

var a=new A();
a.mu();