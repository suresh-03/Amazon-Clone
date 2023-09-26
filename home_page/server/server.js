const express = require('express');
const mongoose = require('mongoose');

mongoURI = "mongodb://127.0.0.1:27017";
mongoose.connect(mongoURI);
const database = mongoose.connection;

database.on('error',error => console.log(error));
database.once('connected', () => console.log('connected'));

console.log(database.collections);

const app = express();
app.use(express.json());

app.listen(3000,() => {
	console.log("server running at 3000...")
})

