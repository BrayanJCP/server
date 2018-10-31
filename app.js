var express=require('express');
var http = require('http');
var path=require('path');


var app=express();

app.use(express.static(path.join(__dirname, 'frontend-react')));

var server=http.createServer(app);
server.listen(3000,()=>{
    console.log('App listening');
});
server.on('listening',()=>{
    console.log('App listening');
});
