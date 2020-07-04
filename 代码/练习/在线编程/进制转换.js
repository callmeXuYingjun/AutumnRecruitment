var num10=2
function zhuan(num){
    var out=[]
    var shang;
    while(num){
        shang=parseInt(num/2)
        out.push(num%2)
        num=shang;
    }
    return parseInt(out.reverse().join(""));
}

console.log(zhuan(num10))