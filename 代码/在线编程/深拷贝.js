var target={};
var target1={};
var hha={name:"xushaobin"}
const source = { b: 4, c: 5 ,d:hha};

const returnedTarget = Object.assign(target, source);
target1=JSON.parse(JSON.stringify(source))
// const returnedTarget = Object.assign(target, source);
source.d.name="xu"
source.b="xu"
console.log(source);
console.log(target);
console.log(target1);
// expected output: Object { a: 1, b: 4, c: 5 }


console.log(returnedTarget);


