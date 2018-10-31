var express=require('express');
var http = require('http');
var path=require('path');

var port=process.env.PORT || 3000;
var app=express();
app.get('/',(req,res)=>{
    res.send('Servidor React');
});
/*React */
var pathreact=path.join(__dirname,'frontend-react/react-app/build');
app.use(express.static(pathreact));
app.get('/react', function(req, res) {
    res.sendFile(path.join(pathreact, 'index.html'));
  });
/*Angular */
var pathangular=path.join(__dirname,'frontend-angular/angular-app/dist/angular-app');
app.use(express.static(pathangular));
app.get('/angular', function(req, res) {
    res.sendFile(path.join(pathangular, 'index.html'));
  });
/*Inicio del servidor */
var server=http.createServer(app);
server.listen(port,()=>{
    console.log('App listening in the '+port);
});
