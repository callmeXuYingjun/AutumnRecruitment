function f(k1){
    function temp(k2){
        return k1+k2
    }
    return temp
}

console.log(f(1)(2))