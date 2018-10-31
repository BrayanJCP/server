var express=require('express');

var app=express();

app.listen(3000,()=>{
    console.log('App listening in the port 3000');
});
app.get('/',(req,res)=>{
    res.send('Hola Mundo');
});