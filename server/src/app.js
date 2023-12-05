const express = require("express");
const morgan = require("morgan");
const contactRouter = require("./routes/contactRouter");
const app = express();

//CORS
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, DELETE'
	);
	next();
});

//* Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use("/contact", contactRouter)

app.get("/", (req, res) => res.send("Server listening"));

module.exports = app;