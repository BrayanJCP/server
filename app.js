var express=require('express');
var http = require('http');
var app=express();

app.get('/',(req,res)=>{
    res.send('Funciona');
});

var port = process.env.PORT || '3000';
app.set('port', 3000);

var server = http.createServer(app);

server.listen(port);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
}

// var express=require('express');
// var http = require('http');
// var path=require('path');


// var app=express();
// app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname+'frontend-react')));

// var server=http.createServer(app);
// server.listen(3000,()=>{
//     console.log('App listening');
// });
// server.on('listening',()=>{
//     console.log('App listening');
// });
