const router = require("express").Router();
const adminController = require("../../controllers/adminController");

// Matches with "/api/users"
router.route("/")
  .post(adminController.create)
  .get(adminController.find);

module.exports = router;