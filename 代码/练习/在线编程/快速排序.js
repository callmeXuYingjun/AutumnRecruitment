var arr = [5,4,7,8,1]
function kkkk(arr){
    if (arr.length ==0) {
        return arr
    }
    var biaoji=arr[0]
    var left=[]
    var right=[]
    for(var i=1;i<arr.length;i++){
       if(arr[i]<=biaoji){
           left.push(arr[i])
       } else{
           right.push(arr[i])
       }
    }
    return kkkk(left).concat(biaoji).concat(kkkk(right))
}

console.log(kkkk(arr))
console.log("aaaaaaaaaaaaaaaa")















function quick(arr) {
    if (arr.length <= 1) {
        return arr
    }
    var biao = arr[0]
    var left = []
    var right = []
    for (var i = 1; i < arr.length; i++) {
        arr[i] <= biao ? left.push(arr[i]) : right.push(arr[i])
    }
    return quick(left).concat(biao).concat(quick(right))
}


// const quickSort = (arr, left = 0, right = arr.length - 1) => {
//     if (left >= right) {//如果左边的索引大于等于右边的索引说明整理完毕
//         return
//     }
//     let i = left
//     let j = right
//     const baseVal = arr[j] // 取无序数组最后一个数为基准值
//     while (i < j) {//把所有比基准值小的数放在左边大的数放在右边
//         while (i < j && arr[i] <= baseVal) { //找到一个比基准值大的数交换
//             i++
//         }
//         arr[j] = arr[i] // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
//         while (i < j && arr[j] >= baseVal) { //找到一个比基准值小的数交换
//             j--
//         }
//         arr[i] = arr[j] // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
//     }
//     arr[j] = baseVal // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
//     quickSort(arr, left, j - 1) // 将左边的无序数组重复上面的操作
//     quickSort(arr, j + 1, right) // 将右边的无序数组重复上面的操作
//     return arr
// }

function quickSort(arr,left=0,right=arr.length - 1){
    if(left >= right){
        return 
    }
    var i=left;
    var j=right;
    var base=arr[i]

    while(i<j){
        while(i<j&&arr[j]>=base){
            j--
        }
        var temp=arr[j];
        arr[j]=arr[i];
        arr[i]=temp;

        while(i<j&&arr[i]<=base){
            i++
        }
        var temp=arr[j];
        arr[j]=arr[i];
        arr[i]=temp;
    }
    quickSort(arr, left, j - 1)
    quickSort(arr, j+1, right)
    return arr
}



console.log(quickSort(arr))


function  qucik(arr,left=0,right=arr.length-1){
    if(left>=right){
        return 
    }
    var i=left;
    var j=right;
    var base=arr[i]
    while(i<j){
        while(i<j&&arr[j]>=base){
            j--
        }
        arr[i]=arr[j]
        while(i<j&&arr[i]<=base){
            i++
        }
        arr[j]=arr[i]
    }
    arr[i] = base
    quickSort(arr, left, j - 1)
    quickSort(arr, j+1, right)
    return arr
}

console.log(qucik(arr))

function quickSort1(arr,left=0,right=arr.length-1){
    if(left>=right){
        return 
    }
    var i=left;
    var j=right;
    var base=arr[left];
    while(i<j){
        while(i<j&&arr[j]>=base){
            j--
        }
        arr[i]=arr[j]
        while(i<j&&arr[j]<=base){
            i++
        }
        arr[j]=arr[i]
    }
    arr[i] = base
    quickSort(arr,left,j-1)
    quickSort(arr,j+1,right)
    return arr
}
console.log(quickSort1(arr))