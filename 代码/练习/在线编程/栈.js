var str=[];
function push(node)
{
  str[str.length]=node;
    // write code here
}
function pop()
{
   str.splice(str.length-1,1);
    // write code here
}
function top()
{
    // write code here
    return str[str.length-1];
}
function min()
{
  return Math.min.apply(Math,str)
    // write code here
}



push(3);
console.log(min())
push
// ["PSH3","MIN","PSH4","MIN","PSH2","MIN","PSH3","MIN","POP","MIN","POP","MIN","POP","MIN","PSH0","MIN"]