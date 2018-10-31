var express=require('express');
var router= express.Router();
var http = require('http');


var app=express();
app.set('port',3000);
app.set('views', path.join(__dirname, 'frontend-react'));
router.get('/',(req,res)=>{
    res.render('index', { title: 'Express' });
});
var server=http.createServer(app);
server.listen(3000,()=>{
    console.log('App listening');
});
server.on('listening',()=>{
    console.log('App listening');
});
