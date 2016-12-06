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

### 6、定义同一个函数 使得 返回 a 和 b 的 和， 且当 a b 均已超出了 最大值范围

### 7、cookie 和 localstorage 的区别

### 8、架构优势 优点、好处 等等 (开发体验)

### 9、h5 网站 2g 和 wifi 两种不同的访问速度下有什么区别 或者需要注意的点

### 10、 如何处理页面优化