// 创建请求条件
// 1.引入express
const express = require ('express');
// 2.创建应用对象
const app = express();
// 3创建路由规则   请求行  请求方式get  url为/server
// post可以接受post发来的请求。all可以接受get,post等所有的请求-----------------------------------------------------
app.all('/server',(request,response)=>{
    // 当浏览器HTML向服务器js发送请求的时候，如果url的路径为/server，
    //就执行回调函数里面的内容，并由response响应
    // 5设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应体
    response.send('HELLO AJAX')
    // 设置响应头
    // * 所有类型的头信息我都可以接受-----------------------------------------------------------------
    response.setHeader('Access-Control-Allow-Headers','*')

})
// 4.监听端口启动服务
app.listen(8000,()=>{
    console.log('服务已经启动，8000端口监听中。。。');
})