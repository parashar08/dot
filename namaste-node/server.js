const http = require("node:http");

// this http.createServer() gives back you a instance of a server.
// creating an application which can listen to request
// 2424 is port number (means this application is running at 2424 port number)
// we handle user request inside createServer() as a function

const server = http.createServer(function (req, res) {
    // i am sending the data and ending it.

    if (req.url === "/userInfo") {
        res.end("there is no user info!");
    }
    res.end("Hello World!");
});

server.listen(2424);

// its not a good way to create server for modern applications.