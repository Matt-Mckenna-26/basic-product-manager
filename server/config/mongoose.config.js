const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/product_manager_db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the  product manager database"))
	.catch(err => console.log("Something went wrong when connecting to the product manager database", err));