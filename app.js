var express=require('express');
var http = require('http');
const path = require('path')
const PORT = process.env.PORT || 3000


var app=express()
.use(express.static(path.join(__dirname, 'frontend-react')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');
app.get('/other',(req,res)=>{
    res.send("Funciona");
});
app.listen(PORT,()=>{
    console.log('App listening in the port '+PORT);
});
