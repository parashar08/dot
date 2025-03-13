const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://demo:demoPass@democluster.gbs2x.mongodb.net/devTinder"
    );
}

module.exports = connectDB;