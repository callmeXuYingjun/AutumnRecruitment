var fn = x =>{
    console.log(this)
    return  x+3;

};
var  fn1=function(x){
    console.log(this);
    return x*x
}
fn();
fn1();
