const express = require("express");
var MongoClient = require('mongodb').MongoClient;
const app = express();
const mongodburl = process.env.MONGO_DB_URL.toString()

MongoClient.connect(mongodburl, function (err, db) {
  if (err) {
    console.log('failed to connect')
    console.log(err)
  }  
  app.listen('4000', () => {
    console.log("MONGO SUCKS BUT I CONNECTED")
  })
})

app.get("/", (req, res) => {
  res.send("Hello from Node.js app \n");
});

