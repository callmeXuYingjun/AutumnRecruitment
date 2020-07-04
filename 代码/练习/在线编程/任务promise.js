// function shuchu(t,data){
//     var p=new Promise(function(resolve,reject){
//       setTimeout(function(){
//           console.log(data);
//           resolve(); 
//       },t)
//     })
//     return p;
// }

// shuchu(10000,1)
// .then(function(){
//     return shuchu(1000,2)
// })
// .then(function(){
//     return shuchu(2000,3)
// })
// .then(function(){
//     console.log("game over")
// })



function task(fn,time){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            fn()
            resolve("done")
        },time)
    })
}
task(say,100)
    .then((data)=>task(say,2000))
    .then(()=>task(say,1000))
function say(){
    console.log("hello")
}