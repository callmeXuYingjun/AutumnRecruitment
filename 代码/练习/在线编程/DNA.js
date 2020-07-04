
function  ran(n,m){
    var w=m-n;
    return Math.round(Math.random()*w+n+1)
}
function Node(element,left,right){
    this.element=element;
    this.right=right;
}
var DNA=[];
for(var i=0;i<100000;i++){
    DNA[i]=[];
    for(var j=0;j<100;j++){
        DNA[i][j]=ran(1000000,1500000);
    }
}
console.log("数据初始化完毕")

function Hash(){
    //定义长度  
    var length = 0;  
    //创建一个对象  
    var obj = new Object();  
    this.put=function(key,value){
        if(this.containsKey(key)){  
            obj[key].push(value); 
        }else{
            obj[key] = [value]; 
        }
    };  
    this.containsKey=function(key){  
        return (key in obj);  
    };  
    this.showObj=function(key){
        console.log(obj)
    }
    this.show=function(key){
        if(typeof obj[key]=="undefined"){
            console.log("没有该条DNA序列")
        }else{
            obj[key].forEach(element => {
            console.log((element[0]+1)+"行-"+(element[1]+1)+"列")
        });
        }
        
    }
}

var map = new Hash(); 
for(var i=0;i<DNA.length;i++){
    for(var j=0;j<DNA[0].length;j++){
        map.put(DNA[i][j],[i,j]); 
    }   
}
console.log("索引建立完毕")
map.show(1020500)
console.log("查询完毕")

console.log(DNA.length+"   "+DNA[0].length)