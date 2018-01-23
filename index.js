const express = require('express');
const socket = require('socket.io');

//App setup

const app = express();
var server = app.listen(4000,function(){
  console.log('listening');
});

//Static Files
app.use(express.static('public'));

//socket setup
var io = socket(server);

io.on('connection',function(socket){
  console.log('link start',socket.id);

  socket.on('chat',function(data){
    io.sockets.emit('chat',data)
  });
});
