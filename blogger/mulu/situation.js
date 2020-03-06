var vml = new Vue({
    el: '#content-test',
    //获取dom节点
    created: function created() {
        this.mydataa = this.data_tsxt;
        console.log(this.mydataa);
    },
    methods: {
        //点击事件放置
        guolu: function guolu() {
            var _this = this;

            if (this.chauxun == '') {
                alert('请输入查询内容');
            }

            this.data_tsxt = this.mydataa.filter(function(item) {
                return item.title.includes((_this.chauxun).trim()) || item.kind.includes((_this.chauxun).trim());
            });
            console.log(this.data_tsxt);
            this.chauxun = '';
        },

        quanbu: function quanbu() {
            return this.data_tsxt = this.mydataa;
        },

        ceshi: function ceshi() {
            var arr = [];
            this.mydataa.forEach(function(itme) {
                if (itme.kind === '网站测试') {
                    arr.push(itme);
                }
            });
            this.data_tsxt = arr;
        },

        kaifa: function kaifa() {
            var arr = [];
            this.mydataa.forEach(function(itme) {
                if (itme.kind === '网站开发') {
                    arr.push(itme);
                }
            });
            this.data_tsxt = arr;
        },

        xitong: function xitong() {
            var arr = [];
            this.mydataa.forEach(function(itme) {
                if (itme.kind === '操作系统') {
                    arr.push(itme);
                }
            });
            this.data_tsxt = arr;
        },

        xuexi: function xuexi() {
            var arr = [];
            this.mydataa.forEach(function(itme) {
                if (itme.kind === '深度学习') {
                    arr.push(itme);
                }
            });
            this.data_tsxt = arr;
        },

        suanfa: function suanfa() {
            var arr = [];
            this.mydataa.forEach(function(itme) {
                if (itme.kind === '程序算法') {
                    arr.push(itme);
                }
            });
            this.data_tsxt = arr;
        },

        qita: function qita() {
            var arr = [];
            this.mydataa.forEach(function(itme) {
                if (itme.kind === '其他') {
                    arr.push(itme);
                }
            });
            this.data_tsxt = arr;
        }
    },

    data: {
        //数据放置
        chauxun: '',
        mydataa: [],
        data_tsxt: [{
            title: 'web端用户体验性测试方法',
            msg_url: 'http://img.zcool.cn/community/01d49b5a25087da80120ba387f341f.png@1280w_1l_2o_100sh.png',
            content_wen: '1.易用性标准简介 1.1易用性定义 GB/T 16260-2006定义: 在指定条件下使用时,软件产品被理解、学习、' + '使用和吸引用户的能力。 简单说就是:易懂、易学、易用、吸引人。易用性对消费类的产品显得尤为重要... 2.易用性常见原则 ' + '2.1尼尔森可用性原则 1.状态可见原则用户在网页上的任何操作,不论是单击、滚动还是按下键盘,页面应即时给出反馈。 “即时”是指,' + '页面响应时间小于用户能忍受的等待时间。 2.环境贴切原则 网页...',
            year: '2019',
            month: '12',
            day: '09',
            zhuan: './易用性测试/yiyongx.html',
            kind: '网站测试'
        }, {
            title: 'web压力测试教程',
            msg_url: './images/1.jpg',
            content_wen: ' 软件压力测试是一种基本的质量保证行为，它是每个重要软件测试工作的一部分。软件压力测试的基本思路很简单：\n' + '                        不是在常规条件下运行手动或自动测试，而是在计算机数量较少或系统资源匮乏的条件下运行测试。\n' + '                        通常要进行软件压力测试的资源包括内部内存、CPU 可用性、磁盘空间和网络带宽。',
            year: '2019',
            month: '12',
            day: '13',
            zhuan: './压力测试/ylce.html',
            kind: '网站测试'
        }, {
            title: 'HTTP协议内容详解',
            msg_url: './images/2.png',
            content_wen: ' http是一个简单的请求-响应协议，它通常运行在TCP之上。它指定了客户端可能发送给服务器什\n' + '                        么样的消息以及得到什么样的响应。请求和响应消息的头以ASCII码形式给出；而消息内容则具有\n' + '                        一个类似MIME的格式。这个简单模型是早期Web成功的有功之臣，因为它使得开发和部署是那么的直截了当',
            year: '2019',
            month: '12',
            day: '19',
            zhuan: './http协议内容/http.html',
            kind: '网站测试'
        }, {
            title: 'vue购物车小案例',
            msg_url: './images/3.png',
            content_wen: '主要设计思路在商品列表页，我们将点击添加的商品放入一个对象中，而后将该对象放入数组中，一个对象可以说就是一个商品。在购物车页面将数据从对象中读取出来，然后再渲染到页面中。即可完成购物车的操作。',
            year: '2020',
            month: '01',
            day: '01',
            zhuan: './购物车案例/gowuche.html',
            kind: '网站开发'
        }, {
            title: '简易版的备忘录vue小实战',
            msg_url: './images/4.jpg',
            content_wen: '主要设计模式：在页面不刷新的情况下对后台传过来的数据进行筛选，根据不同状态进行无缝切换',
            year: '2020',
            month: '01',
            day: '14',
            zhuan: './备忘录/index.html',
            kind: '网站开发'
        }, {
            title: 'linux常用命令集合',
            msg_url: './images/5.jpg',
            content_wen: '最近都在和Linux打交道，感觉还不错。我觉得Linux相比windows比较麻烦的就是很多东西都要用命令来控制，当然，这也是很多人喜欢linux的原因，比较短小但却功能强大。我将我了解到的命令列举一下，仅供大家参考：',
            year: '2020',
            month: '01',
            day: '15',
            zhuan: './linux常用指令/index.html',
            kind: '操作系统'
        }, {
            title: '黑盒测试设计用例方法详解',
            msg_url: './images/6.png',
            content_wen: '黑盒测试也称功能测试，它是通过测试来检测每个功能是否都能正常使用。在测试中，把程序看作一个不能打开的黑盒子，在完全不考虑程序内部结构和内部特性的情况下，在程序接口进行测试，它只检查程序功能是否按照需求规格说明书的规定正常使用，程序是否能适当地接收输入数据而产生正确的输出信息。黑盒测试着眼于程序外部结构，不考虑内部逻辑结构，主要针对软件界面和软件功能进行测试。',
            year: '2020',
            month: '01',
            day: '17',
            zhuan: './常见的黑盒测试方法/index.html',
            kind: '网站测试'
        },{
            title: 'app测试内容汇总',
            msg_url: './images/7.jpg',
            content_wen: '随着移动互联网的迅猛发展,移动APP应用逐渐深入。其大多采用迭代开发模式,版本更新速度快,留给测试人员的时间非常有限,使其难以在短时间内对APP进行全面测试。对移动APP测试方法进行梳理与总结,重点从图形用户界面测试、系统性测试、基模测试等方面介绍移动APP的测试方法。',
            year: '2020',
            month: '02',
            day: '02',
            zhuan: './app测试/index.html',
            kind: '网站测试'
        },{
            title: '潭州课堂布局实战',
            msg_url: './images/8.gif',
            content_wen: 'HTML称为超文本标记语言，是一种标识性的语言。它包括一系列标签．通过这些标签可以将网络上的文档格式统一，使分散的Internet资源连接为一个逻辑整体。HTML文本是由HTML命令组成的描述性文本，HTML命令可以说明文字，图形、动画、声音、表格、链接等，作为前端开发必掌握的内容',
            year: '2020',
            month: '02',
            day: '03',
            zhuan: './潭州课堂/index.html',
            kind: '网站开发'
        },{
            title: 'vue组件开发练习',
            msg_url: './images/9.png',
            content_wen:"在vue当中，子组件传值给父组件，需要自定义事件，把数据发射给父组件，父组件传值给子组件在子组件内部Prop选项中定义变量接收",
            year: '2020',
            month: '02',
            day: '24',
            zhuan: './学生管理表案例/index.html',
            kind: '网站开发'
        },

        ]
    },

});


//兼容性代码

var tishiii = document.querySelector('.yqts');
var zhanshi = document.querySelector('.zhanshi');
var doahang = document.querySelector('.daohanglan');

function monitoring() {
    var width = window.innerWidth
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


