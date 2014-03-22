var http = require("http");
var express = require('express');
var app = express();
var Sequelize = require("sequelize");

var sequelize = new Sequelize("chat", "root", null);

// {
//     host: "127.0.0.1",
//     port: 8080,
//     dialect: 'mysql'
//   }

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var Message = sequelize.define('Message', {
  //Sequelize creates 'createdAt' automatically
  message: Sequelize.STRING(182),
  username: Sequelize.STRING(20),
  roomname: Sequelize.STRING(20)
});

app.configure( function() {
  app.set("port", process.env.PORT || 8080);
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  app.use(express.bodyParser());
  app.use(app.router);
});

app.get('/classes/messages', function(request,response) {
  Message.findAll({ where: {username: "Jean Valjean"} })
  .complete(function(err, msgs) {
    if(!!err){
      console.log('An error occurred while searching for user.');
    } else if (!msgs){
      console.log('No user with username "Jean Valjean" has been found.');
    } else {
      // This function is called back with an array of matches.
      response.send({results: msgs});
    }
  });
});

app.post('/classes/messages', function(request,response) {
  // console.log('inside get request for messages');
  // Message.sync()
  // .success(function() {
  //   console.log('message sync success');
  //   var newMessage = Message.build({username: "Jean Valjean", message: "Hey", roomname: "France"});

  //   newMessage.save().success(function() {

  //     Message.findAll({ where: {username: "Jean Valjean"} }).success(function(msgs) {
  //       // This function is called back with an array of matches.
  //       // for (var i = 0; i < msgs.length; i++) {
  //       //   console.log(msgs[i].username + " exists");
  //       //   response.send(msgs[i]);
  //       // }
  //       response.send({results: msgs});
  //     });
  //   });
  // })
  // .error(function(err){ console.log('++++SEQUELIZE ERROR MSG: ', err); });
});

app.get('/classes/room', function(request,response) {
  Message.findAll({ where: {username: "Jean Valjean"} })
  .complete(function(err, msgs) {
    if(!!err){
      console.log('An error occurred while searching for user.');
    } else if (!msgs){
      console.log('No user with username "Jean Valjean" has been found.');
    } else {
      // This function is called back with an array of matches.
      response.send({results: msgs});
    }
  });
});

app.post('/classes/room', function(request,response) {
  // console.log('inside get request for messages');
  // Message.sync()
  // .success(function() {
  //   console.log('message sync success');
  //   var newMessage = Message.build({username: "Jean Valjean", message: "Hey", roomname: "France"});

  //   newMessage.save().success(function() {

  //     Message.findAll({ where: {username: "Jean Valjean"} }).success(function(msgs) {
  //       // This function is called back with an array of matches.
  //       for (var i = 0; i < msgs.length; i++) {
  //         console.log(msgs[i].username + " exists");
  //         response.send(msgs[i]);
  //       }
  //     });
  //   });
  // })
  // .error(function(err){ console.log('++++SEQUELIZE ERROR MSG: ', err); });
});

 var ip = "127.0.0.1";
 var port = 8080;

 console.log("Listening on http://" + ip + ":" + port);
 app.listen(port);






