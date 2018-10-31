var express=require('express');
var http = require('http');
var path=require('path');

var port=process.env.PORT || 3000;
var app=express();
app.use(express.static('frontend-react'));

var server=http.createServer(app);
server.listen(port,()=>{
    console.log('App listening in the '+port);
});
