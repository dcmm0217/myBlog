// 入口
const express = require('express');

const app = express();

// 设置模板引擎
app.set('view engine', 'html');
app.set('views', `${__dirname}/views`);
app.set('html', require('ejs').renderFile);

// 静态资源配置
app.use(express.static('static'));



// 监听端口
app.listen(3000,()=>{
    console.log('正在监听3000端口');
});