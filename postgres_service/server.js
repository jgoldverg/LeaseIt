const express = require("express");
const { Pool, Client } = require('pg')
const app = express()
// pools will use environment variables
// for connection information
const pool = new Pool({
  user: 'user',
  host: 'localhost',
  database: 'customerdirectory',
  password: '1234',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

app.get("/hello", (req, res) => {
  res.send("Hello from Node.js app \n");
});

app.listen('3000', () =>{
  console.log("I hate this damn thingy sometimes")
})

/*
// you can also use async/await
const res = await pool.query('SELECT NOW()')
await pool.end()
// clients will also use environment variables
// for connection information
const client = new Client()
await client.connect()
const res = await client.query('SELECT NOW()')
await client.end()
*/