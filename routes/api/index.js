const router = require("express").Router();
const productRoutes = require("./products");
const userRoutes = require("./users");
const orderRoutes = require("./orders");

// Product routes
router.use("/products", productRoutes);

// User routes
router.use("/users", userRoutes);

// Order routes
router.use("/orders", orderRoutes);

module.exports = router;
