const express = require("express");
var MongoClient = require('mongodb').MongoClient;
const app = express();
const mongodburl = process.env.MONGO_DB_URL.toString();

app.use(express.json());

var db;

MongoClient.connect(mongodburl, function(err, database) {
  if(err) throw err;
  db = database;
  // Start the application after the database connection is ready
  app.listen(4000);
  console.log("Listening on port 3000");
});

app.get("/create_db", (req, res) => {

});

app.get("/", (req, res) => {
  res.send("Hello from Node.js app \n");
});

