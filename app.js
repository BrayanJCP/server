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
var server=http.createServer(app);
server.listen(port,()=>{
    console.log('App listening in the '+port);
});
