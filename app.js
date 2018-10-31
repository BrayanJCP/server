var express=require('express');
var http = require('http');

var app=express();

app.get('/',(req,res)=>{
    res.send('Hola Mundo');
});
var server = http.createServer(app);
server.listen();