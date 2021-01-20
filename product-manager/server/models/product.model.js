const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		minlength: [2, 'Product tile must be at least 2 characters']
	},
	price: {
		type: [Number, 'Please enter a number']
	},
	description : {
		type: String ,
		minlength: [20, "Please provide more information"]
	}
}, {timestamps:true});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;