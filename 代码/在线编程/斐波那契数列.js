// function Fibonacci(n)
// {
//   if(n==1){
//       return 1;
//   }
//   var str=[1,1];
//   var index=2;
//   var sum=2;
//   while(sum!=n){
//     sum=str[0]+str[1];
//     console.log(sum)
//     str[0]=str[1];
//     str[1]=sum;
//     index++;
//   }
//   return index+1
//     // write code here
// }


function Fibonacci(n){
  var arr=[0,1];
  var a=0,b=1;
  while(arr.length<n){
    [a,b]=[b,a+b];
    arr.push(b)
  }
return arr

}

console.log(Fibonacci(20));