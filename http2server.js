// Contains the function for creating the server
const http2 = require('http2');
// Contains the async functions
const fs = require('fs');
// Defines the host to which the server is bound
const host = 'localhost';
// Defines the port to which the server is bound
const port = 9443;
// Handle the request and give the response
const requestListener = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("Grueezi");
    res.end("My first server!");
};
// Creates the server
const server = http2.createSecureServer({
    "key": fs.readFileSync("localhost-private.pem"),
    "cert": fs.readFileSync("localhost-cert.pem")
});
// Bind the server to a network address and listen.
server.on("stream", (stream, headers) => {
    stream.respond({
        "Content-Type": "text/plain",
        "status": 200
    });
    stream.end("My first secure http2 server!");
});

server.listen(port);
console.log(`Server is running on https://${host}:${port}`);

module.exports = { port, host };