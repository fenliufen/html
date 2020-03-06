"use strict";

var mydata = {
    data: [{
        time: '2020-02-16',
        text: '我承认这次的疫情我慌了，慌的我都不能静下心来学习，希望疫情早些过去'
    }, {
        time: '2020-02-14',
        text: '遇到最恐怖bug不是这为什么不能运行，而是这为什么能运行？？'
    }, {
        time: '2020-02-12',
        text: '静下心来才能更好的思考，更好的去创作'
    }, {
        time: '2020-02-10',
        text: '只要坚持，就一定会有所收获！不管什么，努力就是了'
    }, {
        time: '2020-02-08',
        text: '只要坚持，就一定会有所收获！不管什么，努力就是了'
    }, {
        time: '2020-01-24',
        text: '过年了，新的一年新的标准，好好努力提升自己'
    }, {
        time: '2020-01-15',
        text: '有些人注定一生碌碌无为，因为不懂得提示自己'
    }, {
        time: '2020-01-10',
        text: '能力是衡量一个人的价值唯一标准，不能放弃治疗'
    }, {
        time: '2020-01-06',
        text: '一个好的测试该是什么样的，需要具备哪些素质'
    }, {
        time: '2020-01-01',
        text: '学逻辑，简直是怀疑人生'
    }, {
        time: '2020-02-18',
        text: '对待好每一次的面试，今天有场面试被搞砸了，有点膨胀还是不太好！'
    }, {
        time: '2020-02-22',
        text: '有些BUG不要随便改，因为你不知道它硬生生支撑起了多少个BUG😂😂😂'
    }, {
        time: '2020-02-17',
        text: '有些BUG不要随便改，因为你不知道它硬生生支撑起了多少个BUG😂😂😂'
    },{
        time: '2020-03-06',
        text: '跟年轻人交流，你会发现年轻真好，我要是还年轻我也拼命学习'
    }

    ]
};
var list = document.querySelector('.list');

function add() {
    //添加标签操作
    for (var i = 0; i < mydata.data.length; i++) {
        var myclass = i % 2 == 0 ? "liuyan" : "liuyan1";
        var jj = "\n                    <li>\n                        <div class=\"" + myclass + "\">\n                            <span class=\"date\">" + mydata.data.time + "</span>\n                            <div class=\"neir\">\n                                <p>" + mydata.data.text + "</p>\n                            </div>\n                        </div>\n                        <i class=\"iconfont\"></i>\n                   </li>\n                        ";
        list.innerHTML += jj;
    }
}

add();

var text_01 = document.querySelectorAll('.neir p');
var date_01 = document.querySelectorAll('.date');

function binding() {
    //模拟数据绑定
    var arr = mydata.data;
    for (var i = 0; i < arr.length; i++) {
        text_01[i].innerHTML = arr[i].text;
        date_01[i].innerHTML = arr[i].time;
    }
}

function seqencing() {
    mydata.data.sort(function(a, b) {
        return a.time < b.time ? 1 : -1;
    });

    binding();
}

seqencing();