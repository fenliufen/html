var vml = new Vue({
    el: '#content-test',
    //获取dom节点
    created: function created() {
        this.mydataa = this.data_tsxt;
        console.log(this.mydataa);

    },
    methods: {

        guolu: function guolu() {
            var _this = this;

            if (this.chauxun =='') {
                alert('请输入查询内容');
            }

            this.data_tsxt = this.mydataa.filter(function(item) {
                return item.title.includes((_this.chauxun).trim()) || item.kind.includes((_this.chauxun).trim());
            });
            console.log(this.data_tsxt);
            this.chauxun = '';
        },


    },

    data: {
        //数据放置
        chauxun: '',
        mydataa: [],
        data_tsxt: [{
            title: '2月06某公司笔试题',
            msg_url: './images/6.jpg',
            content_wen: '面试总结：基本的adb命令容易问到，需要具备基本的接口自动化，ui自动化，此次面试基本以设计用例为主，需要掌握黑盒测试基本的设计用例方法。面试过程' +
                '中主观题偏多，主观题看情况回答答案不唯一。',
            year: '2020',
            month: '02',
            day: '15',
            zhuan: './z-01.html',
            kind: '网站测试'
        },{
            title: '百度跨域请求案例',
            msg_url: './images/7.png',
            content_wen:'由于浏览器的同源策略，出于防范跨站脚本的攻击，禁止客户端脚本（js）对不同域的服务进行跨站调用。一般的，只要网站的 协议名(protocol)主机(hosts)端口号(port)这三个中任意一个不同，网站间的数据请求与传输便构成了跨域调用。\n',
            year: '2020',
            month: '02',
            day: '17',
            zhuan: './z-02.html',
            kind: '网站开发'
        },

        ]
    },

});






var tishiii = document.querySelector('.yqts');
var zhanshi = document.querySelector('.zhanshi');
var doahang = document.querySelector('.daohanglan');
var daohang2=document.querySelector('.daohang2')

function monitoring() {
    var  width = window.innerWidth
    if (width < 1300) {
        tishiii.style.display = 'none';
        doahang.style.display = 'none';
        zhanshi.style.margin = 'auto';


    } else if (width >= 1300) {
        doahang.style.display = 'block';
        tishiii.style.display = 'block';
        zhanshi.style.margin = '0'
    }

}

monitoring()

window.onresize = function() {
    monitoring()
}