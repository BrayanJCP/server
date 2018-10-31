var express=require('express');
var http = require('http');

var app=express();

app.get('/',(req,res)=>{
    res.send('Hola Mundo');
});
app.listen(3000,()=>{
    console.log('App listening in port 3000');
});