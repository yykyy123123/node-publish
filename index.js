const express = require('express');
const path = require('path')
const app = express();
const port = process.env.npm_config_port|| 80;


console.log('process.argv',process.argv);
console.log(process.env.npm_config_port);
const  userRouter = require('./router/user_router')
app.use('/router',userRouter)
// app.use(log_middleware)
// //加载一个static中间件
app.use('/dist',express.static('dist'))
//无论任何uri 都能响应 服务日志
app.get('/test',(req,res)=>{
    res.json({
        message:'test'
    })
})
// app.all('*',(req,res)=>{
//     res.json({
//         message:'响应',
//         method:req.method,
//         uri:req.path
//     })
// })
//app.use 做中间件
app.get('/',(req,res)=>{
    res.sendFile(path.resolve('./dist/index.html'))
})
app.listen(port,()=>{
    console.log('express启动成功http://127.0.0.1:'+port);
})