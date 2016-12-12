### 1、获取 cookie 中 名为 zhang 的 值 (方法)
```javascript
    var getCookie = function() {
        var arrstr = document.cookie.split("; ");

        for(var i = 0;i < arrstr.length;i ++){
            var temp = arrstr[i].split("=");
            if(temp[0] == objname) return unescape(temp[1]);
        }
    }
```

### 2、写一个样式 使 当前div (不限制宽高) 水平垂直居中（兼容IE6）

```css
.center{
.sub { display:table; 
        background-color:#000; 
        width:500px; 
        height:300px; 
        overflow:hidden; 
        margin-left:50px; 
        _position:relative;
    }   

.main { 
    vertical-align:middle; 
    display:table-cell; 
    text-align:center; 
    _position:absolute; 
    _top:50%; 
    _left:50%; 
}

.content { 
    color:#fff; 
    border:1px solid #fff; 
    display:inline-block;
    _position:relative;
    _top:-50%; 
    _left:-50%;
}
    // 我最终放弃了。。
}
```

### 3、TCP 三次握手详情 以及图


### 4、定义一个函数  function on(elem, type, handle) 使得回调函数 

```javascript
    var on = function( elem, type, handle) {
        if (elem) {
            elem.addEventListener(type, function() {
                handle.call(this);
            });

        } else {
            throw 'not find elements';
        }
    };

    var dom = document.getElementById('btn');

    on(btn,'click', function() {
        console.log(this);
        alert(11);
    });

//  这里我们需要 阅读以下 JQ 源码
```

### 5、在node 中 起 一个 server 并返回 ‘hello zhang’

```javascript
    // app.js
    const http = require('http');

    http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        res.end('hello,vue \n');
    }).listen(3000, '127.0.0.1', () => {
        console.log('let start!!!');
    });

```


### 6、定义同一个函数 使得 返回 a 和 b 的 和， 且当 a b 均已超出了 最大值范围

```
    1、我先简单 的说下思路，首先我们 需要 将超出范围的 整型数字 转换成 String
    2、然后 再 对比这个两个 字符串的 length 将讲个字符串的 长度 用 0 补位成一般长、
    3、然后再 逐个对 字符串的 的每一位 进行 和运算。 结果超过十就  进位。（上一位 加一）
```


### 7、cookie 和 localstorage 的区别

    1、从存储大小来说，cookie 最大4K localStorage 最大 5M
    2、从http 方面来说。cookie 始终在同源的 http请求中携带，而 localStorage 只保存在客户端
    3、从有效期 来讲， cookie 在设置的 过期时间之前都有效, localStorage 始终有效(窗口或浏览器关闭也一直保存)

### 8、架构优势 优点、好处 等等 
(现前端代码的编译（sass、less）、压缩、测试；图片的压缩以及浏览器自动刷新等等功能)
(合并请求、使用雪碧图、压缩js、css代码（除去空格，混淆等等）、延迟加载)


### 9、h5 网站 2g 和 wifi 两种不同的访问速度下有什么区别 或者需要注意的点

### 10、 如何处理页面优化

### 11、请用 ES6 创建 类，以及 各种公有私有方法属性 等