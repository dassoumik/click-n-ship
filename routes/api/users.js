const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
console.log("in users express api route")
router.route("/")
  .post(userController.create)
  .get(userController.findOne);

module.exports = router;