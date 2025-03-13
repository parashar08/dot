const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');

const app = express();

app.post("/signup", async (req, res, next) => {
    try {
        const userObject = {
            firstName: "sachin",
            lastName: "tendulkar",
            emailId: "sachin@gmail.com",
            gender: "male",
            password: "sachin@123",
        };

        // creating a new instance of user model
        const user = new User(userObject);
        await user.save();
        res.send(`data save successfully \n ${user}`)
    } catch (err) {
        // next(err);
    }
});

app.use("/", (err, req, res, next) => {
    console.log("from /");
    if (err) { 
        res.status(500).send(`something went wrong!`);
    }
})

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