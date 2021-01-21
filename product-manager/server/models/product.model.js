const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'product title is required and must be at least 2 characters'],
		minlength: [2, 'Product tile must be at least 2 characters long']
	},
	price: {
		type: Number,
		
		// required: [true, 'price is a required field']
	},
	description : {
		type: String ,
		required: [true,'product description is required and must be at least 10 characters'],
		minlength: [10, "Please provide more information"]
	}
}, {timestamps:true});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;