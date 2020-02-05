var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'employeedb'
});

connection.connect();

connection.query('SELECT * from employee', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();