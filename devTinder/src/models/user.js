const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
            validate(value) {
                if (typeof value !== String) {
                    throw new Error("value is not string");
                }
            },
        },
        emailId: {
            type: String,
        },
        password: {
            type: String,
        },
        age: {
            type: Number,
        },
        gender: {
            type: String,
        },
    },
    { timestamps: true }
);

userSchema.methods.getJWT = async function () {
    return await jwt.sign({ _id: this._id }, "hdf%87ekdjfk", {
        expiresIn: "7d",
    });
};

userSchema.meth;

const User = mongoose.model("User", userSchema);

module.exports = User;
