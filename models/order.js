const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    numberOfOrders: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    products: { type: Schema.ObjectId, ref: "Product" },
    date: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);


module.exports = Order;