   "use strict";

        //encodeURI() 方法是转码
        var divlist = document.querySelector('.list ul');
        var input = document.querySelector(' .baidu_shou .shousuo input[type=\'text\']');
        var but = document.querySelector('.btn-info');

        function searchData(keyword) {
            var url = "https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=1421,21105,30210,30284&wd=" + ("" + encodeURI(keyword)) + "&req=2&bs=%E9%9C%88%E6%80%8E%E4%B9%88%E8%AF%BB&pbs=%E9%9C%88%E6%80%8E%E4%B9%88%E8%AF%BB&csor=4&pwd=%E9%9C%80&cb=fly&_=1577006650074";
            var script = document.createElement("script"); //创建标签

            script.src = url;
            document.body.appendChild(script);

            script.onload = function() {
                document.body.removeChild(script); //加载完成移除标签
            };
        }

        //函数定义
        function fly(data) {
            var list = data.g || [];
            console.log(list)
            divlist.innerHTML = '';
            list.forEach(function(item) {
                divlist.innerHTML += "<li class='list_011'><a href=\"https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + item.q + "\">" + item.q + "</a></li>";
            });
        }

        //输入监听
        input.oninput = function() {
            // 做一个节流的
            var timer = null;
            return function() {
                clearTimeout(timer);
                timer = setTimeout(function() {
                    searchData(input.value);
                }, 700);
            };
        }();

        but.onclick = function() {
            if (input.value == '') {
                alert('请输入内容在进行百度');
            } else {
                window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + input.value;
            }
        };

        //失去焦点初始化
        input.onblur = function() {
            setTimeout(function() {
                divlist.innerHTML = '';
            }, 1000);
        };


       input.onkeydown = function(event) {
            var e = event || window.event
            if (input.value=='') return;
            if (e && e.keyCode == 13) {
               window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + input.value;
            }
        };


        //导航列表
        var demo1 = document.querySelector('.demo1');
        var demo2 = document.querySelector('.demo2');
        var count = 0;

        demo1.onclick = function() {
            if (count === 0) {
                count++;
                demo2.style.opacity = 1;
                demo1.style.backgroundColor = 'green';
                demo1.innerHTML = '×';
            } else {
                count--;
                demo2.style.opacity = 0;
                demo1.style.backgroundColor = '';
                demo1.innerHTML = '☰';
            }
        };