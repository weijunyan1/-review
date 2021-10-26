// 创建请求条件
// 1.引入express
const express = require ('express');
// 2.创建应用对象
const app = express();
// 3创建路由规则   请求行  请求方式get  url为/server
app.get('/json-server',(request,response)=>{
    // 当浏览器HTML向服务器js发送请求的时候，如果url的路径为/server，
    //就执行回调函数里面的内容，并由response响应
    // 5设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应体
    response.send('HELLO AJAX bbb')
    // 响应一个数据-------------------------------------------------------------------
    // 数据
    const data = {
        name:'xiao-ming'
    }
    // 将数据进行字符串的转换
    let str = JSON.stringify(data)
    // 然后将转换后的数据设置为新的响应体
    response.send(str)

})
// 4.监听端口启动服务
app.listen(8000,()=>{
    console.log('服务已经启动，8000端口监听中。。。');
})