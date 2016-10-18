
/*
* 测试用
* components 通信 实例
*/


(function(){

    var M = {
        template: "<div @click='changeM'> {{msgM}} && ------ {{commenData}} </div>",
        props: {
            msgM: {
                default: 'this is msg M'
            },
            commenData: {
                default: ''
            }
        },
        data: function() {
            return {};
        },
        methods: {
            changeM: function() {
                this.commenData = 'XXX';
            }
        },
        ready: function() {
        },
        watch: {
            commenData: function(val, oldVal) {
                console.log('new: %s, old: %s', val, oldVal);
            }
        }
    };

    var N = {
        template: "<div @click='changeN'> {{msgN}} && ------ {{commenData}} </div>",
        props: {
            msgN: {
                default: 'this is msg N'
            },
            commenData: {
                default: ''
            }
        },
        data: function() {
            return {};
        },
        methods: {
            changeN: function() {

            }
        },
        ready: function() {
        }
    };
    

    new Vue({
        el: 'body',
        data:{
            datam: 'this is mData',
            datan: 'this is nData',
            commenData: 'this is commen data'
        },
        components: {
            'ui-m': M,
            'ui-n': N
        }
    });

})(window);





