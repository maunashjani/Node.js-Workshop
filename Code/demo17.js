var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'employeedb'
});
 
connection.connect();
 
connection.query('SELECT MAX(empSalary) as Salary from employee', function (error, results, fields) {
  if (error) throw error;
  console.log('The maximum salary is: ', results[0].Salary);
});
 
connection.end();