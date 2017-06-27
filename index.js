var express = require('express');
var port = 8003;
var app = express();
var server = require('http').Server(app);
(function init() {
  require('./model')(app);
  require('./action')(app);
  require('./routes')(app);
  require('./config')(app);
}());

server.listen(process.env.PORT ||port,function(err){
  if (err)
      console.log("unable to listening on port "+port+" "+err);
  else
      console.log("Express SmartJug listening on port "+port);
});