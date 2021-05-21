const db = require("../models");

// define route methods for user controller
module.exports = {
    create: function(req, res) {
        console.log("in create user controller");
        db.User
            .create(req.body)
            .then(dbModel => {console.log(); res.json(dbModel)})
            .catch(err => {console.error(err); return res.status(422).json(err)});
    },
    findOne: function(req, res) {
        console.log(req.query)
        db.User
            .findOne(req.query)
            .then(dbModel => {console.log(dbModel); res.json(dbModel)})
            .catch(err =>  {console.error(err); res.status(422).json(err)});
    }
}