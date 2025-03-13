const express = require('express');

const app = express();

// app.use("/getUserData", (req, res, next) => {
//     throw new Error("error in getUserData!");
//     res.send("user data has been sent!");
// });

app.use("/getUserData", (req, res) => {
    try {
        throw new Error("error while fetching data from db!");
        res.send("data has been sent!");
    } catch (err) {
        res.status(500).send(err.message);
    }
})

app.use("/", (err, req, res, next) => {
    if (err) {
        console.log(err);
        res.status(500).send("something went wrong!");
    }
});

// app.use((req, res, next) => {
//     res.send("request has been recieved.");
//     next();
// });

// app.use("/hello", (req, res) => {
//     res.send("from hello");
// })

// app.use("/hello/2", (req, res) => {
//     res.send("from hello/2");
// });


// app.use("/", (req, res) => {
//     res.send("from /");
// })

// app.use('/users', (req, res, next) => {
//     console.log("1st route handler");
//     next();
// }, (req, res, next) => {
//     console.log("from the 2nd route handler");
//     res.send("respond from 2nd route handler");
// })

app.listen(3000, () => {
    console.log("express server is running on port 3000");
});
