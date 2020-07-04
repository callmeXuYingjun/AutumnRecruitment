var jsonString='{"name":"西兰花的春天","age":"26"}' //json字符串
var ToObject=JSON.parse(jsonString);

console.log(ToObject);


var jsonObj = {"name":"西兰花的春天" , "age":26 , "male":true};
var jsonString  = JSON.stringify( jsonObj );//将JSON对象转化为JSON字符
console.log(jsonString);
