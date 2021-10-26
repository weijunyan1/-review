// 1.创建请求条件
// 1.1引入express
const { response } = require('express');
const express = require('express');
// 1.2创建应用对象
const app = express();
// 创建路由规则
app.all('/delay',(request,response)=>{
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin','*')
    //响应体
    response.send('hello')
})

app.listen(8000,()=>{
    console.log('服务已经启动，80000端口监听中。。。。');
})