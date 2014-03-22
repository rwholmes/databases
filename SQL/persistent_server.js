var mysql = require("mysql");
var http = require("http");
var express = require('express');
var app = express();

app.configure( function() {
  app.set("port", process.env.PORT || 3000);
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
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

/* You'll need to fill the following out with your mysql username and password.
 * database: "chat" specifies that we're using the database called
 * "chat", which we created by running schema.sql.*/
var dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

dbConnection.connect();
/* Now you can make queries to the Mysql database using the
 * dbConnection.query() method.
 * See https://github.com/felixge/node-mysql for more details about
 * using this module.*/

/* You already know how to create an http server from the previous
 * assignment; you can re-use most of that code here. */


app.get('/classes/messages', function(request,response) {
  console.log('inside get request');
  dbConnection.query('SELECT * FROM messages', function(err, data) {
    if (err) { console.log('get failed'); }
    else {
      // CODE ROB ADDED IN
      var dataObj = {};
      dataObj.results = data;
      console.log('++++++Sending data ');
      response.send(dataObj);
    }
  });
});

app.post('/classes/messages', function(request,response) {
  var clientData = request.body;
    var dataObj = {
      message: clientData.message,
      username: clientData.username,
      createdAt: clientData.createdAt,
      roomname: clientData.roomname
    };
    console.log('**********TRYING TO INSERT******');
    //'SET ?' specifies you are inserting an object whose keys will specify the
    //attributes that you are setting for that entry
    dbConnection.query('INSERT INTO messages SET ?', dataObj, function(err, result) {
      if (err) {
        console.log('----Error inserting into messages----', err);
      }
      else {
        console.log('------Inserting into messages');
        response.end();
      }
    });
});

app.get('/classes/room', function(request,response) {
  console.log('inside get request');
  dbConnection.query('SELECT * FROM messages', function(err, data) {
    if (err) { console.log('get failed'); }
    else {
      // CODE ROB ADDED IN
      var dataObj = {};
      dataObj.results = data;
      console.log('++++++Sending data ');
      response.send(dataObj);
    }
  });
});

app.post('/classes/room', function(request,response) {
  var clientData = request.body;
  var dataObj = {
    message: clientData.message,
    username: clientData.username,
    createdAt: clientData.createdAt,
    roomname: clientData.roomname
  };
  dbConnection.query('INSERT INTO messages SET ?', dataObj, function(err, result) {
    if (err) {
      console.log('----Error inserting into messages----', err);
    }
    else {
      console.log('------Inserting into messages');
      response.end();
    }
  });
});

 var ip = "127.0.0.1";
 var port = 3000;

 console.log("Listening on http://" + ip + ":" + port);
 app.listen(port);






