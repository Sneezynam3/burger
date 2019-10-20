// Set up MySQL connection.
var mysql = require("mysql");

// if (process.argv.JAWSDB_URL){
  connection = mysql.createConnection({
    host: 'thh2lzgakldp794r.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'gtfwwy4cbu5cdr7f',
    password: 'xz4w7c6xe1cog2xr',
    database: 'wunbnxy5znk75ssu'
  })
// } else {
//   connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Rams2014!',
//     database: 'burgers_db'
//   })
// };

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
