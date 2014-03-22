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
  console.log('inside get request for messages');
  Message.sync()
  .success(function() {
    console.log('message sync success');
    var newMessage = Message.build({username: "Jean Valjean", message: "Hey", roomname: "France"});

    newMessage.save().success(function() {

      Message.findAll({ where: {username: "Jean Valjean"} }).success(function(msgs) {
        // This function is called back with an array of matches.
        for (var i = 0; i < msgs.length; i++) {
          console.log(msgs[i].username + " exists");
          response.send(msgs[i]);
        }
      });
    });
  })
  .error(function(err){ console.log('++++SEQUELIZE ERROR MSG: ', err); });
});

app.post('/classes/messages', function(request,response) {
    // console.log('**********TRYING TO INSERT******');
    // Message.sync().success(function() {
    //   var newMessage = Message.build({username: "Jean Valjean", });
    //   newMessage.save().success(function() {

    //     /* This callback function is called once saving succeeds. */

    //     // Retrieve objects from the database:
    //     Message.findAll({ where: {username: "Jean Valjean"} }).success(function(usrs) {
    //       // This function is called back with an array of matches.
    //       for (var i = 0; i < usrs.length; i++) {
    //         console.log(usrs[i].username + " exists");
    //       }
    //     });
    //   });
    // });
});

app.get('/classes/room', function(request,response) {
  console.log('inside get request for rooms');
  sequelize.sync()
    .success(function() {
      console.log('message sync success');
      var newMessage = Message.build({username: "Jean Valjean", message: "Hey", roomname: "France"});

      newMessage.save().success(function() {
        console.log('sending data++++++++');

        Message.findAll({ where: {username: "Jean Valjean"} }).success(function(msgs) {
          // This function is called back with an array of matches.
          for (var i = 0; i < msgs.length; i++) {
            console.log(msgs[i].username + " exists");
            response.send(msgs[i]);
          }
        });
      });
    })
    .error(function(err){ console.log('++++SEQUELIZE ERROR MSG: ', err); });
});

app.post('/classes/room', function(request,response) {
  // dbConnection.query('INSERT INTO messages SET ?', request.body, function(err, result) {
  //   if (err) {
  //     console.log('----Error inserting into messages----', err);
  //   }
  //   else {
  //     console.log('------Inserting into messages');
  //     response.end();
  //   }
  // });
});

 var ip = "127.0.0.1";
 var port = 8080;

 console.log("Listening on http://" + ip + ":" + port);
 app.listen(port);






