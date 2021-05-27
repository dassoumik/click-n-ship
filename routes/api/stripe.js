const router = require("express").Router();
const stripeController = require("../../controllers/stripeController");

// Matches with "/api/stripe"
router.route("/")
  // .get(stripeController.findAll)
  .post(stripeController.create);

module.exports = router;