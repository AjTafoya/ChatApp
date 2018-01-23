const socket = io.connect('http://localhost:4000');


const message = document.getElementById('message');
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output');


//Emit events

btn.addEventListener('click',function(){
  socket.emit('chat',{
    message:message.value,
    handle:handle.value
  });
});

//listen for events frontend
socket.on('chat',function(data){
  output.innerHTML += '<p><strong>' + data.handle + ':</strong>'+ data.message + '</p>'
});
