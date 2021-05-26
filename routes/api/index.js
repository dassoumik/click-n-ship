const router = require("express").Router();
const productRoutes = require("./products");
const userRoutes = require("./users");
const orderRoutes = require("./orders");
const adminRoutes = require("./admins");

// Product routes
router.use("/products", productRoutes);

// User routes
router.use("/users", userRoutes);

// admin routes
router.use("/admin", adminRoutes);

// Order routes
router.use("/orders", orderRoutes);

// Payment routes
router.use("/payment", paymentRoutes);
module.exports = router;
