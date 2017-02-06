function QPL(arr) {
    if (arr.length <= 1) return arr;        //  长度小于等于1
    if (arr.length === 2) {                 //  长度 等于 2
        return ['' + arr[0] + arr[1], '' + arr[1] + arr[0]];
    } else {
        var tem = [];
        for (var i = 0; i < arr.length; ++i) {
            var pre = arr.splice(i,1);
            var m = QPL(arr);
            arr.splice(i,0,pre);
            for (var j = 0, l = m.length; j < l; j++) {
                tem.push(m[j] + arr[i]);//将arr[j]组合起来
            }
        }
        return tem;
    }
}

console.log(QPL([1,2,3,4,5,6]));