const readline = require('readline');

const rl = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout
});

// var k=-1;//先给行数置-1,表示还没开始读取
// var rows=[]; //用于存储每行的输入
// rl.on('line',function(line){
//     if(k==-1){
//         k=line;
//     }else{
//         rows.push(line.split(" "));
//         if(k==rows.length){//当输入的行数等于设定的k值时，开始逻辑处理
//             console.log(rows)
//         }
//     }
//     rl.close();
// });


rl.on('line',function(line){
    var data=line.split(" ");
    console.log(data)
    rl.close();
});