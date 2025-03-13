const express = require('express');
const connectDB = require('./config/database');
const User = require('./models/user');

const app = express();

app.post("/signup", async (req, res) => {
    const userObject = {
        firstName: "priyanshu",
        lastName: "singh",
        emailId: "priyanshuparashar08@gmail.com",
        gender: "male"
    };
    // creating a new instance of user model
    const user = new User(userObject);

    await user.save();
    res.send(`data save successfully \n ${user}`)
});

app.use("/", (err, req, res, next) => {
    if (err) {
        res.status(500).send("something went wrong!");
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