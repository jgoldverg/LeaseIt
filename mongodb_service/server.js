
// server.js

const express = require("express");
var MongoClient = require('mongodb').MongoClient;
const app = express();

MongoClient.connect("mongodb://mongo:27017", function(err, db) {
  if(err) throw err;
  console.log("NoSQL Database created!")
  db.close()
})

app.get("/", (req, res) => {
  res.send("Hello from Node.js app \n");
});