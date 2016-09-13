'use strict';

// for (let i = 0, l = 9; i < l; ++i) {
//     console.log(i);
// }

// console.log(i);

// var test = function() {
//     let a = 1;
//     a = 2;
//     return a;
// }
// console.log(test());


// 块级作用域
// ES5 只有函数作用域和 全局作用域
// 并没有块级作用域
// var tmp = new Date();

// function f() {
//     console.log(tmp);
//     if (false) {
//         var tmp = 'hello, wrod';
//     }
// }

// f();

// ES7

const f = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(123);
        }, 2000);
    });
};

const testAsync = async () => {
    const t = await f();
    console.log(t);
};

testAsync();