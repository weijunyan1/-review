import { Module } from "webpack";

// 使用Node.js中的导出语法，向外导出一个webpack的配置对象
Module.exports={
    // 代表webpack运行的模式，可选值有两个development和production
    mode:'development'
}
