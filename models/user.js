const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: false },
    email: { type: String, required: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"] },
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

userSchema.pre('save', function (next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = mongoose.model("User", userSchema);

module.exports = User; 