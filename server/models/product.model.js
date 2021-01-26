const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Product title is required'],
		minlength: [2, 'Title must be at least 2 characters']
	},
	price: {
		type: Number,
		min: [.01, 'Price must be at least a penny'],
		max: [99999, 'Price cannot exceed $100,000'],
		required: [
			true,
			'A price is required'
		]
	},
	description : {
		type: String ,
		required: [true,'Product description is required'],
		minlength: [10, 'Description must be at least 10 characters']
	}
}, {timestamps:true});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;