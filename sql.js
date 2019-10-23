var mysql = require('mysql');
var connection = mysql.createConnection({host: 'localhost', user: 'root', password: '123456', database: 'test'});

connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results,
// fields) {   if (error) throw error;   console.log('The solution is: ',
// results[0].solution); });

//增
for (var i = 0; i < 100000; i++) {
  connection
  .query(`INSERT INTO test(NAME) VALUES('test${i}')`, function (err, result) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message);
      return;
    }

  });
}


connection.end();