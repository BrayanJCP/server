var express=require('express');
var http = require('http');
var path=require('path');

var port=process.env.PORT || 8080;
var app=express();
app.use(express.static('public'));
app.get('',(req,res)=>{
    console.log('Entro');
    res.sendFile(path.join('public', 'index.html'));
});
/*React */
var pathreact=path.join(__dirname,'frontend-react/react-app/build');
app.use(express.static(pathreact));
app.get('/react', function(req, res) {
  console.log('Entro react');
    res.sendFile(path.join(pathreact, 'index.html'));
  });
var pathreact1=path.join(__dirname,'frontend-react/cv/build');
app.use(express.static(pathreact1));
app.get('/cv', function(req, res) {
  console.log('Entro react');
    res.sendFile(path.join(pathreact1, 'index.html'));
  });
/*Angular */
var pathangular=path.join(__dirname,'frontend-angular/angular-app/dist/angular-app');
app.use(express.static(pathangular));
app.get('/angular', function(req, res) {
    res.sendFile(path.join(pathangular, 'index.html'));
  });
app.all('/#/table', function(req, res) {
    res.sendFile(path.join(pathangular, 'index.html'));
  });
/*Inicio del servidor */
var server=http.createServer(app);
server.listen(port,()=>{
    console.log('App listening in the '+port);
});
