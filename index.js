var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


var userId = 0;
//const history = [];

io.on('connection', function(socket){

		  
  socket.userId = userId ++;
  console.log('a user connected, user id: ' + socket.userId);

  socket.on('streaming', function(msg){
	 //history.push(msg);
		
		
    //console.log('message from user#' + ": " + msg + history);
	console.log('message from user#' + ": " + msg);
		
    io.emit('streaming', {
      //id: socket.userId,
     // msg: msg + history
	  msg: msg
    });
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});