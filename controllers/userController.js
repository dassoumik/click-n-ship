const bcrypt = require("bcrypt"); 
const db = require("../models");

// define route methods for user controller
module.exports = {
    create: function(req, res) {
        db.User
            .create(req.body)
            .then(dbModel => {console.log(); res.json(dbModel)})
            .catch(err => {console.error(err); return res.status(422).json(err)});
    },
    findOne: function(req, res) {
        const {email, password} = req.query;
        db.User
            .findOne({email})
            .then(async dbModel  =>  {
                 const bool = await bcrypt.compareSync(password, dbModel.password)
                       bool ?  res.json(dbModel) : res.status(442) 
                     
                })
            .catch(err =>  {console.error(err); res.status(422).json(err)});
    }
}