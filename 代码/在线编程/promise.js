
function zuofan(){
    var p1=new Promise(function(resolve,reject){
        setTimeout(function(){
            var data="做饭--"
            // console.log(data)
            resolve(data);
        },1000)
    });
    return p1;
}


function chifan(data){
    var p2=new Promise(function(resolve,reject){
        setTimeout(function(){
            data=data+"吃饭--"
            // console.log(data)
            reject(data);
        },1000)
    });
    return p2;
}

function shuawan(data){
    var p3=new Promise(function(resolve,reject){
        setTimeout(function(){
            data=data+"刷碗--"
            // console.log(data)
            resolve(data);
        },1000)
    });
    return p3;
}

// zuofan()
//     .then(chifan)
//     .then(shuawan)
//     .then(function(data){
//         return data;
//     })

zuofan()
    .then(function(data){
        return chifan(data);
    })
    .then(function(data){
        return shuawan(data);
    })
    .catch(function(data){
        console.log("系统出错",data);
    });