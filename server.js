const express = require('./node_modules/express');
const app = express();

app.use('/', express.static(__dirname+'/dist'));

app.get('/get',(req,res)=>{
  res.send('hi')
})

app.listen('1128',()=>{
  console.log('listening on 1128');
})
