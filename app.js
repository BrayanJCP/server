var express=require('express');
var http = require('http');

var app=express();
app.get('/',(req,res)=>{
    res.send('Hola Mundo');
});
app.set('port',3000);
var server=http.createServer(app);
server.listen(3000,()=>{
    console.log('App listening');
});
server.on('listening',()=>{
    console.log('App listening');
});
