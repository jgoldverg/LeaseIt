const express = require("express");
const { Pool, Client } = require('pg')
const parser = require('body-parser')
const app = express()


const pool = new Pool({
 connectionString: process.env.DB_POSTGRES_URL
})

app.use(parser.urlencoded({extended:true}))

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
})
  
app.post('/registeruser', function(req, res){
  const {name, email, password, username} = req.body;
  pool.query('INSERT INTO users (username, name, email, password) VALUES ($1, $2, $3,$4)', [username, password, email, name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('User created with id: ${username}')
  })
})

app.get('/login', function(req, res){
  const {email, password} = req.body;
  pool.query('SELECT $1 FROM users', [email], function(err, result, fields) {
    if(err){
      res.status(999).end()
    }
    res.status(200).send('logged the user in: ${email}')
  })
})

app.get("/hello", (req, res) => {
  res.send("Hello from Node.js app \n");
});

app.listen('3000', () =>{
  console.log("Postgres sucks!")
})