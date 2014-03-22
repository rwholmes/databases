var mysql = require("mysql");
var http = require("http");
var express = require('express');
var app = express();
var mongodb = require("mongodb");

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

// 27017 is the default port for connecting to MongoDB
// Note that the database server needs its own unique port
var server = new mongodb.Server("127.0.0.1", 27017, {});
var client = new mongodb.Db('chat', server);

// Open the client's connection to the server:
// TODO- p_client?
client.open(function(err, p_client) {
  if(err){
    console.log("Err connecting to MongoDB 'chat' database: ", err);
  } else {
    console.log("Connected to MongoDB 'chat' database!");

    // Create a collection
    client.createCollection("messages", function(err, collection) {
      if(err){
        console.log("Err creating collection: ", err);
      } else {
        console.log("***********Created messages collection");

        app.get('/classes/room', function(request,response) {
          console.log('inside get request');
          // Find() returns a "cursor" which can be converted to an array of
          // documents:
          collection.find().toArray(function(err, results) {
            if(err){
              console.log("Document get failed");
            }

            var dataObj = {};
            dataObj.results = results;
            console.log('++++++Sending data ');
            response.send(dataObj);
          });
        });

        app.post('/classes/room', function(request,response) {
          console.log('**********TRYING TO INSERT******');
          var document = request.body;

          // Insert it to the collection:
          // TODO - docs?
          collection.insert(document, function(err, docs) {
            if(err){
              console.log("Document insert failed");
            }

            console.log("Inserted a document.");
          });
        });

        app.get('/classes/messages', function(request,response) {
          console.log('inside get request');
          // Find() returns a "cursor" which can be converted to an array of
          // documents:
          collection.find().toArray(function(err, results) {
            if(err){
              console.log("Document get failed");
            }

            var dataObj = {};
            dataObj.results = results;
            console.log('++++++Sending data ');
            response.send(dataObj);
          });
        });

        app.post('/classes/messages', function(request,response) {
          console.log('**********TRYING TO INSERT******');
          var document = request.body;

          // Insert it to the collection:
          // TODO - docs?
          collection.insert(document, function(err, docs) {
            if(err){
              console.log("Document insert failed");
            }

            console.log("Inserted a document.");
          });
        });
      }
    });
  }
});


 var ip = "127.0.0.1";
 var port = 8080;

 console.log("Listening on http://" + ip + ":" + port);
 app.listen(port);






