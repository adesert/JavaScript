

var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password:''
});

connection.connect();

connection.query('use balli');

connection.query('select * from role',function  (err,results,fields) {
	if (err) {
		throw err;
	};

	if (results) {
		for(var i = 0; i < results.length; i++)
		{
			console.log(results[i]);
		}
	};
});

// connection.query('SELECT 1 + 1 AS solution',function  (err,rows,fields) {
// 	if (err) {
// 		throw err;
// 	};

// 	console.log(rows,fields);
// 	console.log('The sql is = ' ,rows[0].solution);
// });

connection.end();

