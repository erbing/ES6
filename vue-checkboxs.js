 var vm = new Vue({
        el: "#app",
        data: {
            items: [{
                id:1,
                message: 'Apple',
                selected: false,
                num: 1,
                price: 5
            }, {
                id:2,
                message: 'Peach',
                selected: true,
                num: 1,
                price: 10
            }, {
                id:3,
                message: 'Orange',
                selected: true,
                num: 1,
                price: 15
            }, {
                id:4,
                message: 'Pear',
                selected: true,
                num: 1,
                price: 20
            }]
        },
        methods: {
            fillIn: function (index, n) {
                this.items[index].num = n;
            },
            send:function () {
                var formData = new FormData();
               
                //获取被勾选的项的id，然后返回，不知怎么写
                for (var i = 0, length = this.items.length; i < length; i++) {
                        if (this.items[i].selected === true) {
                            
                        }
                    }
                     
                                //发送ajax请求
                this.$http.post('/someUrl', formData).then((response) => {
                   // success callback
                }, (response) => {
                   // error callback
                });
            }
        },
        computed: {
            nums: function() {
                return [1,2,3,4,5];
            },
            allSelected: {
                get: function() {
                    for (var i = 0, length = this.items.length; i < length; i++) {
                        if (this.items[i].selected === false) {
                            return false;
                        }
                    }
                    return true;
                },
                set: function(val) {
                    for (var i = 0, length = this.items.length; i < length; i++) {
                        this.items[i].selected = val;
                    }
                }
            },
            sum: function() {
                var totalAmount = 0;
                for (var i = 0, length = this.items.length; i < length; i++) {
                    var item = this.items[i];
                    if (item.selected === true) {
                        totalAmount += item.price * item.num;
                    }
                }
                return totalAmount;
            }
        }
    });