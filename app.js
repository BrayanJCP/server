var express=require('express');
var http = require('http');


var app=express();
app.use(express.static('frontend-react'));


var server=http.createServer(app);
server.listen(3000,()=>{
    console.log('App listening');
});
