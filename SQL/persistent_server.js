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
      console.log('Sending data ', data);
      response.send(data);
    }
  });
});

app.post('/classes/messages', function(request,response) {
  console.log(request.body);
  dbConnection.query('INSERT INTO messages', request.body, function(err, result) {
    if (err) { console.log('Error inserting into messages'); }
    else {
      console.log('Inserting into messages', result);
      response.end();
    }
  });
});

app.get('/classes/room', function(request,response) {
  console.log('inside get request');
  dbConnection.query('SELECT * FROM messages', function(err, data) {
    if (err) { console.log('get failed'); }
    else {
      console.log('Sending data ', data);
      response.send(data);
    }
  });
});

app.post('/classes/room', function(request,response) {
  console.log(request.body);
  dbConnection.query('INSERT INTO messages', request.body, function(err, result) {
    if (err) { console.log('Error inserting into messages'); }
    else {
      console.log('Inserting into messages', result);
      response.end();
    }
  });
});

 var ip = "127.0.0.1";
 var port = 3000;

 console.log("Listening on http://" + ip + ":" + port);
 app.listen(port);






