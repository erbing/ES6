// 构造函数
function _lazyMan(name) {
    this.tasks = [];
    console.log(name);
}

// 构造函数原型上的  sleep fn
_lazyMan.prototype.sleep = function() {
    console.log('i am sleepping');
}

_lazyMan.prototype.eat = function() {
    console.log('i am eatting');
}

/* 封装 */
function lazyMan(name) {
    return new _lazyMan(name);
}

lazyMan('zz').eat();