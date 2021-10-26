// 1.使用ES6语法导入jquery
import $ from 'jquery'
// 2.定义jQuery的入口函数
$(function(){
    // 3.实现奇数偶数隔行变色
    $('li:odd').css('background-color','red')
    $('li:even').css('background-color','pink')
})