var  str=[1,2,3,4,5,6,7,8,76,432,1];
str.sort(function(x,y){
    return x-y
})

console.log(str);
str.sort(function(x,y){
    return y-x
})

console.log(str);