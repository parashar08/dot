const express = require('express');
const connectDB = require('./config/database');

const app = express();

connectDB()
    .then(() => {
        console.log("Database connection has been established!");
        app.listen(3000, () => {
            console.log("Server is listening on port 3000");
        });
    })
    .catch(() => {
        console.error("Database connection failed!");
    })


// note : Right process is first connect to the database then listen on port.