const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

const adminSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: false },
    email: { type: String, required: true, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"] },
    password: { type: String, required: true, required: "Password is Required", validate: [({ length }) => length >= 6, "Password should be longer."] },
    addressStreetOne: { type: String, required: true },
    addressStreetTwo: { type: String, required: false },
    addressStreetThree: { type: String, required: false },
    addressStreetFour: { type: String, required: false },
    addressCity: { type: String, required: true },
    addressState: { type: String, required: true },
    addressZip: { type: String, required: true },
    userCreated: { type: Date, default: Date.now }
});

adminSchema.pre('save', function (next) {
    var admin = this;

    // only hash the password if it has been modified (or is new)
    if (!admin.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(admin.password, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            admin.password = hash;
            next();
        });
    });
});

adminSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;