
// server.js

const express = require("express");
var MongoClient = require('mongodb').MongoClient;
const app = express();

const PORT = 8080;

MongoClient.connect("mongodb://mongo:27017", function(err, db) {
  if(err) throw err;
  console.log("Database created!")
  db.close()
})

app.get("/", (req, res) => {
  res.send("Hello from Node.js app \n");
});

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);
});