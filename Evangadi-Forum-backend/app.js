require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(cors());
//Database connection
const dbConnection = require("./db/dbconfig");

// user route middleware file
const userRoutes = require("./routes/userRoute");
//authentication middleware file
const authMiddleware = require("./middleware/authMiddleWare");
//json middleware to extract json data
app.use(express.json());

// user routes middleware
app.use("/api/users", userRoutes);

// questions routes middleware file
const questionRoutes = require("./routes/questionRoute");
// questions routes middleware
app.use("/api/questions", authMiddleware, questionRoutes);

// answers routes middleware file
const answerRoutes = require("./routes/answerRoute");
// answer routes middleware
app.use("/api/answers", authMiddleware, answerRoutes);

async function start() {
	try {
		const result = await dbConnection.execute("select 'test' ");
		await app.listen(port);
		console.log("database connection established");
		console.log(`server listning at port ${port}`);
	} catch (error) {
		console.log(error);
	}
}
start();

// app.listen(port, (err) => {
// 	if (err) {
// 		console.log(err.message);
// 	} else {
// 		console.log(`listening on ${port}`);
// 	}
// });
