const mysql = require("mysql2");

const dbConnection = mysql.createPool({
	user: process.env.USER,
	host:process.env.HOST, 
	database: process.env.DATABASE,
	password: process.env.PASSWORD,
	connectionLimit:process.env.LIMIT,
});

module.exports = dbConnection.promise();


	





// console.log(process.env.JWT_SECRET);
// dbConnection.execute("select 'test'", (err, result) => {
// 	if (err) {
// 		console.log(err.message);
// 	} else {
// 		console.log(result);
// 	}
// });
