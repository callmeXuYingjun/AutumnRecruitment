function FindGreatestSumOfSubArray(array)
{
    var max=-100000000;
    for(var i=1;i<=array.length;i++){
        for(var j=0;j<array.length-i+1;j++){
            var sum=0;
            array.slice(j,j+i).forEach(function(ele){
                sum+=ele;
            })
            max=max>sum?max:sum;
        }
    }

    return max
    // write code here
}
console.log(FindGreatestSumOfSubArray([-2,-8,-1,-5,-9]))