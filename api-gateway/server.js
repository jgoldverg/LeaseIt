
// server.js

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node.js app \n");
});

app.listen('7080', () =>{
  console.log("Mongo Sucks!")
})