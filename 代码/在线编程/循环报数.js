function LastRemaining_Solution(n, m)
{
    // write code here
    
  var students=[];
  for(var i=0;i<n;i++){
    students[i]=i;
  }
  var index=0;
  while(students.length!=1){
    index=(index+m-1)%students.length;
    var shan=students.splice(index,1);
    console.log(shan,students)
  }
  return students[0]
}
console.log(LastRemaining_Solution(10, 5))