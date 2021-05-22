const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userEmail: { type: String, required: true },
    orderId: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    products: { type: Array, required: true },
    date: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);


module.exports = Order; 