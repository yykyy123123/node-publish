const express = require('express');
const router = express.Router();
router.use((req,res,next)=>{
    console.log('log from router');
    next()
})
router.get('/demo',(req,res)=>{
    res.json({
        message:'路由'
    })
})
module.exports = router