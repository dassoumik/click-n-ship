const mongoose = require("mongoose");
const db = require("../models");
const productSeed = require("./productSeeds.json");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/clicknship"
);

db.Product
    .remove({})
    .then(() => db.Product.collection.insertMany(productSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });