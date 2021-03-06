const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: false },
    image: { type: String, required: false },
    rating: { type: Number, required: false },
    numOfRatings: { type: Number, required: false },
    category: { type: String, required: false },
    date: { type: Date, default: Date.now }
});

const Product = mongoose.model("Product", productSchema);


module.exports = Product;