var express=require('express');
var http = require('http');


var app=express();
app.set('port',3000);
app.use(express.static('frontend-react'));


var server=http.createServer(app);
server.listen(3000,()=>{
    console.log('App listening');
});
server.on('listening',()=>{
    console.log('App listening');
});
