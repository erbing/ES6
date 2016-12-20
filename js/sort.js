
var Arr  = [21, 2, 19, 17, 1, 93, 37, 6, 81, 18];
//  Arr1 = [2, 21, 19, 17, 1, 93, 37, 6, 81, 18, 11];
//  Arr2 = [2, 19, 21, 17, 1, 93, 37, 6, 81, 18, 11];
//  Arr3 = [2, 19, 17, 21, 1, 93, 37, 6, 81, 18, 11];
//  Arr4 = [2, 19, 17, 1, 21, 93, 37, 6, 81, 18, 11];
//  Arr5 = [2, 19, 17, 1, 21, 93, 37, 6, 81, 18, 11];
//  Arrx = [2, 17, 1, 19, 21, 37, 6, 81, 18, 11, 93];

var bubbleSort = function(arr) {
    console.log(arr);
    if (arr && arr.length > 1) {

        for (var i = 1;  i < arr.length; i++) {

            for (var j = 0; j < arr.length - i; j++) {
                
                var temp;
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
                console.log(arr , j);
            }
            
        }

        return arr;

    } else {
        return arr;
    }
};

var res = bubbleSort(Arr);
console.log(res);