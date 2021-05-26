const router = require("express").Router();
const stripeController = require("../../controllers/stripeController");

// Matches with "/api/orders"
router.route("/")
  // .get(stripeController.findAll)
  .post(stripeController.create);