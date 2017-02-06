methods:{
  checkedAll: function() {
    var _this = this;
    console.log(_this.checkboxModel);
    if (this.checked) {//实现反选
      _this.checkboxModel = [];
    }else{//实现全选
      _this.checkboxModel = [];
      _this.checkboxData.forEach(function(item) {
        _this.checkboxModel.push(item.id);
      });
    }
  }
},
watch: {//深度 watcher
  'checkboxModel': {
    handler: function (val, oldVal) { 
      if (this.checkboxModel.length === this.checkboxData.length) {
        this.checked=true;
      }else{
        this.checked=false;
      }
    },
    deep: true
  }
},
data () {
  return {
    checkboxData:[{
      id:'1',
      value:'苹果'
    },{
      id:'2',
      value:'荔枝'
    },{
      id:'3',
      value:'香蕉'
    },{
      id:'4',
      value:'火龙果'
    }],
    checkboxModel:['1','3','4'],
    checked:""
  }
}
}