const express = require('express')
const history = require('connect-history-api-fallback');
const app = express()
app.use(history())
app.use(express.static(__dirname + '/static'))
app.get('/xiaoma', (req,res) =>{
    res.send({
        name:'小马',
        age:18
    })
})

app.listen(5009,err => {
    if(!err){
        console.log('服务器启动了')
    }
})