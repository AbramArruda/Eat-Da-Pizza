// Pull in required dependencies
var mysql = require("mysql");

// Create the MySQL connection object
var connection;

if (process.env.JAWSDB_URL) {
  // DB is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // DB is local on localhost
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "pizzadb"
  });
}

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error("ERROR: MySQL connection error == " + err.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

// Export connection for ORM use
module.exports = connection;
