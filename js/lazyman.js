// 构造函数
function _lazyMan(name) {
    this.tasks = [];
    var that = this;
    var fn = (function(n) {
        var name = n;
        return function() {
            console.log(name);
            that.next();
        }
    })(name)
    this.tasks.push(fn);
    setTimeout(function() {
        that.next();
    },0)
}

// 事件调度函数
_lazyMan.prototype.next = function() {
    var fn = this.tasks.shift();
    fn && fn();
}

// 构造函数原型上的  sleep fn
_lazyMan.prototype.sleep = function() {
    var that = this;
    var fn = (function() {
        return function() {
            console.log('i am sleepping');
            that.next();
        }
    })()
    this.tasks.push(fn);
    return this;    // 实现链式调用
}

// 构造函数原型上的  eat fn
_lazyMan.prototype.eat = function() {
    var that = this;
    var fn = (function() {
        return function() {
            console.log('i am eatting');
            that.next();
        }
    })()
    this.tasks.push(fn);
    return this;    // 实现链式调用
}

/* 封装 */
function lazyMan(name) {
    return new _lazyMan(name);
}

lazyMan('zz').eat().sleep();
lazyMan('zz').sleep().eat();