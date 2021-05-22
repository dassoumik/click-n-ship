const db = require("../models");

// define route methods for user controller
module.exports = {
    create: function (req, res) {
        db.Admin
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    find: function (req, res) {
        db.Admin
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}