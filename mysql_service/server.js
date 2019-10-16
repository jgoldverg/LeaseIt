var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "mysql",
  password: "1234"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("MYSQL Connected!");
});