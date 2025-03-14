const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');
const { validateSignupData } = require('./utils/validation');
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());


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

