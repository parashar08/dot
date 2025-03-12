const express = require('express');

const app = express();

app.use("/test", (req, res) => {
    res.send("hello from the dev tinder platform!");
})

app.listen(3000, () => {
    console.log("express server is running on port 3000");
});
