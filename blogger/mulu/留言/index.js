"use strict";

//不是2两位数的时候前面加0
function panduan(date) {
    if (date < 10) {
        return "0" + date;
    } else {
        return date;
    }
}


//获取当前时间
function date() {
    var p = document.querySelector('.demo1');
    var time = new Date();
    var nian = time.getFullYear();
    var yue = time.getMonth() + 1;
    var ri = time.getDate();
    var tian = time.getDay();
    var wond = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    var week = wond[tian];
    var shi = time.getHours();
    var fen = time.getMinutes();
    var miao = time.getSeconds();
    var newDate = panduan(nian) + "-" + panduan(yue) + "-" + panduan(ri) + " " + panduan(shi) + ":" + panduan(fen) + ":" + panduan(miao);
    return newDate + "  " + week + "  ";
}

// vue模板
var vml = new Vue({
    el: '#app',
    //获取dom节点
    methods: {
        //点击事件控制区
        add: function add() {
            var niceng = document.querySelector('.niceng');

            if (this.test_01 == "" || this.test_02 == "") {
                niceng.focus();
                alert('请输入昵称或者内容');
            } else {
                this.mydata.push({
                    nickname: this.test_01,
                    content: this.test_02,
                    time: date()
                });
                this.test_02 = ''; // window.location.href=''
            }
        }
    },
    computed: { //逻辑计算处理数据，过滤数据
    },
    created: function created() {
        var arr = localStorage.getItem(this.myinst);
        this.mydataa = JSON.parse(arr);
    },
    data: {
        //你的数据
        test_01: '',
        test_02: '',
        mydataa: [],
        myinst: [],
        mydata: [{
            nickname: '从小就疯了',
            content: '小哥哥你真帅',
            time: '2020-01-19 16:55:57 星期天  '
        }, {
            nickname: '一如既往的峰',
            content: '你的博客好有很多的功能没有实现',
            time: '2020-01-19 16:55:57  星期天  '
        }, {
            nickname: '安居啦',
            content: '还不错',
            time: '2020-01-19 16:55:57  星期天  '
        }, {
            nickname: '小喵咪',
            content: '帅呆了',
            time: '2020-01-19 16:55:57  星期天  '
        }, {
            nickname: '安其拉',
            content: '峡谷王者',
            time: '2020-01-19 16:55:57  星期天  '
        }, {
            nickname: '从小就疯了',
            content: '还可以啦',
            time: '2020-01-19 16:55:57  星期天  '
        }]
    },
    components: { //注册子组件
    },
    watch: {
        //数据监控
        mydata: function mydata() {
            var arr = [];
            arr = JSON.stringify(this.mydata);
            localStorage.setItem(this.myinst, arr);
            console.log(arr);
        }
    },
    filters: { //处理特殊情况
    },
    directives: { //自定义事件
    }
});
var tishiii = document.querySelector('.yqts');

function monitoring() {
    var width = window.innerWidth;

    if (width < 1300) {
        tishiii.style.display = 'none';
    } else if (width >= 1300) {
        tishiii.style.display = 'block';
    }
}

monitoring();

window.onresize = function() {
    monitoring();
};