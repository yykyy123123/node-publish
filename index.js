const express = require('express');
const path = require('path')
const app = express();
//这里方便输入命令的时候控制监听端口比如npm start --port=3000 会解析挂到env.npm_config_port
const port = process.env.npm_config_port|| 80;
app.use('/dist',express.static('dist'))
app.get('/test',(req,res)=>{
    res.json({
        message:'test'
    })
})
app.get('/',(req,res)=>{
    res.sendFile(path.resolve('./dist/index.html'))
})
app.listen(port,()=>{
    console.log('express启动成功http://0.0.0.0:'+port);
})